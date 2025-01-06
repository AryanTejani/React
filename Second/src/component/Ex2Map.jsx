import React from 'react'

const Ex2Map = () => {

    const users = [{
        id:1,name:'alice',age:25
    },{
        id:2,name:'sasuke',age:19
    },
    {
        id:3,name:'naruto',age:19
    }]

  return (
    <div>
        {
            users.map((x)=>(
                <ul key={x.id}>
                <li>Name:{x.name}</li>
                <li>Age:{x.age}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Ex2Map