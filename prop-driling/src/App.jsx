import React, { createContext } from 'react'
import Ca from './components/Ca'

export const Data = createContext()
export const Data1 = createContext()
const App = () => {
  const name = 'Aryan Tejani'
  const age = 18
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
      <Ca/>
      </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default App