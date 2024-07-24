import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page w-full h-auto bg-gray-100 py-20" data-scroll-section>
      <div className="container mx-auto px-5">

        {/* Contact Information */}
        <section className="contact-info mb-20 flex flex-col gap-10 md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <div className="text-gray-700 mb-6">
              <p className="text-lg"><strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
              <p className="text-lg mt-2"><strong>Phone:</strong> <a href="tel:+11234567890" className="text-blue-600 hover:underline">+1 (123) 456-7890</a></p>
              <p className="text-lg mt-2"><strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-10 rounded-lg shadow-lg mt-10 md:mt-0 transform transition-transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
            <form action="#" method="post">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-lg mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-lg mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full p-3 border resize-none border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Google Maps Integration */}
        <section className="maps">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Find Us on the Map</h2>
          <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5707691848125!2d-122.07929368468343!3d37.38747457982557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2a86559b79%3A0x8f64c91b2cf82529!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620701568495!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
}

export default ContactPage;
