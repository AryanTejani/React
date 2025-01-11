import React, { useReducer } from 'react'
import CounterBySpecificVal from './components/CounterBySpecificVal';

const initialstate = {count : 0}

const reducer  = (state,action)=>{
  switch (action.type) {
    case 'increament':
      return {...state,count:state.count+1}
      break;
    case 'Decreament':
      return {...state,count:state.count-1}
      break
    case 'Reset':
      return {...state,count:0}
    default:
      break;
  }
}


const App = () => {
  const [state,dispach] = useReducer(reducer,initialstate)
  return (
    <div>
      {/* <h1>Count : {state.count}</h1>
      <button onClick={()=>{ dispach({type:'increament'}) }}>+</button>
      <button onClick={()=>{ dispach({type:'Decreament'}) }}>-</button>
      <button onClick={()=>{dispach({type:'Reset'})}}> Reset </button> */}
      <CounterBySpecificVal/>
    </div>
  )
}

export default App