import React from "react";
import PropTypes from "prop-types";

const Images = (props) => {
  return (
    <>
      <section>
        <h3 className="text-center">House Photos</h3>
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={require("../assets/images/overlookingfoyle.jpeg")}
                alt="Los Angeles"
                className="d-block"
                style={{ width: "100%", height: "100vh" }}
              />
              <div className="carousel-caption">
                <h3>Overlooking the River</h3>
                <p>This is picture overlooking the river foyle</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../assets/images/beach.jpeg")}
                alt="Beach"
                className="d-block"
                style={{ width: "100%", height: "100vh" }}
              />
              <div className="carousel-caption">
                <h3>"Picture of the beach"</h3>
                <p>This is a picture of a beach close by</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </>
  );
};

Images.propTypes = {};

export default Images;
