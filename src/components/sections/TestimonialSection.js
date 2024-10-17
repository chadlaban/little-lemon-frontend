import avatar from "../../assets/images/avatar.png";

function Testimonials() {
  return (
    <article className="main-grid-row primary">
      <h1>Testimonials</h1>
      <div>
        <article className="testimonial-item">
          <span>&#127775;&#127775;&#127775;&#127775;&#127775;</span>
          <img
            className="testimonial-profile"
            src={avatar}
            alt="testimonial_photo"
          />
          <h3>Jessy J.</h3>
          <p>Quick, fast, and amazing!</p>
        </article>
        <article className="testimonial-item">
          <span>&#127775;&#127775;&#127775;&#127775;&#127775;</span>
          <img
            className="testimonial-profile"
            src={avatar}
            alt="testimonial_photo"
          />
          <h3>Chad L.</h3>
          <p>Food was 10/10! Will come here again.</p>
        </article>
        <article className="testimonial-item">
          <span>&#127775;&#127775;&#127775;&#127775;&#127775;</span>
          <img
            className="testimonial-profile"
            src={avatar}
            alt="testimonial_photo"
          />
          <h3>Gigi P.</h3>
          <p>New menu items everyweek? love that!</p>
        </article>
      </div>
    </article>
  );
}

export default Testimonials;
