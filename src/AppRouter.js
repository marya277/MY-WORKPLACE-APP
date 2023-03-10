import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Services from "./components/Services.js";
import WhyUs from "./components/WhyUs.js";
import About from "./components/About.js";
import Careers from "./components/Careers.js";
const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
    </>
  );
};

export default AppRouter;
