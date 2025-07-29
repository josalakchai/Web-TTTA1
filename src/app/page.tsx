'use client'

import { useEffect } from 'react'
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

export default function Page() {

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        const yOffset = -80
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }
  }, [])

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
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
