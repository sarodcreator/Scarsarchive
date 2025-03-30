import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logos } from './images.js';
import './style.css';

const Navbar = () => {
  const Logo = Logos[3];
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });
   
  return (
    <div className={`nav-sec ${show && "nav-black"}`}>
        <div><img src={Logo} alt="logo"  className='nav-logo' /></div>
        <div className='Navigation'>
            <ul>
                <Link to="/"><li className="navigation">HOME</li></Link>
                <Link to="gallery"><li className="navigation">GALLERY</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar