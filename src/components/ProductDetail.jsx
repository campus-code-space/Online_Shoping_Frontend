import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/products/${id}`)
  //     .then(response => {
  //       setProduct(response.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error('Failed to fetch product:', err);
  //       setError(true);
  //       setLoading(false);
  //     });
  // }, [id]);

  if (loading) return <div className="p-4 text-gray-500">Loading...</div>;
  if (error || !product) return <div className="p-4 text-red-500">Failed to load product.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-md mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-80 object-contain rounded" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-2">${product.price}</p>
          {product.discount && (
            <p className="text-sm text-red-500">Discount: ${product.discount}</p>
          )}
          <p className="text-sm text-gray-600">Stock: {product.stock_quantity}</p>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
