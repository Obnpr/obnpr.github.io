import './AboutMe.css';

function AboutMe() {
  
  return (
    <>
      <main className="main-content-box">
        <div className="main-content">
          <h1>About Me</h1>
            <img 
              className="titlesubimage"
              src="/picture/profile-icon-1.jpg"
              alt="A picture of Obed Negron"
            />
          <div className="titlesubdiv">
          <p>I am... Lorem Ipsum...</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutMe;