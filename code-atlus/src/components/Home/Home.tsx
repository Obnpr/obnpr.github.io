import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Home.css';
import './HomeMobile.css';

function HomePage() {

  return (
    <main className="main-content-box">
      <article className="Intro-cont"> 
        <h1>I'm Obed Negrón.</h1>
        <h2>Front-end, software and video-game developer.</h2>
        <div className="Intro-alignment"> 
            <p>Undergraduate student with a focus on software and front-end development. Experienced in computer hardware, video game development, and proficient in Linux systems, particularly Debian-based distributions.</p>
            <figure>
            <img 
              src="/picture/profile-icon-1.jpg"
              alt="A picture of Obed Negron"
            />
            </figure>
        </div>
        <ul className="mainpage-buttons-box">
            <h3>Important Links</h3>
            <a 
              href="/pdf/Resume-ObedNegron.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mainpage-buttons"
            >
              Resume
            </a>
            {/*
            <Link to="/Portfolio-Collage" className="mainpage-buttons" >
              Collage Portfolio
            </Link>
            */}
        </ul>
      </article>        
    </main>
  );
}

export default HomePage;