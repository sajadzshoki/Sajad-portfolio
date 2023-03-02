import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-me">
      <div className="contact-container">
        <h1 className="header">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-label">
            <label>Your Name </label>
            <input
              type="text"
              placeholder="Name"
              name="Name"
              required="required"
            />
          </div>
          <div className="input-label">
            <label>Your Email </label>
            <input
              type="email"
              placeholder="email"
              name="Name"
              required="required"
              autoComplete="on"
            />
          </div>
          <div className="input-label">
            <label>How can I help you ? </label>
            <textarea
              rows="5"
              required="required"
              placeholder="describe what you excatly need so I can provide you my best services"
            />
          </div>
          <button className="btn contact-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
