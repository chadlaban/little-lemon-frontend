import reservationImg from "../../assets/images/restauranfood.jpg";

function ReservationSection() {
  return (
    <article className="main-grid-col primary">
      <div className="left-col">
        <h1>Little Lemon</h1>
        <span>Chicago</span>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            consequat felis. Nunc metus augue, consectetur vitae elementum sit
            amet, porttitor ac massa. Morbi quis leo ut eros commodo congue sit
            amet in est.
          </p>
        </article>
        <div className="btn-container">
          <button>Reserve a Table</button>
        </div>
      </div>
      <div className="img-container">
        <img src={reservationImg} alt="reservation_photo" />
      </div>
    </article>
  );
}

export default ReservationSection;
