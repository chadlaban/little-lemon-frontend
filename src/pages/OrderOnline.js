import Error from "../components/status/404";

function OrderOnline() {
  return (
    <div className="main-grid">
      <Error msg="Oh no, a 404 page! the ordering system is still under construction, sorry for the inconvenience..." />
    </div>
  );
}

export default OrderOnline;
