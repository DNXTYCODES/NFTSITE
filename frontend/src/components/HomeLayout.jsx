import React from "react";
import { useTheme } from "../context/ThemeContext";
import TrendingCollections from "./TrendingCollections";

const HomeLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      } min-h-screen transition-colors duration-300`}
    >
      {/* Desktop Layout: Two column with sidebar on right */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_380px] gap-6 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="space-y-6">{children}</div>

        {/* Sidebar - Trending Collections */}
        <aside className="sticky top-32 h-fit">
          <TrendingCollections />
        </aside>
      </div>

      {/* Mobile/Tablet Layout: Single column */}
      <div className="lg:hidden">
        <div className="px-4 sm:px-6 py-6 max-w-full mx-auto space-y-6">
          {/* Hero Section */}
          {children}
        </div>

        {/* Trending Collections Below Hero on Mobile */}
        <div className="px-4 sm:px-6 pb-6 max-w-full mx-auto">
          <TrendingCollections />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
