import React from 'react'

const ProductInfo = () => {
    const product = 'Laptop';
    const price = '$1200';
    const availability = 'In stock';
  return (
    <div>
        <p>name : {product}</p>
        <p>price : {price}</p>
        <p>availability : {availability}</p>
    </div>
  )
}

export default ProductInfo