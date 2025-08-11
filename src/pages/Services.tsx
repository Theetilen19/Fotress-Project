//import React from 'react';
import '../Service.css';
import { FiCheck, FiArrowRight, FiZap, FiWifi, FiTool } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiZap size={24} />,
      title: "Tech Services",
      items: [
        "Network Installation & Configuration",
        "CCTV & Security Systems",
        "Structured Cabling",
        "Smart Home Automation",
        "IT Support & Maintenance"
      ],
      links: [
        { text: "Learn more about networks", url: "#" },
        { text: "Security solutions", url: "#" },
        { text: "See our portfolio", url: "#" }
      ]
    },
    {
      icon: <FiWifi size={24} />,
      title: "ISP Solutions",
      items: [
        "Fiber Optic Installation",
        "Wireless Internet Solutions",
        "Enterprise Network Solutions",
        "Bandwidth Management",
        "24/7 Technical Support"
      ],
      links: [
        { text: "Fiber packages", url: "#" },
        { text: "Business solutions", url: "#" },
        { text: "Support plans", url: "#" }
      ]
    },
    {
      icon: <FiTool size={24} />,
      title: "Electrical Services",
      items: [
        "Electrical Wiring & Rewiring",
        "Solar Power Installation",
        "DB Board Installation",
        "Electrical Safety Audits",
        "Emergency Repairs"
      ],
      links: [
        { text: "Solar solutions", url: "#" },
        { text: "Safety standards", url: "#" },
        { text: "Emergency contacts", url: "#" }
      ]
    }
  ];

  return (
    <div className="services-root">
      <div className="services-container">
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive solutions tailored to power your business and connect your world
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <div className="service-card-title">{service.title}</div>
              </div>
              <div className="service-card-body">
                <ul>
                  {service.items.map((item, i) => (
                    <li key={i} className="service-feature">
                      <FiCheck className="service-feature-icon" />
                      <span className="service-feature-text">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="service-links">
                  {service.links.map((link, i) => (
                    <a key={i} href={link.url} className="service-link">
                      <FiArrowRight className="service-link-icon" />
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="services-cta-pattern"></div>
          <div className="services-cta-content">
            <h3 className="services-cta-title">Need a custom solution?</h3>
            <p className="services-cta-text">
              Our experts can design and implement tailored solutions to meet your specific requirements.
            </p>
            <button className="services-cta-button">
              Request a Quote <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;