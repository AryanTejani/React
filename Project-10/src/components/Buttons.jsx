import React from 'react'

const Buttons = ({onClickhandler,value,title}) => {
  return (
    <div>
        <button 
        className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
        value={value}
        onClick={onClickhandler}>{title}</button>
    </div>
  )
}

export default Buttons