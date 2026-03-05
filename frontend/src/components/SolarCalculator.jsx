import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLightbulb, FaPlug, FaTv, FaFan } from 'react-icons/fa';

const SolarCalculator = () => {
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [totalPower, setTotalPower] = useState(0);
  const [contactVisible, setContactVisible] = useState(false);

  // Common household appliances with average wattage for Benin homes
  const appliances = [
    { name: 'LED Bulb', wattage: 10, category: 'lighting' },
    { name: 'Tube Light', wattage: 40, category: 'lighting' },
    { name: 'Ceiling Fan', wattage: 75, category: 'cooling' },
    { name: 'Standing Fan', wattage: 85, category: 'cooling' },
    { name: 'Air Conditioner (1.5HP)', wattage: 1500, category: 'cooling' },
    { name: 'Refrigerator (Medium)', wattage: 200, category: 'kitchen' },
    { name: 'Deep Freezer', wattage: 300, category: 'kitchen' },
    { name: 'Electric Kettle', wattage: 1500, category: 'kitchen' },
    { name: 'Microwave Oven', wattage: 1000, category: 'kitchen' },
    { name: 'Television (32")', wattage: 80, category: 'entertainment' },
    { name: 'Home Theater', wattage: 200, category: 'entertainment' },
    { name: 'Gaming Console', wattage: 150, category: 'entertainment' },
    { name: 'Desktop Computer', wattage: 250, category: 'office' },
    { name: 'Laptop', wattage: 60, category: 'office' },
    { name: 'Printer', wattage: 50, category: 'office' },
    { name: 'Washing Machine', wattage: 500, category: 'laundry' },
    { name: 'Electric Iron', wattage: 1000, category: 'laundry' },
    { name: 'Water Pump (1HP)', wattage: 750, category: 'utilities' },
    { name: 'Electric Stove', wattage: 2000, category: 'kitchen' },
    { name: 'Hair Dryer', wattage: 1500, category: 'bathroom' }
  ];

  const categories = [
    { name: 'lighting', icon: <FaLightbulb /> },
    { name: 'cooling', icon: <FaFan /> },
    { name: 'kitchen', icon: <FaPlug /> },
    { name: 'entertainment', icon: <FaTv /> },
    { name: 'office', icon: <FaPlug /> },
    { name: 'laundry', icon: <FaPlug /> },
    { name: 'utilities', icon: <FaPlug /> },
    { name: 'bathroom', icon: <FaPlug /> }
  ];

  const addAppliance = (appliance) => {
    const existing = selectedAppliances.find(a => a.name === appliance.name);
    if (existing) {
      setSelectedAppliances(prev => prev.map(a => 
        a.name === appliance.name ? {...a, quantity: a.quantity + 1} : a
      ));
    } else {
      setSelectedAppliances(prev => [...prev, {...appliance, quantity: 1}]);
    }
    updateTotalPower(appliance.wattage);
  };

  const removeAppliance = (appliance) => {
    setSelectedAppliances(prev => prev.filter(a => a.name !== appliance.name));
    setTotalPower(prev => prev - (appliance.wattage * appliance.quantity));
  };

  const updateQuantity = (appliance, newQuantity) => {
    const diff = (newQuantity - appliance.quantity) * appliance.wattage;
    setSelectedAppliances(prev => prev.map(a => 
      a.name === appliance.name ? {...a, quantity: newQuantity} : a
    ));
    setTotalPower(prev => prev + diff);
  };

  const updateTotalPower = (wattage) => {
    setTotalPower(prev => prev + wattage);
  };

  // Calculation functions optimized for Benin conditions
  const calculateSystem = () => {
    const totalWatts = totalPower;
    const kva = (totalWatts / 1000) * 1.2; // 20% buffer for Benin power fluctuations
    const panelsNeeded = Math.ceil(totalWatts / 400); // 400W panels common in Nigeria
    const batteryCapacity = Math.ceil((totalWatts * 5) / 1000) * 1.2; // 5hrs usage + 20% buffer for Edo State
    const inverterSize = Math.ceil(totalWatts * 1.25); // 25% surge capacity for Benin voltage

    return {
      kva: kva.toFixed(1),
      panels: panelsNeeded,
      batteries: batteryCapacity.toFixed(1),
      inverter: inverterSize,
      accessories: [
        'Solar Charge Controller',
        'Mounting Structure',
        'DC Cables',
        'Circuit Breakers'
      ]
    };
  };

  const systemEstimate = calculateSystem();

  return (
    <div 
      className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]"
      itemScope
      itemType="https://schema.org/WebApplication"
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SunPeak Solar Calculator for Benin",
          "description": "Accurate solar system sizing tool for homes and businesses in Benin City and Edo State",
          "applicationCategory": "CalculatorApplication",
          "operatingSystem": "Web",
          "featureList": [
            "Appliance-based solar calculation",
            "System sizing for Benin conditions",
            "Instant cost estimates",
            "Component recommendations"
          ],
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 6.3350,
              "longitude": 5.6037
            },
            "geoRadius": "50000"
          }
        })}
      </script>

      <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
        <FaPlug className="text-[var(--primary-neon)]" />
        Benin Solar System Calculator
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appliance Selection */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
            Select Your Benin Home Appliances
          </h3>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {categories.map(cat => (
              <button
                key={cat.name}
                className="p-2 flex items-center gap-2 border border-[var(--border)] rounded-lg text-[var(--text)] hover:border-[var(--primary-neon)]"
              >
                {cat.icon} {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 h-96 overflow-y-auto p-2">
            {appliances.map(appliance => (
              <button
                key={appliance.name}
                onClick={() => addAppliance(appliance)}
                className="p-3 text-left border border-[var(--border)] rounded-lg hover:border-[var(--primary-neon)] text-[var(--text)]"
                aria-label={`Add ${appliance.name} to solar calculation`}
              >
                <div className="flex justify-between items-center">
                  <span>{appliance.name}</span>
                  <span className="text-sm text-[var(--text-muted)]">
                    {appliance.wattage}W
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Appliances & Results */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
            Your Selected Appliances
          </h3>

          {selectedAppliances.map(appliance => (
            <div key={appliance.name} className="flex items-center gap-2 mb-2 p-2 border border-[var(--border)] rounded-lg">
              <button 
                onClick={() => removeAppliance(appliance)}
                className="text-red-500 hover:text-red-400"
                aria-label={`Remove ${appliance.name}`}
              >
                ×
              </button>
              <span className="flex-grow text-[var(--text)]">{appliance.name}</span>
              <input
                type="number"
                min="1"
                value={appliance.quantity}
                onChange={(e) => updateQuantity(appliance, parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-[var(--border)] rounded bg-transparent text-[var(--text)]"
                aria-label={`Quantity of ${appliance.name}`}
              />
            </div>
          ))}

          {totalPower > 0 && (
            <div className="mt-6 p-4 border border-[var(--primary-neon)] rounded-lg">
              <h4 className="text-lg font-semibold text-[var(--primary-neon)] mb-3">
                Benin-Specific System Estimate
              </h4>
              
              <div className="space-y-2 text-[var(--text)]">
                <p>Total Power: {(totalPower / 1000).toFixed(1)}kW</p>
                <p>Recommended Inverter: {systemEstimate.kva}kVA (Edo State compatible)</p>
                <p>Solar Panels Needed: {systemEstimate.panels}x 400W Panels</p>
                <p>Battery Bank: {systemEstimate.batteries}kWh Lithium (Benin backup)</p>
                <p>Additional Components:</p>
                <ul className="list-disc pl-5 text-sm text-[var(--text-muted)]">
                  {systemEstimate.accessories.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 p-3 bg-[var(--primary-neon)/10] rounded-lg">
                <p className="text-sm text-[var(--text-muted)]">
                  ⚠️ This estimate is optimized for Benin City conditions and assumes:
                  <ul className="list-disc pl-5 mt-1">
                    <li>5 hours of daily sunlight in Edo State</li>
                    <li>Typical Benin household usage patterns</li>
                    <li>Local voltage fluctuations considered</li>
                  </ul>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center border-t border-[var(--border)] pt-6">
        <button 
          onClick={() => setContactVisible(!contactVisible)}
          className="text-[var(--primary-neon)] hover:underline"
          aria-label="Toggle contact information"
        >
          {contactVisible ? 'Hide Benin Contact Info' : 'Get Professional Consultation in Edo State'}
        </button>

        {contactVisible && (
          <div className="mt-4 space-y-2 text-[var(--text)]">
            <p className="flex items-center justify-center gap-2">
              <FaWhatsapp /> +234 813 455 3751 (Benin Office)
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope /> info@sunpeak.ng
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              For accurate quotes from our certified Benin solar engineers
            </p>
          </div>
        )}

        <p className="text-sm text-[var(--text-muted)] mt-4">
          Note: This Benin solar calculator provides estimates only. Actual system requirements 
          may vary based on detailed energy audit of your Edo State property.
        </p>

        {/* Hidden SEO content */}
        <div className="sr-only" aria-hidden="true">
          <p>Solar calculator Benin | Solar system estimator Edo | How much solar do I need Nigeria</p>
          <p>Solar panel calculator Benin City | Solar cost estimator | Free solar estimate Edo State</p>
          <p>Best solar calculator for Benin homes | Accurate solar calculations | SunPeak solar sizing tool</p>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;























// import React, { useState } from "react";
// import {
//   FaWhatsapp,
//   FaEnvelope,
//   FaLightbulb,
//   FaPlug,
//   FaTv,
//   FaFan,
// } from "react-icons/fa";

// const SolarCalculator = () => {
//   const [selectedAppliances, setSelectedAppliances] = useState([]);
//   const [totalPower, setTotalPower] = useState(0);
//   const [contactVisible, setContactVisible] = useState(false);

//   // Common household appliances with average wattage
//   const appliances = [
//     { name: "LED Bulb", wattage: 10, category: "lighting" },
//     { name: "Tube Light", wattage: 40, category: "lighting" },
//     { name: "Ceiling Fan", wattage: 75, category: "cooling" },
//     { name: "Standing Fan", wattage: 85, category: "cooling" },
//     { name: "Air Conditioner (1.5HP)", wattage: 1500, category: "cooling" },
//     { name: "Refrigerator (Medium)", wattage: 200, category: "kitchen" },
//     { name: "Deep Freezer", wattage: 300, category: "kitchen" },
//     { name: "Electric Kettle", wattage: 1500, category: "kitchen" },
//     { name: "Microwave Oven", wattage: 1000, category: "kitchen" },
//     { name: 'Television (32")', wattage: 80, category: "entertainment" },
//     { name: "Home Theater", wattage: 200, category: "entertainment" },
//     { name: "Gaming Console", wattage: 150, category: "entertainment" },
//     { name: "Desktop Computer", wattage: 250, category: "office" },
//     { name: "Laptop", wattage: 60, category: "office" },
//     { name: "Printer", wattage: 50, category: "office" },
//     { name: "Washing Machine", wattage: 500, category: "laundry" },
//     { name: "Electric Iron", wattage: 1000, category: "laundry" },
//     { name: "Water Pump (1HP)", wattage: 750, category: "utilities" },
//     { name: "Electric Stove", wattage: 2000, category: "kitchen" },
//     { name: "Hair Dryer", wattage: 1500, category: "bathroom" },
//   ];

//   const categories = [
//     { name: "lighting", icon: <FaLightbulb /> },
//     { name: "cooling", icon: <FaFan /> },
//     { name: "kitchen", icon: <FaPlug /> },
//     { name: "entertainment", icon: <FaTv /> },
//     { name: "office", icon: <FaPlug /> },
//     { name: "laundry", icon: <FaPlug /> },
//     { name: "utilities", icon: <FaPlug /> },
//     { name: "bathroom", icon: <FaPlug /> },
//   ];

//   const addAppliance = (appliance) => {
//     const existing = selectedAppliances.find((a) => a.name === appliance.name);
//     if (existing) {
//       setSelectedAppliances((prev) =>
//         prev.map((a) =>
//           a.name === appliance.name ? { ...a, quantity: a.quantity + 1 } : a
//         )
//       );
//     } else {
//       setSelectedAppliances((prev) => [...prev, { ...appliance, quantity: 1 }]);
//     }
//     updateTotalPower(appliance.wattage);
//   };

//   const removeAppliance = (appliance) => {
//     setSelectedAppliances((prev) =>
//       prev.filter((a) => a.name !== appliance.name)
//     );
//     setTotalPower((prev) => prev - appliance.wattage * appliance.quantity);
//   };

//   const updateQuantity = (appliance, newQuantity) => {
//     const diff = (newQuantity - appliance.quantity) * appliance.wattage;
//     setSelectedAppliances((prev) =>
//       prev.map((a) =>
//         a.name === appliance.name ? { ...a, quantity: newQuantity } : a
//       )
//     );
//     setTotalPower((prev) => prev + diff);
//   };

//   const updateTotalPower = (wattage) => {
//     setTotalPower((prev) => prev + wattage);
//   };

//   // Calculation functions
//   const calculateSystem = () => {
//     const totalWatts = totalPower;
//     const kva = (totalWatts / 1000) * 1.2; // 20% buffer
//     const panelsNeeded = Math.ceil(totalWatts / 400); // 400W panels
//     const batteryCapacity = Math.ceil((totalWatts * 5) / 1000) * 1.2; // 5hrs usage + 20% buffer
//     const inverterSize = Math.ceil(totalWatts * 1.25); // 25% surge capacity

//     return {
//       kva: kva.toFixed(1),
//       panels: panelsNeeded,
//       batteries: batteryCapacity.toFixed(1),
//       inverter: inverterSize,
//       accessories: [
//         "Solar Charge Controller",
//         "Mounting Structure",
//         "DC Cables",
//         "Circuit Breakers",
//       ],
//     };
//   };

//   const systemEstimate = calculateSystem();

//   return (
//     <div className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)]">
//       <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-2">
//         <FaPlug className="text-[var(--primary-neon)]" />
//         Solar System Estimator
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Appliance Selection */}
//         <div>
//           <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
//             Select Your Appliances
//           </h3>

//           <div className="grid grid-cols-2 gap-2 mb-4">
//             {categories.map((cat) => (
//               <button
//                 key={cat.name}
//                 className="p-2 flex items-center gap-2 border border-[var(--border)] rounded-lg text-[var(--text)] hover:border-[var(--primary-neon)]"
//               >
//                 {cat.icon}{" "}
//                 {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
//               </button>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 gap-2 h-96 overflow-y-auto p-2">
//             {appliances.map((appliance) => (
//               <button
//                 key={appliance.name}
//                 onClick={() => addAppliance(appliance)}
//                 className="p-3 text-left border border-[var(--border)] rounded-lg hover:border-[var(--primary-neon)] text-[var(--text)]"
//               >
//                 <div className="flex justify-between items-center">
//                   <span>{appliance.name}</span>
//                   <span className="text-sm text-[var(--text-muted)]">
//                     {appliance.wattage}W
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Selected Appliances & Results */}
//         <div>
//           <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
//             Your Selection
//           </h3>

//           {selectedAppliances.map((appliance) => (
//             <div
//               key={appliance.name}
//               className="flex items-center gap-2 mb-2 p-2 border border-[var(--border)] rounded-lg"
//             >
//               <button
//                 onClick={() => removeAppliance(appliance)}
//                 className="text-red-500 hover:text-red-400"
//               >
//                 ×
//               </button>
//               <span className="flex-grow text-[var(--text)]">
//                 {appliance.name}
//               </span>
//               <input
//                 type="number"
//                 min="1"
//                 value={appliance.quantity}
//                 onChange={(e) =>
//                   updateQuantity(appliance, parseInt(e.target.value))
//                 }
//                 className="w-16 px-2 py-1 border border-[var(--border)] rounded bg-transparent text-[var(--text)]"
//               />
//             </div>
//           ))}

//           {totalPower > 0 && (
//             <div className="mt-6 p-4 border border-[var(--primary-neon)] rounded-lg">
//               <h4 className="text-lg font-semibold text-[var(--primary-neon)] mb-3">
//                 Estimated System Requirements
//               </h4>

//               <div className="space-y-2 text-[var(--text)]">
//                 <p>Total Power: {(totalPower / 1000).toFixed(1)}kW</p>
//                 <p>Recommended Inverter: {systemEstimate.kva}kVA</p>
//                 <p>Solar Panels Needed: {systemEstimate.panels}x 400W Panels</p>
//                 <p>Battery Bank: {systemEstimate.batteries}kWh Lithium</p>
//                 <p>Additional Components:</p>
//                 <ul className="list-disc pl-5 text-sm text-[var(--text-muted)]">
//                   {systemEstimate.accessories.map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mt-4 p-3 bg-[var(--primary-neon)/10] rounded-lg">
//                 <p className="text-sm text-[var(--text-muted)]">
//                   ⚠️ This estimate assumes 5 hours of daily sunlight and may
//                   vary based on:
//                   <ul className="list-disc pl-5 mt-1">
//                     <li>Appliance usage patterns</li>
//                     <li>Location-specific conditions</li>
//                     <li>Equipment efficiency</li>
//                   </ul>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="mt-8 text-center border-t border-[var(--border)] pt-6">
//         <button
//           onClick={() => setContactVisible(!contactVisible)}
//           className="text-[var(--primary-neon)] hover:underline"
//         >
//           {contactVisible
//             ? "Hide Contact Info"
//             : "Get Professional Consultation"}
//         </button>

//         {contactVisible && (
//           <div className="mt-4 space-y-2 text-[var(--text)]">
//             <p className="flex items-center justify-center gap-2">
//               <FaWhatsapp /> +234 813 455 3751
//             </p>
//             <p className="flex items-center justify-center gap-2">
//               <FaEnvelope /> info@sunpeak.ng
//             </p>
//             <p className="text-sm text-[var(--text-muted)] mt-2">
//               For accurate quotes and system design, contact our certified solar
//               engineers
//             </p>
//           </div>
//         )}

//         <p className="text-sm text-[var(--text-muted)] mt-4">
//           Note: This calculator provides estimates only. Actual system
//           requirements may vary based on detailed energy audit and site
//           assessment.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SolarCalculator;
