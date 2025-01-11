import React from 'react'
import UserContext from './UserContext'
import Userprofile from './components/Userprofile'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <div>
      <UserContext>
        <Userprofile/>
        <UpdateUser/>
      </UserContext>
    </div>
  )
}

export default App