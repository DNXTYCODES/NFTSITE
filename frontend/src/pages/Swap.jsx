import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Swap = () => {
  const { theme } = useTheme();
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("MATIC");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const tokens = ["ETH", "BTC", "MATIC", "USDC", "DAI", "USDT"];

  const handleSwap = () => {
    // TODO: Implement swap functionality
    alert(`Swapping ${fromAmount} ${fromToken} to ${toToken}`);
  };

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Swap
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Exchange tokens instantly with best rates
        </p>
      </div>

      {/* Swap Container */}
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 space-y-4">
          {/* From */}
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
              From
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0.0"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tokens.map((token) => (
                  <option key={token} value={token}>
                    {token}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                setFromToken(toToken);
                setToToken(fromToken);
              }}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m0 0l4 4m10-4v12m0 0l4-4m0 0l-4-4"
                />
              </svg>
            </button>
          </div>

          {/* To */}
          <div>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 block">
              To
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                placeholder="0.0"
                readOnly
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tokens.map((token) => (
                  <option key={token} value={token}>
                    {token}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Rate Info */}
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-sm">
            <p className="text-slate-600 dark:text-slate-400">
              1 {fromToken} = 1000 {toToken}
            </p>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swap;
