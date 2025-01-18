import React from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Nav = ({handleInputchange,query}) => {
  return (
    <nav className="flex border-b-2 border-[#f3f3f3] justify-around items-center p-5 z-[999] ml-8">
      <div className="nav-container">
      <input
          className="px-5 py-3 bg-[#f7f6f6] rounded-md outline-none w-56"
          type="text"
          onChange={handleInputchange}
          value={query}
          placeholder="Enter your search shoes"
        />
      </div>
      <div className="profile-container flex space-x-8">
        <a href="#" className="href">
          <FaHeart className="w-6 h-6 text-gray-700 hover:text-red-500" />
        </a>
        <a href="#" className="href">
          <AiOutlineShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-500" />
        </a>
        <a href="#" className="href">
          <AiOutlineUserAdd className="w-6 h-6 text-gray-700 hover:text-green-500" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
