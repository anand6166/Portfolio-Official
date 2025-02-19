import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section id="home" className="home section">
      <div className="container">
        <div className="row">
          <div className="home-info">
            <h3 className="hello">
              Hello, My name is <span className="animated-title">Achuthanand Madanapalli</span>, but you can call me
            </h3>
            <h1 className="title">Anand!</h1>
            <h3 className="my-profession">
              I am currently a Bachelor's student at George Mason University, and I'm an <span className="animated-title">AI</span> enthusiast.
            </h3>
            <p>
              Major: <strong>Computer Science</strong> <br />
              Minor: <strong>Business</strong>
            </p>
          </div>
          <div className="home-img floating">
            <img src="images/pfp.jpg" alt="Profile Picture" />
          </div>
        </div>
        <div className="btn-container">
              <a href="#contact" className="btn hire-me contact-button">Contact Me!</a>
              <a href="#contact" className="btn hire-me resume-button">Resume</a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
