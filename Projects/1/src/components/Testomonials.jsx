import './testomonials.css'

import React, { useState } from 'react'

const Testomonials = () => {
    const [current,setcurrent] = useState(0)

    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];
    
      const prev = ()=>{
        setcurrent((current + testimonials.length - 1)%testimonials.length)
      }
      const next = ()=>{
        setcurrent((current + 1)%testimonials.length)
      }
  return (
    <div>
        <div className="testimonials-quote">
            {testimonials[current].quote}
        </div>
        <div className="testimonials-author">
            {testimonials[current].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    </div>
  )
}

export default Testomonials