import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserSearch from './UserSearch'

const UsersAPI = () => {

    const apiUrls = "https://dummyjson.com/users"
    const [userdata, setUserData] = useState([])
    const [isloading, setIsloading] = useState(false)
    const [search, setSearch] = useState('');
    const [show, setShow] = useState([]);
    const navigate = useNavigate();


    // useEffect(() => {
    //     setIsloading(true);
    //     try {
    //         axios.get(apiUrls)
    //             .then((response) => {
    //                 console.log(userdata, "data1")
    //                 setUserData(response.data.users)
    //                 console.log(userdata, "data")
    //                 setIsloading(false);

    //             })
    //     } catch { return false }
    // }, [])

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/search?q=${search}`)
            .then((res) => {
                // setShow(res.data.users)
                setUserData(res.data.users)
                console.log(res.data.users,"bharat")
            })
    }, [search]);

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
    }
    return (
        <>
            {isloading ? (
                <div className="flex justify-center items-center h-screen">
                    <CircularProgress />
                </div>
            ) : (
                <div className='bg-gray-800/10'>
                    <div className="flex justify-center items-center font-bold text-3xl">
                        <h1>User Profile Data</h1>
                    </div>
                    <div className='text-end px-10'>
                        <input
                            type='text'
                            value={search}
                            onChange={handleChange}
                            placeholder='Search user data '
                            className='h-10 rounded p-2 w-72 bg-transparent'
                        />
                        <button type='submit'
                            onClick={() => navigate(`/users/search?q=${search}`)}
                            className='mx-5 bg-[#0275d8] w-20 h-10 text-[#fff] font-semibold p-1 rounded-md'
                        >Search</button>
                    </div>
        
                    <div className='grid grid-cols-3 gap-5 py-5 px-5'>
                        {userdata?.map((lst) => {
                            return (
                                <div key={lst.id} >
                                    <div className='rounded grid grid-cols-2 border border-white'>
                                        <img src={lst.image} className='py-16 bg-transparent' />
                                        <div className='py-5 px-3 truncate'>
                                            <b>username:</b><br /> <i>{lst.username}</i>
                                            <h1><b>First Name:</b><br /> {lst.firstName} </h1>
                                            <h1> <b>Last Name:</b><br /> {lst.lastName} </h1>
                                            <h1><b>Age:</b><br /> {lst.age}</h1>
                                            <h1><b>Email:</b><br /> {lst.email}</h1>
                                            <h1><b>Phone:</b><br /> {lst.phone} </h1>
                                        </div>
                                        <button type='submit' className='bg-[#0275d8] w-24 h-9 m-1 text-white rounded font-semibold'
                                            onClick={() => navigate(`/usersdetails/${lst.id}`)}
                                        >See Details</button>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            )
            }
        </>
    )

}

export default UsersAPI


