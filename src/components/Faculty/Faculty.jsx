import React from 'react';

const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'David Wilson',
    position: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience.',
    image: 'https://images.unsplash.com/photo-1679217121503-264c00693d18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

function FacultyPage() {
  return (
    <div className="faculty-page w-full h-auto bg-gradient-to-b from-blue-100 to-blue-300 py-20" data-scroll-section>
      <div className="container mx-auto px-5">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Meet Our Faculty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="faculty-member bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-100 text-center">
              <div className="relative">
                <img src={member.image} alt={`${member.name}`} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"/>
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {member.position}
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mt-4">{member.name}</h2>
              <p className="text-gray-600 mt-2">{member.qualification}</p>
              <p className="text-gray-500 mt-2">{member.experience}</p>
              <div className="mt-6">
                <a href="#" className="bg-blue-700 text-white py-2 px-4 rounded-full font-bold shadow-lg hover:bg-blue-800 transition duration-300">View Profile</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacultyPage;
