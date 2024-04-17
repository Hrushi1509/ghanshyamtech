import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './Home';
import { useEffect, useState } from 'react';
import Homepage from './Homepage';

function App() {
  const [registerUser, setRegisterUser] = useState([]);
  const [data, setData] = useState([]);
  const [currentUser,setCurrentUser] = useState('')

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setRegisterUser(JSON.parse(userData));
    }

    // Load data from local storage
    // const storedData = localStorage.getItem('data');
    // if (storedData) {
    //   setData(JSON.parse(storedData));
    // }
  }, []);

  const handleRegister = (userData) => {
    const registerUserData = [...registerUser, userData];
    setRegisterUser(registerUserData);
    localStorage.setItem('user', JSON.stringify(registerUserData));
  };

  //     const userData = JSON.parse(localStorage.getItem('user'))
  //     const currentUser = userData.find(obj => obj.email === loginData.email);
  //     console.log(currentUser)
  //     setCurrentUser(currentUser)
  //     // navigate('/homepage')
  //     if (currentUser) {
  //       setCurrentUser(currentUser);
  //   } else {
  //       alert('Invalid email or password');
  //   }
  // };

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/homepage/:email' element={<Homepage />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
          <Route path="/login" element={<Login setLoggedInUser={setCurrentUser} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
