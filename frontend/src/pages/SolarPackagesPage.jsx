import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaBatteryFull, FaTachometerAlt, FaRegStar, FaSolarPanel, FaMoneyBillWave, FaPhoneAlt, FaPlug, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
import Title from '../components/Title';
import SolarPackagesLoader from '../components/SolarPackagesLoader';

const SolarPackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch packages from API
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
        const response = await fetch(`${backendUrl}/api/solarpackage/list`);
        
        if (!response.ok) {
          throw new Error(`Failed to load packages: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Handle API response - could be array or object with packages property
        const packageList = Array.isArray(data) ? data : (data.packages || []);
        
        // Transform API data to component format
        const transformedPackages = packageList.map((pkg) => ({
          _id: pkg._id,
          name: pkg.name || 'Unknown Package',
          price: pkg.price || 0,
          description: pkg.description || '',
          energyOutput: pkg.energyOutput || 'Not specified',
          image: pkg.image || [],
          specifications: Array.isArray(pkg.specifications) ? pkg.specifications : [],
          powerCapabilities: Array.isArray(pkg.powerCapabilities) ? pkg.powerCapabilities : [],
          warranty: pkg.warranty || 'Standard warranty',
          popular: pkg.popular || false
        }));
        
        // Sort by price for better user experience
        transformedPackages.sort((a, b) => a.price - b.price);
        setPackages(transformedPackages);
      } catch (err) {
        console.error('Error fetching solar packages:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Show loader while fetching
  if (loading) {
    return <SolarPackagesLoader />;
  }

  const defaultPackages = [
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
      energyOutput: '2-3kWh daily',
      popular: true
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
      name: 'Bronze Home Package',
      price: 900000,
      capacity: '1kVA',
      features: [
        '4x 180W Solar Panels',
        '220Ah Batteries',
        '1KVA Inverter',
        'Standard Installation',
        '2-Year Warranty'
      ],
      devices: [
        'Blender (1)',
        'TV (1)',
        'Fan (3)',
        'Bulb (8)',
        'Decoder (1)'
      ],
      bestFor: '3-4 bedroom homes',
      energyOutput: '6-7kWh daily'
    },
    {
      name: 'Silver Home System',
      price: 1200000,
      capacity: '1.5kVA',
      features: [
        '3x 320W Solar Panels',
        '1x 220Ah Batteries',
        '1.5KVA Inverter, 12V',
        'MPPT Controller 60A',
        'Professional Installation',
        '3-Year Warranty',
        'Basic Monitoring'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (1)',
        'Fan (2)',
        'Bulb (10)',
        'Decoder (1)'
      ],
      bestFor: '4-5 bedroom homes with appliances',
      energyOutput: '8-10kWh daily',
      popular: true
    },
    {
      name: 'Gold Home System',
      price: 1550000,
      capacity: '2.5kVA',
      features: [
        '6x 200W Solar Panels',
        '2x 220Ah Batteries',
        '2.5kVA Inverter, 24V',
        'PMW Controller 60A',
        'Standard Installation',
        '3-Year Warranty'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (2)',
        'Fan (3)'
      ],
      bestFor: 'Medium homes with essential appliances',
      energyOutput: '10-12kWh daily'
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
      name: 'Premium Home System',
      price: 1900000,
      capacity: '3.5kVA',
      features: [
        '6x 320W Solar Panels',
        '2x 220Ah Batteries',
        '3.5kVA Inverter, 24V',
        'MPPT Controller 60A',
        'Standard Installation',
        '3-Year Warranty'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (2)',
        'Fan (3)'
      ],
      bestFor: 'Medium homes with essential appliances',
      energyOutput: '10-12kWh daily'
    },
    {
      name: 'Premium Plus System',
      price: 2300000,
      capacity: '3.5kVA',
      features: [
        '9x 320W Solar Panels',
        '2x 220Ah Batteries',
        '3.5kVA Inverter, 24V',
        'MPPT Controller 60A',
        'Professional Installation',
        '5-Year Warranty'
      ],
      devices: [
        'Fridge (1)',
        'Blender (2)',
        'Washing Machine (1)',
        'TV (6)',
        'Borehole Pump (1)'
      ],
      bestFor: 'Homes with borehole and heavy appliances',
      energyOutput: '15-18kWh daily'
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
      name: 'ProEnergy Solar System',
      price: 3900000,
      capacity: '5kVA',
      features: [
        '12x 320W Solar Panels',
        '4x 220Ah Batteries',
        '5kVA Inverter, 48V',
        'MPPT Controller 60A',
        'Advanced Installation',
        '5-Year Warranty'
      ],
      devices: [
        'Fridge (1)',
        'Blender (1)',
        'Washing Machine (1)',
        'TV (2)',
        'Fan (3)'
      ],
      bestFor: 'Large homes or small offices',
      energyOutput: '25-30kWh daily'
    },
    {
      name: 'UltraGrid Lithium System',
      price: 5400000,
      capacity: '10kW',
      features: [
        '12x 460W Solar Panels',
        '10kWh Lithium Battery',
        '15kVA Inverter',
        'Professional Installation',
        '5-Year Warranty',
        '24/7 Support'
      ],
      devices: [
        'Fridge (2)',
        'Blender (2)',
        'Washing Machine (1)',
        'TV (3)',
        'Fan (5)',
        'Borehole Pump (1)',
        'Air Conditioner (1)'
      ],
      bestFor: 'Large homes & businesses',
      energyOutput: '35-40kWh daily',
      popular: true
    },
    {
      name: 'MegaPower Lithium System',
      price: 7000000,
      capacity: '15kW',
      features: [
        '12x 460W Solar Panels (Premium)',
        '15kWh Lithium Battery',
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
        'Air Conditioner (3)',
        'Office Equipment'
      ],
      bestFor: 'Commercial establishments',
      energyOutput: '50-60kWh daily'
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

  // Use fetched packages or fallback to defaults
  const displayPackages = packages.length > 0 ? packages : defaultPackages;

  return (
    <section className="min-h-screen bg-[var(--bg)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500 rounded-lg flex items-start gap-3">
            <FaExclamationTriangle className="text-red-500 flex-shrink-0 mt-1" />
            <div>
              <p className="text-red-500 font-semibold">Unable to load solar packages</p>
              <p className="text-red-500/80 text-sm mt-1">{error}</p>
              <p className="text-red-500/70 text-sm mt-2">Showing default packages. Please refresh or contact support.</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] flex items-center justify-center gap-3">
            <FaSolarPanel className="text-[var(--primary-neon)]" />
            Complete Solar Package Solutions
          </h1>
          <p className="text-xl text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">
            Comprehensive solar systems for every need - from small homes to large enterprises in Benin
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayPackages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--primary-neon)] transition-colors ${pkg.popular ? 'ring-2 ring-[var(--primary-neon)]' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[var(--primary-neon)] text-[var(--bg)] px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center gap-1">
                  <FaRegStar /> Popular Choice
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[var(--text)]">{pkg.name}</h3>
                <p className="text-[var(--text-muted)] mt-1">{pkg.bestFor}</p>
              </div>

              <div className="text-[var(--primary-neon)] text-4xl font-bold mb-6">
                ₦{typeof pkg.price === 'string' ? pkg.price : (pkg.price || 0).toLocaleString()}
              </div>

           {/*   <div className="flex items-center gap-2 text-[var(--text-muted)] mb-4">
                <FaBatteryFull />
                <span>{pkg.capacity} System Capacity</span>
              </div>*/}

              <div className="flex items-center gap-2 text-[var(--text-muted)] mb-6">
                <FaTachometerAlt />
                <span>Energy Output: {pkg.energyOutput}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {(pkg.specifications && pkg.specifications.length > 0 ? pkg.specifications : pkg.features || []).map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-2 text-[var(--text-muted)]"
                  >
                    <FaCheck className="text-[var(--primary-neon)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 mb-4">
                <p className="font-medium text-[var(--text)] flex items-center gap-2 mb-2">
                  <FaPlug className="text-[var(--primary-neon)]" />
                  Can Power:
                </p>
                <ul className="grid grid-cols-2 gap-1">
                  {(pkg.powerCapabilities && pkg.powerCapabilities.length > 0 ? pkg.powerCapabilities : pkg.devices || []).map((device, idx) => (
                    <li key={idx} className="text-[var(--text-muted)] text-sm">
                      • {device}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/2348134553751"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary-neon)] text-[var(--bg)] rounded-lg font-bold hover:shadow-glow mt-4"
              >
                <FaWhatsapp /> Get Package Details
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mb-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaTachometerAlt className="text-[var(--primary-neon)]" />
            Package Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="text-left border-b border-[var(--border)]">
                  <th className="pb-4 text-[var(--text)] min-w-[200px]">Feature</th>
                  {displayPackages.map((pkg, index) => (
                    <th key={index} className="pb-4 text-[var(--text)] min-w-[180px]">{pkg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 text-[var(--text-muted)]">Price</td>
                  {displayPackages.map((pkg, index) => (
                    <td key={index} className="py-4 text-[var(--text)] font-medium">
                      ₦{typeof pkg.price === 'string' ? pkg.price : (pkg.price || 0).toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 text-[var(--text-muted)]">Daily Energy Output</td>
                  {displayPackages.map((pkg, index) => (
                    <td key={index} className="py-4 text-[var(--text)]">
                      {pkg.energyOutput}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 text-[var(--text-muted)]">Key Appliances</td>
                  {displayPackages.map((pkg, index) => (
                    <td key={index} className="py-4 text-[var(--text)]">
                      <ul className="space-y-1">
                        {(pkg.powerCapabilities || pkg.devices || []).slice(0, 12).map((device, idx) => (
                          <li key={idx} className="text-sm">• {device}</li>
                        ))}
                        {(pkg.powerCapabilities || pkg.devices || []).length > 12 && <li className="text-sm">+ {(pkg.powerCapabilities || pkg.devices || []).length - 12} more</li>}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-4 text-[var(--text-muted)]">Warranty</td>
                  {displayPackages.map((pkg, index) => (
                    <td key={index} className="py-4 text-[var(--text)]">
                      {pkg.warranty || (pkg.features && pkg.features.find(f => f.includes('Warranty'))) || '-'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 text-[var(--text-muted)]">Best For</td>
                  {displayPackages.map((pkg, index) => (
                    <td key={index} className="py-4 text-[var(--text)]">
                      {pkg.bestFor || pkg.description || '-'}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 p-8 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-8 flex items-center gap-2">
            <FaMoneyBillWave className="text-[var(--primary-neon)]" />
            Package FAQs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                What's included in the package price?
              </h3>
              <p className="text-[var(--text-muted)]">
                All prices include solar panels, batteries, inverter, charge controller, installation, VAT, and basic commissioning. Structural modifications are quoted separately.
              </p>
            </div>

            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                Can I customize these packages?
              </h3>
              <p className="text-[var(--text-muted)]">
                Absolutely! We can modify any package to meet your specific energy needs. Contact us for custom solutions tailored to your home or business.
              </p>
            </div>

            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                How long does installation take?
              </h3>
              <p className="text-[var(--text-muted)]">
                Most residential installations take 2-3 days. Commercial systems may take 5-7 days. We provide a detailed timeline after site assessment.
              </p>
            </div>

            <div className="border border-[var(--border)] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                What maintenance is required?
              </h3>
              <p className="text-[var(--text-muted)]">
                Solar systems require minimal maintenance. We recommend panel cleaning every 3-6 months and battery checks annually. We offer maintenance packages.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-[var(--border)] pt-12">
          <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
            Need a Custom Solar Solution?
          </h3>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
            Our engineers will design a bespoke solar system tailored to your exact energy requirements in Benin
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/2348134553751"
              className="px-8 py-4 bg-[var(--primary-neon)] text-[var(--bg)] rounded-xl font-bold hover:shadow-glow flex items-center justify-center gap-2"
            >
              <FaWhatsapp /> Chat with Solar Engineer
            </a>
            <a
              href="tel:+2348134553751"
              className="px-8 py-4 border-2 border-[var(--primary-neon)] text-[var(--primary-neon)] rounded-xl font-bold hover:bg-[var(--primary-neon)/10] flex items-center justify-center gap-2"
            >
              <FaPhoneAlt /> Call +234 813 455 3751
            </a>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-6">
            Free site assessment and energy audit for all Benin City residents
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolarPackagesPage;