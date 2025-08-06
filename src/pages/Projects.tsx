//import React from 'react';

const Projects = () => {
  const gallery = [
    {
      id: 1,
      title: "Corporate Office Network",
      location: "Nairobi, Kenya",
      description: "Complete wired and wireless network installation for a 10-story office building with 500+ endpoints.",
      category: "Networking",
      image: "/images/office-network.jpg",
      date: "2023-05-15"
    },
    {
      id: 2,
      title: "Fiber Optic Backbone",
      location: "Mombasa, Kenya",
      description: "20km fiber optic deployment connecting business district to main data center with redundant links.",
      category: "ISP",
      image: "/images/fiber-optic.jpg",
      date: "2023-08-22"
    },
    {
      id: 3,
      title: "Solar Power System",
      location: "Kisumu, Kenya",
      description: "50kW solar panel installation with battery backup for a manufacturing facility.",
      category: "Electrical",
      image: "/images/solar-panel.jpg",
      date: "2023-11-05"
    },
    {
      id: 4,
      title: "Campus Security System",
      location: "Nakuru, Kenya",
      description: "Integrated CCTV and access control system for a university campus with 200+ cameras.",
      category: "Security",
      image: "/images/cctv.jpg",
      date: "2024-01-18"
    },
    {
      id: 5,
      title: "Data Center Wiring",
      location: "Nairobi, Kenya",
      description: "Structured cabling for Tier III data center with 1000+ network drops and fiber channels.",
      category: "Electrical",
      image: "/images/data-center.jpg",
      date: "2024-03-30"
    },
    {
      id: 6,
      title: "Wireless Broadband Tower",
      location: "Eldoret, Kenya",
      description: "Wireless tower setup providing broadband coverage to 5km radius residential area.",
      category: "ISP",
      image: "/images/wireless-tower.jpg",
      date: "2024-05-12"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Completed Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful installations and deployments across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{project.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="text-sm text-gray-500">
                  Completed: {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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