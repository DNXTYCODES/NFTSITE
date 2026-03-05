import React from 'react';

const USPsection = () => {
  const usps = [
    {
      title: 'Certified Installers',
      description: 'NERC-certified technicians with 5+ years average experience',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Affordable Solutions',
      description: 'Flexible payment plans and government subsidy guidance',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock maintenance and emergency response',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: '5-year workmanship warranty on all installations',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      aria-labelledby="usp-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          id="usp-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--text)] animate-fadeIn"
          itemProp="name"
        >
          Why Choose SunPeak?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all hover:translate-y-[-4px] animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="region"
              aria-labelledby={`usp-${index}-title`}
              itemProp="description"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 text-[var(--primary-neon)] p-2 rounded-lg bg-[var(--primary-neon)/10]">
                  {usp.icon}
                </div>
                <h3 
                  id={`usp-${index}-title`}
                  className="text-xl font-semibold mb-2 text-[var(--text)]"
                  itemProp="makesOffer"
                >
                  {usp.title}
                </h3>
                <p className="text-[var(--text-muted)]">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Schema Microdata */}
        <div itemScope itemProp="location" itemType="https://schema.org/Place" className="hidden">
          <meta itemProp="name" content="Nigeria"/>
          <meta itemProp="address" content="Lagos, Nigeria"/>
        </div>
      </div>
    </section>
  );
};

export default USPsection;