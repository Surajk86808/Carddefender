import React from "react";
import "./NewsPress.css";

const NewsPress = () => {
  return (
    <div className="news-press-container">
      <h1>News & Press</h1>
      <p>
        Stay updated with the latest announcements, partnerships, and industry
        news from CardDefender.
      </p>

      <div className="news-section">
        <div className="news-card">
          <h2>🚀 CardDefender Secures Series A Funding</h2>
          <p>
            We are thrilled to announce that CardDefender has secured $10M in
            Series A funding to further strengthen our fraud prevention
            technology.
          </p>
          <span>March 10, 2025</span>
        </div>

        <div className="news-card">
          <h2>🤝 Partnership with Global Bank</h2>
          <p>
            CardDefender has partnered with Global Bank to bring advanced
            fraud detection capabilities to millions of customers worldwide.
          </p>
          <span>February 20, 2025</span>
        </div>

        <div className="news-card">
          <h2>📊 Industry Recognition</h2>
          <p>
            CardDefender has been listed in the Top 10 AI Security Startups by
            FinTech Today for its innovation in fraud prevention.
          </p>
          <span>January 5, 2025</span>
        </div>
      </div>
    </div>
  );
};

export default NewsPress;
