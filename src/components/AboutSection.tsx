import React, { useState } from "react";

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");

  // Function to handle tab switching
  const openTab = (tabname: string) => {
    setActiveTab(tabname); // This will control which tab is active
  };

  const skills = [
    { name: "Python", level: "80%", description: "A versatile language for scripting and automation." },
    { name: "Java", level: "70%", description: "Great for building cross-platform applications." },
    { name: "C", level: "75%", description: "Fundamental programming language for understanding systems." },
    { name: "HTML", level: "90%", description: "The backbone of web content." },
    { name: "CSS", level: "85%", description: "Styling web pages for a great user experience." },
    { name: "JavaScript", level: "80%", description: "For interactive web applications." },
    { name: "Unit Testing", level: "70%", description: "Ensuring code quality through testing." },
    { name: "Unix", level: "75%", description: "Familiar with command-line tools and scripting." },
    { name: "Research", level: "90%", description: "Strong skills in gathering and analyzing data." },
  ];

  const education = [
    {
      year: "2022 - Current",
      institution: "George Mason University",
      degree: "Bachelor of Science in Computer Science",
      details: "Relevant Coursework: Python, C Language, Java, Operating Systems, and more."
    },
    {
      year: "2018 - 2022",
      institution: "Langley High School",
      degree: "High School Diploma",
      details: "Graduated with honors and actively participated in various clubs."
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content">
            <div className="row">
              <div className="about-text">
                <h3>
                  Hello there! I'm <span>Achuthanand Madanapalli</span> 😁
                </h3>
                <p>
                  I am currently pursuing my Bachelor's degree at George Mason University, majoring in Computer Science and minoring in Business. I have a strong passion for exploring the unknown and delving into topics that are new to me. Among these areas, AI stands out as a field that truly captivates my interest.
                </p>
                <div className="tab-titles">
                  <p
                    className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                    onClick={() => openTab("skills")}
                  >
                    Skills
                  </p>
                  <p
                    className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                    onClick={() => openTab("education")}
                  >
                    Education
                  </p>
                </div>

                {/* Skills Tab */}
                <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
                  <div className="skills-list">
                    {skills.map(skill => (
                      <div className="skill-badge" key={skill.name}>
                        <div className="skill-info">
                          <span>{skill.name}</span>
                          <div className="skill-tooltip">{skill.description}</div>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{ width: skill.level }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Tab with Timeline */}
                <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
                  <div className="timeline">
                    {education.map((edu, index) => (
                      <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                          <h3>{edu.year}</h3>
                          <h4>{edu.institution}</h4>
                          <p>{edu.degree}</p>
                          <p>{edu.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
