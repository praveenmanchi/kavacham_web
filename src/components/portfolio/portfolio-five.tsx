import { NavLink } from "react-router-dom";
import posthog from 'posthog-js';

const portfolio_data = [
  {
    id: 1,
    title: "Decentralized Platform",
    imageSrc: "/assets/img/portfolio/portfolio5_1.jpg",
    link: "/blog-details",
    categories: ["Branding", "Development", "Marketing"],
  },
  {
    id: 2,
    title: "App for Business",
    imageSrc: "/assets/img/portfolio/portfolio5_2.jpg",
    link: "/portfolio-item-2",
    categories: ["Development", "Marketing"],
  },
  {
    id: 3,
    title: "Educational Platform",
    imageSrc: "/assets/img/portfolio/portfolio5_3.jpg",
    link: "/portfolio-item-3",
    categories: ["Marketing", "Branding"],
  },
  {
    id: 4,
    title: "Nova Scotia Winery",
    imageSrc: "/assets/img/portfolio/portfolio5_4.jpg",
    link: "/portfolio-item-4",
    categories: ["Branding", "Development", "Marketing"],
  },
];

export default function PortfolioFive() {
  const handlePortfolioClick = (portfolioTitle: string) => {
    posthog.capture('portfolio_clicked', {
      portfolio_title: portfolioTitle,
    });
  };

  return (
    <div className="project-area-6">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">Our stat of art products</h2>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12">
            <div className="portfolio-static-wrap">
              {portfolio_data.map((elm, i) => (
                <NavLink key={i} to={elm.link} className="portfolio-static">
                  <div className="portfolio-wrap style5">
                    <div className="portfolio-thumb">
                      <img src={elm.imageSrc} alt="portfolio" />
                    </div>
                    <div className="portfolio-details">
                      <div className="media-left">
                        <ul className="portfolio-meta">
                          {elm.categories.map((elm2, i2) => (
                            <li key={i2}>
                              <a href="#">{elm2}</a>
                            </li>
                          ))}
                        </ul>
                        <h3 className="portfolio-title">
                          <NavLink to={elm.link} onClick={() => handlePortfolioClick(elm.title)}>{elm.title}</NavLink>
                        </h3>
                      </div>
                      <div className="portfolio-details-btn">
                        <NavLink to={elm.link} className="link-btn">
                          <span className="link-effect">
                            <span className="effect-1">VIEW PROJECT</span>
                            <span className="effect-1">VIEW PROJECT</span>
                          </span>
                          <img
                            src="/assets/img/icon/arrow-left-top.svg"
                            alt="icon"
                          />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}