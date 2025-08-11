import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      {/* Top Section */}
      <div className="footer-top">
        {/* About */}
        <div className="footer-column">
          <h4>ABOUT</h4>
          <nav aria-label="About navigation">
            <Link to="/about-carddefender">About CardDefender</Link>
            <Link to="/our-mission">Our Mission</Link>
            <Link to="/team">Team</Link>
          </nav>
        </div>

        {/* Updates */}
        <div className="footer-column">
          <h4>UPDATES</h4>
          <nav aria-label="Updates navigation">
            <Link to="/careers">Careers</Link>
            <Link to="/news-press">News & Press</Link>
          </nav>
        </div>

        {/* NEW Updates Column */}
        <div className="footer-column">
          <h4>UPDATES 2</h4>
          <nav aria-label="More updates navigation">
            <Link to="/blog">Blog</Link>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/product-launches">Product Launches</Link>
          </nav>
        </div>

        {/* Help & Support */}
        <div className="footer-column">
          <h4>HELP & SUPPORT</h4>
          <nav aria-label="Support navigation">
            <Link to="/contact-support">Contact Support</Link>
            <Link to="/documentation">API Documentation</Link>
            <a href="#faqs">FAQs</a>
            <a href="#knowledge-base">Knowledge Base</a>
          </nav>
        </div>

        {/* Connect */}
        <div className="footer-column address">
          <h4>CONNECT WITH US</h4>
          <p className="contact-info">
            Building secure financial futures through advanced AI technology.
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com/company/carddefender" target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/carddefender" target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/carddefender" target="_blank" rel="noopener noreferrer" className="github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/carddefender" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <p>&copy; 2024 CardDefender. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
        <div className="footer-brand">
          <p>Powered by AI • Secured by Trust</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
