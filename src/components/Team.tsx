import React from 'react';
import ceo from '../../img/implementation/1.jpeg'
import num2 from '../../img/implementation/2.jpeg'
import num3 from '../../img/implementation/3.jpeg'
import num4 from '../../img/implementation/4.jpeg'
import num5 from '../../img/implementation/5.jpg'
import num6 from '../../img/implementation/6.jpeg'


const team = [
  {
    name: 'Usman Ishaq Kharofi',
    role: 'Cordinator',
    avatar: ceo,
  },
  {
    name: 'Muhammad Abbas Usman',
    role: 'Lead, Monitoring and Evaluation',
    avatar: num2,
  },
  {
    name: 'Abdurrahman Mustapha',
    role: 'Lead, Training & Seminars',
    avatar: num3,
  },
  {
    name: 'Adnan Muhammad Mukhtar',
    role: 'Lead, Technical Unit',
    avatar: num4,
  },
  {
    name: 'Zainaab A. Sulaiman',
    role: 'Lead Communication Unit',
    avatar: num5,
  },
  {
    name: 'Aisha Muhammad',
    role: 'Creative and Promotion Lead',
    avatar: num6,
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
                className="w-40 h-40 rounded-full object-cover border-4 border-emerald-500 mb-4 shadow-lg"
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