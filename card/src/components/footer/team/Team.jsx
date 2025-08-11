import React, { useState } from "react";
import "./Team.css";
import Backtohome from "../link/Backtohome";

const Team = () => {
  const [imageError, setImageError] = useState(false);

  const teamMembers = [
    {
      name: "Suraj Kumar",
      role: "Data Science and Webpage",
      image: "/images/team-member-1.jpg"
    },
    {
      name: "Manish Keshari",
      role: "Data Analyst ",
      image: "/images/team-member-2.jpg"
    },
    {
      name: "Anshu kumar",
      role: "Data Analyst ",
      image: "/images/team-member-3.jpg"
    },
    {
      name: "Raunak Dokania",
      role: "Data Analyst",
      image: "/images/team-member-4.jpg"
    }
    ,
    {
      name: "",
      role: "Future Team Member",
      image: "/images/team-member-4.jpg"
    },
    {
      name: "",
      role: "Future Team Member",
      image: "/images/team-member-4.jpg"
    }
  ];

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="team-page">
      <div className="team-container">
        <div className="team-hero">
          <h1>Meet Our Team</h1>
          <p className="team-intro">
            We are a group of passionate Students, Learning Datascience and Web Dev, and security
             dedicated to safeguarding digital transactions worldwide.
          </p>
        </div>

        <div className="team-image-section">
          {!imageError ? (
            <img 
              src="/images/team.png" 
              alt="CardDefender Team" 
              className="team-image"
              onError={handleImageError}
            />
          ) : (
            <div className="team-image-placeholder">
              <div className="placeholder-content">
                <i className="fas fa-users" aria-hidden="true"></i>
                <p>Our Amazing Team</p>
              </div>
            </div>
          )}
        </div>

        <div className="team-members">
          <h2>Leadership Team</h2>
          <div className="members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-avatar">
                  <i className="fas fa-user-circle" aria-hidden="true"></i>
                </div>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p className="expertise">{member.expertise}</p>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h3>Security First</h3>
              <p>Every decision prioritizes user security and data protection</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries in fraud detection technology</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Working together to build the most effective solutions</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Committed to delivering the highest quality products</p>
            </div>
          </div>
        </div>

        <Backtohome />
      </div>
    </div>
  );
};

export default Team;
