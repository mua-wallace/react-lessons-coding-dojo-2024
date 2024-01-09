import React, { useEffect, useState } from 'react'

import '../css/styles.css'

const FetchApiComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
            return response.json();
        })
        .then((response => {
            setData(response.results)
            // console.log("This is the response API: ",  response.results);
        }))
        .catch((err) => console.log(err))
    }, []);

   console.log("This is the data from the state: ",  data);

  return (
    <div>
      <h1>Welcome to Consuming API data</h1>
    <table >
    <tr key="">
    <th>Name</th>
    <th>Url</th>
    </tr>

    {
        data.map((item, index) => {
            return (
                
                <tr key="">
                <td>{item.name}</td><td>{item.url}</td>
                </tr>
            )
        })
    }
    </table>
    </div>
  )
}

export default FetchApiComponent
