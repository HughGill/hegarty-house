import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const images = [
    { path: "./../assets/images/front-house.jpg", name: "Front House" },
    { path: "./../assets/images/sea-view.jpg", name: "Beach View" },
  ];
  return (
    <>
      {Array.from(images).map((image) => {
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image.path} alt={image.name} class="d-block w-100" />
          </div>
        </div>;
      })}
      ;
    </>
  );
};

Image.propTypes = {};

export default Image;
