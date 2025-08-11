import React from "react";
import "./ContactSupport.css";

const ContactSupport = () => {
  return (
    <div className="contact-support-page">
      <h1>Contact Support</h1>
      <p>
        Need help? Our support team is here for you 24/7.
        Please fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      <form className="support-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Describe your issue..."></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactSupport;
