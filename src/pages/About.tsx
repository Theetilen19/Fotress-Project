import React from 'react';
import '../About.css';
import { FiShield, FiZap, FiAward, FiAlertCircle } from 'react-icons/fi';

const About: React.FC = () => {
  return (
    <div className="about-root">
      <div className="about-container">
        <div className="about-page-header">
          <h1 className="about-title">About Fotress</h1>
          <div className="about-title-underline"></div>
        </div>
        
        <section className="about-section">
          <h2 className="about-section-title">Our Story</h2>
          <div className="about-section-content">
            <p>
              Founded in 2025, Fotress has grown from a small electrical contractor to a full-service 
              technology and infrastructure solutions provider serving clients across Kenya.
            </p>
            <p>
              Our team of certified professionals brings together expertise in electrical engineering, 
              network infrastructure, and telecommunications to deliver comprehensive solutions that 
              power businesses and connect communities.
            </p>
          </div>
        </section>

        <div className="about-grid-container">
          <section className="about-section">
            <h2 className="about-section-title">Our Vision</h2>
            <p className="about-section-content">
              To be East Africa's leading provider of integrated technology and electrical solutions, 
              driving innovation and reliability in every project we undertake.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Our Mission</h2>
            <div className="about-section-content">
              <p>
                To provide reliable, innovative, and affordable tech and electrical solutions that 
                empower businesses and homes while maintaining the highest standards of safety and quality.
              </p>
              <p>
                We commit to delivering exceptional service, sustainable solutions, and continuous 
                technological advancement for our clients.
              </p>
            </div>
          </section>
        </div>

        <section>
          <h2 className="about-section-title text-center">Our Core Values</h2>
          <div className="about-grid-container">
            <div className="about-value-card">
              <FiShield className="about-value-icon" size={32} />
              <h3 className="about-value-title">Integrity</h3>
              <p className="about-section-content">
                We conduct all business with honesty, transparency, and ethical practices.
              </p>
            </div>
            
            <div className="about-value-card">
              <FiZap className="about-value-icon" size={32} />
              <h3 className="about-value-title">Innovation</h3>
              <p className="about-section-content">
                We embrace cutting-edge technologies and creative problem-solving.
              </p>
            </div>
            
            <div className="about-value-card">
              <FiAward className="about-value-icon" size={28} />
              <h3 className="about-value-title">Quality</h3>
              <p className="about-section-content">
                We deliver excellence in every project, using premium materials and skilled workmanship.
              </p>
            </div>
            
            <div className="about-value-card">
              <FiAlertCircle className="about-value-icon" size={32} />
              <h3 className="about-value-title">Safety</h3>
              <p className="about-section-content">
                We prioritize the well-being of our clients, team, and community in all operations.
              </p>
            </div>
          </div>
        </section>

        <div className="about-cta-section">
          <h3 className="about-cta-title">Ready to power your future?</h3>
          <p className="about-cta-content">
            Discover how Fotress can transform your business with our innovative solutions.
          </p>
          <button className="about-cta-button">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;