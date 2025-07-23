import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  py-3 custom-navbar ">
      <div className="container">
        <NavLink
          to="/home"
          className="navbar-brand text-white text-uppercase fw-bolder fs-2"
        >
          Start Framework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? "active rounded-3" : ""
                  }`
                }
                style={{ width: "fit-content" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? "active rounded-3" : ""
                  }`
                }
                style={{ width: "fit-content" }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${
                    isActive ? "active rounded-3" : ""
                  }`
                }
                style={{ width: "fit-content" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
