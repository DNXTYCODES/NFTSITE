import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // OLD MENU ITEMS - Keeping for reference
  // const menuItems = [
  //   { name: "Home", path: "/" },
  //   { name: "About_Us", path: "/about" },
  //   { name: "Our_Work", path: "/ourwork" },
  //   { name: "Services", path: "/services" },
  //   { name: "Products", path: "/collection" },
  //   { name: "Solar_Packages", path: "/solarpackages" },
  //   { name: "Training", path: "/training" },
  //   { name: "Solar_Calculator", path: "/solarcalculator" },
  //   { name: "Contact", path: "/contact" },
  // ];

  // NEW NFT MENU ITEMS
  const menuItems = [
    { name: "Explore", path: "/" },
    { name: "Create", path: "/create" },
    { name: "My Items", path: "/my-items" },
    { name: "My Collections", path: "/my-collections" },
    { name: "My Offers", path: "/my-offers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search for:", searchQuery);
  };

  return (
    <>
      {/* NEW OPENSEA-STYLE NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "backdrop-blur-lg bg-slate-900/70 border-b border-slate-700/50"
              : "backdrop-blur-lg bg-white/80 border-b border-slate-200/50"
            : theme === "dark"
              ? "bg-slate-950 border-b border-slate-800/30"
              : "bg-white border-b border-slate-100/50"
        }`}
      >
        <div className="mx-auto w-full max-w-[calc(theme(screens.4xl)+48px)] px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className={`flex items-center gap-2 font-bold text-2xl transition-colors ${
                  theme === "dark"
                    ? "text-white hover:text-blue-400"
                    : "text-slate-900 hover:text-blue-600"
                }`}
              >
                <span>{/* Logo can be added here */}</span>
                <span>NFTMarket</span>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 mx-8 max-w-sm">
              <form onSubmit={handleSearchSubmit} className="w-full">
                <div
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-md border transition-all duration-150 ${
                    theme === "dark"
                      ? "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 focus-within:bg-slate-800"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 focus-within:bg-white"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 flex-shrink-0 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search collections, items..."
                    className={`w-full bg-transparent outline-none text-sm ${
                      theme === "dark"
                        ? "text-white placeholder:text-slate-400"
                        : "text-slate-900 placeholder:text-slate-500"
                    }`}
                  />
                </div>
              </form>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => `
                    px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
                    ${
                      isActive
                        ? theme === "dark"
                          ? "bg-blue-600 text-white"
                          : "bg-blue-100 text-blue-900"
                        : theme === "dark"
                          ? "text-slate-300 hover:bg-slate-800"
                          : "text-slate-700 hover:bg-slate-100"
                    }
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Connect Wallet Button */}
              <button
                className={`hidden md:inline-flex px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-300"
                }`}
              >
                Connect Wallet
              </button>

              {/* Divider */}
              <div
                className={`hidden md:block w-px h-6 ${theme === "dark" ? "bg-slate-700/50" : "bg-slate-300/50"}`}
              ></div>

              {/* Profile/Account */}
              <Link
                to="/profile"
                className={`p-2.5 rounded-md transition-all duration-200 ${
                  theme === "dark"
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
                aria-label="Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 -960 960 960">
                  <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Z" />
                </svg>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-md transition-all duration-200 ${
                  theme === "dark"
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-5.656 5.656a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3.464 4.464a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM5.464 5.464a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-md transition-all duration-200 ${
                  theme === "dark"
                    ? "hover:bg-slate-800 text-slate-300"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OLD NAVBAR - COMMENTED OUT */}
      {/* 
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-[var(--bg)/70]" : "backdrop-blur-none"} border-b border-[var(--border)]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 relative">
            <Link
              to="/"
              className="flex items-center gap-2 group animate-fadeIn z-50"
            >
              <img
                src={assets.sunpeaklogo}
                alt="Sun Peak Energy Solutions"
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-[var(--primary-neon)] font-['Orbitron']">
                SunPeak
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 text-sm font-medium transition-colors
                        ${
                          isActive
                            ? "text-[var(--primary-neon)] border-b-2 border-[var(--primary-neon)]"
                            : "text-[var(--text)] hover:text-[var(--primary-neon)]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 ml-6">
                <button className="px-4 py-2 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-glow transition-all">
                  Get Free Quote
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
                >
                  {theme === "dark" ? "🌞" : "🌙"}
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="text-sm font-medium text-[var(--text)] px-3 py-1 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-[var(--text)] hover:bg-[var(--primary-neon)/10]"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      */}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden ${theme === "dark" ? "bg-slate-950/95" : "bg-white/95"} backdrop-blur-sm`}
        >
          <div
            className={`flex flex-col h-full pt-20 px-4 ${theme === "dark" ? "bg-slate-950" : "bg-white"}`}
          >
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mb-6">
              <div
                className={`flex items-center gap-2 px-3 py-2.5 rounded-md border transition-all ${
                  theme === "dark"
                    ? "bg-slate-800/40 border-slate-700/50"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <svg
                  className={`w-4 h-4 flex-shrink-0 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                  fill="currentColor"
                  viewBox="0 -960 960 960"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className={`w-full bg-transparent outline-none text-sm ${
                    theme === "dark"
                      ? "text-white placeholder:text-slate-400"
                      : "text-slate-900 placeholder:text-slate-500"
                  }`}
                />
              </div>
            </form>

            {/* Mobile Menu Items */}
            <ul className="space-y-2 mb-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `
                      block px-4 py-3 rounded-md font-medium transition-all
                      ${
                        isActive
                          ? theme === "dark"
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-900"
                          : theme === "dark"
                            ? "text-slate-300 hover:bg-slate-800"
                            : "text-slate-700 hover:bg-slate-100"
                      }
                    `}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div
              className="space-y-3 border-t pt-4"
              style={{
                borderColor:
                  theme === "dark" ? "rgb(51, 65, 85)" : "rgb(226, 232, 240)",
              }}
            >
              <button
                className={`w-full px-4 py-3 rounded-md font-medium transition-all ${
                  theme === "dark"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Connect Wallet
              </button>

              <button
                onClick={toggleTheme}
                className={`w-full px-4 py-3 rounded-md font-medium transition-all flex items-center justify-center gap-2 ${
                  theme === "dark"
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {theme === "dark" ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className={`w-full px-4 py-3 rounded-md font-medium transition-all ${
                  theme === "dark"
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
//                         ? 'text-[var(--primary-neon)] border-b-2 border-[var(--primary-neon)]'
//                         : 'text-[var(--text)] hover:text-[var(--primary-neon)]'}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex items-center gap-4 ml-6">
//               <button className="px-4 py-2 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-glow transition-all">
//                 Get Free Quote
//               </button>
//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-lg hover:bg-[var(--primary-neon)/10] transition-colors"
//               >
//                 {theme === 'dark' ? '🌞' : '🌙'}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 text-sm font-medium text-[var(--text)] lg:hidden"
//             >
//               {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//             </button>
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-lg text-[var(--text)] hover:bg-[var(--primary-neon)/10]"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="absolute inset-0 bg-[var(--bg)/95] backdrop-blur-xl">
//           <div className="flex flex-col h-full p-6">
//             <div className="flex justify-between items-center mb-8">
//               <span className="text-2xl font-bold text-[var(--primary-neon)]">Menu</span>
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 className="p-2 text-[var(--text)] hover:text-[var(--primary-neon)]"
//               >
//                 ✕
//               </button>
//             </div>

//             <ul className="space-y-4">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="animate-fadeIn">
//                   <NavLink
//                     to={item.path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `block px-4 py-3 rounded-lg transition-colors
//                       ${isActive
//                         ? 'bg-[var(--primary-neon)] text-[var(--secondary-dark)]'
//                         : 'text-[var(--text)] hover:bg-[var(--primary-neon)/10]'}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 space-y-4">
//               <button className="w-full py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold">
//                 Referral Sign-Up
//               </button>
//               <button className="w-full py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold">
//                 Training Enrollment
//               </button>
//               <button
//                 onClick={toggleTheme}
//                 className="w-full py-3 text-[var(--text)] rounded-lg font-bold hover:bg-[var(--primary-neon)/10] transition-colors"
//               >
//                 {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
