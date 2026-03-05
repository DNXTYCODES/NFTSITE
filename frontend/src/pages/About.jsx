import React from 'react';
import { FaSolarPanel, FaHandsHelping, FaAward, FaRegLightbulb, FaLinkedin } from 'react-icons/fa';
import OurTeam from '../components/OurTeam';

const About = () => {
  const teamMembers = [
    {
      name: 'Amina Abdullahi',
      role: 'CEO & Founder',
      bio: 'Renewable energy expert with 15+ years in solar solutions. NERC-certified energy consultant.',
      photo: '/team/ceo.jpg',
      linkedin: '#'
    },
    {
      name: 'Chidi Nwankwo',
      role: 'Chief Engineer',
      bio: 'Licensed solar engineer specializing in large-scale installations. IEEE standards certified.',
      photo: '/team/engineer.jpg',
      linkedin: '#'
    },
    {
      name: 'Zainab Adekunle',
      role: 'Training Director',
      bio: 'Solar education specialist with 8+ years in vocational training across West Africa.',
      photo: '/team/training.jpg',
      linkedin: '#'
    },
    {
      name: 'Emeka Okoro',
      role: 'Field Operations',
      bio: 'Certified in solar safety standards and project management. 200+ installations completed.',
      photo: '/team/field.jpg',
      linkedin: '#'
    }
  ];

  const certifications = [
    { name: 'NERC Certified', logo: '/certs/nerc.png' },
    { name: 'ISO 9001', logo: '/certs/iso.png' },
    { name: 'IEEE Standards', logo: '/certs/ieee.png' },
    { name: 'SEIA Member', logo: '/certs/seia.png' }
  ];

  const partners = [
    { name: 'SolarEdge', logo: '/partners/solaredge.png' },
    { name: 'Tesla Energy', logo: '/partners/tesla.png' },
    { name: 'LG Solar', logo: '/partners/lg.png' },
    { name: 'Jinko Solar', logo: '/partners/jinko.png' }
  ];

  return (
    <section className="bg-[var(--bg)] min-h-screen" itemScope itemType="https://schema.org/Organization">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Powering Nigeria's Solar Future
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Leading the renewable energy revolution since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
            <FaRegLightbulb className="text-[var(--primary-neon)] text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Our Mission</h2>
            <p className="text-[var(--text-muted)]">
              To make sustainable solar energy accessible and affordable for every Nigerian home and business, 
              reducing carbon footprints while empowering communities through renewable energy solutions.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
            <FaSolarPanel className="text-[var(--primary-neon)] text-4xl mb-4" />
            <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Our Vision</h2>
            <p className="text-[var(--text-muted)]">
              To be West Africa's leading provider of integrated solar solutions, driving the transition 
              to 100% renewable energy through innovation, education, and community-focused implementations.
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-[var(--border)] h-full"></div>
            {[
              { year: 2015, event: 'Founded in Lagos with 3-person team' },
              { year: 2017, event: 'Installed first commercial 100kW system' },
              { year: 2019, event: 'Launched solar training academy' },
              { year: 2021, event: 'Reached 1,000 residential installations' },
              { year: 2023, event: 'Expanded to 5 states across Nigeria' }
            ].map((milestone, index) => (
              <div key={index} className="mb-8 flex justify-between items-center w-full animate-fadeIn">
                <div className={`w-5/12 ${index % 2 === 0 ? '' : 'order-last'}`}></div>
                <div className="w-5/12 p-4 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
                  <div className="text-[var(--primary-neon)] font-bold mb-2">{milestone.year}</div>
                  <p className="text-[var(--text-muted)]">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
                itemScope
                itemType="https://schema.org/Person"
              >
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                  itemProp="image"
                />
                <h3 className="text-xl font-bold text-[var(--text)]" itemProp="name">{member.name}</h3>
                <p className="text-[var(--primary-neon)] mb-2" itemProp="jobTitle">{member.role}</p>
                <p className="text-[var(--text-muted)] text-sm" itemProp="description">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="inline-block mt-4 text-[var(--text-muted)] hover:text-[var(--primary-neon)]"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Certifications */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={cert.logo} 
                  alt={cert.name}
                  className="h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Partnerships */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">Trusted Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Ready for Solar?</h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Whether you're a homeowner, business owner, or aspiring solar technician, 
            we have solutions tailored for your energy needs.
          </p>
          <button className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold hover:shadow-glow transition-all">
            <a  href="tel:+2348134553751">
            Start Your Solar Journey

            </a>
          </button>
        </div>
      </div>
      <OurTeam />
    </section>
  );
};

export default About;