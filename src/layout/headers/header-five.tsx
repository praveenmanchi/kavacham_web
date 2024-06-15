import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSticky } from "../../hooks/useSticky";
import useDocument from "../../hooks/useDocument";
import SideMenu from "./component/side-menu";
import MobileNav from "./component/mobile-nav";
import MobileMenuSocials from "./component/mobile-menu-socials";
import HeaderNav from "./component/header-nav";

export default function HeaderFive() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useSticky();
  const {mobileMenuOpen,setMobileMenuOpen} = useDocument();
  return (
    <>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div
        className={`mobile-menu-wrapper ${
          mobileMenuOpen ? "body-visible" : ""
        } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <NavLink to="/">
              <img
                src="/assets/img/logo.svg"
                alt="Ovation"
              />
            </NavLink>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>"Plot no.9, Masijid banda,</h6>
            <h6>Hyderabad, India 50084</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href="tel:1800123654987">+91 829 798 7394</a>
            </h6>
            <h6>
              <a href="mailto:contact@kavacham.tech">contact@kavacham.tech</a>
            </h6>
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>

      {/* Header Area */}

      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          {/* Main Menu Area  */}
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <NavLink to="/">
                      <img
                        src="/assets/img/logo-white-sm.svg"
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <HeaderNav />
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="menu-toggle sidebar-btn"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <NavLink
                      to="/project"
                      className="btn bg-theme text-title"
                    >
                      <span className="link-effect">
                        <span className="effect-1">WORKS WITH US</span>
                        <span className="effect-1">WORKS WITH US</span>
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
