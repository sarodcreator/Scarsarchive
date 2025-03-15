import React from 'react';
import './index.css';
import Herosection from '../components/heroSection';
import Services from '../components/services';
import Packages from '../components/packages';
import Works from '../components/works';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';

const index = () => {
  return (
    <div>
      <Herosection />
      <Services />
      <Packages />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default index