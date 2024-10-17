import photo1 from "../../assets/images/greek salad.jpg";
import photo2 from "../../assets/images/icons/bruchetta.svg";
import photo3 from "../../assets/images/lemon dessert.jpg";
import scooterIcon from "../../assets/images/icons/scooter.svg";

function SpecialMenuSection() {
  return (
    <article className="main-grid-row">
      <div>
        <h2>Specials</h2>

        <button>Online Menu</button>
      </div>
      <div className="items">
        <article className="item-body">
          <div className="img-container">
            <img src={photo1} alt="order_greek_salad" />
          </div>
          <div className="card-body">
            <article>
              <div className="card-title">
                <h4>Greek Salad</h4>
                <span>$12.99</span>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </article>
            <a src="#">
              Order a delivery{" "}
              <img className="icon" src={scooterIcon} alt="scooter_icon" />
            </a>
          </div>
        </article>
        <article className="item-body">
          <div className="img-container">
            <img src={photo2} alt="order_bruschetta" />
          </div>
          <div className="card-body">
            <article>
              <div className="card-title">
                <h4>Bruschetta</h4>
                <span>$5.99</span>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </p>
            </article>
            <a src="#">
              Order a delivery{" "}
              <img className="icon" src={scooterIcon} alt="scooter_icon" />
            </a>
          </div>
        </article>
        <article className="item-body">
          <div className="img-container">
            <img src={photo3} alt="order_lemon_dessert" />
          </div>
          <div className="card-body">
            <article>
              <div className="card-title">
                <h4>Lemon Dessert</h4>
                <span>$5.00</span>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </article>
            <a src="#">
              Order a delivery{" "}
              <img className="icon" src={scooterIcon} alt="scooter_icon" />
            </a>
          </div>
        </article>
      </div>
    </article>
  );
}

export default SpecialMenuSection;
