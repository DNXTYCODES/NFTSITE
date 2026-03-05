import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Drops = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("upcoming");

  const drops = {
    upcoming: [
      {
        id: 1,
        name: "Genesis Collection",
        creator: "Future Studios",
        date: "March 15, 2026",
        time: "14:00 UTC",
        image: "https://via.placeholder.com/400x300?text=Drop+1",
        description: "Limited edition digital art collection",
      },
      {
        id: 2,
        name: "Metaverse Land",
        creator: "Virtual Worlds",
        date: "March 22, 2026",
        time: "10:00 UTC",
        image: "https://via.placeholder.com/400x300?text=Drop+2",
        description: "Exclusive virtual real estate",
      },
    ],
    live: [
      {
        id: 3,
        name: "Pixel Heroes",
        creator: "Game Dev Lab",
        date: "In Progress",
        timeRemaining: "2h 30m",
        image: "https://via.placeholder.com/400x300?text=Drop+3",
        description: "Collectible gaming characters",
      },
    ],
    past: [
      {
        id: 4,
        name: "Abstract Dreams",
        creator: "Art Collective",
        date: "March 1, 2026",
        sold: "2,450 / 5,000",
        image: "https://via.placeholder.com/400x300?text=Drop+4",
        description: "Abstract digital artwork",
      },
    ],
  };

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          NFT Drops
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Discover upcoming and live NFT releases
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-slate-700">
        {["upcoming", "live", "past"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600 dark:text-blue-400"
                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Drops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drops[activeTab].map((drop) => (
          <div
            key={drop.id}
            className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 group"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 h-48">
              <img
                src={drop.image}
                alt={drop.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                {drop.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                by {drop.creator}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {drop.description}
              </p>

              {/* Info */}
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {drop.date}
                </p>
                {drop.time && (
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {drop.time}
                  </p>
                )}
                {drop.timeRemaining && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    {drop.timeRemaining} remaining
                  </p>
                )}
                {drop.sold && (
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {drop.sold}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                {activeTab === "upcoming" && "Notify Me"}
                {activeTab === "live" && "Mint Now"}
                {activeTab === "past" && "View Collection"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drops;
