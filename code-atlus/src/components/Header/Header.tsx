import React, { useState } from 'react';
import './Header.css';
import './HeaderMobile.css';

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {

  return (
      <header className="header-container">
        <img 
          src="./logo/logo.png"
          alt="A logo with the name website creator, 'Obed Negron'"
          className="header-obedn-logo"
        />
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
