import React, { useState } from 'react'

import styles from '../css/mycss.module.css'

const UserForm1 = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        // const newUser = {
        //     username: username,
        //     email: email,
        //     password: password,
        // }

        const newUser = {
            username,
            email,
            password,
        }
        setUsername('');
        setEmail('');
        setPassword('');
        setHasBeenSubmitted(true)

        console.log(newUser);

    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return 'Thank you for submitting the form'
        } else {
            return "Welcome, please submit the form"
        }
    }

    return (
        <div className={styles.myclass}>
            {
                hasBeenSubmitted ? <h3>Thank you for submitting the form</h3> : <form onSubmit={createUser}>
                <h3>Welcome, please submit the form</h3>
                    <div>
                        <label>Username:</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>
                    <div><label>Email Address:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <input type="submit" value='Create User' className={styles.btn} />
                </form>
            }


        </div>
    )
}

export default UserForm1
