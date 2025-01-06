import React from 'react'

const ValidPass = () => {
    const Validpassword = ()=>{
        return <h1>Valid password</h1>
    }
    const InValidpassword = ()=>{
        return <h1>InValid password</h1>
    }
    const Password = (props)=>{
        return props.isValid ? <Validpassword/> : <InValidpassword/>
    }
    
  return (
    <div>
        <Password isValid={false}/>
    </div>
  )
}


export default ValidPass