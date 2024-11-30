import React, { useState, useEffect, useRef, Suspense } from 'react';
import Modal from 'react-modal';
import './Header.css';

Modal.setAppElement('#root'); 

const Header = () => {
  const [language, setLanguage] = useState('EN');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [CurrentProductDetail, setCurrentProductDetail] = useState(null);
  const dropdownRef = useRef(null);

  const projects = [
    {
      id: 'A',
      name: 'Project A',
      client: 'Client Alpha',
      duration: '6 months',
      location: 'Canada',
      budget: '20 bucks',
    },
    {
      id: 'B',
      name: 'Project B',
      client: 'Client Beta',
      duration: '4 months',
      location: 'USA',
      budget: '20 bucks',
    },
    {
      id: 'C',
      name: 'Project C',
      client: 'Client Gamma',
      duration: '5 months',
      location: 'UK',
      budget: '20 bucks',
    },
    {
      id: 'D',
      name: 'Project D',
      client: 'Client Delta',
      duration: '3 months',
      location: 'Germany',
      budget: '20 bucks',
    },
    {
      id: 'E',
      name: 'Project E',
      client: 'Client Epsilon',
      duration: '8 months',
      location: 'Paris',
      budget: '20 bucks',
    }
,{ id: 'G', name: 'undefined', client: 'Client G', duration: '1 year', city: 'United states', Budget: '800000' }];

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = (productId) => {
    // get component and information from the productdetailX file, for example function of clicking
    import(`../detailPages/ProductDetail${productId}`)
      .then((module) => {
        setCurrentProductDetail(() => module.default);
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Failed to load product detail:", error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProductDetail(null);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="logo">Team 3</div>
      <nav className="nav">
        <ul>
          <li className="nav-item" onClick={() => scrollToSection('intro-section')}>About Us</li>
          <li
            className="nav-item dropdown"
            onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
          >
            Projects <span className="dropdown-arrow">▼</span>
            {isProjectsDropdownOpen && (
              <ul className="dropdown-menu project-dropdown" ref={dropdownRef}>
                {projects.map((project, index) => (
                  <li key={index} className="dropdown-menu-item project-card" onClick={() => openModal(project.id)}>
                    <h4>{project.name}</h4>
                    <p>Client: {project.client}</p>
                    <p>Duration: {project.duration}</p>
                    <p>Location: {project.location}</p>
                    <p>Budget: {project.budget}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="nav-item" onClick={() => scrollToSection('footer-section')}>Contact</li>
          <li className="nav-item dropdown">
            Resources
            <span className="dropdown-arrow">▼</span>
          </li>
          <li className="nav-item dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {language}
            <span className="dropdown-arrow">▼</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => switchLanguage('EN')}>English</li>
                <li onClick={() => switchLanguage('FR')}>French</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Details"
        className="product-modal"
        overlayClassName="product-modal-overlay"
        shouldCloseOnOverlayClick={true}
      >
        <button className="close-modal-button" onClick={closeModal}>
          &times;
        </button>
        {CurrentProductDetail && (
          <Suspense fallback={<div>Loading...</div>}>
            <CurrentProductDetail />
          </Suspense>
        )}
      </Modal>
    </header>
  );
};

const scrollToSection = (sectionClass) => {
  const section = document.querySelector(`.${sectionClass}`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Header;
