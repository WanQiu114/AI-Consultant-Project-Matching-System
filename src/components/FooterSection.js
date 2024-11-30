import React, { useState } from 'react';
import './FooterSection.css';
import './QuickLinks.css';

const FooterSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleJoinWaitlistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2>Let's join the Talent Pool</h2>
        <p>
          Submit your resume and find out which project you best fit.
        </p>
        <button className="join-waitlist-button" onClick={handleJoinWaitlistClick}>Submit your resume</button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal-button" onClick={handleCloseModal}>×</button>
            <h3>Join the waitlist</h3>
            <form className="waitlist-form">
              <label>
                First Name *
                <input type="text" placeholder="Enter your first name" required />
              </label>
              <label>
                Last Name *
                <input type="text" placeholder="Enter your last name" required />
              </label>
              <label>
                Location *
                <input type="text" placeholder="Enter your location" required />
              </label>
              <label>
                Skills *
                <input type="text" placeholder="Enter your skills (e.g., Java, Python)" required />
              </label>
              <label>
                Phone Number *
                <input type="tel" placeholder="Enter your phone number" required />
              </label>
              <label>
                Email Address *
                <input type="email" placeholder="Enter your email address" required />
              </label>
              <label>
                Upload Resume *
                <input type="file" accept=".pdf,.doc,.docx" required />
              </label>
              <button type="submit" className="sign-up-button">Sign up</button>
            </form>
          </div>
        </div>
      )}
      
      <div className="quicklinks-wrapper quicklinks-in-footer">
       
        <div className="quicklink-icon">
          <a href="https://www.linkedin.com/in/heyang-yuan-466407311/" target="_blank" rel="noopener noreferrer">
            <img src="/Henry.jpg" alt="Henry Avatar" className="quicklink-avatar" />
          </a>
          <div className="quicklink-tooltip">HeYang Yuan</div>
        </div>

        <div className="quicklink-icon">
          <a href="https://wanqiu114.github.io/henryy.github.io/" target="_blank" rel="noopener noreferrer">
            <img src="/uploadedImage.png" alt="Bowen Avatar" className="quicklink-avatar" />
          </a>
          <div className="quicklink-tooltip">Bo Wen</div>
        </div>

        <div className="quicklink-icon">
          <a href="https://www.linkedin.com/in/james-lun/" target="_blank" rel="noopener noreferrer">
            <img src="/James.jpg" alt="James Avatar" className="quicklink-avatar" />
          </a>
          <div className="quicklink-tooltip">James Lun</div>
        </div>

        <div className="quicklink-icon">
          <a href="https://www.linkedin.com/in/harshitha-kv/" target="_blank" rel="noopener noreferrer">
            <img src="/Harsh.jpg" alt="Harshu Avatar" className="quicklink-avatar" />
          </a>
          <div className="quicklink-tooltip">Harshu Vijl</div>
        </div>

        <div className="quicklink-icon">
          <a href="https://www.linkedin.com/in/sai-kiran-pilli/" target="_blank" rel="noopener noreferrer">
            <img src="/Sai.jpg" alt="Sai Avatar" className="quicklink-avatar" />
          </a>
          <div className="quicklink-tooltip">Sai Pilli</div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
