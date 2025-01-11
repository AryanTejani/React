import React, { useContext, useState } from 'react'
import { UserCont } from '../UserContext';

const UpdateUser = () => {
    const {updated} = useContext(UserCont)
    const [updatedUser,setupdatedUser] = useState('');

    const handleshubmit = (e)=>{
      e.preventDefault()
      if(updatedUser.trim()){
        updated(updatedUser)
        setupdatedUser('')
      }
    }

  return (
    <div>
        <h2>Update Name : </h2>
        <form onSubmit={handleshubmit}>
          <input type="text" placeholder='enter a new name' 
          value={updatedUser} onChange={(e)=>setupdatedUser(e.target.value)} />
          <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser