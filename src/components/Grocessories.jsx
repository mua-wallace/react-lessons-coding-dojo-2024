import React from 'react'

const Grocessories = () => {
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];

  return (
    <>
    <h2>Grocery List</h2>
    <ul>
    {
        groceryList.map((item, index)=> <li key={index}>{item}</li>)
    }
    </ul>
    </>
  )
}

export default Grocessories
