import React from 'react'
import { useParams } from 'react-router-dom'

const Locatiion = () => {
    const {city} = useParams();
  return (
    <div>
    <h1>Welcome to {city}</h1>
    </div>
  )
}

export default Locatiion
