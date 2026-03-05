import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [products]);

  // Solar loading animation component
  const SolarLoader = () => (
    <div className="flex flex-col justify-center items-center py-16 col-span-full">
      <div className="relative w-20 h-20 mb-4">
        {/* Sun core */}
        <div className="absolute inset-0 rounded-full bg-[var(--primary-neon)] animate-pulse"></div>
        
        {/* Sun rays */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-2 h-8 bg-[var(--primary-neon)] rounded-full"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-30px)`,
              transformOrigin: '0 0',
              opacity: 0.7,
              animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s`
            }}
          ></div>
        ))}
      </div>
      <p className="text-[var(--text-muted)] text-center">
        Loading solar products...<br/>Please wait
      </p>
    </div>
  );
  

  return (
    <section 
      className="py-16 bg-[var(--bg)] transition-colors duration-300"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Latest Solar Products in Benin, Nigeria" />
      <meta itemProp="description" content="Newest solar panels, powerbanks, and accessories available at SunPeak Benin" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Structured data header */}
        <header className="text-center mb-12">
          <div className="inline-block relative pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)]">
              <span className="text-[var(--primary-neon)]">Latest</span> Solar Products in Benin
            </h1>
            <div className="absolute bottom-0 left-1/2 w-32 h-1 bg-[var(--primary-neon)] transform -translate-x-1/2 opacity-50 rounded-full" />
          </div>
          <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto">
            Explore our newest solar technologies optimized for Nigerian homes and businesses
          </p>
          {/* Hidden SEO content */}
          <div className="sr-only" aria-hidden="true">
            <p>Solar products Benin | Solar powerbanks Nigeria | Latest solar panels Edo | Buy solar products in Benin City</p>
            <p>Solar accessories | Solar batteries | Solar inverters | Solar charge controllers | Solar installation kits</p>
            <p>Affordable solar products | Professional solar equipment | SunPeak solar store</p>
          </div>
        </header>

        {/* Loading state */}
        {isLoading ? (
          <SolarLoader />
        ) : (
          /* Product grid with enhanced schema markup */
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {latestProducts.map((item, index) => (
              <article 
                key={index} 
                itemScope 
                itemType="https://schema.org/Product"
                className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl"
              >
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
                {/* Enhanced structured data */}
                <meta itemProp="name" content={item.name} />
                <meta itemProp="category" content="Solar Energy Products" />
                <meta itemProp="url" content={`https://sunpeak.com.ng/product/${item._id}`} />
                <meta itemProp="position" content={index + 1} />
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="NGN" />
                  <meta itemProp="price" content={item.price} />
                  <meta itemProp="priceValidUntil" content="2025-12-31" />
                  <meta itemProp="itemCondition" content="https://schema.org/NewCondition" />
                  <link itemProp="availability" href="https://schema.org/InStock" />
                  <meta itemProp="seller" content="SunPeak Solar Services" />
                </div>
              </article>
            ))}
          </div>
        )}
        
        {/* Hidden category list for SEO */}
        <div className="sr-only" aria-hidden="true">
          <h2>Solar Product Categories in Benin</h2>
          <ul>
            <li>Solar Panels</li>
            <li>Solar Power Banks</li>
            <li>Solar Inverters</li>
            <li>Solar Batteries</li>
            <li>Solar Charge Controllers</li>
            <li>Solar Installation Kits</li>
            <li>Solar Accessories</li>
            <li>Solar Lighting Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;

































// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (products.length > 0) {
//       setLatestProducts(products.slice(0, 10));
//       setIsLoading(false);
//     } else {
//       setIsLoading(true);
//     }
//   }, [products]);

//   // Solar loading animation component
//   const SolarLoader = () => (
//   <div className="flex flex-col justify-center items-center py-16 col-span-full">
//     <div className="relative w-20 h-20 mb-4">
//       {/* Sun core */}
//       <div className="absolute inset-0 rounded-full bg-[var(--primary-neon)] animate-pulse"></div>
      
//       {/* Sun rays */}
//       {[...Array(8)].map((_, i) => (
//         <div 
//           key={i}
//           className="absolute top-1/2 left-1/2 w-2 h-8 bg-[var(--primary-neon)] rounded-full"
//           style={{
//             transform: `rotate(${i * 45}deg) translateY(-30px)`,
//             transformOrigin: '0 0',
//             opacity: 0.7,
//             animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s`
//           }}
//         ></div>
//       ))}
//     </div>
//     <p className="text-[var(--text-muted)] text-center">
//       Loading solar products...<br/>Please wait
//     </p>
//   </div>
// );
  

//   return (
//     <section className="py-16 bg-[var(--bg)] transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Structured data header */}
//         <header className="text-center mb-12" itemScope itemType="https://schema.org/ItemList">
//           <div className="inline-block relative pb-4">
//             <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text)]" itemProp="name">
//               <span className="text-[var(--primary-neon)]">Latest</span> Solar Products
//             </h1>
//             <div className="absolute bottom-0 left-1/2 w-32 h-1 bg-[var(--primary-neon)] transform -translate-x-1/2 opacity-50 rounded-full" />
//           </div>
//           <p className="mt-4 text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto" itemProp="description">
//             Explore our newest solar technologies optimized for Nigerian homes and businesses
//           </p>
//           {/* Hidden SEO content */}
//           <div className="sr-only" aria-hidden="true">
//             <p>New Solar Products Nigeria | Latest Solar Panels Lagos | Solar Energy Innovations</p>
//             <p>2024 Solar Technology | Nigerian Solar Market | Renewable Energy Updates</p>
//           </div>
//         </header>

//         {/* Loading state */}
//         {isLoading ? (
//           <SolarLoader />
//         ) : (
//           /* Product grid with schema markup */
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
//               itemScope itemType="https://schema.org/ItemList">
//             {latestProducts.map((item, index) => (
//               <article key={index} itemScope itemType="https://schema.org/Product"
//                       className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl">
//                 <ProductItem
//                   id={item._id}
//                   name={item.name}
//                   image={item.image}
//                   price={item.price}
//                   itemProp="itemListElement"
//                 />
//                 {/* Structured data for search engines */}
//                 <meta itemProp="position" content={index + 1} />
//                 <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
//                   <meta itemProp="priceCurrency" content="NGN" />
//                   <meta itemProp="price" content={item.price} />
//                   <link itemProp="availability" href="https://schema.org/InStock" />
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default LatestCollection;