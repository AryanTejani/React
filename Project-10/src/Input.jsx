import React from 'react'

const Input = ({handleChange,value,title,name,color}) => {
  return (
    <div>
      <label className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:bg-blue-100 rounded-lg px-3 py-1 transition duration-200 ease-in-out">
          <input onChange={handleChange} value={value} name={name}
            type="radio"
            className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
          />
          <span style={{backgroundColor:color}}>{title}</span>
        </label>
    </div>
  )
}

export default Input