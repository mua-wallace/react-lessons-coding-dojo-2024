import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`)

    }
    return (
        <form style={{margin: '20px'}} onSubmit={handleSubmit}>
            <label>Search for: </label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="" key="">------</option>
                <option value="people" >People</option>
                <option value="planets" >Planets</option>
            </select>
            <label>ID: </label>
            <input type="text"  onChange={(e) => setId(e.target.value)}/>
            <input type="submit"  value='Search'/>
          
        </form>
    )
}

export default Form