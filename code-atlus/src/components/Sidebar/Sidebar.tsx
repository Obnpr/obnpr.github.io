import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import './SidebarMobile.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
const sidebarVisibility = `sidebar${!isOpen ? '-collapsed' : ''}`;
  
  return (
      <aside 
        className={sidebarVisibility} 
      >
          <Link 
          to="/"
          className="sidebar-buttons"
          >
            Home
          </Link>
          <Link 
            to="/#About-Me"
            className="sidebar-buttons"
          >
            About Me
          </Link>
          <Link 
            to="/#Skills"
            className="sidebar-buttons"
          >
            Skills
          </Link>
          <Link to="/#Portfolio"
            className="sidebar-buttons"
          >
            Portfolio
          </Link>
          <Link 
            to="/#Contact-Me"
            className="sidebar-buttons"
          >
            Contact Me
          </Link>
          <Link 
            to="/Osmium-Bits"
            className="sidebar-buttons"
          >
            Osmium Bits
          </Link>
    </aside>
  );
}


export default Sidebar;
