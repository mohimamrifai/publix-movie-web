
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/homepage/Home';
import Footer from './components/footer/Footer';
import { AuthContaxtProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';

function App() {
  

  const [login, setLogin] = useState(true)
  return (
    <>
      <AuthContaxtProvider>
          <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={login ? <Home /> : <Hero />} />
            <Route path='/login' element={<Login />} /> 
            <Route path='/signup' element={<Signup />} /> 
            <Route path='/account' element={<Account />} /> 
          </Routes>
          <Footer />
        </Router>
      </AuthContaxtProvider>
    </>

  );
}

export default App;
