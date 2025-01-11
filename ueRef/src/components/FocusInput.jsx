import React, { useRef } from 'react'

const FocusInput = () => {
    const inputelement = useRef()
  return (
    <div>
        <input type="text" ref={inputelement}/>
        <button onClick={()=>{
            inputelement.current.focus()
        }}>Focus</button>
    </div>
  )
}

export default FocusInput