import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Planets = () => {
    const {id} = useParams()
    useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then((response) =>{
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
    }, [id])

  return (
    <div>
    <h2>Climate: arid</h2>
    <h2>Terrain: desert</h2>
    <h2>Surface Water: true</h2>
    <h2>Population: 200 000</h2>
    </div>
  )
}

export default Planets