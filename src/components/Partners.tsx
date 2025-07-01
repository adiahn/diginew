import React from 'react';
import num1 from '../../img/spon/1.png'
import num2 from '../../img/spon/2.png'
import num4 from '../../img/spon/4.png'
import num5 from '../../img/spon/5.png'
import num6 from '../../img/spon/6.png'
import num7 from '../../img/spon/7.png'
import num8 from '../../img/spon/8.png'
import num9 from '../../img/spon/9.jpeg'
import num10 from '../../img/spon/10.png'
import num11 from '../../img/spon/11.png'



const partners = [
  { name: 'Arewa Devs', logo: num1 },
  { name: 'Adolescent Girls', logo: num2 },
  { name: 'Comboss', logo: num4},
  { name: 'KSITM', logo: num5 },
  { name: 'NCS', logo: num6 },
  { name: 'New Era', logo: num7 },
  { name: 'PLBC', logo: num8 },
  { name: 'SKILLS4S', logo: num9 },
  { name: 'UMKAR Academy', logo: num10 },
  { name: 'UTSS', logo: num11},
];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Partners & Sponsors</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          We are proud to collaborate with leading organizations and sponsors who share our vision for a digitally empowered Katsina. Thank you for your support!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner, idx) => (
            <div key={partner.name} className="flex flex-col items-center justify-center">
              <div className="w-28 h-35 p-1 flex items-center justify-center bg-white/10 rounded-xl shadow-inner border border-slate-700/40 mb-2">
                {/* Placeholder SVG or image */}
                <img
                  src={partner.logo}
                  alt={partner.name + ' logo'}
                  className="max-h-30 max-w-[80%] object-contain mx-auto"
                  onError={e => (e.currentTarget.src = 'https://placehold.co/120x40?text=Logo')}
                />
              </div>
              <span className="text-xs text-gray-400 font-medium truncate w-24">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 