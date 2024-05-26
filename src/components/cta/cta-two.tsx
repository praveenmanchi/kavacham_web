
import { NavLink } from "react-router-dom";
import addGsap from "../../utils/addGsap";
import { useEffect } from "react";

export default function CtaTwo() {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className="cta-area-1 overflow-hidden bg-title space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-10">
            <div className="title-area mb-xl-0 mb-60">
              <h2 className="sec-title text-white">
                Let's Create Something Great
              </h2>
              <p className="sec-text mt-30 mb-n2 text-white">
                We shift you from today’s reality to tomorrow’s potential,
                ensuring
              </p>
            </div>
          </div>
          <div className="col-xl-auto">
            <NavLink
              className="circle-btn btn bg-theme text-title gsap-magnetic"
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
