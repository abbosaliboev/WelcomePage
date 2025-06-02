// Home.js (with Locomotive Scroll integration)
import React, { useEffect, useRef } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Home = () => {
  const scrollRef = useRef(null);

  // Initialize Locomotive Scroll
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, 
      multiplier: 1.2 
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Banner />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;