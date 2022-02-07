import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { getPost } from '~/utils/posts'
import invariant from 'tiny-invariant'

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, 'expected params.slug')
  return getPost(params.slug)
}

export default function PostSlug() {
  const post = useLoaderData()
  const faker = require('faker')
  return (
    <div>
      <p>Written by {faker.name.findName()}</p>
      <p dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}
