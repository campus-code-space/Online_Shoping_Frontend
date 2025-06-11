import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VendorProfile() {
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('http://localhost:8000/api/vendor/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(response => {
      setVendor(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Failed to load vendor profile:', error);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading profile...</div>;

  if (!vendor) return <div>Error loading profile</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Vendor Profile</h2>
      <p><strong>Name:</strong> {vendor.name}</p>
      <p><strong>Email:</strong> {vendor.email}</p>
      <p><strong>Shop Name:</strong> {vendor.shop_name}</p>
      <p><strong>Phone:</strong> {vendor.phone}</p>
      {/* Add more fields as needed */}
    </div>
  );
}

export default VendorProfile;