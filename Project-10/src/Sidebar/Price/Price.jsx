import React from "react";
import Input from "../../Input";

const Price = ({handleChange}) => {
  return (
    <div className="bg-white rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Price</h2>
      <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-1 transition duration-200 ease-in-out">
        <input type="radio" onChange={handleChange} 
          value='' title="All" name="test"
          className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"/>
          <span className="text-sm text-gray-700">All</span>
      </label>
      <Input handleChange={handleChange} value={50} title="$0-$50" name='test'></Input>
      <Input handleChange={handleChange} value={100} title="$50-$100" name='test'></Input>
      <Input handleChange={handleChange} value={150} title="$100-$150" name='test'></Input>
      <Input handleChange={handleChange} value={200} title=">$200" name='test'></Input>
    </div>
  );
};

export default Price;
