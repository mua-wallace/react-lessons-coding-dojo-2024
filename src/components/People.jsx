import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const People = () => {
  const {id} = useParams()
  const [apidata, setapiData] = useState({})
  const {height, mass, hair_color, skin_color} = apidata
    useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then((response) =>{
      setapiData(response.data)
    })
    .catch((err) => {
        console.log(err);
    })
    }, [id])
    console.log(apidata);
  return (
    <div>
    <h2>Heigt: {height}cm</h2>
    <h2>Mass: {mass}kg</h2>
    <h2>Hair Color: {hair_color}</h2>
    <h2>Skin Color: {skin_color}</h2>
    </div>
  )
}

export default People