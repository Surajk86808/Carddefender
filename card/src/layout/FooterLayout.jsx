import React from "react";
import { Link } from "react-router-dom";
import "../components/footer/Footer.css"; // reuse your existing styles
import "./FooterLayout.css"; // new styles for layout

const FooterLayout = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* ABOUT Section */}
        <div className="footer-column">
          <h4>ABOUT</h4>
          <Link to="/aboutdefender">About CardDefender</Link>
          <Link to="/mission">Our Mission</Link>
          <Link to="/team">Team</Link>
        </div>

        {/* UPDATES */}
        <div className="footer-column">
          <h4>UPDATES</h4>
          <Link to="/careers">Careers</Link>
          <Link to="/news">News & Press</Link>
        </div>

      

        {/* HELP & SUPPORT */}
        <div className="footer-column">
          <h4>HELP & SUPPORT</h4>
          <Link to="/contact-support">Contact Support</Link>
          <Link to="/knowledge-base">Knowledge Base</Link>
          <Link to="/faqs">FAQs</Link>
        </div>

        {/* CONTACT & SOCIALS */}
        <div className="footer-column address">
          <h4>CONTACT US</h4>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
