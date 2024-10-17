import ReservationSection from "../components/sections/ReservationSection";
import SpecialMenuSection from "../components/sections/SpecialMenuSection";
import Testimonials from "../components/sections/TestimonialSection";
import About from "./About";

function Homepage() {
  return (
    <>
      <ReservationSection />
      <SpecialMenuSection />
      <Testimonials />
      <About />
    </>
  );
}

export default Homepage;
