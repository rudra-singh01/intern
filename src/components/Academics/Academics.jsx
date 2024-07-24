import React from 'react';

function Academics() {
  return (
    <div className="academics-page w-full h-auto bg-gray-100 py-10" data-scroll-section>
      <div className="container mx-auto px-5">
        
        <section className="curriculum mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Curriculum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="curriculum-section bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-blue-700">Primary (Grades 1-5)</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            
            <div className="curriculum-section bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-blue-700">Secondary (Grades 6-10)</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            
            <div className="curriculum-section bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-3xl font-semibold mb-6 text-blue-700">Senior Secondary (Grades 11-12)</h3>
              <div className="text-gray-700 text-lg">
                <h4 className="text-2xl font-semibold mb-4 text-blue-600">Science Stream</h4>
                <ul className="list-disc list-inside mb-6">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>English</li>
                </ul>
                <h4 className="text-2xl font-semibold mb-4 text-blue-600">Commerce Stream</h4>
                <ul className="list-disc list-inside">
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="teaching-methodologies mb-16 bg-white py-16 px-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-10 text-center">Teaching Methodologies</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </section>
        
        <section className="educational-resources mb-16">
          <h2 className="text-5xl font-bold text-blue-900 mb-12 text-center">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="resource-card bg-white shadow-lg rounded-lg p-8 flex items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="resource-icon text-blue-500 text-6xl mr-4">
                <i className="fas fa-chalkboard-teacher"></i> {/* FontAwesome icon */}
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-blue-700">Digital Classrooms</h3>
                <p className="text-gray-700 text-lg">Modern digital classrooms equipped with interactive tools.</p>
              </div>
            </div>
            <div className="resource-card bg-white shadow-lg rounded-lg p-8 flex items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="resource-icon text-blue-500 text-6xl mr-4">
                <i className="fas fa-laptop"></i> {/* FontAwesome icon */}
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-blue-700">Interactive Learning Modules</h3>
                <p className="text-gray-700 text-lg">Engaging and interactive modules for effective learning.</p>
              </div>
            </div>
            <div className="resource-card bg-white shadow-lg rounded-lg p-8 flex items-center hover:shadow-2xl transition-shadow duration-300">
              <div className="resource-icon text-blue-500 text-6xl mr-4">
                <i className="fas fa-book"></i> {/* FontAwesome icon */}
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-blue-700">Online Educational Platforms</h3>
                <p className="text-gray-700 text-lg">Access to various online platforms for enhanced learning.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Academics;
