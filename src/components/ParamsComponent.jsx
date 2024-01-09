import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComponent = () => {
    const {word, color, bgColor} = useParams();

  return (
    <div>
    {
        isNaN(word) ? <p style={ color && bgColor ? {color: color, backgroundColor: bgColor} : null}>The word is: {word}</p> : <p>The number is: {word}</p>
    }
    </div>
  )
}

export default ParamsComponent