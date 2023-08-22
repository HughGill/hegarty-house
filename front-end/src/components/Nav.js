import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#introduction">
              Introduction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#demo">
              Images
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Nav.propTypes = {};

export default Nav;
