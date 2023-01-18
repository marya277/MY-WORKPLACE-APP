
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Careers from './components/Careers';
const AppRouter = () => {

  return (
    
    <>
        <Navbar/>
		
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
        </Routes>
			
    </>
  )
}

export default AppRouter; 

