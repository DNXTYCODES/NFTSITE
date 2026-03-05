import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Support = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("faq");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "How do I connect my wallet?",
      answer:
        "Click the Connect Wallet button in the top right of the navbar. Select your preferred wallet provider and follow the authentication steps.",
    },
    {
      question: "What are gas fees?",
      answer:
        "Gas fees are transaction costs on the blockchain. They vary based on network congestion. You can view estimated fees before confirming transactions.",
    },
    {
      question: "How do I create an NFT?",
      answer:
        "Go to the Studio section, click Create Collection, upload your artwork, set properties, and mint your NFTs. Ensure you have sufficient ETH for gas fees.",
    },
    {
      question: "Can I cancel a transaction?",
      answer:
        "Once a transaction is submitted to the blockchain, it cannot be cancelled. However, you can increase the gas price to speed up confirmation.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert("Thank you for contacting support. We'll get back to you soon!");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Support
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Get help with your questions and issues
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-slate-700">
        {["faq", "contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* FAQ Tab */}
      {activeTab === "faq" && (
        <div className="max-w-2xl space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 group cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <summary className="font-semibold text-slate-900 dark:text-white flex items-center justify-between">
                {faq.question}
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      )}

      {/* Contact Tab */}
      {activeTab === "contact" && (
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                Email
              </label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                Subject
              </label>
              <input
                type="text"
                value={contactForm.subject}
                onChange={(e) =>
                  setContactForm({ ...contactForm, subject: e.target.value })
                }
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
                Message
              </label>
              <textarea
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                required
                rows="6"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Support;
