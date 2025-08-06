const Services = () => {
    const services = [
      {
        title: "Tech Services",
        items: [
          "Network Installation & Configuration",
          "CCTV & Security Systems",
          "Structured Cabling",
          "Smart Home Automation",
          "IT Support & Maintenance"
        ]
      },
      {
        title: "ISP Solutions",
        items: [
          "Fiber Optic Installation",
          "Wireless Internet Solutions",
          "Enterprise Network Solutions",
          "Bandwidth Management",
          "24/7 Technical Support"
        ]
      },
      {
        title: "Electrical Services",
        items: [
          "Electrical Wiring & Rewiring",
          "Solar Power Installation",
          "DB Board Installation",
          "Electrical Safety Audits",
          "Emergency Repairs"
        ]
      }
    ];
  
    return (
      <div className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">{service.title}</h2>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="mb-6">
              Our team can design and implement tailored solutions to meet your specific requirements.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;