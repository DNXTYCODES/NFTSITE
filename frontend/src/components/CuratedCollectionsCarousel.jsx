import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const CuratedCollectionsCarousel = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.useRef(null);

  const collections = [
    {
      id: 1,
      name: "nerds",
      image:
        "https://i2c.seadn.io/collection/nerds-174656609/image_type_logo/a98ad05436d4ac1a9b7c7c72e782d0/0ea98ad05436d4ac1a9b7c7c72e782d0.jpeg?h=300&w=600",
      floorPrice: "0.0011",
      priceChange: "-15%",
      isPriceUp: false,
      verified: true,
    },
    {
      id: 2,
      name: "On-Chain All-Stars",
      image:
        "https://i2.seadn.io/collection/on-chain-all-stars/image_type_hero_desktop/4c32e9a98b197a7bee9a0961109436/3a4c32e9a98b197a7bee9a0961109436.png?h=300&w=600",
      floorPrice: "0.0052",
      priceChange: "-25.1%",
      isPriceUp: false,
      verified: true,
    },
    {
      id: 3,
      name: "death and taxes - citizens",
      image:
        "https://i2c.seadn.io/collection/deathandtaxes/image_type_hero_desktop/d2f9cf0b85054d066e22afc41308f0/ddd2f9cf0b85054d066e22afc41308f0.png?h=300&w=600",
      floorPrice: "0.0445",
      priceChange: "+33.6%",
      isPriceUp: true,
      verified: true,
    },
    {
      id: 4,
      name: "HV-MTL Activated",
      image:
        "https://i2c.seadn.io/ethereum/7f4c400e4679406d88a4a07b821c030e/397bd4615365ac3bcb5a13a3159b0b/be397bd4615365ac3bcb5a13a3159b0b.gif?frame-time=1&h=300&w=600",
      floorPrice: "0.1069",
      priceChange: "+0.1%",
      isPriceUp: true,
      verified: true,
    },
    {
      id: 5,
      name: "MEGA HONEY BADGERS",
      image:
        "https://i2c.seadn.io/collection/megahoneybadgers/image_type_hero_desktop/87c89e847d3a5a0dd742fba71cc770/0987c89e847d3a5a0dd742fba71cc770.jpeg?h=300&w=600",
      floorPrice: "0.0038",
      priceChange: "-3.8%",
      isPriceUp: false,
      verified: true,
    },
    {
      id: 6,
      name: "Moments of the Unknown - Polaroids",
      image:
        "https://i2c.seadn.io/ethereum/1e90628c0a55492ebf310b341c81d1fd/91be364031221a2488ada9fd6a020e/0e91be364031221a2488ada9fd6a020e.jpeg?h=300&w=600",
      floorPrice: "0.0349",
      priceChange: "0%",
      isPriceUp: false,
      verified: true,
    },
  ];

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate scroll amount based on card width + gap
    // lg:basis-[calc(25%-12px)] means each card takes ~25% - 12px
    // With gap of 16px (md:gap-4), total per item is ~25% - 12px + 16px
    const scrollAmount = container.offsetWidth * 0.25;
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;

    container.scrollLeft = newPosition;
    setScrollPosition(newPosition);
  };

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className={`flex flex-col gap-4`}>
        {/* Header */}
        <div className="flex flex-col lg:gap-1">
          <div className="block">
            <h2
              className={`font-medium leading-tight text-lg md:text-xl ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Curated Collections
            </h2>
            <p
              className={`leading-normal text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
            >
              This week's featured collections
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full group/carousel"
          aria-roledescription="carousel"
          role="region"
        >
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              {collections.map((collection, idx) => (
                <a
                  key={collection.id}
                  href={`/collection/${collection.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className={`min-w-0 shrink-0 grow-0 basis-[calc(100%-76px)] md:basis-[calc(100%-70px)] lg:basis-[calc(25%-12px)] transition-opacity duration-200`}
                  aria-roledescription="slide"
                  role="group"
                >
                  <div
                    className={`flex flex-col relative justify-end rounded-lg p-3 duration-200 ease-out cursor-pointer no-underline hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] shadow-xs hover:shadow-sm transition-all ${
                      isDark ? "bg-slate-800" : "bg-slate-100"
                    } before:absolute before:pointer-events-none before:inset-0 before:z-10 before:rounded-lg overflow-hidden`}
                    style={{ aspectRatio: "4 / 2" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <img
                        alt={collection.name}
                        src={collection.image}
                        className="w-full h-full object-cover object-center scale-[0.995]"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 z-1 rounded-lg bg-gradient-to-b from-transparent ${isDark ? "to-slate-900/80" : "to-white/80"}`}
                    />

                    {/* Content */}
                    <div
                      className={`border-0 p-0 flex w-full items-center gap-3 relative z-10`}
                    >
                      <div className="flex flex-col justify-center order-2 min-w-0 overflow-hidden flex-auto items-start self-stretch">
                        <div className="flex items-center min-w-0 gap-1">
                          <h3
                            className={`max-w-full break-all line-clamp-1 min-w-0 flex-1 leading-tight font-medium text-sm ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {collection.name}
                          </h3>
                          {collection.verified && (
                            <svg
                              aria-label="Verified"
                              className="w-3.5 h-3.5 text-blue-500 shrink-0"
                              fill="currentColor"
                              viewBox="0 -960 960 960"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                              <path
                                className="fill-white"
                                d="M438-338 L664-564 L608-622 L438-452 L352-538 L296-482 L438-338 Z"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Floor Price */}
                        <div className="flex items-center gap-1 mt-2">
                          <span
                            className={`leading-normal text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}
                          >
                            Floor price:
                          </span>
                          <span
                            className={`leading-tight font-mono uppercase text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            {collection.floorPrice}
                          </span>
                          <span
                            className={`leading-normal text-sm font-mono ${
                              collection.isPriceUp
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {collection.priceChange}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={() => scroll("left")}
            className={`hidden lg:inline-flex absolute left-0 top-1/2 -translate-y-1/2 items-center pointer-events-auto rounded-full p-2 opacity-0 transition-opacity duration-200 group-hover/carousel:opacity-100 border z-10 ${
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-white border-slate-300 hover:bg-slate-100"
            }`}
            type="button"
            aria-label="Previous"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 -960 960 960"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M640.48-72.35 232.59-480l407.89-407.65L719.13-809l-329 329 329 329-78.65 78.65Z" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className={`hidden lg:inline-flex absolute right-0 top-1/2 -translate-y-1/2 items-center pointer-events-auto rounded-full p-2 opacity-0 transition-opacity duration-200 group-hover/carousel:opacity-100 border z-10 ${
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-white border-slate-300 hover:bg-slate-100"
            }`}
            type="button"
            aria-label="Next"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 -960 960 960"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M321-72.35 242.35-151l329-329-329-329L321-887.65 728.65-480 321-72.35Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CuratedCollectionsCarousel;
