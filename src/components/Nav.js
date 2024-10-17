import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import logo from "../assets/images/logo/Logo.svg";
import "../assets/css/nav.css";

function Nav() {
  return (
    <Router>
      <div className="list">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="little_lemon_logo" />
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
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="menu" element={<Menu />} />
        <Route exact path="reservations" element={<Reservations />} />
        <Route exact path="orderonline" element={<OrderOnline />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Nav;
