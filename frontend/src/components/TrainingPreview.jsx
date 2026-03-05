import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const TrainingPreview = () => {
  const upcomingClasses = [
    // { date: 'October 15-30, 2024', location: 'Lagos Mainland', type: 'Installation Certification' },
    // { date: 'November 5-10, 2024', location: 'Abuja Central', type: 'Maintenance Technician' },
    { date: 'To be announced', location: 'Benin', type: 'Sales Professional' }
  ];

  const courses = [
    {
      title: 'Solar Installation Certification',
      description: '6-week hands-on training with NERC accreditation',
      duration: '42 hours',
      image: assets.trainingimg1,
      videoId: 'youtube_video_id_1',
      gallery: [
        assets.trainingimg1,
        assets.trainingimg2,
        // assets.trainingimg3,
      ],
      icon: (
        <svg className="w-8 h-8 text-[var(--primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: 'Solar Maintenance Technician',
      description: 'Advanced troubleshooting and system maintenance',
      duration: '3 weeks',
      image: assets.trainingimg2,
      videoId: 'youtube_video_id_2',
      gallery: [
        // assets.trainingimg4,
        // assets.trainingimg5,
        // assets.trainingimg6,
      ],
      icon: (
        <svg className="w-8 h-8 text-[var(--primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: 'Solar Sales Professional',
      description: 'Technical sales and customer engagement strategies',
      duration: '2 weeks',
      image: '/training/sales-training.jpg',
      videoId: 'youtube_video_id_3',
      gallery: [
        assets.trainingimg7,
      ],
      icon: (
        <svg className="w-8 h-8 text-[var(--primary-neon)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      aria-labelledby="training-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/EducationalOccupationalProgram"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="training-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
          itemProp="name"
        >
          Professional Solar Training
        </h2>

        {/* Upcoming Classes Section */}
        <div className="mb-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-6">Upcoming Sessions</h3>
          <div className="grid gap-4">
            {upcomingClasses.map((cls, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-[var(--border)] flex items-center justify-between"
              >
                <div>
                  <p className="text-[var(--primary-neon)] font-medium">{cls.date}</p>
                  <p className="text-[var(--text-muted)]">{cls.type} - {cls.location}</p>
                </div>
                <button className="px-4 py-2 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)] hover:text-[var(--bg)] transition-colors duration-300">
                  <a  href="https://wa.me/2348134553751">
                  Inquiry
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Training Gallery Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-8">Past Class Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.flatMap(course => course.gallery).map((img, index) => (
              <div key={index} className="relative group aspect-square">
                <img
                  src={img}
                  alt="Solar training session"
                  className="w-full h-full object-cover rounded-xl border border-[var(--border)] hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[var(--primary-neon)/20] opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemProp="hasCourseInstance"
              itemType="https://schema.org/CourseInstance"
            >
              <div className="mb-6">
                {course.videoId ? (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${course.videoId}`}
                      title={`${course.title} Training Preview`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={course.image}
                    alt={`${course.title} training`}
                    className="w-full h-48 object-cover rounded-lg border border-[var(--border)]"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="flex flex-col h-full">
                <div className="mb-6 text-[var(--primary-neon)]">
                  {course.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-4 text-[var(--text)]"
                  itemProp="courseName"
                >
                  {course.title}
                </h3>
                <p 
                  className="mb-6 text-[var(--text-muted)] flex-grow"
                  itemProp="description"
                >
                  {course.description}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-[var(--primary-neon)]">
                      {course.duration}
                    </span>
                  </div>
                  <Link
                    to="/training-enroll"
                    className="w-full px-6 py-3 border-2 border-[var(--primary-neon)] bg-[var(--primary-neon)/10] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)] hover:text-[var(--bg)] transition-colors duration-300 font-medium text-center"
                    aria-label={`Enroll in ${course.title}`}
                    itemProp="url"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div> */}

        {/* Full Curriculum CTA */}
        {/* <div className="text-center mt-12">
          <Link
            to="/training-programs"
            className="inline-block px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold text-lg hover:shadow-[0_0_25px_-5px_var(--primary-neon)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[var(--primary-neon)]"
            aria-label="View all training programs"
          >
            View Full Curriculum →
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default TrainingPreview;