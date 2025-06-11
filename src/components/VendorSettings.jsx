import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VendorSettings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shop_name: '',
    phone: ''
  });

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/vendor/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(res => {
      setFormData(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to load settings:', err);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/vendor/profile', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(() => setStatus('Profile updated successfully.'))
    .catch(() => setStatus('Failed to update profile.'));
  };

  if (loading) return <div>Loading settings...</div>;

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-md p-6 rounded-md">
      <h2 className="text-xl font-bold mb-4">Vendor Settings</h2>
      {status && <div className="mb-3 text-sm text-green-600">{status}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Shop Name</label>
          <input
            type="text"
            name="shop_name"
            value={formData.shop_name || ''}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default VendorSettings;