// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProviderWrapper } from './Context/ThemeContext';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Hero/Hero';  // Adjust the import paths as necessary
import About from './Components/About/About';
import Project from './Components/Project/Project';
import { Contact } from './Components/Contact/Contact';
import { Toaster } from 'react-hot-toast';
// import { Contact } from './Components/Contact/Contact';
import './Styles/global.css'

function App() {
  return (
    <>
    <Toaster/>
      <ThemeProviderWrapper>
        <Router>
          <Header />
          <Home />
          <About />
          <Project/>
          <Contact />
          {/* <Routes> */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} /> */}
          {/* <Route path='/contact' element={<Contact/>}/> */}
          {/* </Routes> */}
          <Footer />
        </Router>
      </ThemeProviderWrapper>
    </>
  );
}

export default App;
