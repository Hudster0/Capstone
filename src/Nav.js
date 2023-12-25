import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <img
        src="https://cdn.dribbble.com/userupload/4149863/file/original-b59dcb3c6b4dcb6f87e9dc0b9a0e5a23.png"
        alt="little-lemon logo"
      />
      <ul className="navMenu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/Chicago">About</Link>
        </li>
        <li>
          <Link to="/BookingPage">Reservations</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
