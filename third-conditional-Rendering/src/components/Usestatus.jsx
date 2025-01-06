import React from 'react'

const Usestatus = () => {
  return (
    <div>
        <Usercomp loggedin = {false}  isAdmin={false}/>
    </div>
  )
}

const Usercomp = (props)=>{
    return (props.isAdmin && props.loggedin)? 'Welcome Admin!' : (props.loggedin)?'Welcome User!':'Please Log in'
}

export default Usestatus