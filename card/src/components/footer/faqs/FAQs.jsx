import React from "react";
import "./FAQs.css";

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>How do I reset my password?</h3>
        <p>Click on "Forgot password" at the login screen and follow the instructions.</p>
      </div>

      <div className="faq-item">
        <h3>How do I contact support?</h3>
        <p>You can reach us via the Contact Support page or by emailing help@example.com</p>
      </div>

      <div className="faq-item">
        <h3>Where can I find the API documentation?</h3>
        <p>Visit our Documentation page for full API details and integration steps.</p>
      </div>
    </div>
  );
};

export default FAQs;
