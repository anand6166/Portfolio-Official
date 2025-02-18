import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <NavBar />
        <div className="main-content">
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default App;
