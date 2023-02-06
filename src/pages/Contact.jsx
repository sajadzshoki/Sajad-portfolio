import React from "react";

const Contact = () => {
  return (
    <div className="contact-me">
      <h1 className="header">Email Me Your Request</h1>
      <div className="contact-container">
        <form className="contact-form">
          <div className="input-label">
            <label>Your Name </label>
            <input type="text" placeholder="Name" name="Name" />
          </div>
          <div className="input-label">
            <label>Your Email </label>
            <input type="email" placeholder="email" name="Name" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
