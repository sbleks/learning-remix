import { Link, LinksFunction } from 'remix'
import stylesURL from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesURL,
    },
  ]
}

export default function Index() {
  return (
    <div className='container'>
      <div className='content'>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/blog'
              rel='noreferrer'
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/jokes'
              rel='noreferrer'
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
              Remix Docs
            </a>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='posts'>Posts</Link>
          </li>
          <li>
            <Link to='jokes'>Jokes</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
