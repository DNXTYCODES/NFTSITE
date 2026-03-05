import React from "react";
import { assets } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Brand Info */}
          <div className="space-y-4">
            <img
              src={assets.sunpeaklogo}
              className="w-40 mb-4"
              alt="SunPeak Solar Services in Benin, Edo, Nigeria"
              itemProp="logo"
            />
            <p
              className="text-slate-600 dark:text-slate-400"
              itemProp="description"
            >
              Leading solar company in Benin providing solar installation,
              products, and training since 2015. Use our solar cost estimator
              for instant quotes.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/2348134553751"
                className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Contact SunPeak on WhatsApp"
                itemProp="sameAs"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://instagram.com/sunpeak.ng"
                className="text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Follow SunPeak on Instagram"
                itemProp="sameAs"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com/sunpeak_ng"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                aria-label="Follow SunPeak on Twitter"
                itemProp="sameAs"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/company/sunpeak"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                aria-label="Connect with SunPeak on LinkedIn"
                itemProp="sameAs"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  itemProp="url"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Solar Services
                </a>
              </li>
              <li>
                <a
                  href="/training"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Solar Training
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Support & Tools
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="/solarcalculator"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  itemProp="makesOffer"
                >
                  Solar Cost Estimator
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Solar Products
                </a>
              </li>
              <li>
                <a
                  href="/referral"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            itemScope
            itemType="https://schema.org/PostalAddress"
            itemProp="address"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li itemProp="telephone">
                <a
                  href="tel:+2348134553751"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +234 813 455 3751
                </a>
              </li>
              <li itemProp="email">
                <a
                  href="mailto:info@sunpeak.ng"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  info@sunpeak.ng
                </a>
              </li>
              <li itemProp="streetAddress">27 First East Circular Road,</li>
              <li>
                <span itemProp="addressLocality">Benin</span>,
                <span itemProp="addressRegion"> Edo</span>
              </li>
              <li itemProp="addressCountry">Nigeria</li>
            </ul>
          </div>

          <div
            itemScope
            itemType="https://schema.org/PostalAddress"
            itemProp="address"
          >
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Website Designer Contact
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li itemProp="telephone">
                <a
                  href="tel:+2349061404264"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +234 906 140 4264 (Call and WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 text-center text-slate-600 dark:text-slate-400">
          <p className="mb-2">
            © {new Date().getFullYear()} SunPeak Solar Services. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span itemProp="memberOf">NERC Certified</span>
            <span>•</span>
            <span itemProp="memberOf">ISO 9001 Certified</span>
            <span>•</span>
            <span itemProp="memberOf">Solar Energy Association of Nigeria</span>
          </div>
        </div>

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
