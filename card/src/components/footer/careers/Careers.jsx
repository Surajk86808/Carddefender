import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-container">
      <h1>Careers at CardDefender</h1>
      <p>
        Join us in shaping the future of secure transactions. At CardDefender,
        we use machine learning to detect and prevent fraudulent activities in
        real time. We believe in innovation, teamwork, and empowering our team
        to make a difference in the financial security world.
      </p>

      <p>
        Whether you’re a data scientist, developer, designer, or business
        strategist, there’s a place for you to grow and contribute.
      </p>

      <div className="job-listings">
        <h2>Current Openings</h2>
        <ul>
          <li>🔹 Machine Learning Engineer</li>
          <li>🔹 Full-Stack Developer</li>
          <li>🔹 UI/UX Designer</li>
          <li>🔹 Data Analyst</li>
        </ul>
      </div>

      <img
        src="/images/careers-team.png"
        alt="CardDefender Careers"
        className="careers-image"
      />

      <p className="apply-note">
        Interested? Send your resume to{" "}
        <a href="mailto:careers@carddefender.com">careers@carddefender.com</a>
      </p>
    </div>
  );
};

export default Careers;
