import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const ListSolarPackages = ({ token }) => {
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/solarpackage/list`);
      if (response.data.success) {
        setPackages(response.data.packages);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch packages');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this package?')) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/solarpackage/remove`,
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setPackages(packages.filter(pkg => pkg._id !== id));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleEdit = (pkg) => {
    setEditingId(pkg._id);
    setEditData({
      ...pkg,
      specifications: pkg.specifications.join('\n'),
      powerCapabilities: pkg.powerCapabilities.join('\n')
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData(null);
  };

  const handleEditChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveEdit = async () => {
    try {
      const specArray = editData.specifications
        .split('\n')
        .map(spec => spec.trim())
        .filter(spec => spec !== '');
      
      const powerArray = editData.powerCapabilities
        .split('\n')
        .map(power => power.trim())
        .filter(power => power !== '');

      const response = await axios.post(
        `${backendUrl}/api/solarpackage/update`,
        {
          id: editData._id,
          name: editData.name,
          description: editData.description,
          price: editData.price,
          energyOutput: editData.energyOutput,
          warranty: editData.warranty,
          specifications: JSON.stringify(specArray),
          powerCapabilities: JSON.stringify(powerArray)
        },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setEditingId(null);
        setEditData(null);
        fetchPackages();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading packages...</div>;
  }

  return (
    <div className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--border)]">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Solar Packages</h2>

      {packages.length === 0 ? (
        <p className="text-[var(--text-muted)]">No packages found. Create one to get started!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="text-left py-3 px-4 text-[var(--text)]">Image</th>
                <th className="text-left py-3 px-4 text-[var(--text)]">Name</th>
                <th className="text-left py-3 px-4 text-[var(--text)]">Price</th>
                <th className="text-left py-3 px-4 text-[var(--text)]">Energy Output</th>
                <th className="text-left py-3 px-4 text-[var(--text)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg._id} className="border-b border-[var(--border)]">
                  <td className="py-3 px-4">
                    <img src={pkg.image[0]} alt={pkg.name} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="py-3 px-4 text-[var(--text)]">{pkg.name}</td>
                  <td className="py-3 px-4 text-[var(--text)]">₦{pkg.price.toLocaleString()}</td>
                  <td className="py-3 px-4 text-[var(--text)]">{pkg.energyOutput}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="mr-3 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingId && editData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
            <h3 className="text-2xl font-bold text-[var(--text)] mb-6">Edit Solar Package</h3>

            {/* Edit Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Package Name</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleEditChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
              />
            </div>

            {/* Edit Price */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Price (₦)</label>
              <input
                type="number"
                value={editData.price}
                onChange={(e) => handleEditChange('price', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
              />
            </div>

            {/* Edit Energy Output */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Energy Output</label>
              <input
                type="text"
                value={editData.energyOutput}
                onChange={(e) => handleEditChange('energyOutput', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
              />
            </div>

            {/* Edit Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Description</label>
              <textarea
                value={editData.description}
                onChange={(e) => handleEditChange('description', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-20"
              />
            </div>

            {/* Edit Specifications */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Specifications (One per line)</label>
              <textarea
                value={editData.specifications}
                onChange={(e) => handleEditChange('specifications', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-24 font-mono text-sm"
              />
            </div>

            {/* Edit Power Capabilities */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">What it Can Power (One per line)</label>
              <textarea
                value={editData.powerCapabilities}
                onChange={(e) => handleEditChange('powerCapabilities', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)] h-24 font-mono text-sm"
              />
            </div>

            {/* Edit Warranty */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[var(--text)] mb-2">Warranty</label>
              <select
                value={editData.warranty}
                onChange={(e) => handleEditChange('warranty', e.target.value)}
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--text)] focus:outline-none focus:border-[var(--primary-neon)]"
              >
                <option value="1-Year Warranty">1-Year Warranty</option>
                <option value="3-Year Warranty">3-Year Warranty</option>
                <option value="5-Year Warranty">5-Year Warranty</option>
                <option value="10-Year Warranty">10-Year Warranty</option>
                <option value="Lifetime Warranty">Lifetime Warranty</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSaveEdit}
                className="flex-1 px-6 py-3 bg-[var(--primary-neon)] text-[var(--secondary-dark)] rounded-lg font-bold hover:shadow-[0_0_30px_-5px_var(--primary-neon)] transition-all"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="flex-1 px-6 py-3 bg-[var(--border)] text-[var(--text)] rounded-lg font-bold hover:bg-[var(--border)]/80 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListSolarPackages;
