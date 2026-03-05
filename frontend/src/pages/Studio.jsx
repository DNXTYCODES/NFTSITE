import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Studio = () => {
  const { theme } = useTheme();
  const [collections, setCollections] = useState([
    {
      id: 1,
      name: "My First Collection",
      items: 24,
      floorPrice: "1.2 ETH",
      volume: "125.5 ETH",
      created: "Jan 15, 2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Art Experiments",
      items: 12,
      floorPrice: "0.5 ETH",
      volume: "35.2 ETH",
      created: "Feb 20, 2026",
      status: "Active",
    },
  ]);

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            NFT Studio
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Create and manage your NFT collections
          </p>
        </div>
        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
          Create Collection
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Collections", value: "2" },
          { label: "Total Items", value: "36" },
          { label: "Total Volume", value: "160.7 ETH" },
          { label: "Royalties Earned", value: "8.5 ETH" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Collections List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Your Collections
        </h2>

        {collections.map((collection) => (
          <div
            key={collection.id}
            className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {collection.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Items</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {collection.items}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Floor Price
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {collection.floorPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Total Volume
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {collection.volume}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Created
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {collection.created}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 font-medium transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studio;
