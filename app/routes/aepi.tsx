import { Outlet } from 'remix'
import stylesheet from '~/styles/tailwind.css'

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesheet }]
}

export default function AEPI() {
  return <Outlet />
}
