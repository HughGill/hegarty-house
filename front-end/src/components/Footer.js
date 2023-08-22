import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        class="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; 2023 Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          Shroove Holiday Home
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
