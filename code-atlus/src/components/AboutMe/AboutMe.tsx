import './AboutMe.css';
import './AboutMeMobile.css';

function AboutMe() {
  
  return (
      <main className="main-content-box">
        <article className="aboutme-main-content">
          <h1>About Me</h1>
          <figure className="aboutme-content-img">
            <img
              src="/picture/profile-icon-3b.jpg"
              alt="A picture of Obed Negron"
            />
          </figure>
          <div className="aboutme-content">
              <p>
                I’ve been an undergraduate Computer Science student for 5 (five) years now, and throughout that time my passion for technology has only deepened. Currently living in my hometown of Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years.
              </p>
              <p>
                Over the years, I’ve explored different areas of computer science, and creating not-so-useful applications for my own use. Recently, with my current interests are in game development and web design. But open to learn new programs and languages.
              </p>
          </div>
        </article>
        <article className="aboutme-main-content-skills">
          <h2>Skills</h2>
          <ul className="aboutme-content-skills-table">
              <figure>
                <img
                  src="/logo/HTML5.webp"
                  alt="HTML5 Logo"
                />
              </figure>
              <p>HTML</p>
              <figure>
                <img
                  src="/logo/CSS3.webp"
                  alt="CSS3 Logo"
                />
              </figure>
              <p>CSS</p>
              <figure>
                <img
                  src="/logo/React.webp"
                  alt="React Logo"
                />
              </figure>
              <p>React</p>
          </ul>

          <ul className="aboutme-content-skills-table">
              <figure>
                <img
                  src="/logo/C++.webp"
                  alt="C++ Logo"
                />
              </figure>
              <p>C++</p>
              <figure>
                <img
                  src="/logo/CSharp.webp"
                  alt="C# Logo"
                />
              </figure>
              <p>C#</p>
              <figure>
                <img
                  src="/logo/Godot.webp"
                  alt="Godot Engine Logo"
                />
              </figure>
              <p>GDScript</p>
          </ul>
        </article>

      </main>
  );
}

export default AboutMe;