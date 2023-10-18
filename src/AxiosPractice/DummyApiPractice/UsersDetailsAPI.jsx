import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UsersDetailsAPI = () => {

  const [userdetails, setUserdetails] = useState()
  const { id } = useParams()
  const apiUrls = `https://dummyjson.com/users/${id}`

  useEffect(() => {
    console.log(id);
    axios.get(apiUrls)
      .then((res) => {
        setUserdetails(res.data);
        console.log(userdetails, "first")
      })
  }, [id])

  return (
    <div className='bg-[rgba(0,0,0,0.7)] text-[#fff] h-screen'>
      <h1 className='text-center text-4xl font-semibold py-3'>User's Profile</h1>
      <p className='px-20 text-xl'>Details:-</p>
      <div className='mx-10 my-3 border rounded-2xl py-2'>
        <div className='grid grid-cols-2 gap-10 px-10'>
          <div>
            <img src={userdetails?.image} className='rounded-full bg-[rgba(0,0,0,0.64)] !w-40 mx-auto my-10' />
            <div className='italic underline py-5 font-semibold'>Personal Information:</div>
            <div className='grid grid-cols-2 px-5 '>
              <h1>First Name: <span>{userdetails?.firstName}</span></h1>
              <h1>Last Name: <span>{userdetails?.lastName}</span></h1>
              <h1>Maiden Name: <span>{userdetails?.maidenName}</span></h1>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-2 '>
              <div>
                <div className='italic underline font-semibold'>Other Details: </div>
                <div className='px-5'>
                  <p>Gender: <span>{userdetails?.gender}</span></p>
                  <p>Date of Birth: {userdetails?.birthDate}</p>
                  <p>Phone Number: <small>{userdetails?.phone}</small></p>
                  <p>Email: <span>{userdetails?.email}</span></p>
                </div>
              </div>

              <div className='px-5 py-5'>
                <p>Blood Group : {userdetails?.bloodGroup}</p>
                <p>Height: {userdetails?.height}</p>
                <p>Weight: {userdetails?.weight}</p>
                <p>Eye Color : {userdetails?.eyeColor}</p>
                <p>Hair Color: {userdetails?.hair?.color}</p>
                <p>Hair Type : {userdetails?.hair?.type}</p>
              </div>
            </div>

            <div className='grid grid-cols-2'>
              <div>
                <div className='italic underline font-semibold'>Bank Details:</div>
                <div className='px-5'>
                  <p>Card Number : <small className='font-semibold text-[14px]'>{userdetails?.bank?.cardNumber}</small></p>
                  <p>Card Expire: {userdetails?.bank?.cardExpire}</p>
                  <p>Card Type: {userdetails?.bank?.cardType}</p>
                  <p>Currency : {userdetails?.bank?.currency}</p>
                  <p>IBAN: {userdetails?.bank?.iban}</p>
                </div>
              </div>

              <div>
                <div className='italic underline font-semibold'>Company Details:</div>
                <div className='px-5'>
                  <h1>Department:  {userdetails?.company?.department}</h1>
                  <h1>Name:  {userdetails?.company?.name}</h1>
                  <h1>Title:  {userdetails?.company?.title}</h1>
                  <h1>Address: {userdetails?.company?.address?.address}</h1>
                  <h1>City: {userdetails?.company?.address?.city}</h1>
                  <h1>Postal Code: {userdetails?.company?.address?.postalCode}</h1>
                  <h1>State: {userdetails?.company?.address?.state}</h1>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
      <hr></hr>
      <div className='underline italic font-semibold px-20 py-2 '>Network Details:</div>
      <div className='grid grid-cols-3 px-24  text-xs'>
        <div>
          <h1>Domain : {userdetails?.domain}</h1>
          <h1 className='py-1'>IP Address : {userdetails?.ip}</h1>
        </div>

        <div>
          <h1>MAC Address : {userdetails?.macAddress}</h1>
          <h1 className='py-1'>University : {userdetails?.university}</h1>
        </div>

        <div>
          <h1>EIN : {userdetails?.ein}</h1>
          <h1 className='py-1'>SSN : {userdetails?.ssn}</h1>
          <h1>User Agent : <p>{userdetails?.userAgent}</p></h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default UsersDetailsAPI

