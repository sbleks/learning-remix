import { Link } from 'remix'
import jokesScreenshot from '~/assets/jokes.png'
import safariBar from '~/assets/safaribar.png'

export default function ProjectCard({
  projectLink = '/',
  projectName = 'Jokes App',
  projectImage = jokesScreenshot,
}: {
  projectLink: string
  projectName: string
  projectImage: string
}) {
  return (
    <div className="flex w-full justify-center">
      <div className="m-2 max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <Link to={projectLink}>
          <div>
            <img className="" src={safariBar} alt="product image" />
          </div>
          <img className="mb-6" src={projectImage} alt="product image" />
          <div className="px-5 pb-5">
            <a href="#">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {projectName}
              </h3>
            </a>
          </div>
        </Link>
      </div>
    </div>
  )
}
