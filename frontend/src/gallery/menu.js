/*import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div className="galleryMenu">
        <h2><span>Projects</span></h2>
        <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums. Each project showcases my dedication to capturing and preserving your most memorable moments.</p>
        <div className="divider"></div>
        <ul>
            <Link to="wedding" className="menu"><li>Wedding</li></Link>
            <Link to="birthday" className="menu"><li>Birthdays</li></Link>
            <Link to="travels" className="menu"><li>Travels</li></Link>
            <Link to="birthday" className="menu"><li>Birthdays</li></Link>
            <Link to="travel" className="menu"><li>Birthdays</li></Link>

        </ul>
        
    </div>
  )
}

export default menu;
*/

import React from 'react';
import './index.css';

const Menu = ({ onCategoryChange }) => {
  return (
    <div className="galleryMenu">
      <h2><span>Projects</span></h2>
      <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums.</p>
      <div className="divider"></div>
      <ul>
        <li className="menu" onClick={() => onCategoryChange('wedding')}>Wedding</li>
        <li className="menu" onClick={() => onCategoryChange('birthday')}>Birthdays</li>
        <li className="menu" onClick={() => onCategoryChange('travel')}>Travels</li>
      </ul>
    </div>
  );
};

export default Menu;

