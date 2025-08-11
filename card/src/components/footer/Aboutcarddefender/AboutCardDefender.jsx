import React from "react";
import "./AboutCardDefender.css";
import Backtohome from "../link/Backtohome";

const AboutCardDefender = () => {
  return (
    <div className="about-container">
      
      <div className="about-content">
        
        <h1>About CardDefender</h1>
        <p>
          CardDefender is a cutting-edge ML-powered fraud detection system 
          designed to safeguard digital transactions in real-time.  
          Our mission is to provide individuals and businesses with 
          confidence every time they swipe, tap, or click.  
        </p>
        <p>
          Built with advanced predictive algorithms and a focus on user 
          protection, CardDefender detects suspicious patterns instantly, 
          minimizing financial risks while keeping the user experience smooth.
        </p>
        <img src="../../../../public/carddefender.png" alt="About CardDefender" />
         <Backtohome />
      </div>
      
    </div>
  );
};

export default AboutCardDefender;
