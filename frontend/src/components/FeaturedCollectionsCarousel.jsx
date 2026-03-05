import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const FeaturedCollectionsCarousel = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(4);

  const collections = [
    {
      id: 1,
      name: "The Nibbles",
      creator: "LonelyLilyStudios",
      image:
        "https://i2c.seadn.io/collection/the-nibbles/image_type_hero_mobile/e2a7ad1269aa8a2714fec93cf1893a/efe2a7ad1269aa8a2714fec93cf1893a.png?h=600",
      floorPrice: "0.031",
      items: "8,888",
      volume: "236.46",
      verified: true,
      creatorVerified: true,
    },
    {
      id: 2,
      name: "NORMIES",
      creator: "serc1n",
      image:
        "https://i2c.seadn.io/collection/normies/image_type_hero_mobile/7655da603e90f6ed3e8b80e41a6496/457655da603e90f6ed3e8b80e41a6496.png?h=600",
      floorPrice: "0.031",
      items: "8,948",
      volume: "564.91",
      verified: true,
      creatorVerified: true,
    },
    {
      id: 3,
      name: "Quirkies",
      creator: "QuirkDeployer",
      image:
        "https://i2c.seadn.io/collection/quirkiesoriginals/image_type_hero_mobile/0beed29250224ff3ef284b51eb2dd6/4a0beed29250224ff3ef284b51eb2dd6.png?h=600",
      floorPrice: "1.08",
      items: "4,998",
      volume: "22.59K",
      verified: true,
      creatorVerified: true,
    },
    {
      id: 4,
      name: "The Del Mundos",
      creator: "RayD3lMundo",
      image:
        "https://i2c.seadn.io/ethereum/94fb07b4973a4581bf96b4d949bc4b6d/9b92e896e21b437af1e486e36f2510/d09b92e896e21b437af1e486e36f2510.png?h=600",
      floorPrice: "0.057",
      items: "10,000",
      volume: "568.44",
      verified: true,
      creatorVerified: true,
    },
    {
      id: 5,
      name: "Franky's Dinner",
      creator: "LonelyLilyStudios",
      image:
        "https://i2c.seadn.io/collection/frankys-dinner-86203778/image_type_hero_mobile/9d456e5cfe6eb585fffdeaad2ce02b/679d456e5cfe6eb585fffdeaad2ce02b.png?h=600",
      floorPrice: "0.214",
      items: "1,069",
      volume: "315.14",
      verified: true,
      creatorVerified: true,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [collections.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < collections.length; i++) {
      slides.push(collections[(currentSlide + i) % collections.length]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div
      className={`group/carousel relative mt-4 w-full lg:mt-0 lg:rounded-xl ${
        isDark ? "dark" : ""
      }`}
      aria-roledescription="carousel"
      role="region"
    >
      <div
        className={`relative overflow-hidden rounded-lg before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-inherit ${
          isDark
            ? "before:border before:border-slate-700"
            : "before:border before:border-slate-200"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out">
            {visibleSlides.map((collection, idx) => (
              <div
                key={collection.id}
                className={`min-w-0 shrink-0 grow-0 basis-full relative w-full ${
                  isDark ? "bg-slate-900" : "bg-slate-50"
                } pl-0 lg:rounded-lg`}
                aria-roledescription="slide"
                role="group"
              >
                <a
                  className="cursor-pointer no-underline block group/slide"
                  href={`/collection/${collection.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <div className="relative">
                    {/* Image Container */}
                    <div className="relative w-full h-96 sm:h-500px lg:h-600px overflow-hidden">
                      <img
                        alt={collection.name}
                        loading={idx === 0 ? "eager" : "lazy"}
                        src={collection.image}
                        className="w-full h-full object-cover object-center"
                      />
                      {/* Dark Gradient Overlay */}
                      <div
                        className={`absolute inset-0 ${
                          isDark ? "dark" : ""
                        } bg-gradient-to-b from-transparent via-transparent to-black/80`}
                      />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-10 flex items-end pointer-events-none">
                      <div className="flex flex-col w-full pointer-events-auto p-3 md:p-4 lg:p-5">
                        {/* Collection Info */}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <h3
                                className={`text-lg md:text-2xl font-medium truncate ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}
                              >
                                {collection.name}
                              </h3>
                              {collection.verified && (
                                <svg
                                  aria-label="Verified"
                                  className="w-6 h-6 text-blue-500 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 -960 960 960"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                                  <path
                                    className="fill-white"
                                    d="M438-338 L664-564 L608-622 L438-452 L352-538 L296-482 L438-338 Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                            {/* Creator */}
                            <div className="flex items-center gap-1 text-sm">
                              <span
                                className={`${
                                  isDark ? "text-slate-300" : "text-slate-700"
                                }`}
                              >
                                By {collection.creator}
                              </span>
                              {collection.creatorVerified && (
                                <svg
                                  aria-label="Verified"
                                  className="w-4 h-4 text-blue-500 flex-shrink-0"
                                  fill="currentColor"
                                  viewBox="0 -960 960 960"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                                  <path
                                    className="fill-white"
                                    d="M438-338 L664-564 L608-622 L438-452 L352-538 L296-482 L438-338 Z"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Stats Box */}
                        <div
                          className={`flex items-center mt-3 w-auto rounded-lg border gap-4 md:gap-8 px-3 py-3 md:px-4 backdrop-blur-xl ${
                            isDark
                              ? "border-slate-700 bg-slate-800/50"
                              : "border-slate-200 bg-white/50"
                          }`}
                        >
                          {/* Floor Price */}
                          <div>
                            <div
                              className={`text-xs uppercase tracking-wide mb-1 ${
                                isDark ? "text-slate-400" : "text-slate-600"
                              }`}
                            >
                              Floor Price
                            </div>
                            <div
                              className={`font-mono font-medium text-sm md:text-base ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {collection.floorPrice} ETH
                            </div>
                          </div>

                          {/* Divider */}
                          <div
                            className={`h-8 w-px ${
                              isDark ? "bg-slate-600" : "bg-slate-300"
                            }`}
                          />

                          {/* Items */}
                          <div>
                            <div
                              className={`text-xs uppercase tracking-wide mb-1 ${
                                isDark ? "text-slate-400" : "text-slate-600"
                              }`}
                            >
                              Items
                            </div>
                            <div
                              className={`font-mono font-medium text-sm md:text-base ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {collection.items}
                            </div>
                          </div>

                          {/* Divider */}
                          <div
                            className={`h-8 w-px ${
                              isDark ? "bg-slate-600" : "bg-slate-300"
                            }`}
                          />

                          {/* Total Volume */}
                          <div>
                            <div
                              className={`text-xs uppercase tracking-wide mb-1 ${
                                isDark ? "text-slate-400" : "text-slate-600"
                              }`}
                            >
                              Total Volume
                            </div>
                            <div
                              className={`font-mono font-medium text-sm md:text-base ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}
                            >
                              {collection.volume} ETH
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="mt-3 flex justify-center gap-2 lg:gap-3">
        {collections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`inline-flex items-center h-1.5 transition-all duration-200 ${
              idx === currentSlide ? "w-8 lg:w-10" : "w-1.5 lg:w-2"
            }`}
            type="button"
          >
            <div
              className={`rounded h-1.5 w-full transition-colors duration-200 ${
                idx === currentSlide
                  ? isDark
                    ? "bg-white"
                    : "bg-slate-900"
                  : isDark
                    ? "bg-slate-700 hover:bg-slate-600"
                    : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollectionsCarousel;
