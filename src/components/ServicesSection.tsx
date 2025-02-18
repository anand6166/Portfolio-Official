import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Studies</h2>
          </div>
        </div>
        <div className="services-list">
          <div>
            <i className="fa fa-laptop-code"></i>
            <h2>Web Development</h2>
            <p>I excel at web development by combining my passion for design with a deep understanding of modern technologies. I believe a webpage should make a strong first impression, which is why I focus on creating visually appealing, user-friendly layouts.  I am proficient in HTML, CSS, JavaScript, and various frameworks, ensuring every project is efficient, scalable, and engaging from the first glance.</p>
          </div>
          <div>
            <i className="fa fa-cloud"></i>
            <h2>AWS Cloud</h2>
            <p>I have a strong knowledge of AWS Cloud, which I further solidified by earning the AWS Cloud Practitioner certification. This expertise allows me to understand and utilize a wide range of AWS services to build scalable, secure, and efficient cloud-based solutions. My experience with AWS includes deploying applications, managing cloud infrastructure, and optimizing resources for performance and cost-effectiveness.</p>
          </div>
          <div>
            <i className="fa fa-code"></i>
            <h2>Programming Languages</h2>
            <p>I have a solid foundation in several programming languages, including C, Java, and Python. My proficiency in these languages allows me to develop efficient, reliable, and maintainable code across various applications. My expertise also extends to unit testing, ensuring that my code is thoroughly tested and meets the highest quality standards before deployment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
