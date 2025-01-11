import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [items,setItems] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await axios.get('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            setItems(data.data.meals);
            console.log(data.data.meals);
            
        }   
        fetchData();
    },[])
  return (
    <div>
        <ul>{items.map((x,i)=>{
            return <li key={i}>
                <h1>{x.strMeal}</h1>
                <img src={x.strMealThumb} alt="" />
                <h2>#{x.idMeal}</h2>
                </li>
        })}</ul>
    </div>
  )
}

export default Meals