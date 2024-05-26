import { NavLink } from "react-router-dom";
import { links_one, links_two } from "../../data/footer-link-data";
import Socials from "../../components/social";


export default function FooterThree() {
  return (
    <footer className="footer-wrapper footer-layout3 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                {links_one.map((link, index) => (
                  <li key={index}>
                    <NavLink to={link.href}>
                      <span className="link-effect">
                        <span className="effect-1">{link.text}</span>
                        <span className="effect-1">{link.text}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                {links_two.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.href}>
                      <span className="link-effect">
                        <span className="effect-1">{link.text}</span>
                        <span className="effect-1">{link.text}</span>
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-md-end">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/themegenix/portfolio">
                  ThemeGenix
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
