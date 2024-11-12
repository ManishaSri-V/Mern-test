import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>

      <div>
        <ul className="navbar-nav">
          <li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/"
              onClick={() => handleLinkClick("/")}
            >
              Dashboard
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/add" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/add"
              onClick={() => handleLinkClick("/add")}
            >
              Add Employee
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/list" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/list"
              onClick={() => handleLinkClick("/list")}
            >
              Employee List
            </Link>
          </li>

          <li className={`nav-item ${activeLink === "/login" ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/login"
              onClick={() => handleLinkClick("/login")}
            >
              Login
            </Link>
          </li>
          <li
            className={`nav-item ${activeLink === "/signup" ? "active" : ""}`}
          >
            <Link
              className="nav-link"
              to="/signup"
              onClick={() => handleLinkClick("/signup")}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
