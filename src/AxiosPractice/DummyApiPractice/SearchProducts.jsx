import axios from 'axios'
import React, { useState } from 'react'

const LimitProducts = () => {

    const [limit, setLimit] = useState(10)
    console.log(limit)
    const productSearch = () => {
        axios.get(`https://dummyjson.com/products/?limit=${limit}`).then((res) => {
          setLimit(res.data);
          console.log(limit.data)})}
        console.log(limit);
    
    

  return (
    <div>
      
    </div>
  )
}

export default LimitProducts
