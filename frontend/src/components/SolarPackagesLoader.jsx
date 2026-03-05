import React, { useState, useEffect } from 'react';
import { FaSun, FaChevronRight, FaLightbulb, FaBatteryFull, FaLeaf } from 'react-icons/fa';

const SolarPackagesLoader = () => {
  const [currentFaqIndex, setCurrentFaqIndex] = useState(0);

  const faqs = [
    {
      icon: <FaSun className="text-4xl" />,
      question: "How much can I save with solar energy?",
      answer: "Most homeowners save between ₦500,000 - ₦2,500,000 annually on energy costs, depending on system size and location."
    },
    {
      icon: <FaBatteryFull className="text-4xl" />,
      question: "What happens during power outages?",
      answer: "Our systems with battery backup automatically switch to stored solar energy, keeping your home powered 24/7."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      question: "Is solar reliable in Nigeria?",
      answer: "Yes! Nigeria gets over 300 days of sunshine annually. Our systems are designed to work efficiently even in rainy seasons."
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      question: "What's the environmental impact?",
      answer: "One solar system prevents ~50 tons of CO2 emissions over its lifetime, equivalent to planting 800 trees."
    },
    {
      icon: <FaSun className="text-4xl" />,
      question: "How long do solar panels last?",
      answer: "Quality solar panels last 25-30 years. Most systems maintain 80%+ efficiency after 25 years of operation."
    },
    {
      icon: <FaBatteryFull className="text-4xl" />,
      question: "Can I expand my solar system later?",
      answer: "Absolutely! Our modular designs allow you to add panels and batteries as your energy needs grow."
    }
  ];

  // Auto-rotate FAQs every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFaqIndex((prev) => (prev + 1) % faqs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentFaqIndex((prev) => (prev + 1) % faqs.length);
  };

  const currentFaq = faqs[currentFaqIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg)] to-[var(--bg-secondary)] p-6">
      <div className="w-full max-w-2xl">
        {/* Animated Loading Spinner */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full border-4 border-[var(--border)] opacity-20"></div>
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[var(--primary-neon)] animate-spin"
              style={{ animation: 'spin 3s linear infinite' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaSun className="text-5xl text-[var(--primary-neon)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            Loading Your Solar Packages...
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            Please wait while we fetch your personalized solar solutions. This should only take a moment.
          </p>
        </div>

        {/* FAQ Carousel */}
        <div className="bg-[var(--card-bg)] border-2 border-[var(--primary-neon)] rounded-2xl p-8 md:p-12 shadow-lg mb-8">
          {/* FAQ Content */}
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 min-h-[280px]">
            {/* Icon */}
            <div className="flex-shrink-0 text-[var(--primary-neon)] md:mt-2">
              {currentFaq.icon}
            </div>

            {/* FAQ Text */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] mb-3">
                {currentFaq.question}
              </h3>
              <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
                {currentFaq.answer}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Progress Dots */}
            <div className="flex gap-2">
              {faqs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFaqIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentFaqIndex
                      ? 'w-8 bg-[var(--primary-neon)]'
                      : 'w-2 bg-[var(--border)]'
                  }`}
                  aria-label={`Go to FAQ ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[var(--primary-neon)] text-[var(--bg)] hover:shadow-glow transition-shadow duration-300"
              aria-label="Next FAQ"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* FAQ Counter */}
          <p className="text-center text-[var(--text-muted)] text-sm mt-6">
            FAQ {currentFaqIndex + 1} of {faqs.length}
          </p>
        </div>

        {/* Loading Tips */}
        <div className="bg-[var(--primary-neon)]/10 border border-[var(--primary-neon)] rounded-xl p-6 text-center">
          <p className="text-[var(--text-muted)] text-sm">
            💡 <strong>Tip:</strong> Our solar packages are personalized to your energy needs. Browse these helpful FAQs while we compile your perfect solution!
          </p>
        </div>

        {/* Why It Takes Time */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            We use a free backend service for optimal performance. Load time may be 2-5 seconds during peak hours.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SolarPackagesLoader;
