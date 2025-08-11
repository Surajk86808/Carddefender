import React from "react";
import "./Documentation.css";

const Documentation = () => {
  return (
    <div className="documentation-container">
      {/* Project Title */}
      <h1>CardDefender Project Documentation</h1>

      {/* Introduction Section */}
      <section className="doc-section">
        <h2>Project Overview</h2>
        <p>
          The <strong>CardDefender</strong> project was initiated to address the
          increasing challenges of credit card fraud detection in digital
          banking. With the rapid rise of online transactions, financial
          institutions require intelligent, reliable solutions to identify and
          prevent fraudulent activities in real-time.
        </p>
      </section>

      {/* Idea and Motivation */}
      <section className="doc-section">
        <h2>How We Started</h2>
        <p>
          The idea originated from observing the growing financial losses caused
          by fraudulent transactions globally. We aimed to leverage machine
          learning to build a system that can effectively analyze transaction
          patterns and flag suspicious behavior. Our goal was to create a
          user-friendly web application that combines powerful ML models with a
          seamless interface.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="doc-section">
        <h2>Technology Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js for building a dynamic and responsive UI.</li>
          <li><strong>Backend:</strong> FastAPI for creating RESTful APIs to serve the ML model.</li>
          <li><strong>Machine Learning:</strong> Python with libraries like Scikit-learn, Pandas, and NumPy for data processing and model training.</li>
          <li><strong>Data Visualization:</strong> Seaborn and Matplotlib to explore and visualize data patterns.</li>
          <li><strong>Deployment:</strong> Docker for containerization and easy deployment.</li>
        </ul>
      </section>

      {/* Dataset Used */}
      <section className="doc-section">
        <h2>Dataset</h2>
        <p>
          We used the well-known <a href="https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud" target="_blank" rel="noopener noreferrer">
          Kaggle Credit Card Fraud Detection Dataset</a>. This dataset contains transactions made by European cardholders, with a large imbalance between normal and fraudulent transactions. It features anonymized data with 30 features (V1 to V28, plus Time and Amount).
        </p>
        <p>
          The dataset's imbalance posed a challenge which we addressed using data preprocessing and sampling techniques to improve model accuracy.
        </p>
      </section>

      {/* Documentation Sections */}
      <section className="doc-section">
        <h2>Documentation Sections</h2>
        <ul className="doc-list">
          <li>🚀 Getting Started Guide – Instructions to set up and run the project locally.</li>
          <li>⚙️ API Reference – Detailed information on backend endpoints and usage.</li>
          <li>📦 Integration Examples – How to integrate the fraud detection API with other systems.</li>
          <li>💡 Best Practices – Recommendations for maintaining and extending the system.</li>
        </ul>
      </section>
    </div>
  );
};

export default Documentation;
