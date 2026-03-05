import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const TrendingCollectionsGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const trendingCollections = [
    {
      id: 1,
      name: "Bored Ape Yacht Club",
      image:
        "https://i2c.seadn.io/collection/boredapeyachtclub/image_type_hero_desktop/c88b7d49bb4f2a2b3e2c8e9b5c5d5c5/0c88b7d49bb4f2a2b3e2c8e9b5c5d5c5.png?h=300&w=600",
      floorPrice: "42.5",
      priceChange: "+12.3",
      isPriceUp: true,
      verified: true,
    },
    {
      id: 2,
      name: "Cryptopunks",
      image:
        "https://i2c.seadn.io/collection/cryptopunks/image_type_hero_desktop/fc2b3fb69a5e7b9c5d5c5c5c5c5c5c5/0fc2b3fb69a5e7b9c5d5c5c5c5c5c5c5.png?h=300&w=600",
      floorPrice: "75.2",
      priceChange: "-5.8",
      isPriceUp: false,
      verified: true,
    },
    {
      id: 3,
      name: "Pudgy Penguins",
      image:
        "https://i2c.seadn.io/collection/pudgypenguins/image_type_hero_desktop/0c4d5c5b5a5a5a5a5a5a5a5a5a5a5a/000c4d5c5b5a5a5a5a5a5a5a5a5a5a5a.png?h=300&w=600",
      floorPrice: "2.8",
      priceChange: "+45.2",
      isPriceUp: true,
      verified: true,
    },
    {
      id: 4,
      name: "Azuki",
      image:
        "https://i2c.seadn.io/collection/azuki/image_type_hero_desktop/5c4d3b2c1a0f9e8d7c6b5a4d3c2b1a/005c4d3b2c1a0f9e8d7c6b5a4d3c2b1a.png?h=300&w=600",
      floorPrice: "18.5",
      priceChange: "+22.1",
      isPriceUp: true,
      verified: true,
    },
    {
      id: 5,
      name: "Doodles",
      image:
        "https://i2c.seadn.io/collection/doodles-official/image_type_hero_desktop/1d2c3b4a5d6c7b8a9d0e1c2b3a4d5c6/001d2c3b4a5d6c7b8a9d0e1c2b3a4d5.png?h=300&w=600",
      floorPrice: "3.2",
      priceChange: "-8.5",
      isPriceUp: false,
      verified: true,
    },
    {
      id: 6,
      name: "World of Women",
      image:
        "https://i2c.seadn.io/collection/worldofwomen/image_type_hero_desktop/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7/002c3d4e5f6a7b8c9d0e1f2a3b4c5d6.png?h=300&w=600",
      floorPrice: "5.1",
      priceChange: "+31.9",
      isPriceUp: true,
      verified: true,
    },
  ];

  return (
    <section
      className={`${
        isDark ? "bg-gray-950" : "bg-white"
      } py-8 md:py-12 lg:py-16`}
      aria-labelledby="trending-collections-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6">
        {/* Header */}
        <div className="flex flex-col lg:gap-1 mb-8 md:mb-10 lg:mb-12">
          <h2
            id="trending-collections-heading"
            className={`font-medium text-lg md:text-xl lg:text-2xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Trending Collections
          </h2>
          <p
            className={`text-sm md:text-base ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Top performers this month
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-4">
          {trendingCollections.map((collection) => (
            <Link
              key={collection.id}
              to={`/collection/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="cursor-pointer no-underline"
            >
              <div
                className={`flex flex-col relative justify-end rounded-lg p-3 md:p-4 duration-200 ease-out transition-all ${
                  isDark
                    ? "hover:shadow-lg shadow-md"
                    : "hover:shadow-md shadow-sm"
                } group hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[1.005] ${
                  isDark ? "border border-gray-800" : "border border-gray-200"
                }`}
                style={{ aspectRatio: "4 / 2" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-[-1] scale-[0.995] overflow-hidden rounded-lg">
                  <img
                    alt={collection.name}
                    loading="lazy"
                    width="600"
                    height="300"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                    src={collection.image}
                    style={{ color: "transparent" }}
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 z-[-1] rounded-lg ${
                    isDark
                      ? "bg-gradient-to-b from-transparent via-transparent to-gray-950"
                      : "bg-gradient-to-b from-transparent via-transparent to-white"
                  }`}
                />

                {/* Content */}
                <div
                  className={`flex w-full items-center gap-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {/* Collection Info */}
                  <div className="flex flex-col justify-center min-w-0 overflow-hidden flex-auto items-start">
                    {/* Name with Verified Badge */}
                    <div className="flex items-center min-w-0 gap-1 mb-2">
                      <span
                        className={`line-clamp-1 min-w-0 flex-1 font-medium text-sm md:text-base ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {collection.name}
                      </span>
                      {collection.verified && (
                        <svg
                          aria-label="Verified"
                          className="fill-blue-500 size-3.5 md:size-4 shrink-0"
                          fill="rgb(59, 130, 246)"
                          height="24"
                          role="img"
                          viewBox="0 -960 960 960"
                          width="24"
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

                    {/* Floor Price and Change */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`text-xs md:text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Floor:
                      </span>
                      <span className="font-mono font-medium text-sm md:text-base">
                        {collection.floorPrice}
                      </span>
                      <span className="text-xs md:text-sm font-mono text-gray-400">
                        ETH
                      </span>
                      <span
                        className={`font-mono text-xs md:text-sm font-medium ${
                          collection.isPriceUp
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {collection.isPriceUp ? "+" : ""}
                        {collection.priceChange}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCollectionsGrid;
