import React, { useState } from 'react'
import Popup from './Popup'

const Copyinput = () => {
    const [inputval,setInputval] = useState('')
    const [copied,setCopied] = useState(false)

    const handleCopy = ()=>{
        navigator.clipboard.writeText(inputval).then(()=>{
            setCopied(true)
            setTimeout(() => {
                setCopied(false)
            }, 5000);
        })
    }

  return (
    <div>
        <input type="text" value={inputval} onChange={(e)=>setInputval(e.target.value)} />
        <button type="button" onClick={handleCopy}>Copy</button>
        <Popup copied={copied}/>
    </div>
  )
}

export default Copyinput