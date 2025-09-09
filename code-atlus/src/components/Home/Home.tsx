import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Home.css';
import './HomeMobile.css';

function HomePage() {

  return (
    <main className="main-content-box">
      <article className="main-content">
        <h1>I'm Obed Negrón, from the beautiful island of Puerto Rico!</h1>
        <div className="titlesubdiv">
            <p className="titlesubtext">Undergraduate student with a focus on software and front-end development. Experienced in computer hardware, video game development, and proficient in Linux systems, particularly Debian-based distributions.</p>
            <figure>
            <img 
              className="titlesubimage"
              src="/picture/profile-icon-3a.jpg"
              alt="A picture of Obed Negron"
            />
            </figure>
        </div> 
      </article>
      <div className="mainpage-buttons-box">
        <ul>
          <li>
            <a 
              href="/pdf/Resume-ObedNegron.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mainpage-buttons"
            >
              Resume
            </a>
            <Link to="/Portfolio-Collage" className="mainpage-buttons">
              Collage Portfolio
            </Link>
          </li>
        </ul>
      </div>
      </main>
  );
}

export default HomePage;