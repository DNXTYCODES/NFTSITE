import React from "react";
import {
  FaSolarPanel,
  FaTools,
  FaLightbulb,
  FaHome,
  FaBuilding,
  FaClipboardCheck,
  FaVideo,
} from "react-icons/fa";

const Services = () => {
  const installationProcess = [
    {
      step: 1,
      title: "Energy Audit",
      desc: "Detailed analysis of your power needs",
    },
    {
      step: 2,
      title: "System Design",
      desc: "Customized solar solution planning",
    },
    {
      step: 3,
      title: "Approval & Permits",
      desc: "Handling all regulatory requirements",
    },
    { step: 4, title: "Installation", desc: "Professional equipment setup" },
    { step: 5, title: "Commissioning", desc: "System testing & activation" },
    { step: 6, title: "Support", desc: "24/7 monitoring & maintenance" },
  ];

  return (
    <section
      className="bg-[var(--bg)] min-h-screen"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
            Comprehensive Solar Solutions
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            End-to-end solar services from design to maintenance
          </p>
        </div>

        {/* Solar Installation Services */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaSolarPanel className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Solar Installation
            </h2>
          </div>

          
          <div className="flex items-center gap-4 mb-8">
            <FaVideo className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">
              CCTV/Camera Installation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex items-center gap-2 mb-4">
                <FaHome className="text-[var(--primary-neon)]" />
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  Residential Systems
                </h3>
              </div>
              <p className="text-[var(--text-muted)] mb-6">
                Complete home solar solutions for 24/7 power supply:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "1-5kVA Systems",
                  "Battery Backup",
                  "Net Metering",
                  "Smart Monitoring",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[var(--text)]"
                  >
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <div className="flex items-center gap-2 mb-4">
                <FaBuilding className="text-[var(--primary-neon)]" />
                <h3 className="text-2xl font-bold text-[var(--text)]">
                  Commercial Systems
                </h3>
              </div>
              <p className="text-[var(--text-muted)] mb-6">
                Industrial-scale solar solutions for businesses:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "10-500kVA Systems",
                  "Energy Storage",
                  "Load Management",
                  "Diesel Hybrid",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[var(--text)]"
                  >
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaClipboardCheck className="text-[var(--primary-neon)]" />
            Our Installation Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationProcess.map((step, index) => (
              <div
                key={index}
                className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-neon)] flex items-center justify-center text-[var(--bg)]">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance & Repairs */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaTools className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Maintenance & Repairs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                Preventive Maintenance
              </h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Quarterly system health checks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Panel cleaning & optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Battery performance testing
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                Repair Services
              </h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  24/7 emergency support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Component replacement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Warranty claims assistance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Solutions */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <FaLightbulb className="text-[var(--primary-neon)] text-4xl" />
            <h2 className="text-3xl font-bold text-[var(--text)]">
              Custom Solar Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                Specialized Systems
              </h3>
              <div className="grid grid-cols-2 gap-4 text-[var(--text-muted)]">
                {[
                  "Solar Water Pumping",
                  "Street Lighting",
                  "Telecom Towers",
                  "EV Charging",
                  "Agricultural",
                  "Marine",
                ].map((system, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[var(--primary-neon)]">⚙️</span>
                    {system}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                Tailored Features
              </h3>
              <ul className="space-y-4 text-[var(--text-muted)]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Hybrid system design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Custom monitoring solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--primary-neon)]">•</span>
                  Scalable energy storage
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Ready to Go Solar?
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Get a personalized system design and quote from our certified solar
            engineers
          </p>
          <button className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold hover:shadow-glow transition-all">
            <a href="tel:+2348134553751">Request Free Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
