import React, { useState } from 'react'
import './toggle.css'
const ColorToggler = () => {
    const [bg,setBg] = useState('white')
    const [textcolor,setTextcolor] = useState('#1b1b1b')
    const [buttonstyle,setButtonstyle] = useState('white')

    const handleClick = ()=>{
        setBg(bg === 'white' ? '#1b1b1b' : 'white')
        setTextcolor(textcolor === '#1b1b1b' ? '#ffa13a' : '#1b1b1b')
        setButtonstyle(bg === 'white' ? '#1b1b1b':'white')
    }

  return (
    <div style={{backgroundColor:bg,color:textcolor}}>
        <button style=
        {{backgroundColor:buttonstyle,
        color:textcolor,
        border:`2px solid ${textcolor}`}}
        onClick={handleClick}>Toggle</button>
         <p>{bg === '#1b1b1b' ? 'Black Theme' : 'White Theme'}</p>
        <section className="content">
            <h1>Welcome To A<br />Real World...</h1>
        </section>
    </div>
  )
}

export default ColorToggler