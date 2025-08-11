import React from 'react'
import './About.css'
import WorkingHyperspeed from '../components/Hyperspeed/WorkingHyperspeed'

const About = () => {
  return (
    <div className="about-container">
      <WorkingHyperspeed />
      <div className="about-content">
        <h1 className="about-title">Analytics Dashboard</h1>
        <div className="about-text">
                  <p>
                      <hr />
                    <br />  
            Our advanced analytics provide deep insights into transaction patterns, 
            fraud detection rates, and security metrics. Monitor your financial 
            ecosystem with real-time data visualization and comprehensive reporting.
          </p>
        </div>
        
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>
                <p> REPORT - 1</p>          
                Transaction Analysis Using Power BI
            </h3>
            <div className="metric">
              <span className="metric-value">99.7%</span>
              <span className="metric-label">Accuracy Rate</span>
            </div>
            <p>Real-time Transaction Analysics Using Power BI </p>
          </div>
          
          <div className="analytics-card">
            <h3>
                <p> REPORT - 2</p>          
                Transaction Analysis Using Power BI 
            </h3>
            <div className="metric">
              <span className="metric-value">0.02%</span>
              <span className="metric-label">False Positive Rate</span>
            </div>
            <p>Advanced pattern recognition to minimize false alerts</p>
          </div>
          
          <div className="analytics-card">
            <h3>
                <p> REPORT - 3</p>          
                Transaction Analysis Using Tabula
            </h3>
            <div className="metric">
              <span className="metric-value">&lt; 100ms</span>
              <span className="metric-label">Average Response</span>
            </div>
            <p>Lightning-fast processing for immediate threat detection</p>
          </div>
          
          <div className="analytics-card">
            <h3>
                <p> REPORT - 4</p>          
                Transaction Analysis Using Power BI
            </h3>
            <div className="metric">
              <span className="metric-value">24/7</span>
              <span className="metric-label">Monitoring</span>
            </div>
            <p>Continuous protection across all transaction channels</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
