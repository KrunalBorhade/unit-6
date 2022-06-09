import React, { useState } from "react";
import axios from "axios";


const UserForm = () => {
//   const [data, setdata] = useState([]);
  const [name1, setname] = useState({
    name: "",
    age: "",
  });
  const [address, setaddress] = useState({
    line_1: "",
    line_2: "",
    city: "",
    country: "",
    type: "",
  });
  const handlechange = (e) => {
    let { name, value } = e.target;

    setname({ ...name1, [name]: value });
   
  };
  console.log(name1);
  const handleAddress = (e) => {
    let { name, value } = e.target;

    setaddress({ ...address, [name]: value });
    console.log(address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let postUser = async () => {
      let postUsers = await axios.post(`http://localhost:5000/users/create`, {
        name: name1.name,
        age: name1.age,
        address: [
          {
            line_1: address.line_1,
            line_2: address.line_2,
            city: address.city,
            country: address.country,
            type: address.type,
          },
        ],
      });
      console.log(postUsers.data);
    };

    postUser();
  };

  return (
    <div>
      <form className="create-form">
        <label>Name</label>
        <input placeholder="name" name="name" onChange={handlechange} />

        <label>age</label>
        <input placeholder="age" name="age" onChange={handlechange} />

        <label>address</label>
        <input placeholder="line_1" name="line_1" onChange={handleAddress} />

        <input placeholder="line_2" name="line_2" onChange={handleAddress} />
        <input placeholder="city" name="city" onChange={handleAddress} />
        <input placeholder="country" name="country" onChange={handleAddress} />
        <input placeholder="type" name="type" onChange={handleAddress} />

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <div>
        
      </div>
    </div>
  );
};

export default UserForm;