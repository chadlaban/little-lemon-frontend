import Error from "../components/status/404";

function Menu() {
  return (
    <div className="main-grid">
      <Error msg="Oh no, a 404 page! This page is still under construction, sorry for the inconvenience..." />
    </div>
  );
}

export default Menu;
