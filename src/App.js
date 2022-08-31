
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/homepage/Home';
import Footer from './components/footer/Footer';

function App() {
  

  const [login, setLogin] = useState(true)
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={login ? <Home /> : <Hero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
