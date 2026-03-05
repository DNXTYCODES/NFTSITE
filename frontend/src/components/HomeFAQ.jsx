import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSolarPanel, FaQuestionCircle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How long does a solar installation take?",
      answer: "Most residential installations take 3-5 days, while commercial projects may take 2-6 weeks depending on system size and complexity."
    },
    {
      question: "What maintenance does solar require?",
      answer: "Solar systems need minimal maintenance. We recommend quarterly panel cleaning and annual professional inspections for optimal performance."
    },
    {
      question: "Can solar power my home 24/7?",
      answer: "Yes! With proper battery storage sizing and energy management, our systems provide uninterrupted power day and night."
    },
    {
      question: "What happens during power outages?",
      answer: "Our systems automatically switch to battery power within milliseconds, keeping essential appliances running seamlessly."
    },
    {
      question: "How much can I save with solar?",
      answer: "Savings depend on energy usage, but most customers reduce electricity bills by 70-100% with payback periods of 3-5 years."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes! We provide flexible payment plans including 12-36 month installment options and partnership with green energy financiers."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center gap-3 text-[var(--primary-neon)] mb-4">
            <FaQuestionCircle className="text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold">Solar Energy FAQs</h2>
          </div>
          <p className="text-xl text-[var(--text-muted)]">
            Answers to common questions about going solar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-[var(--border)] rounded-2xl bg-[var(--card-bg)] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[var(--primary-neon)/10] transition-colors"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-[var(--text)]">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[var(--primary-neon)]" />
                ) : (
                  <FaChevronDown className="text-[var(--primary-neon)]" />
                )}
              </button>
              
              <div 
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-[var(--text-muted)]">
                  {item.answer}
                  {index === 4 && (
                    <div className="mt-4 p-3 bg-[var(--primary-neon)/10] rounded-lg">
                      <p className="text-sm">
                        <span className="font-semibold">Example:</span><br/>
                        <span className="block mt-1">₦150,000/month current bill<br/>
                        → ₦45,000/month with solar<br/>
                        = ₦1.26M annual savings</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-[var(--border)] pt-12">
          <p className="text-[var(--text-muted)] mb-4">
            Still have questions? Chat with our solar experts:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://wa.me/2348134553751"
              className="px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg flex items-center gap-2 hover:shadow-glow"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>
            <a
              href="tel:+2348060771104"
              className="px-6 py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg flex items-center gap-2 hover:bg-[var(--primary-neon)/10]"
            >
              <FaPhoneAlt /> Call +234 813 455 3751
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;