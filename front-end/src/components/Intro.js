import React from "react";
import PropTypes from "prop-types";

const Intro = (props) => {
  return (
    <section className="row" id="introduction">
      <h3 className="h3 text-center">Introduction</h3>
      <p className="intro-text">
        A home located in shroove along the Donegal coast, overlooking the river
        foyle
      </p>
      <p className="intro-text">This home has x amount of rooms</p>
      <p className="intro-text">Lovely scenes and located 5 min from beach</p>
    </section>
  );
};

Intro.propTypes = {};

export default Intro;
