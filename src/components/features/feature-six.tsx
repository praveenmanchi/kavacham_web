import { NavLink } from "react-router-dom";
import posthog from 'posthog-js';

const feature_data = [
  {
    id: 1,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    title: "Global Decision-Making AI",
    text: "Our targeting system offering supports soldiers with an Al-powered kill chain, seamlessly and responsibly integrating target identification and target effector pairing.",
    link: "/contact",
  },
  {
    id: 2,
    icon: "/assets/img/icon/feature-icon1-2.svg",
    title: "Data Protection Modules and Capabilities",
    text: "Gotham enables the autonomous tasking of sensors, from drones to satellites, based on Al driven rules or manual inputs for human-in-the-loop control.",
    link: "/blog-details",
  },
  {
    id: 3,
    icon: "/assets/img/icon/feature-icon1-3.svg",
    title: "AI driven combat superiority",
    text: "We care success relationships fuel success we love building",
    link: "/project-details",
  },
];

export default function FeatureSix() {
  const handleFeatureClick = (featureTitle: string) => {
    // Capture the event when a feature card is clicked
    posthog.capture('feature_clicked', {
      feature_title: featureTitle,
    });
  };

  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-8 position-relative">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title" style={{ color: "white" }}>
                    What We Can Do for Our Clients
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="feature-static-wrap">
              {feature_data.map((elm) => (
                <div key={elm.id} className="feature-static">
                  <div className="feature-card style-grid">
                    <div className="feature-card-icon">
                      <img src={elm.icon} alt="icon" />
                    </div>
                    <div className="feature-card-details">
                      <h4 className="feature-card-title">
                        <a href="#" onClick={() => handleFeatureClick(elm.title)}>{elm.title}</a>
                      </h4>
                      <p className="feature-card-text">{elm.text}</p>
                      {/* <NavLink to={elm.link} className="link-btn">
                        <span className="link-effect">
                          <span className="effect-1">VIEW DETAILS</span>
                          <span className="effect-1">VIEW DETAILS</span>
                        </span>
                        <img
                          src="/assets/img/icon/arrow-left-top.svg"
                          alt="icon"
                        />
                      </NavLink> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}