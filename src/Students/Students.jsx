import React from 'react';

const extracurricularActivities = [
  'Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'
];

const clubsAndSocieties = [
  'Literary Society', 'Environmental Club', 'Astronomy Club', 'Coding Club'
];

const achievements = [
  {
    name: 'John Smith',
    achievement: 'National Level Math Olympiad Winner'
  },
  {
    name: 'Sarah Lee',
    achievement: 'Gold Medalist in State Swimming Championship'
  },
  {
    name: 'Tech Innovators Club',
    achievement: 'Winners of Inter-School Robotics Competition'
  }
];

const studentCouncil = [
  {
    role: 'President',
    name: 'Amy Parker',
    grade: 'Grade 12'
  },
  {
    role: 'Vice President',
    name: 'Rajiv Mehta',
    grade: 'Grade 11'
  },
  {
    role: 'Secretary',
    name: 'Lisa Wong',
    grade: 'Grade 10'
  }
];

function StudentPage() {
  return (
    <div className="student-page w-full h-auto bg-gray-100 py-20" data-scroll-section>
      <div className="container mx-auto px-5">
        
        {/* Extracurricular Activities */}
        <section className="extracurricular-activities mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Extracurricular Activities
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {extracurricularActivities.map((activity, index) => (
              <div key={index} className="activity-card bg-gradient-to-r from-blue-400 to-teal-400 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{activity}</h3>
                <p className="text-white">Join us to explore your passions and talents!</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clubs and Societies */}
        <section className="clubs-and-societies mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Clubs and Societies
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {clubsAndSocieties.map((club, index) => (
              <div key={index} className="club-card bg-gradient-to-r from-purple-400 to-pink-400 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">{club}</h3>
                <p className="text-white">Engage with like-minded peers and make an impact!</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="achievements mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Achievements
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card bg-white p-6 rounded-lg shadow-xl border-l-8 border-blue-600 transform hover:translate-y-[-5px] transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Student Council */}
        <section className="student-council mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Student Council
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {studentCouncil.map((member, index) => (
              <div key={index} className="council-member bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold">
                    {member.role[0]}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.grade}</p>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default StudentPage;
