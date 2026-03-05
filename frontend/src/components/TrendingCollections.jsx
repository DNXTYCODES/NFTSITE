import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const TrendingCollections = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("nfts");

  const collections = [
    {
      id: 1,
      name: "CryptoPunks",
      image:
        "https://i2c.seadn.io/ethereum/41f13fa2cbb64d908a9add3243345bbc/f092b6ebf5bbfaca498a6135cad5a8/4bf092b6ebf5bbfaca498a6135cad5a8.png?h=40&w=40",
      floor: "29.85",
      floorCurrency: "ETH",
      change: "0",
      isPositive: false,
      isVerified: true,
      chain: "ethereum",
    },
    {
      id: 2,
      name: "Pudgy Penguins",
      image:
        "https://i2c.seadn.io/collection/pudgypenguins/image/f489fb69fd11886b468c0f7ff1376c/cdf489fb69fd11886b468c0f7ff1376c.png?h=40&w=40",
      floor: "4.43",
      floorCurrency: "ETH",
      change: "1",
      isPositive: true,
      isVerified: true,
      chain: "ethereum",
    },
    {
      id: 3,
      name: "Courtyard.io",
      image:
        "https://i2c.seadn.io/polygon/90865069ed5a4ef382db799430e09a56/a70379eaf770c85beae83b89c7a632/3ea70379eaf770c85beae83b89c7a632.png?h=40&w=40",
      floor: "2.70",
      floorCurrency: "USDC",
      change: "-5.5",
      isPositive: false,
      isVerified: true,
      chain: "polygon",
    },
    {
      id: 4,
      name: "Moonbirds",
      image:
        "https://i2c.seadn.io/admin-uploads/8a589d8d6f4e5ffd1200a47be25783/678a589d8d6f4e5ffd1200a47be25783.png?h=40&w=40",
      floor: "1.09",
      floorCurrency: "ETH",
      change: "12",
      isPositive: true,
      isVerified: true,
      chain: "ethereum",
    },
    {
      id: 5,
      name: "Bored Ape Yacht Club",
      image:
        "https://i2c.seadn.io/collection/boredapeyachtclub/image/1a09c26b1c30427b26944c47fc7bb9/d81a09c26b1c30427b26944c47fc7bb9.png?h=40&w=40",
      floor: "5.99",
      floorCurrency: "ETH",
      change: "0.5",
      isPositive: true,
      isVerified: true,
      chain: "ethereum",
    },
  ];

  const chainColors = {
    ethereum: "#627EEA",
    polygon: "#6C00F6",
  };

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-slate-900 border-slate-800"
          : "bg-slate-50 border-slate-200"
      } border rounded-lg transition-colors duration-300`}
    >
      {/* Header with Tabs */}
      <div
        className={`${
          theme === "dark" ? "border-slate-800" : "border-slate-200"
        } border-b p-4 transition-colors duration-300`}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("nfts")}
              className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                activeTab === "nfts"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white border border-blue-500"
                    : "bg-blue-100 text-blue-900 border border-blue-300"
                  : theme === "dark"
                    ? "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              <svg
                aria-label="Auto Awesome Mosaic"
                className="fill-current"
                fill="currentColor"
                height="16"
                role="img"
                viewBox="0 -960 960 960"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M440-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v720Zm-80-80v-560H200v560h160Zm160-320v-320h240q33 0 56.5 23.5T840-760v240H520Zm80-80h160v-160H600v160Zm-80 480v-320h320v240q0 33-23.5 56.5T760-120H520Zm80-80h160v-160H600v160ZM360-480Zm240-120Zm0 240Z" />
              </svg>
              NFTs
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                activeTab === "tokens"
                  ? theme === "dark"
                    ? "bg-blue-600 text-white border border-blue-500"
                    : "bg-blue-100 text-blue-900 border border-blue-300"
                  : theme === "dark"
                    ? "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
              }`}
            >
              <svg
                aria-label="Toll"
                className="fill-current"
                fill="currentColor"
                height="16"
                role="img"
                viewBox="0 -960 960 960"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M600-160q-134 0-227-93t-93-227q0-134 93-227t227-93q134 0 227 93t93 227q0 134-93 227t-227 93Zm-320-10q-106-28-173-114T40-480q0-110 67-196t173-114v84q-72 25-116 87t-44 139q0 77 44 139t116 87v84Zm320-310Zm0 240q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z" />
              </svg>
              Tokens
            </button>
          </div>
          <a
            href="/collections"
            className={`inline-flex items-center justify-center font-medium px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
              theme === "dark"
                ? "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 hover:border-slate-600"
                : "bg-slate-200 hover:bg-slate-300 text-slate-900 border border-slate-300 hover:border-slate-400"
            }`}
          >
            View all
          </a>
        </div>

        {/* Collection Headers */}
        <div className="flex justify-between px-2">
          <span
            className={`text-xs font-mono uppercase font-semibold ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Collection
          </span>
          <span
            className={`text-xs font-mono uppercase font-semibold ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Floor
          </span>
        </div>
      </div>

      {/* Collections List */}
      <div className="divide-y divide-slate-800 dark:divide-slate-800">
        {collections.map((collection) => (
          <a
            key={collection.id}
            href={`/collection/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={`flex justify-between items-center p-4 transition-all duration-200 cursor-pointer ${
              theme === "dark" ? "hover:bg-slate-800/50" : "hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0 max-w-[65%]">
              {/* Collection Image */}
              <div className="relative flex-shrink-0 w-10 h-10">
                <img
                  alt={collection.name}
                  src={collection.image}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="absolute inset-0 inset-shadow-border rounded"></div>
                {/* Chain Badge */}
                <div className="flex items-center justify-center absolute overflow-hidden right-[-3px] bottom-[-3px] w-4 h-4 rounded p-0 cursor-pointer">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    {collection.chain === "ethereum" ? (
                      <g fill="none" fillRule="nonzero">
                        <rect
                          fill="#627EEA"
                          height="24"
                          rx="0"
                          width="24"
                        ></rect>
                        <g fill="#FFF">
                          <path
                            d="M11.998 3v6.652l5.623 2.513z"
                            fillOpacity="0.602"
                          ></path>
                          <path d="m11.998 3-5.623 9.165 5.623-2.512z"></path>
                          <path
                            d="M11.998 16.476v4.52l5.627-7.784z"
                            fillOpacity="0.602"
                          ></path>
                          <path d="M11.998 20.996v-4.52l-5.623-3.264z"></path>
                          <path
                            d="m11.998 15.43 5.623-3.265L12 9.654z"
                            fillOpacity="0.2"
                          ></path>
                          <path
                            d="m6.375 12.165 5.623 3.265V9.654z"
                            fillOpacity="0.602"
                          ></path>
                        </g>
                      </g>
                    ) : (
                      <g fill="none" fillRule="nonzero">
                        <rect
                          fill="#6C00F6"
                          height="24"
                          rx="0"
                          width="24"
                        ></rect>
                        <path
                          d="M10.27 9.989 8.97 9.234l-3.896 2.263v4.51l3.896 2.256 3.896-2.255V8.993l2.162-1.252 2.162 1.252v2.504l-2.162 1.252-1.299-.754v2.006l1.299.755 3.896-2.255V7.99l-3.896-2.256-3.896 2.255v7.015L8.97 16.257l-2.162-1.252v-2.512l2.162-1.252 1.299.754z"
                          fill="#FFF"
                        ></path>
                      </g>
                    )}
                  </svg>
                </div>
              </div>

              {/* Collection Info */}
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span
                    className={`text-sm font-normal truncate ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {collection.name}
                  </span>
                  {collection.isVerified && (
                    <svg
                      aria-label="Verified"
                      className="w-4 h-4 flex-shrink-0 text-blue-500"
                      fill="currentColor"
                      height="24"
                      role="img"
                      viewBox="0 -960 960 960"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Floor Price */}
            <div className="flex flex-col items-end gap-1 ml-4">
              <div className="flex items-center gap-1">
                <span
                  className={`font-mono text-sm font-semibold ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {collection.floor}
                </span>
                <span
                  className={`font-mono text-sm ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {collection.floorCurrency}
                </span>
              </div>
              <span
                className={`font-mono text-sm font-semibold ${
                  collection.isPositive
                    ? "text-green-500"
                    : collection.change === "0"
                      ? theme === "dark"
                        ? "text-slate-400"
                        : "text-slate-600"
                      : "text-red-500"
                }`}
              >
                {collection.change !== "0" &&
                  (collection.isPositive ? "+" : "")}
                {collection.change}%
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollections;
