import React, { useRef } from 'react'
import { use } from 'react'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'

const App = () => {
  const inputelement = useRef(null)
  return (
    <div>
      {/* <input type="text" ref={inputelement} /> */}
      <FocusInput/>
      <Timer/>
    </div>
  )
}

export default App