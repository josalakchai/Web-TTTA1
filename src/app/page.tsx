import React from 'react';
import Navber from './components/Navber';
import Home from './components/Home';
import Everyone from './components/mission';
import Customers from './components/Customers';
import Programs from './components/Programs';
import Partners from './components/Partners';
import Performance from './components/Performance'; 
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/Backtotop';
import Research from './components/Research';
// import Event from './components/Event';

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
      <Performance />
      <Team />
      {/* <Event /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
