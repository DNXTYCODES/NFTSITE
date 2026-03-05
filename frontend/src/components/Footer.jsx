import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              NFT Marketplace
            </h2>
            <p
              className="text-slate-600 dark:text-slate-400"
              itemProp="description"
            >
              Discover, collect, and trade NFTs on our decentralized marketplace. Explore curated collections and featured tokens.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://twitter.com"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                aria-label="Follow on Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://discord.com"
                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                aria-label="Join Discord"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://github.com"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Follow on GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Follow on Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore links">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Explore
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/discover"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="/collections"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/tokens"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Tokens
                </a>
              </li>
            </ul>
          </nav>

          {/* Trading */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Trading
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="/swap"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Swap
                </a>
              </li>
              <li>
                <a
                  href="/activity"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Activity
                </a>
              </li>
              <li>
                <a
                  href="/drops"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Drops
                </a>
              </li>
              <li>
                <a
                  href="/rewards"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Account
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="/profile"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">
            © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</a>
            <span>•</span>
            <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <p>
            Solar services in Benin, Edo Nigeria | Solar installation near me |
            Solar products including solar powerbanks | How much to get solar
            with our instant estimator tool
          </p>
          <p>
            SunPeak provides solar solutions in Benin City including solar panel
            installation, maintenance services, training programs and referral
            opportunities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { assets } from "../assets/assets";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[var(--bg)] border-t border-[var(--border)]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
//           {/* Brand Info */}
//           <div className="space-y-4">
//             <img
//               src={assets.sunpeaklogo}
//               className="w-40 mb-4"
//               alt="Sun Peak Energy Solutions Logo"
//             />
//             <p className="text-[var(--text-muted)]">
//               Powering Nigeria's future with sustainable solar energy solutions since 2015.
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a href="https://wa.me/2348134553751" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
//                 <FaWhatsapp size={24} />
//               </a>
//               <a href="https://instagram.com/sunpeak.ng" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="https://twitter.com/sunpeak_ng" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="https://linkedin.com/company/sunpeak" className="text-[var(--text-muted)] hover:text-[var(--primary-neon)]">
//                 <FaLinkedin size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Quick Links</h3>
//             <ul className="space-y-2 text-[var(--text-muted)]">
//               <li><a href="/about" className="hover:text-[var(--primary-neon)]">About Us</a></li>
//               <li><a href="/services" className="hover:text-[var(--primary-neon)]">Services</a></li>
//               <li><a href="/training" className="hover:text-[var(--primary-neon)]">Training</a></li>
//               <li><a href="/contact" className="hover:text-[var(--primary-neon)]">Contact</a></li>
//             </ul>
//           </div>

//           {/* Support */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Support</h3>
//             <ul className="space-y-2 text-[var(--text-muted)]">
//               <li><a href="/solarcalculator" className="hover:text-[var(--primary-neon)]">Solar Calculator</a></li>
//               <li><a href="/solarcalculator" className="hover:text-[var(--primary-neon)]">Support</a></li>
//               <li><a href="/collection" className="hover:text-[var(--primary-neon)]">Products</a></li>
//               {/* <li><a href="/privacy" className="hover:text-[var(--primary-neon)]">Privacy Policy</a></li> */}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[var(--text)]">Contact</h3>
//             <ul className="space-y-2 text-[var(--text-muted)]">
//               <li>
//                 <a href="tel:+2348134553751" className="hover:text-[var(--primary-neon)]">
//                   +234 813 455 3751
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:info@sunpeak.ng" className="hover:text-[var(--primary-neon)]">
//                   info@sunpeak.ng
//                 </a>
//               </li>
//               <li>27 First East Circular Road,</li>
//               <li>Benin, Edo</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-[var(--border)] mt-12 pt-8 text-center text-[var(--text-muted)]">
//           <p className="mb-2">
//             © {new Date().getFullYear()} Sun Peak Energy Solutions. All rights reserved.
//           </p>
//           <div className="flex justify-center gap-4 text-sm">
//             <span>NERC Certified</span>
//             <span>•</span>
//             <span>ISO 9001 Certified</span>
//             <span>•</span>
//             <span>Solar Energy Memberships</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
