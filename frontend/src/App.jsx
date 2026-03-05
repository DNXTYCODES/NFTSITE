import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import OurWork from "./pages/OurWork";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CategoryFilter from "./components/CategoryFilter";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Player from "./pages/Player";
import Services from "./pages/Services";
import TrainingPrograms from "./pages/TrainingPrograms";
import SolarPackagesPage from "./pages/SolarPackagesPage";
import SolarCalculatorPage from "./pages/SolarCalculatorPage";
// NFT Marketplace Pages
import Discover from "./pages/Discover";
import Collections from "./pages/Collections";
import Tokens from "./pages/Tokens";
import Swap from "./pages/Swap";
import Drops from "./pages/Drops";
import Activity from "./pages/Activity";
import Rewards from "./pages/Rewards";
import Studio from "./pages/Studio";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import { initializeGA, trackPageView } from "./utils/googleAnalytics";
import "./utils/browserCompat"; // Load polyfills

const App = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [sidebarHovered, setSidebarHovered] = useState(false);

  // Initialize Google Analytics on component mount
  useEffect(() => {
    try {
      // Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
      const measurementId = "G-E9M8N54M96";

      // Only initialize if measurement ID is set (not the placeholder)
      if (measurementId && measurementId !== "G-XXXXXXXXXX") {
        initializeGA(measurementId);
        window.GA_MEASUREMENT_ID = measurementId;
      }
    } catch (err) {
      console.warn("Failed to initialize analytics:", err);
      // Site continues even if analytics fails
    }
  }, []);

  // Track page views when location changes
  useEffect(() => {
    try {
      if (window.gtag) {
        trackPageView(location.pathname, document.title);
      }
    } catch (err) {
      console.warn("Failed to track page view:", err);
      // Site continues even if tracking fails
    }
  }, [location]);

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300"
      itemScope
      itemType="https://schema.org/WebSite"
    >
      {/* Structured Data for Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SunPeak Solar Services",
          url: "https://sunpeak.com.ng",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://sunpeak.com.ng/collection?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          description:
            "Leading solar services provider in Benin, Nigeria offering solar installation, products, training and instant cost estimates",
          inLanguage: "en-NG",
        })}
      </script>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-[var(--primary-neon)] focus:text-black focus:p-4 focus:z-50"
      >
        Skip to main content
      </a>

      <ToastContainer
        position="top-center"
        toastClassName="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl backdrop-blur-sm"
        bodyClassName="text-[var(--text)]"
        progressClassName="bg-[var(--primary-neon)]"
      />

      <Navbar />

      <CategoryFilter />

      <div className="flex w-full">
        <Sidebar onHoverChange={setSidebarHovered} />
        <main
          id="main-content"
          className={`flex-1 w-full transition-all duration-300 lg:ml-20 ${
            sidebarHovered ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <div className="mx-auto px-3 sm:px-4 lg:px-6">
            <SearchBar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/solarpackages"
                element={
                  <div itemScope itemType="https://schema.org/OfferCatalog">
                    <SolarPackagesPage />
                  </div>
                }
              />
              <Route
                path="/solarcalculator"
                element={
                  <div itemScope itemType="https://schema.org/WebApplication">
                    <SolarCalculatorPage />
                  </div>
                }
              />
              <Route
                path="/training"
                element={
                  <div itemScope itemType="https://schema.org/EducationEvent">
                    <TrainingPrograms />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div itemScope itemType="https://schema.org/AboutPage">
                    <About />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div itemScope itemType="https://schema.org/ContactPage">
                    <Contact />
                  </div>
                }
              />
              <Route path="/player/:playerId" element={<Player />} />
              <Route
                path="/ourwork"
                element={
                  <div itemScope itemType="https://schema.org/PortfolioPage">
                    <OurWork />
                  </div>
                }
              />
              <Route
                path="/services"
                element={
                  <div itemScope itemType="https://schema.org/Service">
                    <Services />
                  </div>
                }
              />
              <Route
                path="/collection"
                element={
                  <div itemScope itemType="https://schema.org/ItemList">
                    <Collection />
                  </div>
                }
              />
              <Route
                path="/product/:productId"
                element={
                  <div itemScope itemType="https://schema.org/Product">
                    <Product />
                  </div>
                }
              />

              {/* NFT Marketplace Routes */}
              <Route path="/" element={<Discover />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/tokens" element={<Tokens />} />
              <Route path="/swap" element={<Swap />} />
              <Route path="/drops" element={<Drops />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Product from "./pages/Product";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Player from "./pages/Player";
// import Services from "./pages/Services";
// import TrainingPrograms from "./pages/TrainingPrograms";
// import SolarPackagesPage from "./pages/SolarPackagesPage";
// import SolarCalculatorPage from "./pages/SolarCalculatorPage";

// const App = () => {

//   return (
//     <div
//       className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
//       itemScope
//       itemType="https://schema.org/WebSite"
//     >
//       {/* Structured Data for Website */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebSite",
//           "name": "SunPeak Solar Services",
//           "url": "https://sunpeak.com.ng",
//           "potentialAction": {
//             "@type": "SearchAction",
//             "target": "https://sunpeak.com.ng/collection?q={search_term_string}",
//             "query-input": "required name=search_term_string"
//           },
//           "description": "Leading solar services provider in Benin, Nigeria offering solar installation, products, training and instant cost estimates",
//           "inLanguage": "en-NG"
//         })}
//       </script>

//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-[var(--primary-neon)] focus:text-black focus:p-4 focus:z-50"
//       >
//         Skip to main content
//       </a>

//       <ToastContainer
//         position="top-center"
//         toastClassName="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl backdrop-blur-sm"
//         bodyClassName="text-[var(--text)]"
//         progressClassName="bg-[var(--primary-neon)]"
//       />

//       <Navbar />

//       <main id="main-content" className="flex-1">
//         <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
//           <SearchBar />

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/solarpackages"
//               element={
//                 <div itemScope itemType="https://schema.org/OfferCatalog">
//                   <SolarPackagesPage />
//                 </div>
//               }
//             />
//             <Route
//               path="/solarcalculator"
//               element={
//                 <div itemScope itemType="https://schema.org/WebApplication">
//                   <SolarCalculatorPage />
//                 </div>
//               }
//             />
//             <Route
//               path="/training"
//               element={
//                 <div itemScope itemType="https://schema.org/EducationEvent">
//                   <TrainingPrograms />
//                 </div>
//               }
//             />
//             <Route
//               path="/about"
//               element={
//                 <div itemScope itemType="https://schema.org/AboutPage">
//                   <About />
//                 </div>
//               }
//             />
//             <Route
//               path="/contact"
//               element={
//                 <div itemScope itemType="https://schema.org/ContactPage">
//                   <Contact />
//                 </div>
//               }
//             />
//             <Route path="/player/:playerId" element={<Player />} />
//             <Route
//               path="/services"
//               element={
//                 <div itemScope itemType="https://schema.org/Service">
//                   <Services />
//                 </div>
//               }
//             />
//             <Route
//               path="/collection"
//               element={
//                 <div itemScope itemType="https://schema.org/ItemList">
//                   <Collection />
//                 </div>
//               }
//             />
//             <Route
//               path="/product/:productId"
//               element={
//                 <div itemScope itemType="https://schema.org/Product">
//                   <Product />
//                 </div>
//               }
//             />
//           </Routes>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;
