import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="work-list">
          <div className="work">
            <img src="images/GradeMe.png" alt="GradeMe" />
            <div className="layer">
              <h3>GradeMe</h3>
              <p>For my GradeMe project, I worked with a team using Agile to build a grade calculator with account creation and grade management features. 
              I handled the HTML, CSS, and JavaScript, and used Jest for unit testing, focusing on implementing the main functionality of the website.</p>
            </div>
          </div>
          <div className="work">
            <img src="images/logistic.png" alt="Logistic Regression" />
            <div className="layer">
              <h3>Cancer Cell Identifier</h3>
              <p>For the "Cancer Cell Identifier" project during the Inspirit AI Innovators Fellowship, I developed a logistic regression model to classify cell images as cancerous or benign. 
              I used NumPy, Pandas, sklearn, and a Google API to build and train the model.</p>
            </div>
          </div>
          <div className="work">
            <img src="images/graphs.png" alt="Graph Algorithm" />
            <div className="layer">
              <h3>Graph Algorithm Simulation</h3>
              <p>For my CS 310 class, I used Java to develop an advanced graph data structure and simulate Kruskal’s Minimum Spanning Tree (MST) algorithm. 
              The framework I created is designed to be easily extended, allowing for the exploration of various graph-related algorithms and concepts in the future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
