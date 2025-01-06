import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {

    const items = ['SSD','CPU','PC','Mouse']

  return (
    <div>
        <h1><FaCartArrowDown/></h1>
        {items.length > 0 && <h1>You have {items.length} iems in your cart.</h1>}
        {
            items.map((x)=>(
                <ul key={Math.random()}>
                    <li>{x}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Cart