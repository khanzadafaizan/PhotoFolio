import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link
          to="/"
          className="logo d-flex align-items-center me-auto me-lg-0 
        "
        >
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <i className="bi bi-camera"></i>
          <h1>PhotoFolio</h1>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to={"/"} className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Gallery</span>{" "}
                <i className="bi bi-chevron-down dropdown-indicator"></i>
              </a>
              <ul>
                <li>
                  <Link to={"/gallery"}>Nature</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>People</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Architecture</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Animals</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Sports</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Travel</Link>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Sub Menu</span>{" "}
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Sub Menu 1</a>
                    </li>
                    <li>
                      <a href="#">Sub Menu 2</a>
                    </li>
                    <li>
                      <a href="#">Sub Menu 3</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
};

export default Header;
