import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const whatsappNumber = "+2348134553751";
  const whatsappMessage =
    "Hi SunPeak! I would like to know more about your solar solutions.";
  const phoneNumber = "+2348134553751";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-[var(--card-bg)] rounded-2xl shadow-2xl max-w-md w-full border border-[var(--border)] animate-fadeIn">
          <div className="p-8">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="float-right text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
              aria-label="Close contact modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-[var(--text)] mb-2 clear-right">
              Get in Touch With Us
            </h3>
            <p className="text-[var(--text-muted)] mb-8">
              Choose how you'd like to contact SunPeak today
            </p>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Contact SunPeak via WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.139 7.592l-2.27 6.994 7.153-2.287c2.2 1.186 4.662 1.811 7.223 1.811 9.738 0 17.683-7.316 17.683-16.29a16.094 16.094 0 00-4.117-10.769 16.108 16.108 0 00-11.635-4.85" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[var(--primary-neon)] hover:bg-[var(--primary-neon)/80] text-[var(--secondary-dark)] rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Call SunPeak"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>

            <p className="text-center text-sm text-[var(--text-muted)] mt-6">
              Available Monday - Friday, 8AM - 6PM WAT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    assets.solarteam,
    assets.solar7,
    //   assets.solar5,
    //    assets.cert
  ];
  const altTexts = [
    "SunPeak solar installation team working in Benin, Edo Nigeria",
    "Professional solar panel installation by SunPeak in Benin City",
    "High-quality solar products available at SunPeak Benin",
    "Solar power system maintenance services in Edo Nigeria",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={altTexts[index]}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-dark)] via-[var(--secondary-dark)/70] to-transparent" />
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-[var(--bg)] transition-colors duration-300"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content="SunPeak Solar Services" />
      <meta
        itemProp="address"
        content="27 First East Circular Road, Benin, Edo, Nigeria"
      />
      <meta itemProp="telephone" content="+2348134553751" />

      <BackgroundSlideshow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-[var(--primary-neon)]">
                Solar Services in Benin
              </span>
              <br />
              <span className="text-[var(--text)]">
                Affordable & Professional Solar Solutions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl">
              Professional Solar Installation | Premium Solar Products |
              Certified Training | Instant Cost Estimates
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg hover:shadow-[0_0_30px_-5px_var(--primary-neon)] transition-all duration-300 font-bold text-lg"
                aria-label="Contact us now via WhatsApp or phone"
              >
                Contact Us Now
              </button>
              <Link
                to="/solarcalculator"
                className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-all duration-300 font-bold text-lg"
                aria-label="Get a free solar quote with our estimator tool"
              >
                Get Free Solar Quote
              </Link>
              <Link
                to="/ourwork"
                className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-all duration-300 font-bold text-lg hidden sm:block"
                aria-label="Check out our solar installation portfolio and past work"
              >
                Check Out Our Work
              </Link>
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-3 gap-4 mt-12 max-w-xl"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              {[
                { value: "10MW+", label: "Installed", rating: "10000" },
                { value: "24/7", label: "Support", rating: "5" },
                { value: "5Y", label: "Warranty", rating: "5" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] backdrop-blur-sm"
                  itemProp="itemReviewed"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <meta itemProp="name" content="Solar Installation Service" />
                  <div
                    className="text-2xl font-bold text-[var(--primary-neon)]"
                    itemProp="ratingValue"
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm text-[var(--text-muted)]"
                    itemProp="reviewCount"
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xl aspect-square bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-xl p-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-[var(--primary-neon)]/10 rounded-full animate-pulse" />
              </div>
              <img
                src={assets.solar4}
                alt="High-efficiency solar panels available in Benin, Nigeria"
                className="relative z-10 w-full h-full object-contain animate-float"
                itemProp="image"
              />
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center lg:justify-start">
          <Link
            to="/training"
            className="inline-flex items-center gap-2 text-[var(--primary-dark)] dark:text-[var(--primary-neon)] hover:text-[var(--primary-darker)] dark:hover:text-[var(--primary-neon)/80] font-medium transition-colors"
            aria-label="Explore solar training courses"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M6.5 10.5h7M6.5 13.5h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            View Solar Training Programs
          </Link>
          <a
            href="#referral"
            className="inline-flex items-center gap-2 text-[var(--primary-dark)] dark:text-[var(--primary-neon)] hover:text-[var(--primary-darker)] dark:hover:text-[var(--primary-neon)/80] font-medium transition-colors"
            aria-label="Learn about our solar referral program"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            Join Our Referral Program
          </a>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const BackgroundSlideshow = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = [assets.solarteam, assets.solar7, assets.solar5, assets.solar8];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img
