import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null)

    useEffect(()=>{
      const fetchData = async()=>{
      try{
      const json = await axios.get(url);
      setData(json.data.todos);
    }
      catch(e){
        console.log(e,"Some error occur whjile fetching data.");
      }
    }
    fetchData();
    },[url]);
    return {data};
}

export default useFetch