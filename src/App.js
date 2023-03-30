import Login from './components/Auth/Login'
import { auth } from './components/firebase';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';


import './App.css';
import Register from './components/Auth/Register';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return unsubscribe;
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/about' element={user ? <About /> : <Navigate to='/login' />} />
          <Route path="/login" element={user ? <Navigate to='/about' /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to='/login' /> : <Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
