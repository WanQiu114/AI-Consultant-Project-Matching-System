import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import ProductsSection from './components/ProductsSection';
import AddProjectSection from './components/AddProjectSection';
import FooterSection from './components/FooterSection';

import { BrowserRouter } from 'react-router-dom';
import './App.css';



function App() {
  // these two are for the mouse tracking
  const lastPosition = useRef(null); 
  const lastTrailTime = useRef(0); 









  useEffect(() => {
    const handleMouseMove = (event) => {
      const currentTime = Date.now();

  
      if (lastPosition.current) {
        // generate 1 footprint after x m-seconds
        if (currentTime - lastTrailTime.current > 150) {
          
          createTrail(event.pageX, event.pageY, lastPosition.current.x, lastPosition.current.y);
          lastTrailTime.current = currentTime;
        }
      }

      
      lastPosition.current = { x: event.pageX, y: event.pageY };
    };

  
    document.addEventListener('mousemove', handleMouseMove);

    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  const createTrail = (x, y, lastX, lastY) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${x - 15}px`; 
    trail.style.top = `${y - 15}px`;

    // angle follows mouse moving, so it can turn 360
    const dx = x - lastX;
    const dy = y - lastY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; 

    trail.style.transform = `rotate(${angle}deg)`; 

    
    document.body.appendChild(trail);

    
    setTimeout(() => {
      trail.remove();
    }, 2000); 
  };


  // all the sections, if you have new, add here, if the thing is important, add between the main, otherwise outside
  return (
    <BrowserRouter>
    
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main className="main-content" style={{ flex: '1 0 auto' }}>
          <IntroSection />
          <ProductsSection />
          <AddProjectSection />
        </main>
        <footer style={{ flexShrink: '0' }}>
          <FooterSection />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
