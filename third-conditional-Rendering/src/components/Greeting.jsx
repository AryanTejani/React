import React from 'react'

const Greeting = () => {
  return (
    <div>
        <Greetingcomp timeofTheday={'afternoon'}/>
    </div>
  )
}

const Greetingcomp = (props)=>{
    return (props.timeofTheday == 'morning')? 'Good Morning!' : 'Good Afternoon!'
}


export default Greeting