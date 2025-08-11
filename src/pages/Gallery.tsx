import React, { useState } from 'react';
import '../Gallery.css';
import { FiArrowRight, FiX } from 'react-icons/fi';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const gallery = [
    { 
      id: 1, 
      title: "Corporate Office Network", 
      category: "Networking", 
      image: "/images/projects/office-network.jpg",
      description: "Complete wired and wireless network installation for a 10-story office complex."
    },
    { 
      id: 2, 
      title: "Fiber Optic Backbone", 
      category: "ISP", 
      image: "/images/projects/fiber-optic.jpg",
      description: "High-speed fiber optic infrastructure deployment across business district."
    },
    { 
      id: 3, 
      title: "Solar Power System", 
      category: "Electrical", 
      image: "/images/projects/solar-panel.jpg",
      description: "Sustainable solar energy solution for industrial facility with battery backup."
    },
    { 
      id: 4, 
      title: "Campus Security System", 
      category: "Security", 
      image: "/images/projects/cctv.jpg",
      description: "Comprehensive surveillance and access control system for educational institution."
    },
    { 
      id: 5, 
      title: "Data Center Wiring", 
      category: "Electrical", 
      image: "/images/projects/data-center.jpg",
      description: "Structured cabling solution for high-availability data center environment."
    },
    { 
      id: 6, 
      title: "Wireless Broadband Tower", 
      category: "ISP", 
      image: "/images/projects/wireless-tower.jpg",
      description: "Wireless infrastructure providing broadband to residential community."
    }
  ];

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="gallery-root">
      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="gallery-title">Project Gallery</h1>
          <p className="gallery-subtitle">
            Visual showcase of our completed installations and implementations
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((project) => (
            <div key={project.id} className="gallery-item">
              <div 
                className="gallery-image-container"
                onClick={() => openLightbox(project.image)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="gallery-image"
                />
                <span className="gallery-category">{project.category}</span>
              </div>
              <div className="gallery-content">
                <h3 className="gallery-item-title">{project.title}</h3>
                <p className="gallery-item-description">{project.description}</p>
                <a href="#" className="gallery-view-more">
                  View project details <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div className={`gallery-lightbox ${lightboxOpen ? 'active' : ''}`}>
        <div className="lightbox-content">
          <button className="lightbox-close" onClick={closeLightbox}>
            <FiX />
          </button>
          <img 
            src={currentImage} 
            alt="Enlarged view" 
            className="lightbox-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;