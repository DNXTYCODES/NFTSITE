import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Discover = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("trending");
  const [filterType, setFilterType] = useState("all");

  // Mock NFT data - replace with actual API calls
  const nfts = [
    {
      id: 1,
      name: "Digital Art #1",
      collection: "Modern Art Collection",
      price: "2.5",
      floorPrice: "1.2",
      image: "https://via.placeholder.com/300x300?text=NFT+1",
      likeCount: 245,
    },
    {
      id: 2,
      name: "Digital Art #2",
      collection: "Modern Art Collection",
      price: "3.0",
      floorPrice: "1.2",
      image: "https://via.placeholder.com/300x300?text=NFT+2",
      likeCount: 189,
    },
    {
      id: 3,
      name: "Digital Art #3",
      collection: "Abstract Series",
      price: "1.8",
      floorPrice: "0.9",
      image: "https://via.placeholder.com/300x300?text=NFT+3",
      likeCount: 432,
    },
    {
      id: 4,
      name: "Digital Art #4",
      collection: "Abstract Series",
      price: "2.2",
      floorPrice: "0.9",
      image: "https://via.placeholder.com/300x300?text=NFT+4",
      likeCount: 156,
    },
  ];

  return (
    <div className="pt-6 pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
          Discover NFTs
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Explore our collection of unique digital assets
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Items</option>
            <option value="art">Digital Art</option>
            <option value="collectibles">Collectibles</option>
            <option value="virtual">Virtual Items</option>
          </select>
        </div>

        <div className="flex-1">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="trending">Trending</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="liked">Most Liked</option>
          </select>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            onClick={() => navigate(`/nft/${nft.id}`)}
            className="rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 cursor-pointer group"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-900 h-64">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all opacity-0 group-hover:opacity-100">
                <svg
                  className="w-5 h-5 text-slate-600 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white truncate mb-1">
                {nft.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate mb-3">
                {nft.collection}
              </p>

              {/* Price Info */}
              <div className="flex justify-between items-end mb-3">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Current Price
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {nft.price} ETH
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Floor
                  </p>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {nft.floorPrice} ETH
                  </p>
                </div>
              </div>

              {/* Like Count */}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{nft.likeCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
