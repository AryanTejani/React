import React, { useReducer, useState } from 'react'
import { initialVal, reducer } from './counterreducer'

// const initialVal = {count:0}
const CounterBySpecificVal = () => {
    const [state,dispach] = useReducer(reducer,initialVal);
    const [input,setInput] = useState(0);
  return (
    <div>
        <input type="text" placeholder='Enter a Value' value={input} 
        onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>
            {
                dispach({type:'increament',payload:parseInt(input,10)})
                setInput(0)
            }}>+</button>
        <button onClick={()=>{
            dispach({type:'decreament',payload:parseInt(input,10)})
            setInput(0)
            }}>-</button>
        <h1>Count : {state.count}</h1>
    </div>
  )
}

export default CounterBySpecificVal