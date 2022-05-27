import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState(null)
    const {id} = useParams()
    useEffect(()=> {
        setLoading(true)
        axios({
            url: `https://reqres.in/api/users/${id}`,
            method: "GET",
        })
        .then((res) => {
            setLoading(false);
            setData(res.data);
        })
        .catch((err) => {
            setLoading(false);
        })
    }, [data?.data.id])
    console.log(data)
  return (
    <div>
        {loading && <div>Loading...</div>}
        {
            <div style={{marginBottom: "1rem"}} key={data?.data.id}>
                <div>Name: {data?.data.first_name}</div>
                <div>Email: {data?.data.email}</div>
                <Link to={`/users/${data?.data.id}`}>
                    See more...
                </Link>
            </div>
        }
    </div>
  )
}

export default UserPage