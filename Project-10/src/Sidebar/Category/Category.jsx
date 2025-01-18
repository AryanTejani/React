import React from "react";
import Input from "../../Input";

const Category = ({handleChange}) => {
  return (
    <>
    <div className="mb-4 bg-white rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Category</h2>
      <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-1 transition duration-200 ease-in-out">
        <input type="radio" onChange={handleChange} 
          value='' title="All" name="test"
          className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"/>
          <span className="text-sm text-gray-700">All</span>
      </label>
      <Input handleChange={handleChange} value='sneakers' title="Sneakers" name='test'></Input>
      <Input handleChange={handleChange} value='flats' title="Flats" name='test'></Input>
      <Input handleChange={handleChange} value='sandals' title="Sandals" name='test'></Input>
      <Input handleChange={handleChange} value='heels' title="Heels" name='test'></Input>
    </div>
    </>
    
  );
};

export default Category;
