import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { backendUrl } from '../App';

const AddSolarPackage = ({ token }) => {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    energyOutput: '',
    warranty: '5-Year Warranty',
    specifications: '',
    powerCapabilities: ''
  });

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    setImages(prev => ({ ...prev, [field]: file }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const form = new FormData();
      
      form.append('name', formData.name);
      form.append('description', formData.description);
      form.append('price', formData.price);
      form.append('energyOutput', formData.energyOutput);
      form.append('warranty', formData.warranty);
      
      // Parse specifications (comma-separated to array)
      const specArray = formData.specifications
        .split('\n')
        .map(spec => spec.trim())
        .filter(spec => spec !== '');
      form.append('specifications', JSON.stringify(specArray));
      
      // Parse power capabilities (comma-separated to array)
      const powerArray = formData.powerCapabilities
        .split('\n')
        .map(power => power.trim())
        .filter(power => power !== '');
      form.append('powerCapabilities', JSON.stringify(powerArray));
      
      // Add images
      Object.entries(images).forEach(([key, value]) => {
        if (value) form.append(key, value);
      });

      const response = await axios.post(`${backendUrl}/api/solarpackage/add`, form, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success(response.data.message);
        // Reset form
        setFormData({
          name: '',
          description: '',
          price: '',
          energyOutput: '',
          warranty: '5-Year Warranty',
          specifications: '',
          powerCapabilities: ''
        });
        setImages({
          image1: null,
          image2: null,
          image3: null,
          image4: null
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border)] max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Add Solar Package</h2>

      {/* Package Media Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Package Images (At least one image required)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['image1', 'image2', 'image3', 'image4'].map((field) => (
            <label
              key={field}
              htmlFor={field}
              className="aspect-square border-2 border-dashed border-[var(--border)] rounded-xl hover:border-[var(--primary-neon)] transition-colors cursor-pointer flex items-center justify-center"
            >
              {images[field] ? (
                <img 
                  src={URL.createObjectURL(images[field])} 
                  alt="Preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center p-4">
                  <p className="text-sm text-[var(--text-muted)]">Image</p>
                </div>
              )}
              <input
                hidden
                id={field}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, field)}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Package Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Package Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="e.g., ProEnergy Solar System"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
          required
        />
      </div>

      {/* Price */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Price (₦)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="3900000"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
          required
        />
      </div>

      {/* Energy Output */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Energy Output <span className="text-[var(--text-muted)] text-xs">(Optional)</span></label>
        <input
          type="text"
          name="energyOutput"
          value={formData.energyOutput}
          onChange={handleInputChange}
          placeholder="e.g., 25-30kWh daily"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Enter package description"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-24"
          required
        />
      </div>

      {/* Specifications */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Specifications (One per line) <span className="text-[var(--text-muted)] text-xs">(Optional)</span></label>
        <textarea
          name="specifications"
          value={formData.specifications}
          onChange={handleInputChange}
          placeholder="12x 320W Solar Panels&#10;4x 220Ah Batteries&#10;5kVA Inverter, 48V&#10;MPPT Controller 60A&#10;Advanced Installation"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-28 font-mono text-sm"
        />
      </div>

      {/* Power Capabilities */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">What it Can Power (One per line) <span className="text-[var(--text-muted)] text-xs">(Optional)</span></label>
        <textarea
          name="powerCapabilities"
          value={formData.powerCapabilities}
          onChange={handleInputChange}
          placeholder="Fridge (1)&#10;Blender (1)&#10;Washing Machine (1)&#10;TV (2)&#10;Fan (3)"
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-28 font-mono text-sm"
        />
      </div>

      {/* Warranty */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[var(--text)] mb-2">Warranty</label>
        <select
          name="warranty"
          value={formData.warranty}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
        >
          <option value="1-Year Warranty">1-Year Warranty</option>
          <option value="3-Year Warranty">3-Year Warranty</option>
          <option value="5-Year Warranty">5-Year Warranty</option>
          <option value="10-Year Warranty">10-Year Warranty</option>
          <option value="Lifetime Warranty">Lifetime Warranty</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-[0_0_30px_-5px_var(--primary-neon)] transition-all duration-300"
      >
        Add Solar Package
      </button>
    </form>
  );
};

export default AddSolarPackage;
