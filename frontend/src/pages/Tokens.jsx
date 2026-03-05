import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Tokens = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const tokens = [
    {
      id: 1,
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,450.00",
      change: "+5.2%",
      marketCap: "$294.5B",
      image: "https://via.placeholder.com/50x50?text=ETH",
    },
    {
      id: 2,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$43,200.00",
      change: "+3.1%",
      marketCap: "$845.2B",
      image: "https://via.placeholder.com/50x50?text=BTC",
    },
    {
      id: 3,
      name: "Polygon",
      symbol: "MATIC",
      price: "$0.85",
      change: "-2.1%",
      marketCap: "$8.2B",
      image: "https://via.placeholder.com/50x50?text=MATIC",
    },
  ];

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Tokens
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Track and manage cryptocurrency tokens
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tokens..."
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tokens Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white">
                Token
              </th>
              <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">
                Price
              </th>
              <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">
                Change
              </th>
              <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">
                Market Cap
              </th>
              <th className="text-center px-4 py-3 font-semibold text-slate-900 dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => (
              <tr
                key={token.id}
                className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={token.image}
                      alt={token.symbol}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {token.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {token.symbol}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-right font-semibold text-slate-900 dark:text-white">
                  {token.price}
                </td>
                <td
                  className={`px-4 py-4 text-right font-semibold ${
                    token.change.startsWith("+")
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {token.change}
                </td>
                <td className="px-4 py-4 text-right text-slate-600 dark:text-slate-400">
                  {token.marketCap}
                </td>
                <td className="px-4 py-4 text-center">
                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tokens;
