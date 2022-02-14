import { SyntheticEvent, useEffect, useState } from 'react'
import {
  ActionFunction,
  Form,
  MetaFunction,
  useActionData,
  useTransition,
} from 'remix'
import * as copy from 'copy-to-clipboard'

type linkParts = {
  currency?: String
  appeal?: String
  campaign?: String
  fund?: String
  pledge?: String
}

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData()
  let values = Object.fromEntries(formData)
  return constructLink(values)
}

export const meta: MetaFunction = () => {
  return {
    'theme-color': '#0f172a',
  }
}

function constructLink(parts: linkParts) {
  let urlParts = parts
  delete urlParts.currency
  console.log(urlParts)
  let linkKeys = Object.keys(urlParts)
  console.log(linkKeys)
  let urlBase = 'https://aepi.org/donate/?'
  let completeURL = urlBase
  if (!linkKeys.length || linkKeys.length === 0) {
    return
  }

  for (let key of linkKeys) {
    if (urlParts[key] === '') {
    } else if (linkKeys.indexOf(key) === 0) {
      completeURL += `${key}=${urlParts[key]}`
    } else {
      completeURL += `&${key}=${urlParts[key]}`
    }
  }
  return new URL(completeURL)
}

export default function AEPiIndexRoute() {
  const transition = useTransition()
  let constructedLink = useActionData()
  const [loaded, setLoaded] = useState(false)
  const [currency, setCurrency] = useState('US')

  useEffect(() => {
    transition.state === 'submitting' && setLoaded(true)
  }, [transition])
  return (
    <div className='m-6 sm:m-auto sm:h-screen max-w-4xl flex flex-col items-center justify-center gap-8 dark:text-gray-100'>
      <h1 className='font-semibold text-4xl'>AEPi Donation Link Generator</h1>
      <Form method='post' className='w-full' autoComplete='off'>
        <fieldset />
        <legend className='sr-only'>Currency</legend>
        <div className='flex items-center mb-4'>
          <input
            id='US'
            type='radio'
            name='currency'
            value='US'
            onChange={() => setCurrency('US')}
            checked={currency === 'US'}
            className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
            aria-labelledby='US'
            aria-describedby='US'
          />
          <label
            htmlFor='US'
            className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            United States
          </label>
        </div>

        <div className='flex items-center mb-4'>
          <input
            id='Canada'
            type='radio'
            name='currency'
            value='Canada'
            onChange={() => setCurrency('Canada')}
            checked={currency === 'Canada'}
            className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
            aria-labelledby='Canada'
            aria-describedby='Canada'
          />
          <label
            htmlFor='Canada'
            className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Canada
          </label>
        </div>

        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name={currency === 'US' ? 'campaign' : 'canadiancampaign'}
            id={currency === 'US' ? 'campaign' : 'canadiancampaign'}
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
          />
          <label
            htmlFor={currency === 'US' ? 'campaign' : 'canadiancampaign'}
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Campaign Name
          </label>
        </div>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name='fund'
            id='floating_fund'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
          />
          <label
            htmlFor='floating_fund'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Fund Name
          </label>
        </div>
        <div className='grid xl:grid-cols-2 xl:gap-6'>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='number'
              name='appeal'
              id='appeal'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='appeal'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Appeal ID
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='number'
              name='pledge'
              id='pledge'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
            />
            <label
              htmlFor='pledge'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Pledge ID
            </label>
          </div>
        </div>
        {/* <div className='grid xl:grid-cols-2 xl:gap-6'>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='tel'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              name='floating_phone'
              id='floating_phone'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_phone'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className='relative z-0 mb-6 w-full group'>
            <input
              type='text'
              name='floating_company'
              id='floating_company'
              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='floating_company'
              className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Company (Ex. Google)
            </label>
          </div>
        </div> */}
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </Form>

      <div className='w-full'>
        {loaded === true && (
          <div>
            <p className='pb-4'>Donation link:</p>
            <pre className='px-2 pb-4' id='constructedLink'>
              {constructedLink}
            </pre>
            <div className='flex gap-4'>
              <button
                className='clipboard text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={() => copy.default(constructedLink)}
              >
                Copy to clipboard
              </button>
              <button
                className='text-blue-800 hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-2 border-blue-800'
                onClick={() => window.open(constructedLink)}
              >
                Open Link in new page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
