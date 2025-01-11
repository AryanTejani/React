import React, { useState } from 'react'
import './Calc.css'
const Calculator = () => {
    const [input,setInput] = useState('');

    const clear = ()=>setInput('');

    const display = (val)=>{
        setInput(input + val)
    }

    const calc = ()=>{
        const ans = eval(input);
        setInput(ans);
    }
  return (
    <div>
        <form className="calculator" name='calc' >
            <input type="text" className='value' value={input}/>
            <span class="num clear" onClick={() => clear()}>
            c
            </span>  
            <span onClick={()=>display('/')}>/</span>
            <span onClick={()=>display('*')}>*</span> 
            <span onClick={()=>display('7')}>7</span> 
            <span onClick={()=>display('8')}>8</span> 
            <span onClick={()=>display('9')}>9</span> 
            <span onClick={()=>display('-')}>-</span> 
            <span onClick={()=>display('4')}>4</span>
            <span onClick={()=>display('5')}>5</span>
            <span onClick={()=>display('6')}>6</span>
            <span onClick={()=>display('+')} className='plus'>+</span>
            <span onClick={()=>display('1')}>1</span> 
            <span onClick={()=>display('2')}>2</span>
            <span onClick={()=>display('3')}>3</span> 
            <span onClick={()=>display('0')}>0</span>
            <span onClick={()=>display('00')}>00</span>
            <span onClick={()=>display('.')}>.</span>   
            <span onClick={()=>calc()} className='num equal'>=</span>       
        </form>
    </div>
  )
}

export default Calculator