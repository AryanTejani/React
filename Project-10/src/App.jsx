import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Product from './Products/Product'
import Recommanded from './Recommanded/Recommanded'
import Sidebar from './Sidebar/Sidebar'
import Loader from './components/Loader/Loader'
import data from './db/data'
import Card from './Products/Card'
const App = () => {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const [query,setQuery] = useState('')

  const handleInputchange = event =>{
    const val = event.target.value
    setQuery(val)
  }

  const filteredItems = data.filter(x => 
    x.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  // Radio filter
  const handleChange = (event)=>{
    const value = event.target.value;
    setSelectedCategory(value);
  }
  // Buttons Filter
  const handleClick = (event)=>{
    const value = event.target.value;
    setSelectedCategory(value);
  }

  function filteredData(products,selected,query){
    let filteredProducts = products;

    //Filtering input items

    if(query){
      filteredProducts = filteredItems
    }

    //selected Filter

    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,
        newPrice,title}) => category === selected || color === selected || 
        company===selected || newPrice === selected || title === selected )
    }
    return filteredProducts.map(({img, title,star,reviews,newPrice,prevPrice})=>{
      return <Card key={Math.random()} 
                    img={img} 
                    title={title} 
                    star={star} 
                    reviews={reviews}
                    newPrice={newPrice}
                    prevPrice={prevPrice}/>
    })
  }

  const result = filteredData(data,selectedCategory,query)
  return (
    <div>

      {/* <Loader/> */}
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputchange={handleInputchange}/>
      <Recommanded handleClick={handleClick}/>
      <Product result={result}/>
      
    </div>
  )
}

export default App