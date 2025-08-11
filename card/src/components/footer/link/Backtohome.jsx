// Backtohome.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Backtohome.css";

const Backtohome = () => {
  return (
    <div className="back-link">
      <Link to="/" className="back-button">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default Backtohome;
