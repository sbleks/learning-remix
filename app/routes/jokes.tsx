import type { LinksFunction, LoaderFunction } from 'remix'
import { Outlet, Link, useLoaderData } from 'remix'
import stylesUrl from '~/styles/jokes.css'
import { db } from '~/utils/db.server'

import globalStylesUrl from '~/styles/global.css'
import globalMediumStylesUrl from '~/styles/global-medium.css'
import globalLargeStylesUrl from '~/styles/global-large.css'
import { getUser } from '~/utils/session.server'
import type { User } from '@prisma/client'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: globalMediumStylesUrl,
      media: 'print, (min-width: 640px)',
    },
    {
      rel: 'stylesheet',
      href: globalLargeStylesUrl,
      media: 'screen and (min-width: 1024px)',
    },
  ]
}

type LoaderData = {
  jokeListItems: Array<{ id: string; name: string }>
  username?: String | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request)

  let jokeListItems = await db.joke.findMany({
    take: 5,
    select: { id: true, name: true },
    orderBy: { createdAt: 'desc' },
  })
  let data: LoaderData = { jokeListItems, username: user?.username }

  return data
}

export default function JokesRoute() {
  let { jokeListItems, username } = useLoaderData<LoaderData>()
  return (
    <div className='jokes-layout'>
      <header className='jokes-header'>
        <div className='container'>
          <h1 className='home-link'>
            <Link to='/' title='Remix Jokes' aria-label='Remix Jokes'>
              <span className='logo'>🤪</span>
              <span className='logo-medium'>J🤪KES</span>
            </Link>
          </h1>
          {username ? (
            <div className='user-info'>
              <span>Hi {username}</span>
              <form action='/logout' method='post'>
                <button type='submit' className='button'>
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </header>
      <main className='jokes-main'>
        <div className='container'>
          <div className='jokes-list'>
            <Link to='.'>Get a random joke</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              {jokeListItems.map((joke) => (
                <li key={joke.id}>
                  <Link to={joke.id}>{joke.name}</Link>
                </li>
              ))}
            </ul>
            <Link to='new' className='button'>
              Add your own
            </Link>
          </div>
          <div className='jokes-outlet'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}
