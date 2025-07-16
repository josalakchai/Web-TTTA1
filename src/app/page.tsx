import React from 'react';
import Navber from './components/Navber';
import Home from './components/Home';
import Everyone from './components/mission';
import Customers from './components/Customers';
import Programs from './components/Programs';
// import Success from './components/Success';
import Partners from './components/Partners';
import Performance from './components/Performance'; 
import About from './components/About';
import Values from './components/Values';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/Backtotop';
import Research from './components/Research';

export default function Page() {
  return (
    <div>
      <Navber />
      <Home />
      <Everyone />
      <About />
      <Programs />
      <Partners />
      <Research />
      <Customers />
      {/* <Success /> */}
      <Performance />
      <Values />
      <Team />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
