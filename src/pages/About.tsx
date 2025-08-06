const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Potress</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2010, Potress has grown from a small electrical contractor to a full-service 
            technology and infrastructure solutions provider serving clients across Kenya.
          </p>
          <p>
            Our team of certified professionals brings together expertise in electrical engineering, 
            network infrastructure, and telecommunications to deliver comprehensive solutions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p>
            To provide reliable, innovative, and affordable tech and electrical solutions that 
            empower businesses and homes while maintaining the highest standards of safety and quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-blue-700 mb-2">CEO & Founder</p>
              <p>Electrical engineer with 15+ years experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-blue-700 mb-2">CTO</p>
              <p>Network specialist and IT solutions architect</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-blue-700 mb-2">Operations Manager</p>
              <p>Project management and field operations</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;