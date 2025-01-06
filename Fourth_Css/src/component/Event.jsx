import React from 'react'

const Event = () => {
  return (
    <div>
        <Button/>
    </div>
  )
}

const Button = ()=>{
    return <button onClick={()=>{console.log('Click by you');
    }}>click</button>
}

const Copy = ()=>{
    return <p>lorence bishnoi</p>
}

export default Event