import { useLoaderData, Link } from 'remix'
import { getPosts } from '~/utils/posts'
import type { Post } from '~/utils/posts'

export const loader = () => {
  return getPosts()
}

export default function Posts() {
  const posts = useLoaderData<Post[]>()
  return (
    <div>
      <h1>
        <Link to='/'>Posts</Link>
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
