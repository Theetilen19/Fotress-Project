import React from 'react';
import '../CompanyProfile.css';
import { FiDownload, FiFileText, FiMail } from 'react-icons/fi';

const CompanyProfile = () => {
  const handleDownload = () => {
    // Replace with actual PDF download logic
    console.log('Downloading company profile...');
    // Example: window.open('/downloads/company-profile.pdf', '_blank');
  };

  return (
    <div className="profile-root">
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="profile-title">Company Profile</h1>
        </div>
        
        <div className="profile-card">
          <h2 className="company-name">Fotress Technical Solutions</h2>
          <p className="profile-description">
            Download our comprehensive company profile to learn more about our services, 
            capabilities, past projects, and why we're the preferred choice for technical 
            solutions across Kenya.
          </p>
          
          <div className="features-box">
            <h3 className="features-title"><FiFileText /> Profile Includes:</h3>
            <ul className="features-list">
              <li className="feature-item">Company overview and history</li>
              <li className="feature-item">Our service offerings and expertise</li>
              <li className="feature-item">Technical capabilities and infrastructure</li>
              <li className="feature-item">Client testimonials and case studies</li>
              <li className="feature-item">Certifications and accreditations</li>
              <li className="feature-item">Our team and operational approach</li>
              <li className="feature-item">Health, safety, and quality standards</li>
            </ul>
          </div>

          <button 
            className="download-btn"
            onClick={handleDownload}
          >
            <FiDownload /> Download Company Profile (PDF)
          </button>

          <p className="contact-note">
            Alternatively, email us at{' '}
            <a href="mailto:info@potress.com" className="contact-link">
              <FiMail style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} />
              info@fotress.com
            </a>{' '}
            to request more information or a physical copy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;