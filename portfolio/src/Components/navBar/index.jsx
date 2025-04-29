import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT ME', to: '/About' },
  { label: 'SKILLS', to: '/Skills' },
  { label: 'RESUME', to: '/Resume' },
  // { label: 'PORTFOLIO', to: '/Portfolio' },
  { label: 'CONTACT', to: '/Contact' }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  // Function to toggle menu
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setToggleIcon(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>

          {/* Mobile Toggle Button */}
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {/* Menu (Toggles with "active" class) */}
        <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar_container_menu_item">
              <Link 
                className="navbar_container_menu_item_links" 
                to={item.to} 
                onClick={closeMenu}  // Close menu when clicked
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