//             src={slide}
//             alt="Solar installation"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary-dark)] via-[var(--secondary-dark)/70] to-transparent" />
//         </div>
//       ))}
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="min-h-screen relative overflow-hidden bg-[var(--bg)] transition-colors duration-300">
//       <BackgroundSlideshow />

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
//           {/* Left Content */}
//           <div className="lg:w-1/2 text-center lg:text-left space-y-8">
//             <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//               <span className="text-[var(--primary-neon)]">Solar Energy Solutions</span><br/>
//               <span className="text-[var(--text)]">For A Brighter Nigeria</span>
//             </h1>

//             <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl">
//               Professional Installation | Premium Products | Certified Training | Sustainable Future
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Link
//                 to="/solarcalculator"
//                 className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg hover:shadow-[0_0_30px_-5px_var(--primary-neon)] transition-all duration-300 font-bold text-lg"
//               >
//                 Get Free Quote
//               </Link>
//               <Link
//                 to="/collection"
//                 className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg hover:bg-[var(--primary-neon)/10] transition-all duration-300 font-bold text-lg"
//               >
//                 View Products
//               </Link>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">
//               {[
//                 { value: '10MW+', label: 'Installed' },
//                 { value: '24/7', label: 'Support' },
//                 { value: '5Y', label: 'Warranty' },
//               ].map((stat, index) => (
//                 <div key={index} className="p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)] backdrop-blur-sm">
//                   <div className="text-2xl font-bold text-[var(--primary-neon)]">{stat.value}</div>
//                   <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="lg:w-1/2 flex justify-center">
//             <div className="relative w-full max-w-xl aspect-square bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-xl p-8">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-3/4 h-3/4 bg-[var(--primary-neon)]/10 rounded-full animate-pulse" />
//               </div>
//               <img
//                 src={assets.solar6}
//                 alt="Solar panel"
//                 className="relative z-10 w-full h-full object-contain animate-float"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mt-24">
//           <div className="p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-lg">
//             <h3 className="text-2xl font-bold text-[var(--primary-neon)] mb-4">
//               Professional Training
//             </h3>
//             <p className="text-[var(--text-muted)] mb-6">
//               Become a certified solar technician through our hands-on training programs
//             </p>
//             <Link
//               to="/training"
//               className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
//             >
//               View Courses
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
//               </svg>
//             </Link>
//           </div>

//           <div className="p-8 bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] backdrop-blur-lg">
//             <h3 className="text-2xl font-bold text-[var(--primary-neon)] mb-4">
//               Referral Benefits
//             </h3>
//             <p className="text-[var(--text-muted)] mb-6">
//               Earn rewards for every successful referral. Join our partner program today
//             </p>
//             {/* <Link
//               // to="/referral"
//               to="#referral"
//               className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
//               > */}
//               <a href="#referral"
//                 className="inline-flex items-center gap-2 text-[var(--primary-neon)] hover:text-[var(--primary-neon)/80]"
//               >

//               Learn More
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
//               </svg>
//               </a>
//             {/* </Link> */}
//           </div>
//         </div>
//       </div>

//       {/* Brand Partnerships */}
//       {/* <div className="mt-24 border-t border-[var(--border)] pt-12">
//         <div className="flex flex-wrap justify-center gap-8 opacity-90 hover:opacity-100 transition-opacity">
//           {[assets.brand1, assets.brand2, assets.brand3, assets.brand4].map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt="Solar partner brand"
//               className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
//             />
//           ))}
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default HeroSection;
