import React, { useState } from "react";
import "./ContactSupport.css";
import Backtohome from "../link/Backtohome";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        priority: 'medium',
        message: ''
      });
    } catch (error) {
      setSubmitStatus(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportOptions = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "support@carddefender.com"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with an expert",
      contact: "+914356435876"
    },
    {
      icon: "📚",
      title: "Knowledge Base",
      description: "Find answers in our documentation",
      contact: "Browse articles"
    }
  ];

  return (
    <div className="contact-support-page">
      <div className="support-container">
        <div className="support-hero">
          <h1>Contact Support</h1>
          <p className="support-intro">
            Need help? Our support team is here for you 24/7.
            Choose your preferred way to get in touch, or fill out the form below 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="support-options">
          <h2>Get Help Your Way</h2>
          <div className="options-grid">
            {supportOptions.map((option, index) => (
              <div key={index} className="support-option">
                <div className="option-icon">{option.icon}</div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="contact-detail">{option.contact}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="support-form-section">
          <h2>Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div className="status-message success">
              <i className="fas fa-check-circle"></i>
              Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              <i className="fas fa-exclamation-circle"></i>
              Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}

          <form className="support-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief description of your issue"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your issue in detail..."
                rows="6"
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  
                    Send Message
                    
                </>
              )}
            </button>
            
          </form>
          <div className="form-footer">
            <Backtohome />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactSupport;