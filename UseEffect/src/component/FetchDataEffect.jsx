import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const FetchDataEffect = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
        setData(res.data);
        }
        fetchData()
    },[])
  return (
    <div>
        <ul>
        {
            data.map((x)=>(
                <li key={x.id}>title : {x.title}</li>
            ))
        }
        </ul>

    </div>
  )
}

export default FetchDataEffect