const Contact = () => {
    return (
      <div className="py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p>123 Tech Street, Nairobi, Kenya</p>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+254 700 000000</p>
                  <p>+254 711 000000</p>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>info@potress.com</p>
                  <p>support@potress.com</p>
                </div>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Emergency services available 24/7</p>
                </div>
              </div>
  
              <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-700 hover:text-blue-900">Facebook</a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">Twitter</a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;