import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const TimerComp = useRef(null)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        TimerComp.current = setInterval(() => {
            console.log('hi there');
            setCount(count+1)
        }, 1000);
        return ()=>{
            clearInterval(TimerComp.current);
        }
    })

  return (
    <div>
        <h1>Timer : {count} seconds</h1>
        <button onClick={()=>{
            clearInterval(TimerComp.current)
        }}>Stop</button>
    </div>
  )
}

export default Timer