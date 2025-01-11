import React from 'react'
// import Fetch from './components/useFetch'
import useFetch from './components/useFetch';

const App = () => {

  const {data} = useFetch('https://dummyjson.com/todos');
  return (
    <div>
      {data && 
        data.map((item)=>{
          return <p key={item.id}>{item.id} : {item.todo}</p>
        })}
    </div>
  )
}

export default App