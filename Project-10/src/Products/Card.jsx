import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'
const Card = () => {
  return (
    <div>
        <section className="flex flex-wrap z-[-2]">
        <section className="m-[20px] border-solid border-[2px] border-[#ededed] p-[20px] cursor-pointer">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            className="w-[13rem] mb-[1rem]"
            alt=""
          />
          <div className="card-details">
            <h3 className="mb-[1rem]">Shoes</h3>
            <section className="mb-[1rem]">
              <div className="flex justify-between items-center mb-[0.5rem]">
                <div className="flex items-center">
                  <AiFillStar className="text-[#d5ab55]" />
                  <AiFillStar className="text-[#d5ab55]" />
                  <AiFillStar className="text-[#d5ab55]" />
                  <AiFillStar className="text-[#d5ab55]" />
                  <span className="text-[0.9rem] ml-[10px]">4</span>
                </div>
              </div>
              <div className="flex items-center">
                <del className="text-gray-500">$300</del>
                <span className="ml-[10px] mr-[20px] text-black">$200</span>
                <FaShoppingBag className="text-[#535353]" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Card