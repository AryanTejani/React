import React, { useState } from 'react'

const Greeting = () => {
    const[name,setName] = useState("");
    const date = new Date();
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="">Enter Your Name : </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button>Submit</button>
        </form>

        <h1>Hello, {name}</h1>
        <p>Date : {date.getDate()}</p>
    </div>
  )
}

export default Greeting