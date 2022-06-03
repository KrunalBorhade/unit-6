import React, { useState } from "react";
import { UpdateDetails } from "../Redux/action";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const AddCountry = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [population, setPopulation] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    alert("Country Added Successfully");
    const details = {
      country_name: country,
      city_name: city,
      population: population,
    };
    dispatch(UpdateDetails(details));
  };

  

  return (
    <div>
    <TextField label="Enter Country Name" color="secondary" focused value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }} />
     
      <br />
      <br />
      <TextField label="Enter City Name" color="success" focused  value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
         />
      <br />
      <br />
      <TextField label="Total Population" color="warning" focused  value={population}
        onChange={(e) => {
          setPopulation(e.target.value);
        }}
         />
     
      <br />
      <br />
      
      <Button onClick={handleSubmit} variant="contained" >
  Add Now
</Button>
    </div>
  );
};

