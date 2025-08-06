const Gallery = () => {
    const gallery = [
      { id: 1, title: "Office Network Installation", category: "Tech", image: "/images/office-network.jpg" },
      { id: 2, title: "Fiber Optic Deployment", category: "ISP", image: "/images/fiber-optic.jpg" },
      { id: 3, title: "Solar Panel Installation", category: "Electrical", image: "/images/solar-panel.jpg" },
      { id: 4, title: "CCTV Security System", category: "Tech", image: "/images/cctv.jpg" },
      { id: 5, title: "Commercial Wiring", category: "Electrical", image: "/images/commercial-wiring.jpg" },
      { id: 6, title: "Wireless Tower Setup", category: "ISP", image: "/images/wireless-tower.jpg" },
    ];
  
    return (
      <div className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;