import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "../assets/images/logo/Logo.svg";
import instagram from "../assets/images/icons/instagram_icon.png";
import facebook from "../assets/images/icons/facebook_icon.png";
import whatsApp from "../assets/images/icons/whatsapp_icon.png";

function Footer() {
  return (
    <footer>
      <ul>
        <div className="footer-nav">
          <div>
            <Link to="/">
              <img src={logo} alt="footer_logo" />
            </Link>
          </div>
          <div>
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
          </div>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone number</p>
          <p>email</p>
        </div>
        <div>
          <h4>Social Media Links</h4>
          {/* icons were taken from https://www.flaticon.com/authors/riajulislam */}
          <div className="media-links">
            <a
              href="https://www.instagram.com/"
              title="Instagram logo icons created by riajulislam - Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="external_icons"
                src={instagram}
                alt="Instagram logo icons created by riajulislam - Flaticon"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              title="Facebook icons created by riajulislam - Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="external_icons"
                src={facebook}
                alt="Facebook icons created by riajulislam - Flaticon"
              />
            </a>
            <a
              href="https://www.whatsapp.com/"
              title="Whatsapp icons created by riajulislam - Flaticon"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="external_icons"
                src={whatsApp}
                alt="Whatsapp icons created by riajulislam - Flaticon"
              />
            </a>
          </div>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
