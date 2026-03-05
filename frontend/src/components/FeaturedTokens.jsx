import React from "react";
import { useTheme } from "../context/ThemeContext";

const FeaturedTokens = () => {
  const { theme } = useTheme();

  const tokens = [
    {
      id: 1,
      name: "USELESS COIN",
      symbol: "USELESS",
      image: "https://i2c.seadn.io/base/d4d381d6392048f9a7f0bcd630673dee/3514c2baf1a29a610c63dee91807b8/3f3514c2baf1a29a610c63dee91807b8.jpeg?h=300&w=600",
      logo: "https://i2c.seadn.io/base/d4d381d6392048f9a7f0bcd630673dee/f22aa47803cd082799a0b74f7bc847/4ef22aa47803cd082799a0b74f7bc847.jpeg?h=32&w=32",
      fdv: "$46.7M",
      change: "+0.2%",
      changePositive: true,
      verified: true,
      href: "/token/solana/Dz9mQ9NzkBcCsuGPFJ3r1bS4wgqKMHBPiVuniW8Mbonk",
    },
    {
      id: 2,
      name: "Pippin",
      symbol: "pippin",
      image: "https://i2c.seadn.io/collection/pippin-shell/image_type_hero_desktop/da1b8a71d37bb1dc40a4b6748d72a7/f7da1b8a71d37bb1dc40a4b6748d72a7.png?h=300&w=600",
      logo: "https://i2c.seadn.io/collection/pippin-shell/image_type_logo/01c476b42f2ca65c0523145e3dc7c8/6101c476b42f2ca65c0523145e3dc7c8.jpeg?h=32&w=32",
      fdv: "$354.5M",
      change: "+7.4%",
      changePositive: true,
      verified: false,
      href: "/token/solana/Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump",
    },
    {
      id: 3,
      name: "Arbitrum",
      symbol: "ARB",
      image: "https://i2c.seadn.io/base/13b5980c99c84447b6928a17fc1ea404/d1a40be570f3202e87ffc3496402e6/dbd1a40be570f3202e87ffc3496402e6.png?h=300&w=600",
      logo: "https://i2c.seadn.io/base/13b5980c99c84447b6928a17fc1ea404/b6911641a5d1929b24554ad7466d16/60b6911641a5d1929b24554ad7466d16.png?h=32&w=32",
      fdv: "$1B",
      change: "+0.2%",
      changePositive: true,
      verified: true,
      href: "/token/arb?toChain=arbitrum&toAddress=0x912ce59144191c1204e64559fe8253a0e49e6548",
    },
    {
      id: 4,
      name: "The9bit",
      symbol: "9bit",
      image: "https://i2c.seadn.io/collection/9bit-shell/image_type_hero_desktop/050556477a9547db94baf714fdeecd/2e050556477a9547db94baf714fdeecd.png?h=300&w=600",
      logo: "https://i2c.seadn.io/collection/9bit-shell/image_type_logo/8b232f915605f4a456c4c458f92834/168b232f915605f4a456c4c458f92834.jpeg?h=32&w=32",
      fdv: "$203.9M",
      change: "-1.7%",
      changePositive: false,
      verified: false,
      href: "/token/solana/HmMubgKx91Tpq3jmfcKQwsv5HrErqnCTTRJMB6afFR2u",
    },
    {
      id: 5,
      name: "Pepe",
      symbol: "PEPE",
      image: "https://i2c.seadn.io/base/36e688e6d90640e190a6dfa885c244b6/1b08830d319c8e439d71ebc953f0b4/181b08830d319c8e439d71ebc953f0b4.png?h=300&w=600",
      logo: "https://i2c.seadn.io/base/36e688e6d90640e190a6dfa885c244b6/259bc4d23635386e44ed58d1405554/3a259bc4d23635386e44ed58d1405554.jpeg?h=32&w=32",
      fdv: "$1.5B",
      change: "+0.4%",
      changePositive: true,
      verified: true,
      href: "/token/ethereum/0x6982508145454ce325ddbe47a25d4ec3d2311933",
    },
    {
      id: 6,
      name: "Nietzschean Penguin",
      symbol: "PENGUIN",
      image: "https://i2c.seadn.io/collection/penguin-shell/image_type_hero_desktop/598d7f2fecc06731814d212c37fd87/d3598d7f2fecc06731814d212c37fd87.png?h=300&w=600",
      logo: "https://i2c.seadn.io/collection/penguin-shell/image_type_logo/f1784d491efc5229646c99832505e1/81f1784d491efc5229646c99832505e1.jpeg?h=32&w=32",
      fdv: "$5.2M",
      change: "-1.6%",
      changePositive: false,
      verified: false,
      href: "/token/solana/8Jx8AAHj86wbQgUTjGuj6GTTL5Ps3cqxKRTvpaJApump",
    },
  ];

  return (
    <section
      className={`${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      } py-8 md:py-12 lg:py-16 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Featured Tokens
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Trending tokens and emerging opportunities
          </p>
        </div>

        {/* Tokens Grid - Scrollable on mobile, grid on desktop */}
        <div className="overflow-x-auto -mx-3 sm:-mx-4 lg:-mx-6">
          <div className="px-3 sm:px-4 lg:px-6 inline-flex lg:grid lg:grid-cols-3 gap-3 sm:gap-4 min-w-full lg:min-w-0">
            {tokens.map((token, index) => (
              <a
                key={token.id}
                href={token.href}
                className={`flex-shrink-0 w-full sm:w-80 lg:w-auto lg:flex-shrink cursor-pointer no-underline group transition-all duration-200 ${
                  index > 3 ? "hidden lg:block" : ""
                }`}
              >
                <div
                  className={`relative rounded-lg overflow-hidden aspect-video flex flex-col justify-end p-3 transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700"
                      : "bg-gradient-to-b from-slate-50 to-white border border-slate-200"
                  } group-hover:shadow-lg group-hover:scale-105 group-active:scale-100`}
                  style={{
                    backgroundImage: `url('${token.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-3">
                    {/* Token Info */}
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-lg p-2">
                      <img
                        src={token.logo}
                        alt={token.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-white text-sm font-medium leading-tight truncate">
                            {token.name}
                          </p>
                          {token.verified && (
                            <svg
                              className="w-3.5 h-3.5 text-blue-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 -960 960 960"
                            >
                              <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                            </svg>
                          )}
                        </div>
                        <p className="text-slate-300 text-xs leading-tight truncate">
                          {token.symbol}
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div>
                        <p className="text-slate-300 text-xs">FDV</p>
                        <p className="text-white text-sm font-mono font-medium">
                          {token.fdv}
                        </p>
                      </div>
                      <div className={`text-sm font-mono font-medium ${
                        token.changePositive
                          ? "text-green-400"
                          : "text-red-400"
                      }`}>
                        {token.change}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <a
            href="/tokens"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            View All Tokens
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTokens;
