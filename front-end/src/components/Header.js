import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <img
        src={require("../assets/images/lighthouse.jpg")}
        alt="A Picture of shroove lighthouse"
        style={{ width: "100%", height: "25vh" }}
      />
      <h3 className="h3 text-center">Hegarty Holiday Home</h3>
    </header>
  );
};

Header.propTypes = {};

export default Header;
