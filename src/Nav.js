import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <img
        src="https://cdn.dribbble.com/userupload/4149863/file/original-b59dcb3c6b4dcb6f87e9dc0b9a0e5a23.png"
        alt="little-lemon logo"
      />
      <ul class="navMenu">
        <li>
          <link to="/home">Home</link>
        </li>
        <li>
          <link to="/About">About</link>
        </li>
        <li>
          <link to="/Menu">Menu</link>
        </li>
        <li>
          <link to="/Reservations">Reservations</link>
        </li>
        <li>
          <link to="/Order Online">Order Online</link>
        </li>
        <li>
          <link to="/Login">Login</link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
