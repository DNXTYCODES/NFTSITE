import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Collections = () => {
  const { theme } = useTheme();
  const [sortBy, setSortBy] = useState("trending");

  const collections = [
    {
      id: 1,
      name: "Modern Art Collection",
      creator: "Alex Studio",
      image: "https://via.placeholder.com/300x300?text=Collection+1",
      floorPrice: "1.2",
      volume: "125.5",
      items: 2400,
      owners: 1200,
    },
    {
      id: 2,
      name: "Abstract Series",
      creator: "Creative Labs",
      image: "https://via.placeholder.com/300x300?text=Collection+2",
      floorPrice: "0.9",
      volume: "98.3",
      items: 1850,
      owners: 950,
    },
    {
      id: 3,
      name: "Digital Portraits",
      creator: "Portrait Masters",
      image: "https://via.placeholder.com/300x300?text=Collection+3",
      floorPrice: "2.1",
      volume: "245.7",
      items: 500,
      owners: 320,
    },
  ];

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Collections
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Browse curated collections from talented creators
        </p>
      </div>

      {/* Sort */}
      <div className="mb-8 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="trending">Trending</option>
          <option value="newest">Newest</option>
          <option value="volume">By Volume</option>
          <option value="items">Most Items</option>
        </select>
      </div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 h-48">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                {collection.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                by {collection.creator}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Floor Price
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {collection.floorPrice} ETH
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Volume
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {collection.volume} ETH
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Items
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {collection.items.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                    Owners
                  </p>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {collection.owners.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* View Button */}
              <button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
