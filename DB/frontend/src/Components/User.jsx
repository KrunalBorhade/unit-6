import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const User = () => {

    const [data,setData] = useState([])

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
    <div>
         <table style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th >Name</th>
              <th>Age</th>
              <th>Line1</th>
              <th>Line2</th>
              <th>Contry</th>
              <th>City</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody >
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <td style={{ border: "1px solid" }}>{value.name}</td>
                  <td style={{ border: "1px solid" }}>{value.age}</td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].line_1}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].line_2}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].city}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].country}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].type}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {/* <button onclick={handleData}>UserId</button> */}
                    {/* <Link to={`/user/${value._id}`}>UserID</Link> */}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {/* <Link to="/users/:id/edit">IDEDIT</Link> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}
