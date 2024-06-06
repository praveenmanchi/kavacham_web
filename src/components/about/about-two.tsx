import { NavLink } from "react-router-dom";


export default function AboutTwo() {
  return (
    <div className="about-area-1 space bg-gray shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
        style={{ top: "-100px", left: "0px", bottom: "100px" }}
      >
        <img
          src="/assets/img/normal/about_1-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap fade_right">
                <div className="title-area mb-0">
                  <h2 className="sec-title text-smoke">
                  Revolutionizing Defense with Advanced AI Solutions
                  </h2>
                  <p className="sec-text mt-35 mb-25 text-smoke">
                  We are a pioneering Indian startup at the forefront of the defense sector, specializing in the development and deployment of advanced software and frontline applications. Our mission is to enhance operational efficiency and decision-making capabilities through state-of-the-art artificial intelligence and comprehensive data analytics.
                  </p>
                  <h5 className="text-smoke mb-2">
                  Cutting-Edge AI-Driven Software
                  </h5>
                  <h5 className="text-smoke mb-2">
                  Real-Time Data Validation and Analytics
                  </h5>
                  <h5 className="text-smoke mb-0">
                  Frontline Applications
                  </h5>
                  <div className="btn-wrap mt-50">
                    <NavLink
                      to="/about"
                      className="link-btn text-theme"
                    >
                      <span className="link-effect">
                        <span className="effect-1">ABOUT US</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <img
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
