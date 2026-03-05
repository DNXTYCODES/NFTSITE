import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Activity = () => {
  const { theme } = useTheme();
  const [filterType, setFilterType] = useState("all");

  const activities = [
    {
      id: 1,
      type: "sale",
      user: "0x1234...5678",
      action: "bought",
      item: "Digital Art #1",
      price: "2.5 ETH",
      time: "2 hours ago",
      icon: "🛒",
    },
    {
      id: 2,
      type: "transfer",
      user: "0xabcd...efgh",
      action: "transferred",
      item: "Modern Art #42",
      price: "-",
      time: "4 hours ago",
      icon: "📤",
    },
    {
      id: 3,
      type: "listing",
      user: "0x5678...1234",
      action: "listed",
      item: "Abstract Series #15",
      price: "1.8 ETH",
      time: "6 hours ago",
      icon: "📌",
    },
    {
      id: 4,
      type: "offer",
      user: "0xefgh...abcd",
      action: "made an offer on",
      item: "Collectible #99",
      price: "0.95 ETH",
      time: "8 hours ago",
      icon: "💰",
    },
  ];

  const filteredActivities =
    filterType === "all"
      ? activities
      : activities.filter((activity) => activity.type === filterType);

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Activity
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Track all NFT marketplace activities
        </p>
      </div>

      {/* Filter */}
      <div className="mb-8">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Activities</option>
          <option value="sale">Sales</option>
          <option value="listing">Listings</option>
          <option value="transfer">Transfers</option>
          <option value="offer">Offers</option>
        </select>
      </div>

      {/* Activity List */}
      <div className="space-y-3">
        {filteredActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
          >
            {/* Icon */}
            <div className="text-2xl flex-shrink-0">{activity.icon}</div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <p className="text-slate-900 dark:text-white font-medium">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {activity.user}
                  </span>
                  {" " + activity.action + " "}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {activity.item}
                  </span>
                </p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {activity.time}
              </p>
            </div>

            {/* Price */}
            {activity.price !== "-" && (
              <div className="text-right flex-shrink-0">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {activity.price}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Activity;
