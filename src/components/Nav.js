import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navMenu">
      <ul>
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
        <NavLink to="/About" className="navLink">
          About
        </NavLink>
        <NavLink to="/BookPage" className="navLink">
          BookPage
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
