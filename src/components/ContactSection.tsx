import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const email = "youremail@example.com"; // Replace with your email
  const subject = "New Message from Contact Form"; // Subject line
  const body = "Hello,\n\nI would like to reach out to you regarding..."; // Email body

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <button type="button" className="btn3" id="resume" onClick={openModal}>
              <div className="resume-content">
                <img src="images/resume.png" alt="Resume" className="resume-img"/>
                <div className="resume-text">Click to view</div>
              </div>
            </button>
            <a href="images/Anand%20Madanapalli%20-%20Resume.pdf" download className="btn download">
              Download Resume
            </a>

            {isModalOpen && (
              <div id="resumeModal" className="modal" onClick={handleOutsideClick}>
                <div className="modal-content">
                  <span className="close-button" onClick={closeModal}>&times;</span>
                  <iframe
                    src="images/Anand%20Madanapalli%20-%20Resume.pdf"
                    style={{ width: '100%', height: '80vh' }}
                    frameBorder="0"
                    title="Resume"
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input type="text" name="name" required placeholder="Name" />
              </div>
              <div className="input-group">
                <input type="email" name="email" required placeholder="Email" />
              </div>
              <div className="input-group">
                <textarea name="message" required placeholder="Message"></textarea>
              </div>
              <div className="input-group">
                <a href={mailtoLink} className="btn">Send</a>
              </div>
              {message && <p>{message}</p>}
            </form>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default ContactSection;
