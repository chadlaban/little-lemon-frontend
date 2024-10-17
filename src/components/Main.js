import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import RoutesConfig from "./RoutesConfig";
import "../assets/css/navigations.css";

function Main() {
  return (
    <Router>
      <Nav />

      {/* Body */}
      <RoutesConfig />

      <Footer />
    </Router>
  );
}

export default Main;
