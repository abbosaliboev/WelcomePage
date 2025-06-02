import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from "./Components/Home/Banner/Banner";
import Home from "./Components/Home/Home/Home";
import About from "./Components/Home/About/About";
import Pricing from "./Components/Home/Pricing/Pricing";
import Services from "./Components/Home/Services/Services";
import Contact from "./Components/Home/Contact/Contact";
import NavBar from "./Components/Home/NavBar/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
