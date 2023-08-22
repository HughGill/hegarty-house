import React from "react";
import PropTypes from "prop-types";

const Contact = (props) => {
  return (
    <section className="row" id="contact">
      <h3 className="h3 text-center">Contact Details</h3>
      <div className="contact-dets-holder">
        <article className="contact-information">
          <p className="contact-text">Phone No: 0861234567</p>
          <p className="contact-text">Email: hegarty123@yahoo.ie</p>
        </article>
        <article className="address">
          <p className="contact-text">Shroove</p>
          <p className="contact-text">Greencastle</p>
          <p className="contact-text">Co. Donegal</p>
          <p className="contact-text">Eircode: FSomething</p>
        </article>
      </div>
    </section>
  );
};

Contact.propTypes = {};

export default Contact;
