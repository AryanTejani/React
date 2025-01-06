import React from 'react'

const Weather = () => {
  return (
    <div>
        <WeatherComp temp={20}/>
    </div>
  )
}

const WeatherComp = (props)=>{
    if(props.temp<15)   return <p>It's Cold Outside</p> 
    else if(props.temp>15 && props.temp<26) return <p>It's nice Outside.</p>
    else    return <p></p>
}

export default Weather