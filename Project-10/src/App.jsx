import React from 'react'
import Nav from './Navigation/Nav'
import Product from './Products/Product'
import Recommanded from './Recommanded/Recommanded'
import Sidebar from './Sidebar/Sidebar'
import Loader from './components/Loader/Loader'

const App = () => {

  return (
    <div>
      {/* <Loader/> */}
      <Sidebar />
      <Nav/>
      <Recommanded/>
      <Product classname=''/>
      
    </div>
  )
}

export default App