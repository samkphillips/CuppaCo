import { NavLink, useRouteMatch } from 'react-router-dom'

export default function Header() {
  let { path, url } = useRouteMatch()

  return (
    <div className='roasts-sidebar'>
      <NavLink to={`${url}/`} className="navlinks">Roasts</NavLink>
      <NavLink to={`${url}/`} className="navlinks">Add Roast</NavLink>
      <NavLink to={`${url}/`} className="navlinks">Search</NavLink>
    </div>
  )
}
