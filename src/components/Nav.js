import { Link } from "react-router-dom";
import logo from "../assets/images/logo/Logo.svg";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="reservations">Reservations</Link>
        </li>
        <li>
          <Link to="orderonline">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
