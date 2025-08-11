import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>ABOUT</h4>
          <a href="#">About CardDefender</a>
          <a href="#">Our Mission</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
          <a href="#">News & Press</a>
        </div>

        <div className="footer-column">
          <h4>HELP & SUPPORT</h4>
          <a href="#">Contact Support</a>
          <a href="#">Knowledge Base</a>
          <a href="#">API Documentation</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-column address">
          <h4>Contact Us:</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
