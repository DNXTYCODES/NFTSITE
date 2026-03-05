import React from 'react';
import { FaLinkedin, FaSun, FaSolarPanel, FaTools, FaUserGraduate, FaLightbulb } from 'react-icons/fa';
import Title from './Title';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr Abraham',
      role: 'CEO & Founder',
      bio: `Renewable energy expert with 15+ years in solar solutions. Founded SunPeak to empower Nigerian communities through sustainable energy. NERC-certified energy consultant.`,
      expertise: ['Strategic Planning', 'Government Compliance', 'Sustainable Development'],
      // photo: assets.solar6,
      photo: assets.ceo,
      linkedin: '#'
    },
    // {
    //   id: 2,
    //   name: 'Chidi Nwankwo',
    //   role: 'Chief Engineer',
    //   bio: `Licensed solar engineer with expertise in large-scale installations. Oversees quality control for all projects. Certified in NECO and IEEE standards.`,
    //   expertise: ['System Design', 'Quality Assurance', 'Technical Training'],
    //   photo: 'team-engineer.jpg',
    //   linkedin: '#'
    // },
    // {
    //   id: 3,
    //   name: 'Zainab Adekunle',
    //   role: 'Training Director',
    //   bio: `Solar education specialist developing our certification programs. 8+ years experience in vocational technical training across West Africa.`,
    //   expertise: ['Curriculum Design', 'Certification Programs', 'Skill Development'],
    //   photo: 'team-training.jpg',
    //   linkedin: '#'
    // },
    // {
    //   id: 4,
    //   name: 'Emeka Okoro',
    //   role: 'Field Operations',
    //   bio: `Leads installation teams across Nigeria. Certified in solar safety standards and project management. 200+ successful installations completed.`,
    //   expertise: ['Team Management', 'Safety Protocols', 'Logistics'],
    //   photo: 'team-field.jpg',
    //   linkedin: '#'
    // }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]" itemScope itemType="https://schema.org/Organization">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          {/* <Title text1="ENERGY" text2="LEADERS" /> */}
          
            <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="mt-4 text-xl text-[var(--text-muted)]">
            The team powering Nigeria's solar revolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <article 
              key={member.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm p-6 hover:shadow-glow transition-all"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="relative group mb-4">
                <img 
                  // src={`/team/${member.photo}`} 
                  src={`${member.photo}`} 
                  alt={`${member.name} - Solar Expert at SunPeak`}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  width="400"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-dark)] opacity-0 group-hover:opacity-90 transition-opacity rounded-lg flex items-end p-4">
                  <div className="space-y-2 text-[var(--text)]">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="block text-sm">• {skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text)]" itemProp="name">{member.name}</h3>
              <p className="text-[var(--primary-neon)] mt-1" itemProp="jobTitle">{member.role}</p>
              <p className="text-[var(--text-muted)] mt-4 line-clamp-3" itemProp="description">{member.bio}</p>
              
              {/* <div className="mt-6 flex gap-4">
                <a 
                  href={member.linkedin} 
                  className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div> */}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center bg-[var(--card-bg)] rounded-xl p-8 border border-[var(--border)] backdrop-blur-sm animate-fadeIn mb-20">
          <div className="flex justify-center gap-6 mb-6 text-[var(--primary-neon)]">
            <FaSolarPanel className="w-12 h-12" />
            <FaSun className="w-12 h-12" />
            <FaUserGraduate className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Join the Energy Revolution
          </h3>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto mb-6">
            Help build Nigeria's sustainable future through solar energy
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaTools />, text: 'Installation Technicians' },
              { icon: <FaLightbulb />, text: 'Sales Specialists' },
              { icon: <FaUserGraduate />, text: 'Training Instructors' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[var(--text)] justify-center">
                <span className="text-[var(--primary-neon)]">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/2348134553751"
            className="inline-block px-8 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg hover:shadow-glow transition-all font-medium"
          >
            Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
