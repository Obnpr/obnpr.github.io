import React, { useEffect } from 'react';
import './Portfolio.css';
import './PortfolioMobile.css';

const Portfolio: React.FC = () => {

  return (
      <main className="main-content-box">
        <div className="main-content">
          <h1 id="Portfolio" className="portfolio-section-title">Portfolio</h1>
          <h2 className="portfolio-table-title">Current Projects</h2>
          <ul className="portfolio-table-container">
              <li className="portfolio-table-article">
                <img
                  src="./placeholder/game-image.webp"
                  alt="Placeholder image of a game stick"
                />
                <div className="portfolio-table-article-logo-title">
                  <h3>CienPi</h3>
                </div>
                <ul className="portfolio-table-article-description">
                  <p>
                    Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!
                  </p>
                  <p className="portfolio-table-article-description-platform">Not released</p>
                <ul className="portfolio-table-article-buttons">
                    <a
                      href="https://github.com/Obnpr/Fuelzone-Blogs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      id="button-disabled"
                      
                    >
                      View Source
                    </a>
                    <a
                      id="button-disabled"
                    >
                      View More
                    </a>
                </ul>
                </ul>
              </li>
          </ul>

          <h2 className="portfolio-table-title">Past Projects</h2>
          <ul className="portfolio-table-container">
              <li className="portfolio-table-article">
                <img
                  src="./placeholder/game-image.webp"
                  alt="Placeholder image of a game stick"
                />
                <div className="portfolio-table-article-logo-title">
                  <figure>
                    <img
                      className="portfolio-table-article-logo"
                      src="./logo/fuelzone-logo.webp"
                      alt="Logo of Fuelzone"
                    />
                  </figure>
                  <h3>FuelZone</h3>
                </div>
                <ul className="portfolio-table-article-description">
                  <p>
                    Is a Blogging website with interactive user-led like and commenting system. Build utilizing .NET, C#, HTML, CSS and Javascript.
                  </p>
                  <p className="portfolio-table-article-description-platform">Not hosted</p>
                <ul className="portfolio-table-article-buttons">
                    <a
                      href="https://github.com/Obnpr/Fuelzone-Blogs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Source
                    </a>
                    <a
                      id="button-disabled"
                    >
                      View More
                    </a>
                </ul>
                </ul>
              </li>

          </ul>
        </div>
      </main>
  );
};

export default Portfolio;
