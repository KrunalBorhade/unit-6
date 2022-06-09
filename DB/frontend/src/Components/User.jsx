import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const User = () => {

    const [data,setData] = useState({
        name:"",age:"",addresses:""
    })

    const getData = () =>{
        axios.get(`http://localhost:5000/users`)
        .then(res=>{
            // console.log(res.data)
            setData(res.data.user)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
            getData()
    },[])
    console.log(data)
  return (
    <div>User</div>
  )
}
