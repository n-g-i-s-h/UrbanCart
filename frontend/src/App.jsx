import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Upload from './pages/Upload';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return(

    <div>

      <nav>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/services">Services</Link>
        <Link to="/upload">Upload</Link>

      </nav>


      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/upload' element={<Upload/>} />



      </Routes>




     

    </div>

  );






}

export default App;