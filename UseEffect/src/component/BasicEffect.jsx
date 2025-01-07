import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
        console.log('Use effect');
    })
  return (
    <div>
        <p>Hi there</p>
    </div>
  )
}

export default BasicEffect