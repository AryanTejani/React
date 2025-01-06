import React from 'react'

const MapComp = () => {
    const lst = [1,2,3,4,5]
  return (
    <div>{lst.map((x) => (
        <ul>
            <li>{x}</li>
        </ul>
    ))}</div>
  )
}

export default MapComp