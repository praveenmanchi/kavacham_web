import addGsap from "../../utils/addGsap";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const slider_data = [
  {
    title: "Modern Defence Solutions",
    subtitle: "We are digital agency that helps immersive and engaging user experiences that",
    image: "/assets/img/source/hero-1.jpg",
  },
  {
    title: "Modern Warfare Solutions",
    subtitle: "We are digital agency that helps immersive and engaging user experiences that",
    image: "/assets/img/source/hero-2.jpg",
  },
]
export default function HeroBannerFive() {
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => {
      document.body.classList.remove("bg-title");
    };
  }, []);
  useEffect(() => {
    addGsap();
  }, []);

  const sliderOptions = {
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
  };
  return (
    <div className="hero-wrapper hero-5" id="hero">
      <Slider className="global-carousel" {...sliderOptions}>
        {slider_data.map((item, i) => (
        <div key={i}>
          <div
            className="hero-slider background-image por"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div
              className="hero-overlay"
              data-overlay="title"
              data-opacity="5"
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="hero-style5">
                    <h1
                      className="hero-title"
                      data-ani="slideindown"
                      data-ani-delay="0.1s"
                    >
                      {item.title}
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      {item.subtitle}
                    </p>
                    <div
                      className="hero-year-tag"
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
                      <img
                        src="/assets/img/icon/worldwide.svg"
                        alt="img"
                      />
                      <h6>An Indian Startup</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 align-self-end text-lg-end">
                  <div
                    className="text-lg-end"
                    data-ani="slideindown"
                    data-ani-delay="0.3s"
                  >
                    <NavLink
                      className="circle-btn style2 btn bg-theme text-title gsap-magnetic"
                      to="/contact"
                    >
                      <span className="link-effect">
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
}
