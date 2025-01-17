import React from 'react'
import './colors.css'
import Input from '../../Input'
const Colors = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Colors</h2>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
    </div>
    </div>
  )
}

export default Colors