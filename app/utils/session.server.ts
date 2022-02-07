import { db } from './db.server'
import bcrypt, { hash } from 'bcryptjs'
import { createCookieSessionStorage, redirect } from 'remix'

type LoginForm = {
  username: string
  password: string
}

export async function login({ username, password }: LoginForm) {
  const existingUser = await db.user.findUnique({
    where: { username },
  })
  if (!existingUser) {
    return null
  }
  const passwordMatch = await bcrypt.compare(
    password,
    existingUser.passwordHash
  )
  if (passwordMatch === false) {
    return null
  }

  return existingUser
}

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: 'RJ_session',
      secrets: [sessionSecret],
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      httpOnly: true,
    },
  })

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await getSession()
  session.set('userId', userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}

export function getUserSession(request: Request) {
  return getSession(request.headers.get('Cookie'))
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request)
  const userId = session.get('userId')
  if (!userId || typeof userId !== 'string') return null
  return userId
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const userId = await getUserId(request)
  if (!userId || typeof userId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }
  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (typeof userId !== 'string') return null

  try {
    const user = await db.user.findUnique({ where: { id: userId } })
    return user
  } catch {
    throw logout(request)
  }
}

export async function logout(request: Request) {
  const session = await getSession(request.headers.get('Cookie'))
  return redirect('/jokes', {
    headers: { 'Set-Cookie': await destroySession(session) },
  })
}

export async function register({ username, password }: LoginForm) {
  const passwordHash = await bcrypt.hash(password, 10)
  return db.user.create({ data: { username, passwordHash } })
}
