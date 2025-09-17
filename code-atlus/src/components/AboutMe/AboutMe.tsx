import './AboutMe.css';
import './AboutMeMobile.css';

function AboutMe() {
  
  return (
      <main className="main-content-box">
        <article className="aboutme-main-content">
          <h1 id="About-Me">About Me</h1>
          <ul className="aboutme-container">
            <div className="aboutme-container-p">
                <p>
                  I’ve been an undergraduate Computer Science student for 5 (five) years now, and throughout that time my passion for technology has only deepened. Currently living in my hometown of Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years.
                </p>
                <p>
                  Over the years, I’ve explored different areas of computer science, and creating not-so-useful applications for my own use. Recently, with my current interests are in game development and web design. But open to learn new programs and languages.
                </p>
            </div>
            <div className="aboutme-container-img-button"> 
              <figure>
                <img
                  src="/picture/profile-icon-3b.jpg"
                  alt="A picture of Obed Negron"
                />
              </figure>
              <div className="aboutme-buttons"> 
                <a 
                  href="https://github.com/Obnpr"
                  target="_blank" 
                  rel="noopener noreferrer"
                  
                >
                  Github Profile
                </a>
              </div>
            </div>
          </ul>
        </article>
        <article className="aboutme-main-content-skills">
          <h2 id="Skills">Skills</h2>
          <ul className="aboutme-content-skills-table">
              <li>
                <figure>
                  <img
                    src="/logo/C++.webp"
                    alt="C++ Logo"
                  />
                </figure>
                <p>C++</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Godot.webp"
                    alt="Godot Engine Logo"
                  />
                </figure>
                <p>GDScript</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/HTML5.webp"
                    alt="HTML5 Logo"
                  />
                </figure>
                <p>HTML</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/CSS3.webp"
                    alt="CSS3 Logo"
                  />
                </figure>
                <p>CSS</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Debian.webp"
                    alt="Debian Logo"
                  />
                </figure>
                <p>Linux Debian Dist.</p>
              </li>
          </ul>
        </article>
        <article className="aboutme-main-content-skills">
          <h2>Additional skills</h2>
          <ul className="aboutme-content-skills-table">
              <li>
                <figure>
                  <img
                    src="/logo/CSharp.webp"
                    alt="C# Logo"
                  />
                </figure>
                <p>C#</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/DotNet.webp"
                    alt="Dot Net Logo"
                  />
                </figure>
                <p>.NET</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Python.webp"
                    alt="Python Logo"
                  />
                </figure>
                <p>Python</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/React.webp"
                    alt="React Logo"
                  />
                </figure>
                <p>React</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Javascript.webp"
                    alt="Javascript Logo"
                  />
                </figure>
                <p>Javascript</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Docker.webp"
                    alt="Docker Container Logo"
                  />
                </figure>
                <p>Docker</p>
              </li>
              <li>
                <figure>
                  <img
                    src="/logo/Ubiquiti.webp"
                    alt="Ubiquiti Logo"
                  />
                </figure>
                <p>Ubiquiti Products</p>
              </li>
          </ul>
        </article>
      </main>
  );
}

export default AboutMe;