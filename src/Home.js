import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='buttons'>
        <div><button ><Link to='/login'>Login</Link></button></div>
        <div><button><Link to='/register'>Register</Link></button></div>
      </div>
  )
}

export default Home