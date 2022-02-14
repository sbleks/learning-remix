import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'
import type { MetaFunction, LinksFunction } from 'remix'
import React, { useEffect } from 'react'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App', 'theme-color': '#323cbc' }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/sfavicon32.png',
      type: 'image/png',
      sizes: '32x32',
    },
    {
      rel: 'apple-touch-icon',
      href: '/sfavicon180.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      href: '/sfavicon16.png',
      type: 'image/png',
      sizes: '16x16',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap',
    },
  ]
}

function Document({
  children,
  title = 'SamBlekhman.com',
}: {
  children: React.ReactNode
  title?: String
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body className="dark:bg-slate-900">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="uh oh!">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  )
}
