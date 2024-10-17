import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import RoutesConfig from "./RoutesConfig";
import "../assets/css/sections.css";
import "../assets/css/navigations.css";
import "../assets/css/about.css";

function Main() {
  return (
    <Router>
      <Header />

      {/* Body */}
      <RoutesConfig />

      <Footer />
    </Router>
  );
}

export default Main;
