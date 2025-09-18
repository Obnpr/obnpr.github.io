import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
//
import HomePage from '../Home/Home';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
//
import PortfolioCollage from '../PortfolioCollage/PortfolioCollage';
//
import ScrollToHash from './ScrollToHash';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
//
import './MainPage.css';
import './MainPageMobile.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar hide func


// Sidebar hide func
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

// The Main content/component (aka where's all the content actually shows) viewer
  const MainViewer = () => {
    return (
      <>
        <HomePage />
        <hr></hr>
        <AboutMe />
        <hr></hr>
        <Portfolio />
      </>
    );
  };
  
  return (
    <Router>
      <ScrollToHash />
      <div className="app">
        <Header onToggleSidebar={handleToggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <main className="components-structured">
        <main className="main-content-area">
          <Routes>
            <Route path="/" element={<MainViewer />}/>
            <Route path="/Portfolio-Collage" element={<PortfolioCollage />} />
          </Routes>
          </main>
        </main>
        <Footer />
      </div>

    </Router>
  );
};

export default App;
