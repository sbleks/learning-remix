import {
  ActionFunction,
  Link,
  MetaFunction,
  redirect,
  useCatch,
  useLoaderData,
  useParams,
} from 'remix'
import type { LoaderFunction } from 'remix'
import { db } from '~/utils/db.server'
import type { Joke } from '@prisma/client'
import { getUserId, requireUserId } from '~/utils/session.server'

type LoaderData = { joke: Joke; isOwner: Boolean }

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request)
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  })
  if (!joke) throw new Response('What a joke! Not found.', { status: 404 })
  const data: LoaderData = { joke, isOwner: userId === joke.jokesterId }
  return data
}

export const meta: MetaFunction = ({
  data,
}: {
  data: LoaderData | undefined
}) => {
  let joke = data?.joke
  return {
    title: joke ? `${joke.name} joke` : 'No joke',
    description: joke
      ? `Enjoy the ${joke.name} joke and much more`
      : 'Joke not found',
  }
}

export const action: ActionFunction = async ({ request, params }) => {
  let form = await request.formData()
  if (form.get('_method') === 'delete') {
    let userId = await requireUserId(request)
    let joke = await db.joke.findUnique({ where: { id: params.jokeId } })
    if (!joke) {
      throw new Response("Can't delete what does not exist", { status: 404 })
    }
    if (joke.jokesterId !== userId) {
      throw new Response('Not your joke to delete', { status: 401 })
    }
    await db.joke.delete({ where: { id: params.jokeId } })
    return redirect('/jokes')
  }
  return redirect('.')
}

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>()
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      {data.isOwner ? (
        <form method='post'>
          <input type='hidden' name='_method' value='delete' />
          <button type='submit' className='button'>
            Delete
          </button>
        </form>
      ) : null}
      <Link to='.'>"{data.joke.name}" Permalink</Link>
    </div>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  const params = useParams()
  if (caught.status === 404) {
    return (
      <div className='error-container'>
        Huh? What the heck is "{params.jokeId}"?
      </div>
    )
  } else if (caught.status === 401) {
    return <div className='error-container'>Not your joke to delete!</div>
  } else throw new Error(`Unhandled error: ${caught.status}`)
}

export function ErrorBoundary({ error }: { error: Error }) {
  const { jokeId } = useParams()
  return (
    <div className='error-container'>
      {`There was an error loading joke by the id ${jokeId}. Sorry.`}
    </div>
  )
}
