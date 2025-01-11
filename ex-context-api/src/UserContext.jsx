import React, { createContext, useContext, useState } from 'react'


export const UserCont = createContext()

const UserContext = ({children}) => {
  const [name,setName] = useState({name:"aryan tejani"})

  const updated = (update)=>{
    setName({name:update})
  }
  return (
    <div>
      <UserCont.Provider value={{name,updated}}>
        {children}
      </UserCont.Provider>
    </div>
  )
}

export default UserContext