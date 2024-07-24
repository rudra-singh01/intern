import React from 'react';

function About() {
  return (
    <div className="about-page w-full min-h-screen bg-gray-100 py-10 px-4 md:px-8 lg:px-16">
      {/* Principal's Message */}
      <section className="mb-16 bg-white py-10 px-5 shadow-md rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">Principal's Message</h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
          At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
        </p>
      </section>

      {/* History, Vision, Mission */}
      <section className='space-y-16'>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <img
              className='w-full h-64 object-cover rounded-lg shadow-md'
              src="https://images.unsplash.com/photo-1718124530808-2740e8f97d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="History"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-5">
            <h1 className='text-2xl md:text-3xl font-bold'>History</h1>
            <p className='text-base md:text-lg text-gray-700 mt-4'>
              Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <img
              className='w-full h-64 object-cover rounded-lg shadow-md'
              src="https://images.unsplash.com/photo-1718124530808-2740e8f97d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Vision"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-5">
            <h1 className='text-2xl md:text-3xl font-bold'>Vision</h1>
            <p className='text-base md:text-lg text-gray-700 mt-4'>
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <img
              className='w-full h-64 object-cover rounded-lg shadow-md'
              src="https://images.unsplash.com/photo-1718124530808-2740e8f97d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mission"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start p-5">
            <h1 className='text-2xl md:text-3xl font-bold'>Mission</h1>
            <p className='text-base md:text-lg text-gray-700 mt-4'>
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
        </div>
      </section>
      <section className="values mb-16 bg-white py-10 px-5 shadow-md rounded-lg mt-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Our Values</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-800 max-w-4xl mx-auto">
            <li className="leading-relaxed">
              Integrity - We uphold the highest standards of honesty and strong moral principles.
            </li>
            <li className="leading-relaxed">
              Excellence - We strive for excellence in all our endeavors and encourage students to achieve their best.
            </li>
            <li className="leading-relaxed">
              Respect - We foster a culture of respect for self, others, and the environment.
            </li>
            <li className="leading-relaxed">
              Innovation - We embrace innovative teaching methods and encourage creative thinking.
            </li>
            <li className="leading-relaxed">
              Community - We build a strong sense of community and collaboration among students, staff, and parents.
            </li>
          </ul>
        </section>

        <section className="infrastructure-and-facilities mb-16">
          <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Infrastructure and Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="facility-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Science and Computer Labs" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">State-of-the-art Labs</h3>
                <p className="text-gray-700">State-of-the-art science and computer labs.</p>
              </div>
            </div>
            <div className="facility-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Classrooms" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">Spacious Classrooms</h3>
                <p className="text-gray-700">Spacious and well-equipped classrooms.</p>
              </div>
            </div>
            <div className="facility-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Library" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">Library</h3>
                <p className="text-gray-700">Library with a vast collection of books and digital resources.</p>
              </div>
            </div>
            <div className="facility-card bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Sports Facilities" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">Sports Facilities</h3>
                <p className="text-gray-700">Sports facilities including a playground, gymnasium, and swimming pool.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default About;
