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

import React, { useState } from 'react';
import './index.css';

const Menu = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState('birthday/highlight'); // Default active category
  const [openMenus, setOpenMenus] = useState({
    birthday: true, // Default open
    wedding: false,
  });

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="galleryMenu">
      <h2><span>Projects</span></h2>
      <p>Explore my portfolio featuring stunning photography, dynamic videography, and beautifully crafted albums.</p>
      <div className="divider"></div>
      <ul>
        {/* Birthday Section */}
        <li className="menu-heading" onClick={() => toggleMenu('birthday')}>
          Birthdays {openMenus.birthday ? '▼' : '▶'}
        </li>
        {openMenus.birthday && (
          <ul className="submenu">
            <li 
              onClick={() => handleCategoryClick('birthday/highlight')} 
              className={`menu ${activeCategory === 'birthday/highlight' ? 'active' : ''}`}
            >
              Highlights
            </li>
            <li 
              onClick={() => handleCategoryClick('birthday/zara')} 
              className={`menu ${activeCategory === 'birthday/zara' ? 'active' : ''}`}
            >
              Zara
            </li>
          </ul>
        )}

        {/* Proposal Section */}
        <li 
          onClick={() => handleCategoryClick('proposal')} 
          className={`menu ${activeCategory === 'proposal' ? 'active' : ''}`}
        >
          Proposal
        </li>

        {/* Wedding Section */}
        <li className="menu-heading" onClick={() => toggleMenu('wedding')}>
          Wedding {openMenus.wedding ? '▼' : '▶'}
        </li>
        {openMenus.wedding && (
          <ul className="submenu">
            <li className="menu-subheading">Traditional</li>
            <ul className="submenu">
              <li 
                onClick={() => handleCategoryClick('traditional/alex')} 
                className={`menu ${activeCategory === 'traditional/alex' ? 'active' : ''}`}
              >
                Alex
              </li>
              <li 
                onClick={() => handleCategoryClick('traditional/leila')} 
                className={`menu ${activeCategory === 'traditional/leila' ? 'active' : ''}`}
              >
                Leila
              </li>
              <li 
                onClick={() => handleCategoryClick('traditional/zara')} 
                className={`menu ${activeCategory === 'traditional/zara' ? 'active' : ''}`}
              >
                Zara
              </li>
            </ul>
            <li 
              onClick={() => handleCategoryClick('white')} 
              className={`menu ${activeCategory === 'white' ? 'active' : ''}`}
            >
              White Wedding
            </li>
          </ul>
        )}

        {/* Travel Section */}
        <li 
          onClick={() => handleCategoryClick('travel')} 
          className={`menu ${activeCategory === 'travel' ? 'active' : ''}`}
        >
          Travels
        </li>
      </ul>
    </div>
  );
};

export default Menu;