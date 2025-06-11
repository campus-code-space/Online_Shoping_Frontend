import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cartItems, dispatch } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-full max-w-3xl mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded">
              <div className="flex-1 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <button
                  onClick={() => dispatch({ type: 'Decrease', id: item.id })}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch({ type: 'Increase', id: item.id })}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch({ type: 'Remove', id: item.id })}
                  className="ml-2 text-sm text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="text-right">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;