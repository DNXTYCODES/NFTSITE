import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Rewards = () => {
  const { theme } = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const rewards = [
    {
      id: 1,
      name: "Trading Rewards",
      amount: "2.5 ETH",
      percentage: 45,
      description: "Earn from active trading",
      icon: "📊",
    },
    {
      id: 2,
      name: "Staking Rewards",
      amount: "1.2 ETH",
      percentage: 22,
      description: "Passive income from staking",
      icon: "🔒",
    },
    {
      id: 3,
      name: "Referral Bonuses",
      amount: "0.8 ETH",
      percentage: 15,
      description: "Refer friends and earn",
      icon: "👥",
    },
    {
      id: 4,
      name: "Collection Holder Rewards",
      amount: "0.5 ETH",
      percentage: 9,
      description: "Rewards for holding NFTs",
      icon: "🏆",
    },
    {
      id: 5,
      name: "Community Rewards",
      amount: "0.4 ETH",
      percentage: 7,
      description: "Participate and earn",
      icon: "🌟",
    },
    {
      id: 6,
      name: "Other",
      amount: "0.1 ETH",
      percentage: 2,
      description: "Miscellaneous rewards",
      icon: "💎",
    },
  ];

  const totalRewards = "5.5 ETH";

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Rewards
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Track and claim your earned rewards
        </p>
      </div>

      {/* Total Rewards Card */}
      <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <p className="text-sm font-medium opacity-90 mb-2">Total Earned</p>
        <h2 className="text-4xl font-bold mb-4">{totalRewards}</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 font-medium transition-colors">
            Claim Rewards
          </button>
          <button className="px-6 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 font-medium transition-colors">
            View History
          </button>
        </div>
      </div>

      {/* Period Selector */}
      <div className="mb-8 flex gap-4">
        {["daily", "weekly", "monthly", "yearly"].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedPeriod === period
                ? "bg-blue-600 text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{reward.icon}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {reward.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {reward.description}
                </p>
              </div>
              <p className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                {reward.amount}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="bg-slate-100 dark:bg-slate-700 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${reward.percentage}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {reward.percentage}% of total
            </p>
          </div>
        ))}
      </div>

      {/* Reward Breakdown Chart */}
      <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Rewards Breakdown
        </h3>
        <div className="space-y-3">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {reward.name}
              </span>
              <span className="text-slate-900 dark:text-white font-semibold">
                {reward.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
