import React from 'react'

function ServiceCard({ service, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold">{service.name}</h2>
      <p className="text-gray-600">{service.description}</p>
      <p className="font-bold text-green-600">₹{service.price}</p>
      <button
        onClick={() => onAddToCart(service)}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ServiceCard;
