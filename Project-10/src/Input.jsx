import React from 'react'

const Input = () => {
  return (
    <div>
      <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-1 transition duration-200 ease-in-out">
          <input
            type="radio"
            name="test2"
            className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
          />
          <span className="text-sm text-gray-700">X</span>
        </label>
    </div>
  )
}

export default Input