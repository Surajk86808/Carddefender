import React from 'react'
import './Contact.css'
import WorkingHyperspeed from '../components/Hyperspeed/WorkingHyperspeed'

const Contact = () => {
  return (
    <div className="contact-container">
      <WorkingHyperspeed />
      <div className="contact-content">
        <h1 className="contact-title">Review & Support</h1>
        <div className="contact-text">
          <p>
            Get comprehensive reviews of your security posture and access our 
            expert support team. We're here to help you optimize your fraud 
            detection system and ensure maximum protection.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Security Review</h3>
            <p>Comprehensive analysis of your current security measures and recommendations for improvement.</p>
            <div className="contact-info">
              <span>📊 Detailed Reports</span>
              <span>🔍 Vulnerability Assessment</span>
              <span>📈 Performance Metrics</span>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support from our team of security experts and fraud prevention specialists.</p>
            <div className="contact-info">
              <span>📞 Phone: +1 (555) 123-4567</span>
              <span>✉️ Email: support@carddefender.com</span>
              <span>💬 Live Chat Available</span>
            </div>
          </div>
          
          <div className="contact-card">
            <h3>Emergency Response</h3>
            <p>Immediate assistance for critical security incidents and fraud alerts requiring urgent attention.</p>
            <div className="contact-info">
              <span>🚨 Emergency Hotline</span>
              <span>⚡ &lt; 5 min Response Time</span>
              <span>🛡️ Incident Management</span>
            </div>
          </div>
        </div>
        
        <div className="review-form">
          <h3>Request a Security Review</h3>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Company Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" />
              <select required>
                <option value="">Review Type</option>
                <option value="basic">Basic Security Audit</option>
                <option value="comprehensive">Comprehensive Review</option>
                <option value="emergency">Emergency Assessment</option>
              </select>
            </div>
            <textarea placeholder="Describe your current security concerns or specific areas you'd like us to review..." rows="4" required></textarea>
            <button type="submit" className="submit-btn">Request Review</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
