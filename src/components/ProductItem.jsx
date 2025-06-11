import React from 'react';

function ProductItem({ product, loading }) {
  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow animate-pulse">
        <div className="h-32 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
      <h2>test message</h2>
      <img
        src={product.image}
        alt={product.name}
        className="h-32 object-contain w-full mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
    </div>
  );
}

export default ProductItem;