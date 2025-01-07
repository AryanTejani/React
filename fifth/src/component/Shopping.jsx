import React, { useState } from 'react'

const Shopping = () => {

    const [items,setItems] = useState([])
    const [i1,seti1] = useState('')
    const [i2,seti2] = useState('')

    const handleClick1 = (e)=>{
        e.preventDefault()
        if(i1.trim() && i2.trim()){
            const newitem = {
                name:i1,
                quantity:i2
            }
            setItems((previtem)=>([...previtem,newitem]))
        }
        seti1('')
        seti2('')
    }

  return (
    <div>
        <form action="" onSubmit={handleClick1}>
        <input type="text" placeholder='Enter name of the product' value={i1} 
        onChange={(e)=>seti1(e.target.value)
        }/><br/>
        <input type="text" placeholder='Enter quantity of the product' value={i2} 
        onChange={(e)=>seti2(e.target.value)}/><br/>
        <button type='submit'>Show item</button>
        </form>
        <ul>
            {
                items.map((x,ind)=>(
                    <li key={ind}>Name : {x.name} -- Quantity : {x.quantity}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Shopping