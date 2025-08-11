import React from "react";
import "./OurMission.css";
import Backtohome from "../link/Backtohome";

const OurMission = () => {
  const missionPoints = [
    {
      icon: "🌍",
      title: "Global Security",
      description: "Making financial security accessible to everyone, everywhere"
    },
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Pioneering the next generation of fraud prevention technology"
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest, reliable service"
    },
    {
      icon: "⚡",
      title: "Instant Protection",
      description: "Real-time fraud detection that never sleeps"
    }
  ];

  const goals = [
    "Reduce global financial fraud by 90% within the next decade",
    "Protect over 1 billion transactions daily by 2030",
    "Democratize access to enterprise-grade security for all businesses",
    "Create the most trusted fraud prevention platform worldwide"
  ];

  return (
    <div className="mission-page">
      <div className="mission-container">
        <div className="mission-hero">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-statement">
            To create a world where financial security is not a privilege but a right.
            CardDefender works to prevent fraud before it happens, empowering people to
            transact safely anywhere, anytime.
          </p>
        </div>

        <div className="mission-content">
          <div className="mission-description">
            <h2>Transforming Financial Security</h2>
            <p>
              We believe that everyone deserves to feel secure when making financial 
              transactions. Our advanced AI-powered platform works tirelessly to 
              identify and prevent fraudulent activities before they can cause harm.
            </p>
            <p>
              Through cutting-edge machine learning algorithms and real-time analysis, 
              we're building a safer digital economy for individuals and businesses 
              around the globe.
            </p>
          </div>

          <div className="mission-image-container">
            <img 
              src="/carddefender.png" 
              alt="Our Mission - Secure Transactions" 
              className="mission-image"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400/1e90ff/ffffff?text=Secure+Future";
              }}
            />
          </div>
        </div>

        <div className="mission-points">
          <h2>Our Core Values</h2>
          <div className="points-grid">
            {missionPoints.map((point, index) => (
              <div key={index} className="mission-point">
                <div className="point-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-goals">
          <h2>Our Goals</h2>
          <div className="goals-list">
            {goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <span className="goal-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{goal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-cta">
          <h2>Join Our Mission</h2>
          <p>
            Together, we can build a more secure financial future for everyone. 
            Every transaction protected brings us one step closer to our vision.
          </p>
        </div>

        <Backtohome />
      </div>
    </div>
  );
};

export default OurMission;
