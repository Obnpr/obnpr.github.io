import React, { useState } from 'react';
import './Header.css';
import './HeaderMobile.css';

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {

  return (
    <aside className="header-container">
      <header className="header-order">
        <img 
          src="./logo/logo.png"
          alt="A logo with the name website creator, 'Obed Negron'"
          className="header-obedn-logo"
        />
      <div className="header-sidebuttons">
        <button 
          onClick={onToggle} 
          className="sidebar-accessibility-button"
        >
        <img
          src="./page-elements/MenuBar.webp"
          alt="Accessibility Menu Button"
          title="Open Accessibility Menu" 
        />
        </button>
        <button 
          onClick={onToggle} 
          className="sidebar-collapse-button"
        >
        <img
          src="./page-elements/MenuBar.webp"
          alt="Colapse Sidemenu button"
          title="Colapse Sidemenu" 
        />
        </button>
      </div>
      </header> 
    </aside>
    );
}

export default Header;
