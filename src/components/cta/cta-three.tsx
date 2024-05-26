
import { NavLink } from "react-router-dom";

export default function CtaThree() {

  return (
    <div className="cta-area-1 overflow-hidden space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area mb-xl-0 mb-60">
              <h2 className="sec-title">Let's Create Something Great</h2>
              <p className="sec-text mt-30 mb-n2">
                We shift you from today’s reality to tomorrow’s potential,
                ensuring
              </p>
            </div>
          </div>
          <div className="col-xl-auto">
            <NavLink
              className="circle-btn btn gsap-magnetic"
              to="/contact"
            >
              <span className="link-effect">
                <span className="effect-1">LET'S TALK</span>
                <span className="effect-1">LET'S TALK</span>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
