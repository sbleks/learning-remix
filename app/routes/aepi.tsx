import { Outlet } from 'remix'
import aepistyle from '~/styles/aepi.css'

export const links = () => {
  return [{ rel: 'stylesheet', href: aepistyle }]
}

export default function AEPI() {
  return <Outlet />
}
