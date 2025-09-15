import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './HeaderMobile.css';

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {
  return (
      <header className="header"> 
          <Link
            to="/"
            className="header-name"
            >
            <img
              src="./logo/osmiumbits-logo.jpg"
              alt="Logo of Osmium Bits with the name website creator, 'Obed Negrón'"
            />
            Obed Negrón
          </Link>
      <div className="header-sidebuttons">
        <button 
          onClick={onToggle} 
          className="sidebar-collapse-button"
        >
        <img
          src="./page-elements/MenuIcon.png"
          alt="Colapse Sidemenu button"
          title="Open Site's Menu" 
        />
        </button>
        <button 
          onClick={onToggle} 
          className="sidebar-accessibility-button"
        >
        <img
          src="./page-elements/AccessibilityIcon.png"
          alt="Accessibility Menu Button"
          title="Open Accessibility Menu" 
        />
        </button>
      </div>
      </header> 
    );
}

export default Header;
          <Link 
          to="/"
          className="sidebar-buttons"
          >
          Home
          </Link>