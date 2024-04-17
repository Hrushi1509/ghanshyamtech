import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() !== '' && password.trim() !== '') {
            // onLogin({ email, password });
            const loginData = { email, password }
            const userData = JSON.parse(localStorage.getItem('user'))
            const currentUser = userData.find(obj => obj.email === loginData.email);

            if (currentUser && loginData &&  currentUser.password === loginData.password) {
                setLoggedInUser(currentUser)
                navigate(`/homepage/${currentUser.email}`);
            } else {
                console.log(currentUser.password)
                console.log(loginData.password)
                alert('Invalid email or password');
            }
            setEmail('');
            setPassword('');
        } else {
            alert('Please enter email and password');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form className="box" onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <p className="text-muted">Please enter your login and password!</p>
                            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="submit" value="Login" />
                            <div className='suggestion'>Not a User? <Link to='/register'>Click to Register</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login