import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='text-center text-2xl'>
        <h1>API Practice using <b className='italic underline'>AXIOS</b></h1>
    </div>
     <div className='flex items-center justify-center gap-10 p-20'>
      <Button variant='contained' color='primary' type='submit' onClick={()=>{navigate(`/users`)}} >User Data</Button>
      <Button variant='contained' color='success' type='submit' onClick={()=>{navigate(`/products`)}}>Product Data</Button>
    </div>
    </>
   
  )
}

export default Home
