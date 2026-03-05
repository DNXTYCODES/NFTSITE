import React from 'react';
import { FaWhatsapp, FaSolarPanel, FaBatteryFull, FaTachometerAlt, FaRegStar, FaPhoneAlt, FaPlug, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolarPackages = () => {
  const packages = [
    {
      name: 'Mini Solar Package',
      price: 450000,
      capacity: '1000W',
      features: [
        '2x 180W Solar Panels',
        '1x 100Ah Battery',
        '1000W Inverter',
        'Basic Installation',
        '1-Year Warranty'
      ],
      devices: [
        'TV (1)',
        'Fan (2)',
        'Bulb (6)',
        'Decoder (1)'
      ],
      bestFor: 'Small apartment or 1-2 room home',
      energyOutput: '2-3kWh daily'
    },
    {
      name: 'Essential Home Package',
      price: 760000,
      capacity: '1000W',
      features: [
        '3x 180W Solar Panels',
        '220Ah Batteries',
        '1000W Inverter',
        'Basic Installation',
        '1-Year Warranty'
      ],
      devices: [
        'TV (1)',
        'Fan (3)',
        'Bulb (8)',
        'Decoder (1)'
      ],
      bestFor: '2-3 bedroom homes',
      energyOutput: '4-5kWh daily'
    },
    {
      name: 'Platinum Home Solution',
      price: 1800000,
      capacity: '2.5kVA',
      features: [
        '6x 320W Solar Panels',
        '1x 220Ah Batteries',
        '2.5KVA Inverter, 24V',
        'MPPT Controller 60A',
        'Professional Installation',
        '3-Year Warranty',
        'Smart Monitoring'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (2)',
        'Fan (3)',
        'Bulb (15)'
      ],
      bestFor: 'Large homes with multiple appliances',
      energyOutput: '12-15kWh daily'
    },
    {
      name: 'PowerMax Lithium System',
      price: 3100000,
      capacity: '5KW',
      features: [
        '6x 460W Solar Panels',
        '5kWh Lithium Battery',
        '3kVA Inverter',
        'Advanced Installation',
        '5-Year Warranty',
        'Smart Monitoring'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (2)',
        'Fan (3)',
        'Borehole Pump (1)'
      ],
      bestFor: 'Medium homes & offices',
      energyOutput: '20-25kWh daily'
    },
    {
      name: 'UltraPower plus Lithium System',
      price: 7800000,
      capacity: '17.5kWh',
      features: [
        '12x 560W Solar Panels (Premium)',
        '17.5kW Lithium Battery',
        '10kVA Inverter',
        'Industrial Installation',
        '10-Year Warranty',
        'Energy Management System',
        'Priority Support'
      ],
      devices: [
        'Fridge (3)',
        'Blender (2)',
        'Washing Machine (2)',
        'TV (5)',
        'Fan (8)',
        'Borehole Pump (1)',
        'Air Conditioner (5)',
        'Office Equipment'
      ],
      bestFor: 'High-end Commercial establishments',
      energyOutput: '50-60kWh daily'
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg)]"
      itemScope 
      itemType="https://schema.org/ProductCollection"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProductCollection",
          "name": "Solar Packages in Benin",
          "description": "Complete solar power solutions for homes and businesses in Benin, Edo State",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Solar Packages",
            "itemListElement": packages.map((pkg, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "name": pkg.name,
              "description": `${pkg.capacity} solar system for ${pkg.coverage}`,
              "price": pkg.price,
              "priceCurrency": "NGN",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "https://schema.org/InStock",
              "url": "https://sunpeak.com.ng/solarpackages",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 6.3350,
                  "longitude": 5.6037
                },
                "geoRadius": "50000"
              }
            }))
          }
        })}
      </script>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] flex items-center justify-center gap-3">
            <FaSolarPanel className="text-[var(--primary-neon)]" />
            Solar Packages in <span className="text-[var(--primary-neon)]">Benin</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mt-2">
            Complete solar power solutions for homes and businesses in Edo State
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors ${pkg.popular ? 'ring-2 ring-[var(--primary-neon)]' : ''}`}
              itemScope
              itemType="https://schema.org/Offer"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-[var(--bg)] px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center gap-1">
                  <FaRegStar /> Most Popular in Benin
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[var(--text)]" itemProp="name">{pkg.name}</h3>
                <div className="text-[var(--primary-neon)] text-4xl font-bold my-4" itemProp="price">
                  ₦{(pkg.price).toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-2 text-[var(--text-muted)]">
                  <FaBatteryFull />
                  <span itemProp="description">{pkg.capacity} System for {pkg.coverage}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                {pkg.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                    itemProp="itemOffered"
                  >
                    <span className="text-[var(--primary-neon)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 mb-6">
                <p className="font-medium text-[var(--text)] flex items-center gap-2">
                  <FaPlug className="text-[var(--primary-neon)]" />
                  Can Power:
                </p>
                <ul className="mt-2 space-y-2">
                  {pkg.devices.map((device, idx) => (
                    <li key={idx} className="text-[var(--text-muted)] text-sm">
                      • {device}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-[var(--primary)] mb-4">
                <FaTachometerAlt />
                Energy Output: {pkg.energyOutput}
              </div>

              <a
                href="https://wa.me/2348134553751"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-bold hover:shadow-glow"
                aria-label={`Get ${pkg.name} solar package in Benin`}
              >
                <FaWhatsapp /> Get This Package
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-[var(--border)] pt-12">
          <p className="text-[var(--text-muted)] mb-4">
            Prices include VAT and professional installation in Benin City. Custom solar solutions available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/solarpackages"
              className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold hover:bg-[var(--primary-neon)/10] transition-colors"
              aria-label="View all solar packages in Benin"
            >
              View All Packages <FaArrowRight className="text-sm" />
            </Link>
            <a
              href="tel:+2348134553751"
              className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-lg font-bold hover:bg-[var(--primary-neon)/10] transition-colors"
              aria-label="Call for custom solar quote in Edo State"
            >
              <FaPhoneAlt /> Call for Custom Quote
            </a>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-4">
            All packages come with free site assessment and energy audit in Benin
          </p>
        </div>

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <p>Solar packages Benin | Solar system prices Edo | Solar panel installation Nigeria</p>
          <p>Best solar packages in Benin City | Affordable solar solutions Edo State | SunPeak solar offers</p>
          <p>1kVA solar system price | 3.5kVA solar package cost | 5kVA solar installation Benin</p>
        </div>
      </div>
    </section>
  );
};

export default SolarPackages;