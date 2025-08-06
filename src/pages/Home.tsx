import { useState, useEffect } from 'react';
//import './Home.css';

const Home = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/images/slide1.jpg",
      title: "Cutting-Edge Network Solutions",
      subtitle: "Enterprise-grade infrastructure for your business"
    },
    {
      image: "/images/slide2.jpg",
      title: "Reliable Electrical Systems",
      subtitle: "Safe and efficient power solutions"
    },
    {
      image: "/images/slide3.jpg",
      title: "High-Speed Connectivity",
      subtitle: "Fiber optic and wireless broadband solutions"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "James Kariuki",
      role: "Chief Technology Officer",
      image: "/images/team1.jpg",
      bio: "15+ years in network infrastructure and enterprise solutions"
    },
    {
      id: 2,
      name: "Sarah Mwende",
      role: "Electrical Engineer",
      image: "/images/team2.jpg",
      bio: "Specialist in renewable energy and industrial electrical systems"
    },
    {
      id: 3,
      name: "David Omondi",
      role: "ISP Specialist",
      image: "/images/team3.jpg",
      bio: "Expert in fiber optic deployments and wireless technologies"
    },
    {
      id: 4,
      name: "Grace Wambui",
      role: "Project Manager",
      image: "/images/team4.jpg",
      bio: "Ensuring seamless execution of all installations"
    }
  ];

  return (
    <div className="home">
      {/* Animated tech background elements */}
      <div className="home__bg">
        <div className="home__bg-inner"></div>
      </div>

      {/* Hero Slider */}
      <section className="hero">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
          >
            <div 
              className="hero__bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="hero__content container">
              <div className="hero__text">
                <h1 className="hero__title">
                  {slide.title}
                </h1>
                <p className="hero__subtitle">
                  {slide.subtitle}
                </p>
                <button className="hero__cta btn btn--primary">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider indicators */}
        <div className="hero__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`hero__indicator ${index === currentSlide ? 'hero__indicator--active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Our <span>Services</span></h2>
            <div className="section-header__divider"></div>
            <p className="section-header__description">
              Comprehensive solutions tailored to your technological and electrical needs
            </p>
          </div>

          <div className="services__grid">
            {[
              {
                icon: "🖥️",
                title: "Tech Services",
                description: "Network installations, CCTV, smart home solutions, and IT support.",
                features: ["Structured cabling", "Wireless networks", "Security systems"]
              },
              {
                icon: "🌐",
                title: "ISP Solutions",
                description: "High-speed internet, fiber optic installations, and wireless solutions.",
                features: ["Fiber to premises", "Wireless broadband", "Network monitoring"]
              },
              {
                icon: "⚡",
                title: "Electrical Services",
                description: "Wiring, solar installations, maintenance, and electrical safety audits.",
                features: ["Solar systems", "Industrial wiring", "Energy audits"]
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="service-card"
              >
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="service-card__feature">
                      <span className="service-card__feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Satisfied Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="stats__item">
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Meet Our <span>Team</span></h2>
            <div className="section-header__divider"></div>
            <p className="section-header__description">
              Our team of certified professionals delivers exceptional service and technical expertise
            </p>
          </div>

          <div className="team__grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card__image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-card__image"
                  />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Transform Your Infrastructure?</h2>
            <p className="cta__description">
              Contact us today for a free consultation and quote
            </p>
            <div className="cta__buttons">
              <button className="btn btn--primary">
                Get Started
              </button>
              <button className="btn btn--outline">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;