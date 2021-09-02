import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Cuppa Co</h1>
      <nav>
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/roasts" className="navlinks">
          Roasts
        </NavLink>
        <NavLink to="/shop" className="navlinks">
          Shop
        </NavLink>
        <NavLink to="/aboutus" className="navlinks">
          About Us
        </NavLink>
      </nav>
    </header>
  )
}
