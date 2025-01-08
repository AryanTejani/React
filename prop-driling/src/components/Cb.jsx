import React from 'react'
import { Data } from '../App'
import { Data1 } from '../App'
import Cc from './Cc'
const Cb = () => {
  return (
    <div>
        From Cb.jsx
        <Data.Consumer>
            {(name)=>{
            return(
                <Data1.Consumer>
                {
                    (age) =>{
                        return <h1>{name} : {age}</h1>
                    }
                }
                </Data1.Consumer>
            )
        }
    }
        </Data.Consumer>
        <Cc/>
    </div>
  )
}

export default Cb