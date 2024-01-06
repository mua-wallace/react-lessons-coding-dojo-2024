import React, { useState } from 'react'
import styles from '../css/mycss.module.css'
const UserForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const createUser =(e) =>{
    e.preventDefault();

    const newUser = {
         username,
         email,
        password,
    }
    setUsername('')
    setEmail('')
    setPassword('')
    console.log('Welcome ', newUser);
   }

    return (
        <div className='myform'>
            <h3>Welcome to Forms in React</h3>
            <form onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}  value={username}/>
                </div>
                <div> <br />
                    <label>Email Address: </label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div><br />
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div><br /> <br />

                <input className={styles.btn} type="submit" value="Create User" />
            </form>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
        </div>
    )
}

export default UserForm
