import {
  ActionFunction,
  Form,
  Link,
  LinksFunction,
  MetaFunction,
  useActionData,
} from 'remix'
import stylesURL from '~/styles/tailwind.css'
import { MENU, S, SB } from '~/components/icons'
import Layout from '~/components/layout'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesURL,
    },
  ]
}

export const meta: MetaFunction = () => {
  return {
    'theme-color': '#0f172a',
  }
}

export default function Index() {
  return (
    <Layout>
      <div className="py-24 lg:py-32">
        <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="font-cursive text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Sam Blekhman
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-500 dark:text-gray-400">
            Operations and Technology Professional
          </p>
        </div>
      </div>
      <section>
        <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-7xl lg:ml-auto">
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              About me
            </h2>
            <p className="prose prose-lg dark:prose-invert">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              explicabo quisquam vero, dicta, iure sunt aut recusandae tempora
              itaque, architecto voluptas adipisci autem similique quaerat ea
              reprehenderit consequatur nostrum officiis. Facere ex unde,
              officia nulla autem ab, perspiciatis veniam, in fugit aperiam rem
              nesciunt excepturi incidunt eos necessitatibus quisquam?
              Recusandae illo minus amet maxime explicabo laborum corporis ea.
              Nulla, asperiores?
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
