import React from 'react';
import Image from '../images/icons/logo (2).png';
import { Link } from "react-router-dom";
import './style.css';

const footer = () => {
  return (
    <div className="footerSec">
        <Link to="/" className='footer-img'><img src={Image} alt="scarsarchive"/></Link>
        <Link to="/" className='footer-img'><h2>scarsarchive</h2></Link>
    </div>
  )
}

export default footer