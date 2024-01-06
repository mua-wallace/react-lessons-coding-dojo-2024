import React, { useState } from 'react'
import styles from '../css/mycss.module.css'

const MovieForm = () => {
   const [title, setTitle] = useState('');
   const [titleError, setTitleError] = useState('');

   const handleTitle = (e) => {
    setTitle(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError('Title is required')
    } else if(e.target.value.length < 3) {
        setTitleError('The title must be 3 or more character longer')
    } else {
        setTitleError('')
    }
   }
   console.log(title);

  return (
    <div  className={styles.myclass}>
      <form  onSubmit={(e)  => e.preventDefault()}>
      <div>
      <label>Tittle: </label>
      <input type="text" onChange={handleTitle} />
      {
        titleError ?  <p className={styles.err}>{titleError}</p> : ''
      }
      </div>
      {
        titleError ? <input type="submit" value="Create Movie" className={styles.btn} disabled/> :  <input type="submit" value="Create Movie" className={styles.btn}/>
      }
     
      </form>

      <p>Movie Title: {title}</p>
    </div>
  )
}

export default MovieForm
