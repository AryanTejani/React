import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div>
        <h1 className='text-xl font-bold'>Welcome to My Website</h1>
      </div>
      <div>
        <nav className='space-x-4'>
          <a href="#" className='text-blue-500 hover:text-blue-700'>Home</a>
          <a href="#" className='text-blue-500 hover:text-blue-700'>About</a>
          <a href="#" className='text-blue-500 hover:text-blue-700'>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
