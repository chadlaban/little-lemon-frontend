import photo1 from "../assets/images/restaurant chef B.jpg";
import photo2 from "../assets/images/Mario and Adrian b.jpg";

function About() {
  return (
    <article className="main-grid-about">
      <div style={{ color: "#333333" }}>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <article>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </article>
      </div>
      <div className="img-container">
        <img className="image-1" src={photo1} alt="about_photo1" />
        <img className="image-2" src={photo2} alt="about_photo2" />
      </div>
    </article>
  );
}

export default About;
