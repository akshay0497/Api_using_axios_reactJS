import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTutorial = () => {
    const[userdata, setUserdata] = useState([])
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUserdata(response.data)
        })
    },[])
  return (
    <div>
      {userdata.map((data)=>{
      return(<h1 key={data.id}>{data.title}</h1>)})}
    </div>
  )
}

export default AxiosTutorial
