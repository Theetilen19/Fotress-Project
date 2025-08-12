import { useState } from 'react';
import '../Project.css';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  category: string;
  image: string;
  date: string;
  status: 'ongoing' | 'completed';
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ongoing' | 'completed'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Corporate Office Network",
      location: "Nairobi, Kenya",
      description: "Complete wired and wireless network installation for a 10-story office building with 500+ endpoints.",
      category: "Networking",
      image: "/images/projects/office-network.jpg",
      date: "2023-05-15",
      status: "completed"
    },
    {
      id: 2,
      title: "Fiber Optic Backbone",
      location: "Mombasa, Kenya",
      description: "20km fiber optic deployment connecting business district to main data center with redundant links.",
      category: "ISP",
      image: "/images/projects/fiber-optic.jpg",
      date: "2023-08-22",
      status: "completed"
    },
    {
      id: 3,
      title: "Solar Power System",
      location: "Kisumu, Kenya",
      description: "50kW solar panel installation with battery backup for a manufacturing facility.",
      category: "Electrical",
      image: "/images/projects/solar-panel.jpg",
      date: "2023-11-05",
      status: "completed"
    },
    {
      id: 4,
      title: "Campus Security System",
      location: "Nakuru, Kenya",
      description: "Integrated CCTV and access control system for a university campus with 200+ cameras.",
      category: "Security",
      image: "/images/projects/cctv.jpg",
      date: "2024-01-18",
      status: "ongoing"
    },
    {
      id: 5,
      title: "Data Center Wiring",
      location: "Nairobi, Kenya",
      description: "Structured cabling for Tier III data center with 1000+ network drops and fiber channels.",
      category: "Electrical",
      image: "/images/DataCenter.jpg",
      date: "2024-03-30",
      status: "ongoing"
    },
    {
      id: 6,
      title: "Wireless Broadband Tower",
      location: "Eldoret, Kenya",
      description: "Wireless tower setup providing broadband coverage to 5km radius residential area.",
      category: "ISP",
      image: "/images/projects/wireless-tower.jpg",
      date: "2024-05-12",
      status: "ongoing"
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    return project.status === activeTab;
  });

  return (
    <div className="projects-root">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">Our Projects</h1>
          <p className="projects-subtitle">
            Explore our portfolio of successful and ongoing installations across Kenya
          </p>
        </div>

        <div className="projects-tabs">
          <button 
            className={`projects-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
            aria-label="Show all projects"
          >
            All Projects
          </button>
          <button 
            className={`projects-tab ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
            aria-label="Show ongoing projects"
          >
            Ongoing
          </button>
          <button 
            className={`projects-tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
            aria-label="Show completed projects"
          >
            Completed
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <span className={`project-badge ${project.status}`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </span>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-meta">
                  <FiMapPin />
                  <span>{project.location}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-status">
                    <div className={`project-status-dot ${project.status}`} />
                    <span>{project.status === 'completed' ? 'Completed' : 'In Progress'}</span>
                  </div>
                  <div className="project-date">
                    <FiCalendar /> {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;