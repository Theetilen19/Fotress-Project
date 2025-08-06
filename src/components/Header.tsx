import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
        <Link to="/" className="logo">
            <img src="/images/C-LOGO.png" alt="Fortress"  className="logo-full" />
         </Link>

          {/* Desktop Navigation */}
          <nav className={`nav-desktop ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              </li>
              <li>
                <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="contact-btn" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" className="contact-btn" onClick={() => setMobileMenuOpen(false)}>
                  Company Profile
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`nav-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;