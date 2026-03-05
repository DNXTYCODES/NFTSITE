import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp, FaEnvelopeOpenText } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)/70] rounded-2xl border border-[var(--border)] backdrop-blur-lg p-6 sm:p-8">
        {/* Schema-rich heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8 text-center">
          Contact Sun Peak Energy Solutions
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-semibold text-[var(--primary-neon)] mb-6 flex items-center gap-3">
                  <MdOutlineSupportAgent className="text-3xl" />
                  Nigeria Solar Energy Experts
                </h2>

                <div className="space-y-4 text-[var(--text)]">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-[var(--primary-neon)] mt-1" />
                    <div>
                      <h3 className="font-semibold">Headquarters</h3>
                      <p itemProp="address" className="text-[var(--text-muted)]">
                        27 first east circular road opposite salvation army before esigie junction<br/>
                        Benin, Edo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaPhoneAlt className="text-[var(--primary-neon)] mt-1" />
                    <div>
                      <h3 className="font-semibold">Solar Support</h3>
                      <p className="text-[var(--text-muted)]">
                        Tel: <a href="tel:+" itemProp="telephone" className="hover:text-[var(--primary-neon)]">+234 813 455 3751</a><br/>
                        WhatsApp: <a href="https://wa.me/2348134553751" className="hover:text-[var(--primary-neon)]">+234 813 455 3751</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaClock className="text-[var(--primary-neon)] mt-1" />
                    <div>
                      <h3 className="font-semibold">Working Hours</h3>
                      <p className="text-[var(--text-muted)]" itemProp="openingHours">
                        Mon-Sat: 8:00 AM - 6:00 PM<br/>
                        Sunday: Emergency Support Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                  Serving All Nigeria
                </h3>
                <div className="grid grid-cols-2 gap-3 text-[var(--text-muted)]">
                  {['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan', 'Enugu'].map(city => (
                    <div key={city} className="flex items-center gap-2">
                      <span className="text-[var(--primary-neon)]">▹</span>
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6 h-fit">
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">
              Get Your Solar Quote
            </h2>
            
            <form className="space-y-4" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border)] rounded-lg text-[var(--text)] focus:border-[var(--primary-neon)] focus:ring-2 focus:ring-[var(--primary-neon)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border)] rounded-lg text-[var(--text)]"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border)] rounded-lg text-[var(--text)]"
                >
                  <option value="Installation">Solar Installation</option>
                  <option value="Maintenance">System Maintenance</option>
                  <option value="Training">Solar Training</option>
                  <option value="Products">Product Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-transparent border border-[var(--border)] rounded-lg text-[var(--text)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] font-semibold rounded-lg hover:shadow-glow transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-12 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">
            Solar Support FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can I get a solar installation quote?",
                answer: "We provide preliminary quotes within 24 hours of receiving your information."
              },
              {
                question: "Do you offer maintenance packages?",
                answer: "Yes, we offer comprehensive maintenance plans with 24/7 support."
              },
              {
                question: "What areas in Nigeria do you serve?",
                answer: "We cover all 36 states with certified installers in major cities."
              },
              {
                question: "Can I finance my solar system?",
                answer: "We offer flexible payment plans and partner with local banks for financing."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-6"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2" itemProp="name">
                  {faq.question}
                </h3>
                <p 
                  className="text-[var(--text-muted)]"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{faq.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;