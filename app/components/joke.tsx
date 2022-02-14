import { Form, Link } from 'remix'
import type { Joke } from '@prisma/client'

type JokeData = { joke: { content: String; name: String }; isOwner: Boolean }

export default function DisplayJoke({
  joke,
  isOwner,
  canDelete = true,
}: {
  joke: Pick<Joke, 'content' | 'name'>
  isOwner: Boolean
  canDelete?: Boolean
}) {
  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{joke.content}</p>
      {isOwner ? (
        <Form method='post'>
          <input type='hidden' name='_method' value='delete' />
          <button type='submit' className='button' disabled={!canDelete}>
            Delete
          </button>
        </Form>
      ) : null}
      <Link to='.'>"{joke.name}" Permalink</Link>
    </div>
  )
}
