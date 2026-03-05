import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaLightbulb, FaPlug, FaTv, FaFan } from 'react-icons/fa';

const SolarCalculatorPage = () => {
  // ... (keep existing state and logic unchanged)
  
    const [selectedAppliances, setSelectedAppliances] = useState([]);
    const [totalPower, setTotalPower] = useState(0);
    const [contactVisible, setContactVisible] = useState(false);
  
    // Common household appliances with average wattage
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
  
    // Calculation functions
    const calculateSystem = () => {
      const totalWatts = totalPower;
      const kva = (totalWatts / 1000) * 1.2; // 20% buffer
      const panelsNeeded = Math.ceil(totalWatts / 400); // 400W panels
      const batteryCapacity = Math.ceil((totalWatts * 5) / 1000) * 1.2; // 5hrs usage + 20% buffer
      const inverterSize = Math.ceil(totalWatts * 1.25); // 25% surge capacity
  
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
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <div className="bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)/70] rounded-2xl border border-[var(--border)] backdrop-blur-lg p-6 sm:p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8 flex items-center gap-3 animate-fadeIn">
          <div className="p-3 rounded-full bg-[var(--primary-neon)/10] border border-[var(--primary-neon)]">
            <FaPlug className="text-2xl text-[var(--primary-neon)]" />
          </div>
          Solar System Estimator
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appliance Selection */}
          <div className="space-y-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                Select Your Appliances
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    className="p-3 flex items-center gap-2 justify-center border border-[var(--border)] rounded-xl text-[var(--text)] hover:border-[var(--primary-neon)] hover:shadow-glow transition-all"
                  >
                    <span className="text-[var(--primary-neon)]">{cat.icon}</span>
                    {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3 h-[400px] overflow-y-auto pr-3">
                {appliances.map(appliance => (
                  <button
                    key={appliance.name}
                    onClick={() => addAppliance(appliance)}
                    className="p-4 text-left border border-[var(--border)] rounded-xl hover:border-[var(--primary-neon)] hover:shadow-glow text-[var(--text)] transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <span>{appliance.name}</span>
                      <span className="text-sm text-[var(--primary-neon)] bg-[var(--card-bg)] px-2 py-1 rounded-md">
                        {appliance.wattage}W
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Appliances & Results */}
          <div className="space-y-6">
            <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
                Your Selection
              </h3>

              <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-3">
                {selectedAppliances.map(appliance => (
                  <div key={appliance.name} className="flex items-center gap-3 p-3 border border-[var(--border)] rounded-xl hover:border-[var(--primary-neon)] transition-all">
                    <button 
                      onClick={() => removeAppliance(appliance)}
                      className="text-red-500 hover:text-red-400 shrink-0"
                    >
                      ×
                    </button>
                    <span className="flex-grow text-[var(--text)]">{appliance.name}</span>
                    <input
                      type="number"
                      min="1"
                      value={appliance.quantity}
                      onChange={(e) => updateQuantity(appliance, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] text-center"
                    />
                  </div>
                ))}
              </div>

              {totalPower > 0 && (
                <div className="mt-6 p-6 border border-[var(--primary-neon)] rounded-xl bg-gradient-to-br from-[var(--card-bg)] to-[var(--card-bg)/50]">
                  <h4 className="text-xl font-bold text-[var(--primary-neon)] mb-4 flex items-center gap-2">
                    <span className="bg-[var(--primary-neon)] text-[var(--secondary-dark)] p-2 rounded-lg">
                      ⚡
                    </span>
                    System Requirements
                  </h4>
                  
                  <div className="space-y-3 text-[var(--text)]">
                    <div className="flex justify-between items-center">
                      <span>Total Power:</span>
                      <span className="font-semibold">{(totalPower / 1000).toFixed(1)}kW</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Inverter:</span>
                      <span className="font-semibold">{systemEstimate.kva}kVA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Solar Panels:</span>
                      <span className="font-semibold">{systemEstimate.panels}x 400W</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Battery Bank:</span>
                      <span className="font-semibold">{systemEstimate.batteries}kWh</span>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-[var(--border)]">
                      <p className="text-sm text-[var(--text-muted)] mb-2">Includes:</p>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        {systemEstimate.accessories.map(item => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="text-[var(--primary-neon)]">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-[var(--primary-neon)/10] rounded-lg border border-[var(--primary-neon)/20]">
                    <p className="text-sm text-[var(--text-muted)]">
                      ⚠️ Estimates based on 5 hours daily sunlight. Actual requirements may vary based on:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Usage patterns</li>
                        <li>Location factors</li>
                        <li>Equipment efficiency</li>
                      </ul>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <button 
            onClick={() => setContactVisible(!contactVisible)}
            className="w-full sm:w-auto px-8 py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            {contactVisible ? 'Hide Contact' : 'Get Expert Consultation'}
          </button>

          {contactVisible && (
            <div className="mt-6 space-y-4 text-center animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/2348134553751" 
                  className="p-4 border border-[var(--primary-neon)] rounded-xl flex items-center justify-center gap-3 hover:bg-[var(--primary-neon)/10] transition-colors"
                >
                  <FaWhatsapp className="text-2xl text-[var(--primary-neon)]" />
                  <span className="text-[var(--text)]">+234 813 455 3751</span>
                </a>
                <a 
                  href="mailto:info@sunpeak.ng" 
                  className="p-4 border border-[var(--primary-neon)] rounded-xl flex items-center justify-center gap-3 hover:bg-[var(--primary-neon)/10] transition-colors"
                >
                  <FaEnvelope className="text-2xl text-[var(--primary-neon)]" />
                  <span className="text-[var(--text)]">info@sunpeak.ng</span>
                </a>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                Our certified engineers will provide accurate system design and quotation
              </p>
            </div>
          )}

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Note: Professional site assessment recommended for precise system sizing
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculatorPage;