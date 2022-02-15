import { LinksFunction, MetaFunction } from 'remix'
import Layout from '~/components/layout'
import ProjectCard from '~/components/projectCard'
import stylesURL from '~/styles/tailwind.css'

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

export default function () {
  return (
    <Layout>
      <ProjectCard />
    </Layout>
  )
}
