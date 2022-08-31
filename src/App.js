
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/homepage/Home';

function App() {

  const [login, setLogin] = useState(false)
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={login ? <Home /> : <Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
