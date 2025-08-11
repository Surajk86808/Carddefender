 // src/Pages/Error.jsx
import React from 'react';
import FuzzyText from '../components/FuzzyText/FuzzyText';
import { Link } from 'react-router-dom';
import WorkingHyperspeed from '../components/Hyperspeed/WorkingHyperspeed';


const ErrorPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
       
      <div className="error-container">
      <FuzzyText>
          404 - Page Not Found
      </FuzzyText>
      </div>
      <div className="back-link">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
