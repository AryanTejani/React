import React from 'react';
import './Recommanded.css';
import Buttons from '../components/Buttons';

const Recommanded = ({handleClick}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 ml-[20rem] mb-4 font-sans">Recommanded</h2>
      <div className="flex ml-[20rem] space-x-4">
        <Buttons onClickhandler={handleClick} value='' title='All Products'/> 
       <Buttons onClickhandler={handleClick} value='Nike' title='Nike'/>  
        <Buttons onClickhandler={handleClick} value='Puma' title='Puma'/> 
        <Buttons onClickhandler={handleClick} value='Vans' title='Vans'/>
        <Buttons onClickhandler={handleClick} value='Adidas' title='Adidas'/>  
      </div>
    </div>
  );
};

export default Recommanded;
