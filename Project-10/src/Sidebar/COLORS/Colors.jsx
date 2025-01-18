import React from 'react'
import './colors.css'
import Input from '../../Input'
const Colors = ({handleChange}) => {
  return (
    <div>
      <div className="mt-4 bg-white rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Colors</h2>
      <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-1 transition duration-200 ease-in-out">
        <input type="radio" onChange={handleChange} 
          value='' title="All" name="test"
          className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"/>
          <span className="text-sm text-gray-700">All</span>
      </label>
      <Input handleChange={handleChange} value='black' title="Black" color='black' name='test'></Input>
      <Input handleChange={handleChange} value='blue' title="Blue" color='blue' name='test'></Input>
      <Input handleChange={handleChange} value='red' title="Red" color='red' name='test'></Input>
      <Input handleChange={handleChange} value='white' title="White" color='white' name='test'></Input>
    </div>
    </div>
  )
}

export default Colors