import React from 'react';
import './Recommanded.css';

const Recommanded = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 ml-[20rem] mb-4 font-sans">Recommanded</h2>
      <div className="flex ml-[20rem] space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">All Products</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Nike</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Puma</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Adidas</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Vans</button>
      </div>
    </div>
  );
};

export default Recommanded;
