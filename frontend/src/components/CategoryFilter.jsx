import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const CategoryFilter = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", path: "/" },
    {
      id: "gaming",
      name: "Gaming",
      path: "/discover/gaming",
      icon: (
        <svg
          aria-label="Stadia Controller"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z" />
        </svg>
      ),
    },
    {
      id: "art",
      name: "Art",
      path: "/discover/art",
      icon: (
        <svg
          aria-label="Brush"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M240-120q-45 0-89-22t-71-58q26 0 53-20.5t27-59.5q0-50 35-85t85-35q50 0 85 35t35 85q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T320-280q0-17-11.5-28.5T280-320q-17 0-28.5 11.5T240-280q0 23-5.5 42T220-202q5 2 10 2h10Zm230-160L360-470l358-358q11-11 27.5-11.5T774-828l54 54q12 12 12 28t-12 28L470-360Zm-190 80Z" />
        </svg>
      ),
    },
    {
      id: "pfps",
      name: "PFPs",
      path: "/discover/pfps",
      icon: (
        <svg
          aria-label="Account Circle"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
        </svg>
      ),
    },
    {
      id: "memberships",
      name: "Memberships",
      path: "/discover/memberships",
      icon: (
        <svg
          aria-label="Workspace Premium"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m387-412 35-114-92-74h114l36-112 36 112h114l-93 74 35 114-92-71-93 71ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z" />
        </svg>
      ),
    },
    {
      id: "music",
      name: "Music",
      path: "/discover/music",
      icon: (
        <svg
          aria-label="Music Note"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
        </svg>
      ),
    },
    {
      id: "photography",
      name: "Photography",
      path: "/discover/photography",
      icon: (
        <svg
          aria-label="Camera"
          className="fill-current"
          fill="currentColor"
          height="16"
          role="img"
          viewBox="0 -960 960 960"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456-600h320q-27-69-82.5-118.5T566-788L456-600Zm-92 80 160-276q-11-2-22-3t-22-1q-66 0-123 25t-101 67l108 188ZM170-400h218L228-676q-32 41-50 90.5T160-480q0 21 2.5 40.5T170-400Zm224 228 108-188H184q27 69 82.5 118.5T394-172Zm86 12q66 0 123-25t101-67L596-440 436-164q11 2 21.5 3t22.5 1Zm252-124q32-41 50-90.5T800-480q0-21-2.5-40.5T790-560H572l160 276ZM480-480Zm0 400q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`sticky top-16 z-40 ml-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-900/95 border-b border-slate-800"
          : "bg-white/95 border-b border-slate-200"
      } backdrop-blur-lg`}
    >
      <div className="flex items-center gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.path}
            onClick={() => setActiveCategory(category.id)}
            className="no-underline flex-shrink-0"
          >
            {category.id === "all" ? (
              <button
                className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                  activeCategory === "all"
                    ? theme === "dark"
                      ? "bg-blue-600 text-white border border-blue-500"
                      : "bg-blue-100 text-blue-900 border border-blue-300"
                    : theme === "dark"
                    ? "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {category.name}
              </button>
            ) : (
              <button
                className={`inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 active:scale-95 ${
                  activeCategory === category.id
                    ? theme === "dark"
                      ? "bg-blue-600 text-white border border-blue-500"
                      : "bg-blue-100 text-blue-900 border border-blue-300"
                    : theme === "dark"
                    ? "bg-slate-800/50 text-slate-300 border border-slate-700 hover:bg-slate-700/50"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
