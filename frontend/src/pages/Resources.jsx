import React from "react";
import { useTheme } from "../context/ThemeContext";

const Resources = () => {
  const { theme } = useTheme();
  const resources = [
    {
      title: "Getting Started",
      description: "Learn the basics of NFT trading and collecting",
      icon: "📚",
      links: [
        { name: "What are NFTs?", url: "#" },
        { name: "How to Connect Wallet", url: "#" },
        { name: "Making Your First Purchase", url: "#" },
      ],
    },
    {
      title: "Documentation",
      description: "Technical documentation and API references",
      icon: "📖",
      links: [
        { name: "API Documentation", url: "#" },
        { name: "Integration Guide", url: "#" },
        { name: "Smart Contracts", url: "#" },
      ],
    },
    {
      title: "Community",
      description: "Join our community and connect with others",
      icon: "👥",
      links: [
        { name: "Discord", url: "#" },
        { name: "Twitter", url: "#" },
        { name: "Forum", url: "#" },
      ],
    },
    {
      title: "Support",
      description: "Get help with common issues",
      icon: "🆘",
      links: [
        { name: "FAQ", url: "#" },
        { name: "Contact Support", url: "#" },
        { name: "Report Issue", url: "#" },
      ],
    },
  ];

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Resources
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Find guides, documentation, and community support
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
          >
            <div className="text-4xl mb-3">{resource.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {resource.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {resource.description}
            </p>

            {/* Links */}
            <ul className="space-y-2">
              {resource.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.url}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    {link.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
