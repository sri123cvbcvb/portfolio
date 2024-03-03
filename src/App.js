import '../src/style-starter.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Services from './Services';

function App() {
  return (
    <>
    <Router>
    <Header/>
     <Routes>
     

      
    
     <Route path="/" element={<Banner />} />
      
     
      <Route path="/about" element={<About />} />
     
      <Route path="/services" element={<Services />} />

      
      
      <Route path="/contact" element={<Contact />} />
      
     
      </Routes>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
