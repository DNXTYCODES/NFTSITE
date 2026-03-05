import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const HeroCarousel = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "The Nibbles",
      creator: "LonelyLilyStudios",
      image:
        "https://i2c.seadn.io/collection/the-nibbles/image_type_hero_mobile/e2a7ad1269aa8a2714fec93cf1893a/efe2a7ad1269aa8a2714fec93cf1893a.png?h=600",
      floorPrice: "0.031",
      items: "8888",
      totalVolume: "236.46",
      link: "/collection/the-nibbles",
    },
    {
      id: 2,
      name: "NORMIES",
      creator: "serc1n",
      image:
        "https://i2c.seadn.io/collection/normies/image_type_hero_mobile/7655da603e90f6ed3e8b80e41a6496/457655da603e90f6ed3e8b80e41a6496.png?h=600",
      floorPrice: "0.0309399",
      items: "8948",
      totalVolume: "564.91",
      link: "/collection/normies",
    },
    {
      id: 3,
      name: "Quirkies",
      creator: "QuirkDeployer",
      image:
        "https://i2c.seadn.io/collection/quirkiesoriginals/image_type_hero_mobile/0beed29250224ff3ef284b51eb2dd6/4a0beed29250224ff3ef284b51eb2dd6.png?h=600",
      floorPrice: "1.08449",
      items: "4998",
      totalVolume: "22594.83K",
      link: "/collection/quirkiesoriginals",
    },
    {
      id: 4,
      name: "The Del Mundos",
      creator: "RayD3lMundo",
      image:
        "https://i2c.seadn.io/ethereum/94fb07b4973a4581bf96b4d949bc4b6d/9b92e896e21b437af1e486e36f2510/d09b92e896e21b437af1e486e36f2510.png?h=600",
      floorPrice: "0.056869",
      items: "10000",
      totalVolume: "568.44",
      link: "/collection/thedelmundos",
    },
    {
      id: 5,
      name: "Franky's Dinner",
      creator: "LonelyLilyStudios",
      image:
        "https://i2c.seadn.io/collection/frankys-dinner-86203778/image_type_hero_mobile/9d456e5cfe6eb585fffdeaad2ce02b/679d456e5cfe6eb585fffdeaad2ce02b.png?h=600",
      floorPrice: "0.2137889",
      items: "1069",
      totalVolume: "315.14",
      link: "/collection/franky-s-dinner",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`relative w-full transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg lg:rounded-xl">
        {/* Slides */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href={slide.link}
                className="block w-full h-full cursor-pointer no-underline"
              >
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-end p-3 sm:p-4 lg:p-5">
                    <div className="w-full space-y-4">
                      {/* Collection Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                              theme === "dark" ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {slide.name}
                          </h2>
                          <svg
                            aria-label="Verified"
                            className="w-6 h-6 text-blue-500 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 -960 960 960"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                          </svg>
                        </div>
                        <p
                          className={`text-sm sm:text-base ${
                            theme === "dark"
                              ? "text-slate-300"
                              : "text-slate-700"
                          }`}
                        >
                          By{" "}
                          <span className="font-semibold">{slide.creator}</span>
                          <svg
                            aria-label="Verified"
                            className="inline w-3.5 h-3.5 ml-1 text-blue-500"
                            fill="currentColor"
                            viewBox="0 -960 960 960"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                          </svg>
                        </p>
                      </div>

                      {/* Stats Box */}
                      <div
                        className={`inline-flex flex-col sm:flex-row gap-4 sm:gap-8 rounded-lg border backdrop-blur-2xl px-3 sm:px-4 py-3 sm:py-3 w-full sm:w-auto ${
                          theme === "dark"
                            ? "border-slate-700 bg-slate-900/60"
                            : "border-slate-300 bg-slate-100/60"
                        }`}
                      >
                        {/* Floor Price */}
                        <div className="flex flex-col gap-1">
                          <span
                            className={`text-xs font-mono uppercase font-semibold opacity-60 ${
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }`}
                          >
                            Floor price
                          </span>
                          <span
                            className={`text-sm sm:text-base font-mono font-semibold ${
                              theme === "dark" ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {slide.floorPrice}{" "}
                            <span className="text-xs">ETH</span>
                          </span>
                        </div>

                        <div
                          className={`hidden sm:block w-px ${
                            theme === "dark" ? "bg-slate-700" : "bg-slate-300"
                          }`}
                        ></div>

                        {/* Items */}
                        <div className="flex flex-col gap-1">
                          <span
                            className={`text-xs font-mono uppercase font-semibold opacity-60 ${
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }`}
                          >
                            Items
                          </span>
                          <span
                            className={`text-sm sm:text-base font-mono font-semibold ${
                              theme === "dark" ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {slide.items}
                          </span>
                        </div>

                        <div
                          className={`hidden sm:block w-px ${
                            theme === "dark" ? "bg-slate-700" : "bg-slate-300"
                          }`}
                        ></div>

                        {/* Total Volume */}
                        <div className="flex flex-col gap-1">
                          <span
                            className={`text-xs font-mono uppercase font-semibold opacity-60 ${
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }`}
                          >
                            Total volume
                          </span>
                          <span
                            className={`text-sm sm:text-base font-mono font-semibold ${
                              theme === "dark" ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {slide.totalVolume}{" "}
                            <span className="text-xs">ETH</span>
                          </span>
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

      {/* Carousel Indicators */}
      <div className="mt-4 flex justify-center gap-2 lg:gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-1.5 rounded transition-all duration-200 ${
              index === currentSlide
                ? theme === "dark"
                  ? "w-10 bg-slate-100"
                  : "w-10 bg-slate-900"
                : "w-full lg:w-10 " +
                  (theme === "dark" ? "bg-slate-700" : "bg-slate-300")
            } hover:opacity-80`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
