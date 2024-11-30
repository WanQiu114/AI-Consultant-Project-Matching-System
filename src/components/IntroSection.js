import React, { useRef, useState } from 'react';
import './IntroSection.css';
import uploadedImage from '../assets/intro.webp';
import pythonLogo from '../assets/python.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/js.png';
import nodejsLogo from '../assets/nodejs.png';
import cssLogo from '../assets/css.svg';
import htmlLogo from '../assets/html.svg';

const IntroSection = () => {
  const imageContainerRef = useRef(null);
  const [showLogos, setShowLogos] = useState(false);

  const handleMouseEnter = () => {
    setShowLogos(true);
  };

  const handleMouseLeave = () => {
    setShowLogos(false);
    const container = imageContainerRef.current;
    if (container) {
      container.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }
  };

  const handleMouseMove = (e) => {
    const container = imageContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      container.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
    }
  };

  return (
    <section id="introduction" className="intro-section">
      <div className="intro-text">
        <h1>AI Consultant-Project Matching System</h1>
        <p>
          This website is for developing a recommendation engine to match consultants with projects based on skills, experience, and project needs.
        </p>
      </div>
      <div
        className="intro-image-container"
        ref={imageContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img src={uploadedImage} alt="Facility management overview" className="intro-image" />

        
        {showLogos && (
          <>
            
            <div className="line-to-logo" style={{ top: '20%', left: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={pythonLogo} alt="Python Logo" className="tech-logo" style={{ top: '15%', left: '-300px' }} />

            
            <div className="line-to-logo" style={{ top: '70%', left: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={nodejsLogo} alt="Node.js Logo" className="tech-logo" style={{ top: '65%', left: '-300px' }} />

            
            <div className="line-to-logo" style={{ top: '20%', right: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={reactLogo} alt="React Logo" className="tech-logo" style={{ top: '15%', right: '-300px' }} />

            
            <div className="line-to-logo" style={{ top: '70%', right: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={jsLogo} alt="JavaScript Logo" className="tech-logo" style={{ top: '65%', right: '-300px' }} />

            
            <div className="line-to-logo" style={{ top: '40%', left: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={cssLogo} alt="CSS Logo" className="tech-logo" style={{ top: '35%', left: '-300px' }} />

            
            <div className="line-to-logo" style={{ top: '40%', right: '-100px', width: '350px', transform: 'rotate(0deg)' }}></div>
            <img src={htmlLogo} alt="HTML Logo" className="tech-logo" style={{ top: '35%', right: '-300px' }} />
          </>
        )}
      </div>
    </section>
  );
};

export default IntroSection;
