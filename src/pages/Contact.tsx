import React, { useState } from 'react';
import '../Contact.css';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using FormSubmit.co for email forwarding (free service)
      const response = await fetch('https://formsubmit.co/ajax/ochiengtilen5@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: 'New Contact Form Submission'
        })
      });

      const data = await response.json();
      if (data.success === 'true') {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-root">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with our team for inquiries, support, or partnership opportunities
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Fotress User"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="info@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+254 700 000000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend className="ml-2" />
              </button>

              <div className={`success-message ${showSuccess ? 'show' : ''}`}>
                Thank you! Your message has been sent successfully.
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-title"><FiMapPin /> Office Address</h3>
              <p className="info-content">
                80100, Mombasa<br />
                Mombasa, Kenya
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title"><FiPhone /> Contact Numbers</h3>
              <p className="info-content">
                Main: +254 729 596966<br />
                Support: +254 111 324234<br />
                Emergency: +254 114 450758
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title"><FiMail /> Email Addresses</h3>
              <p className="info-content">
                General: info@fotress.com<br />
                Support: support@fotress.com<br />
                Sales: sales@fotress.com
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title"><FiClock /> Business Hours</h3>
              <p className="info-content">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                <strong>Emergency services available 24/7</strong>
              </p>
            </div>

            <div>
              <h3 className="info-title">Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FiFacebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;