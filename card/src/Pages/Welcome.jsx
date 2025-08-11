import React, { useEffect } from 'react'
import './Welcome.css'
import WorkingHyperspeed from '../components/Hyperspeed/WorkingHyperspeed'

const Welcome = () => {
  useEffect(() => {
    console.log('Welcome component mounted');
    
    // Monitor for Hyperspeed initialization
    const checkHyperspeed = () => {
      const container = document.getElementById('lights');
      const canvas = document.querySelector('#lights canvas');
      console.log('Lights container:', container);
      console.log('Canvas element:', canvas);
      
      if (canvas) {
        console.log('Hyperspeed animation is running!');
      } else {
        console.log('Hyperspeed not yet initialized, checking again...');
        setTimeout(checkHyperspeed, 1000);
      }
    };
    
    setTimeout(checkHyperspeed, 500);
  }, []);

  return (
    <div className="welcome-container">
      <WorkingHyperspeed />
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Card Defender</h1>
        <p className="welcome-subtitle">
          Advanced Ml-powered Credit card fraud detection system
        </p>
      </div>
    </div>
  )
}

export default Welcome
