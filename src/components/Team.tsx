import React from 'react';

const team = [
  {
    name: 'Amina Bello',
    role: 'Project Lead',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Visionary leader with 10+ years in digital transformation and public sector innovation.'
  },
  {
    name: 'Musa Ibrahim',
    role: 'Technical Director',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Full-stack engineer and mentor, passionate about youth empowerment and open source.'
  },
  {
    name: 'Fatima Usman',
    role: 'Digital Skills Trainer',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Expert in e-learning and digital literacy, empowering thousands of students.'
  },
  {
    name: 'Sani Abdullahi',
    role: 'Community Coordinator',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    bio: 'Grassroots mobilizer connecting rural communities to digital opportunities.'
  },
  {
    name: 'Maryam Lawal',
    role: 'Innovation Hub Manager',
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    bio: 'Startup mentor and ecosystem builder, supporting tech entrepreneurs.'
  },
  {
    name: 'Kabir Yusuf',
    role: 'Data & Research Lead',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    bio: 'Data scientist using analytics to drive policy and impact.'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Implementation Team</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Meet the passionate team driving the Digital Katsina Project. Our experts, trainers, and coordinators are dedicated to making digital transformation a reality for all.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {team.map((member, idx) => (
            <div key={member.name} className="flex flex-col items-center bg-white/5 rounded-2xl shadow-inner border border-slate-700/40 p-6 h-full">
              <img
                src={member.avatar}
                alt={member.name + ' avatar'}
                className="w-20 h-20 rounded-full object-cover border-4 border-emerald-500 mb-4 shadow-lg"
                onError={e => (e.currentTarget.src = 'https://placehold.co/80x80?text=Avatar')}
              />
              <div className="text-lg font-bold text-white mb-1">{member.name}</div>
              <div className="text-emerald-400 font-medium mb-2">{member.role}</div>
              <div className="text-gray-300 text-sm mb-2">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 