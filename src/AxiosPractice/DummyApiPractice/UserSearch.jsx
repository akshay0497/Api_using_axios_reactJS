import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserSearch = () => {

    const [search, setSearch] = useState('');
    const [show, setShow] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/search?q=${search}`)
        .then((res)=>{
            setShow(res.data)
            console.log(setShow)
            console.log(show)
        })
    }, [search]);

    const handleChange =(e)=>{
        // e.preventDefault()
        setSearch(e.target.value);
    }

    return (
        <>
        {show?(<h1>Data not Found</h1>):(<div>
            <h1>{show?.username}</h1>asdas
        </div>)}
        </>
    )
}

export default UserSearch
