import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

function RoutesConfig() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="menu" element={<Menu />} />
      <Route exact path="reservations" element={<Reservations />} />
      <Route exact path="orderonline" element={<OrderOnline />} />
      <Route exact path="login" element={<Login />} />
    </Routes>
  );
}

export default RoutesConfig;
