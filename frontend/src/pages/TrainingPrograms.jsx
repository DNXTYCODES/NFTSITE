import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaChalkboardTeacher, FaCertificate, FaImages } from 'react-icons/fa';
import { assets } from '../assets/assets'; // Import assets

const TrainingPrograms = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  
  const courses = [
    {
      title: 'Solar Installation Certification',
      topics: [
        'Photovoltaic System Fundamentals',
        'Electrical Safety Standards',
        'Panel Mounting Techniques',
        'System Commissioning',
        'Troubleshooting & Maintenance'
      ],
      icon: <FaChalkboardTeacher className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Advanced Solar Technician',
      topics: [
        'Battery Storage Systems',
        'Hybrid System Design',
        'Inverter Configuration',
        'Grid Integration',
        'Performance Optimization'
      ],
      icon: <FaCertificate className="text-4xl text-[var(--primary-neon)]" />
    },
    {
      title: 'Solar Sales & Consulting',
      topics: [
        'Technical Product Knowledge',
        'Customer Needs Analysis',
        'System Cost Calculation',
        'Government Incentives',
        'Project Proposal Development'
      ],
      icon: <FaImages className="text-4xl text-[var(--primary-neon)]" />
    }
  ];

  const trainingGallery = [
    { 
      title: 'Installation Certification Class', 
      items: [
        { type: 'image', src: assets.trainingimg1, caption: 'Hands-on panel installation training' },
        { type: 'image', src: assets.trainingimg2, caption: 'Students practicing wiring techniques' },
        { type: 'video', src: assets.trainingvid1, caption: 'Instructor demonstrating safety procedures' }
      ] 
    },
    { 
      title: 'Advanced Technician Workshop', 
      items: [
        { type: 'image', src: assets.trainingimg3, caption: 'Battery system configuration' },
        { type: 'video', src: assets.trainingvid2, caption: 'Inverter troubleshooting session' },
        { type: 'image', src: assets.trainingimg4, caption: 'Graduates receiving certificates' }
      ] 
    },
    { 
      title: 'Sales Training Session', 
      items: [
        { type: 'image', src: assets.trainingimg5, caption: 'Customer consultation roleplay' },
        { type: 'image', src: assets.trainingimg6, caption: 'Group discussion on market strategies' },
        { type: 'video', src: assets.trainingvid3, caption: 'Expert sharing sales techniques' }
      ] 
    }
  ];

  return (
    <section className="bg-[var(--bg)] min-h-screen" itemScope itemType="https://schema.org/EducationalOccupationalProgram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Professional Solar Training Programs
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Become a certified solar energy specialist through our hands-on courses
          </p>
        </div>

        {/* Course Catalog */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
            >
              <div className="text-center mb-6">{course.icon}</div>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-4">{course.title}</h2>
              
              <ul className="space-y-3 mb-6">
                {course.topics.map((topic, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--primary-neon)]">▹</span>
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-[var(--primary-neon)/10] rounded-lg">
                <p className="text-sm text-[var(--text-muted)] flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">⚠️</span>
                  Contact us for next available session
                </p>
                <a
                  href="https://wa.me/2348134553751"
                  className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-medium hover:shadow-glow"
                >
                  <FaWhatsapp /> Get Class Schedule
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Training Gallery */}
        <div className="mb-16 border-t border-[var(--border)] pt-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 text-center">
            Our Training Gallery
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainingGallery.map((gallery, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] cursor-pointer hover:border-[var(--primary-neon)] transition-all"
                onClick={() => setActiveGallery(index)}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{gallery.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-1 absolute inset-0">
                    {gallery.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="border-2 border-white">
                        {item.type === 'image' ? (
                          <img 
                            src={item.src} 
                            alt={item.caption} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="bg-gray-900 w-full h-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-[var(--primary-neon)]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {activeGallery !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-[var(--card-bg)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  {trainingGallery[activeGallery].title}
                </h3>
                <button 
                  onClick={() => setActiveGallery(null)}
                  className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                {trainingGallery[activeGallery].items.map((item, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden">
                    <div className="aspect-video bg-gray-800 relative">
                      {item.type === 'image' ? (
                        <img 
                          src={item.src} 
                          alt={item.caption} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video 
                          controls 
                          className="w-full h-full object-cover"
                          poster={assets.thumbnail} // Using your thumbnail as video poster
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                    {/* <p className="mt-2 text-sm text-[var(--text-muted)] p-2">
                      {item.caption}
                    </p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
            Get Training Schedule & Enrollment Info
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <a
              href="https://wa.me/2348134553751"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full group-hover:bg-[var(--primary-neon)] transition-colors">
                  <FaWhatsapp className="text-3xl text-[var(--primary-neon)] group-hover:text-[var(--bg)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">WhatsApp Inquiry</span>
                <span className="text-sm text-[var(--text-muted)]">Fastest Response</span>
              </div>
            </a>

            <a
              href="tel:+2348134553751"
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full group-hover:bg-[var(--primary-neon)] transition-colors">
                  <FaPhoneAlt className="text-3xl text-[var(--primary-neon)] group-hover:text-[var(--bg)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">Direct Call</span>
                <span className="text-sm text-[var(--text-muted)]">+234 813 455 3751</span>
              </div>
            </a>

            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-[var(--primary-neon)/10] rounded-full">
                  <FaChalkboardTeacher className="text-3xl text-[var(--primary-neon)]" />
                </div>
                <span className="text-[var(--text)] font-semibold">Flexible Scheduling</span>
                <span className="text-sm text-[var(--text-muted)]">Corporate & Group Training Available</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[var(--primary-neon)/10] rounded-lg max-w-2xl mx-auto">
            <p className="text-[var(--text-muted)] text-left">
              ⚠️ Training sessions are scheduled based on demand and instructor availability. To get the next available dates:
              <ul className="list-disc pl-5 mt-2">
                <li>Contact us directly via WhatsApp or phone</li>
                <li>Specify which certification you're interested in</li>
                <li>Our team will provide upcoming session options</li>
                <li>Corporate training can be scheduled at your convenience</li>
              </ul>
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-6 text-center">Training FAQs</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">How do I register for training?</p>
              <p className="text-[var(--text-muted)]">
                Contact us directly via WhatsApp or phone to begin your registration process. 
                Our team will guide you through enrollment and provide current session options.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">What are the prerequisites?</p>
              <p className="text-[var(--text-muted)]">
                Basic technical knowledge is helpful but not required. We provide all necessary training materials.
                Our courses are designed for both beginners and experienced professionals.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">Is certification provided?</p>
              <p className="text-[var(--text-muted)]">
                Yes, all participants receive a Sun Peak Energy certification upon successful completion.
                Our certifications are recognized throughout Nigeria's solar industry.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-xl bg-[var(--card-bg)]">
              <p className="font-bold text-[var(--text)] mb-2">Can I schedule private training?</p>
              <p className="text-[var(--text-muted)]">
                Absolutely! We offer customized training for companies and groups. 
                Contact us to discuss your specific needs and schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;

