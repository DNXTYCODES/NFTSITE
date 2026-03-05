import React from 'react';
import { Link } from 'react-router-dom';

const ReferralTeaser = () => {
  return (
    <section 
      id="referral"
      aria-labelledby="referral-heading"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope
      itemType="https://schema.org/Offer"
    >
      <div className="max-w-7xl mx-auto text-center animate-fadeIn">
        {/* Earnings Badge */}
        <div className="inline-block mb-8 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] backdrop-blur-sm">
          <span className="text-2xl font-bold text-[var(--primary-neon)] block">
            ₦10,000+
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            Per Successful Referral
          </span>
        </div>

        <h2 
          id="referral-heading"
          className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text)]"
          itemProp="name"
        >
          Empower Nigeria, Earn Rewards
        </h2>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-xl text-[var(--text-muted)] mb-6" itemProp="description">
            Join SunPeak's referral network and earn cash for every solar installation 
            referral. Help build Nigeria's sustainable energy future while earning.
          </p>

          <ul className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              'Instant bank transfers',
              'Real-time tracking',
              'Unlimited earnings',
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-[var(--text)] px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--border)]"
              >
                <svg 
                  className="w-5 h-5 text-[var(--primary-neon)]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          // to="/referral-program"
           href="https://wa.me/2348134553751"
          className="inline-block px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold text-lg hover:shadow-[0_0_25px_-5px_var(--primary-neon)] hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[var(--primary-neon)]"
          aria-label="Join the SunPeak Referral Program"
          itemProp="url"
        >
          Start Earning Today →
        </a>

        {/* Schema Microdata */}
        <div itemScope itemProp="offeredBy" itemType="https://schema.org/Organization" className="hidden">
          <meta itemProp="name" content="SunPeak Energy Solutions"/>
          <meta itemProp="email" content="referrals@sunpeak.ng"/>
        </div>
      </div>
    </section>
  );
};

export default ReferralTeaser;