import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'
const Card = ({img, title,star,reviews,newPrice,prevPrice}) => {
  return (
    <div>
        <section className="flex flex-wrap z-[-2] h-[450px]">
        <section className="m-[20px] border-solid border-[2px] border-[#ededed] p-[20px] cursor-pointer">
          <img
            src={img}
            className="w-[13rem] mb-[1rem]"
            alt=""
          />
          <div className="card-details">
            <h3 className="mb-[1rem]">{title}</h3>
            <section className="mb-[1rem]">
              <div className="flex justify-between items-center mb-[0.5rem]">
                <div className="flex items-center">
                  {star}
                  <span className="text-[0.9rem] ml-[10px]">{reviews}</span>
                </div>
              </div>
              <div className="flex items-center">
                <del className="text-gray-500">{prevPrice}</del>
                <span className="ml-[10px] mr-[20px] text-black">{newPrice}</span>
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