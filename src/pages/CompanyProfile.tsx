const CompanyProfile = () => {
    return (
      <div className="py-12">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Company Profile</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Potress Technical Solutions</h2>
            <p className="mb-6">
              Download our comprehensive company profile to learn more about our services, 
              capabilities, and past projects.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-2">Profile Includes:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Company overview and history</li>
                <li>Our service offerings</li>
                <li>Technical capabilities</li>
                <li>Client testimonials</li>
                <li>Case studies of selected projects</li>
                <li>Certifications and accreditations</li>
              </ul>
            </div>
  
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">
              Download Company Profile (PDF)
            </button>
  
            <p className="mt-4 text-sm text-gray-600">
              Alternatively, email us at <a href="mailto:info@potress.com" className="text-blue-600">info@potress.com</a> to request more information.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default CompanyProfile;