import React, { useState } from 'react'

const Todo = () => {
    const [mt,setMt] = useState([]);
    const [dt,setDt] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(dt.trim()){
            setMt([...mt,dt]);
        }
        setDt('');
    }

    const removeTodo = (ind)=>{
        setMt(mt.filter((_,index) => index!==ind))
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your task' value={dt}
        onChange={(e)=>setDt(e.target.value)}/>
        <button type='submit'>Add</button>
        </form>
        <ul>
        {
            mt.map((x,ind)=>(
                <li key={ind}>
                    <span>Task : {x}</span>
                    <button onClick={()=>removeTodo(ind)}>Remove</button>
                </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Todo