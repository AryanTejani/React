import React from 'react'
import Todo from './components/Todo'
import './App.css'
import Meals from './components/Meals'
import Calculator from './components/Calculator'
import ColorToggler from './components/Color-Toggler'
import HiddenSearchbar from './components/HiddenSearchbar'
import Testomonials from './components/Testomonials'
import Accordian from './components/Accordian'
import { accordionData } from './components/content'
const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ColorToggler/> */}
      {/* <HiddenSearchbar/> */}
      {/* <Testomonials/> */}
      {/* <div className="accordion">
        {accordionData.map(({ id,title, content }) => (
          <Accordian key={id} title={title} content={content} />
        ))}
      </div> */}
      <Form/>
    </div>
  )
}

export default App