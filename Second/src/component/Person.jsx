import React from 'react'

const Person = () => {

  return (
    <div>
        <PersonInfo name = 'Aryan' age = {18}/>
    </div>
  )
}


const PersonInfo = (props)=>{
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <p>Age : {props.age}</p>
        </div>
    )
}


export default Person