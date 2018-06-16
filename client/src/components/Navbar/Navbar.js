import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Michael Megarbane
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/portfolio" ? "active" : ""}
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={window.location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
