import React from 'react'
import Cart from './components/Card'
import ValidPass from './components/ValidPass'
import Weather from './components/Weather'
import Usestatus from './components/Usestatus'
import Greeting from './components/Greeting'
const App = () => {
  return (
    <div>
      <Cart/>
      <ValidPass/>
      <Weather/>
      <Usestatus/>
      <Greeting/>
    </div>
  )
}

export default App