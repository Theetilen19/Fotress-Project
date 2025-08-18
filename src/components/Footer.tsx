import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light">
      <div className="footer__container container">
        <div className="footer__grid">
          {/* Company Info */}
          <div className="footer__company">
            <div className="footer__logo">
            <img src="/images/C-LOGO.png" alt="Fortress"  className="logo__full" />
            </div>
            <p className="footer__description">
              Your trusted partner for comprehensive tech, electrical, and ISP solutions in Kenya.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FiFacebook className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <FiTwitter className="footer__social-icon" />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <FiInstagram className="footer__social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li className="footer__link-item">
                <Link to="/" className="footer__link">Home</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/about" className="footer__link">About Us</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/services" className="footer__link">Services</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/gallery" className="footer__link">Projects</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/contact" className="footer__link">Contact</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/profile" className="footer__link">Company Profile</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li className="footer__link-item">
                <Link to="/services#tech" className="footer__link">Tech Solutions</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/services#isp" className="footer__link">ISP Services</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/services#electrical" className="footer__link">Electrical</Link>
              </li>
              <li className="footer__link-item">
                <Link to="/services#solar" className="footer__link">Solar Installations</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__contacts">
              <li className="footer__contact-item">
                <FiPhone className="footer__contact-icon" />
                <div>
                  <p>+254 700 000000</p>
                  <p>+254 711 000000</p>
                </div>
              </li>
              <li className="footer__contact-item">
                <FiMail className="footer__contact-icon" />
                <div>
                  <p>info@potress.com</p>
                  <p>support@potress.com</p>
                </div>
              </li>
              <li className="footer__contact-item">
                <FiMapPin className="footer__contact-icon" />
                <p>123 Tech Street, Nairobi, Kenya</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>&copy; {currentYear} Fotress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;