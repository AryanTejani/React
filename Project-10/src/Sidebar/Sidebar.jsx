import React from 'react'
import Price from './Price/Price'
import Color from './COLORS/Colors'
import Category from './Category/Category'
import { FaShoppingCart } from 'react-icons/fa'
import './Sidebar.css'
const Sidebar = ({handleChange}) => {
  return (
    <div>
      <section className="w-[15%] fixed border-r-[2px] border-solid border-[#e5e5e5] z-[3] flex flex-col items-center">
        <div className="mb-[4rem]">
        <h1 className='mt-[1.5rem]'><FaShoppingCart /></h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
      </section>
    </div>
  )
}

export default Sidebar