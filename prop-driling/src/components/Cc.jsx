import React, { useContext } from 'react'
import { Data,Data1 } from '../App'
const Cc = () => {
    const name = useContext(Data)
    const age = useContext(Data1)
  return (
    <div>
        From Cc.jsx <br />
        My name is {name} : Age {age}
    </div>
  )
}

export default Cc