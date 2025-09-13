import './AboutMe.css';

function AboutMe() {
  
  return (
      <main className="main-content-box">
        <article className="aboutme-main-content">
          <h1>About Me</h1>
            <img 
              className="aboutme-titlesubimage"
              src="/picture/profile-icon-3b.jpg"
              alt="A picture of Obed Negron"
            />
          <div className="aboutme-titlesubdiv">
              <p>
                I’ve been an undergraduate Computer Science student for 5 (five) years now, and throughout that time my passion for technology has only deepened. Currently living in my hometown of Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years.
              </p>
              <p>
                Over the years, I’ve explored different areas of computer science, and creating not-so-useful applications for my own use. Recently, with my current interests are in game development and web design. But open to learn new programs and languages.
              </p>
          </div>
        </article>
      </main>
  );
}

export default AboutMe;