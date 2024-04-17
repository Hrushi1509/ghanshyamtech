import React, { useState } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {

    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister({ username, email, password });
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login')
    }
  };

  const validateForm = () => {
    if (!username.trim()) {
      alert('Please enter username');
      return false;
    }
    if (username.length < 3 || username.length > 8) {
        alert('Username must be between 3 and 8 characters long');
        return false;
      }
    if (!email.trim()) {
      alert('Please enter email');
      return false;
    }
    if (!password.trim()) {
      alert('Please enter password');
      return false;
    }
    if (password.length < 6 || password.length > 10) {
      alert('Password must be between 6 and 10 characters long');
      return false;
    }
    return true;
  };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form className="box" onSubmit={handleSubmit}>
                            <h1>Register</h1>
                            <p className="text-muted">Please enter your details</p>
                            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type="submit" value="Register" />
                            <div className='suggestion'>Already User? <Link to='/login'>Click to Login</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register