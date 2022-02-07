import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from 'remix'
import invariant from 'tiny-invariant'
import { createPost, getPost } from '~/utils/posts'

type PostError = {
  title?: boolean
  slug?: boolean
  markdown?: boolean
}

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const title = formData.get('title')
  const slug = formData.get('slug')
  const markdown = formData.get('markdown')

  const errors: PostError = {}
  if (!title) {
    errors.title = true
  }
  if (!slug) {
    errors.slug = true
  }
  if (!markdown) {
    errors.markdown = true
  }
  if (Object.keys(errors).length) {
    return errors
  }

  invariant(typeof title === 'string')
  invariant(typeof slug === 'string')
  invariant(typeof markdown === 'string')

  await createPost({ title, slug, markdown })

  return redirect('/admin')
}

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function NewPost() {
  const errors = useActionData()
  const transition = useTransition()
  const post = useLoaderData()

  return (
    <Form method='post'>
      <p>
        <label>
          Post Title: {errors?.title ? <em>Title is required</em> : null}
          <input type='text' name='title' defaultValue={post.title} />
        </label>
      </p>
      <p>
        <label>
          Post Slug: {errors?.slug ? <em>Slug is required</em> : null}
          <input type='text' name='slug' defaultValue={post.slug} />
        </label>
      </p>
      <p>
        <label htmlFor='markdown'>Markdown:</label>{' '}
        {errors?.markdown ? <em>Markdown is required</em> : null}
        <br />
        <textarea rows={20} name='markdown' defaultValue={post.body} />
      </p>
      <p>
        <button type='submit'>
          {transition.submission ? 'Updating Post' : 'Update Post'}
        </button>
      </p>
    </Form>
  )
}
