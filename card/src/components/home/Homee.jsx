import React, { useState } from "react";
import "./Homee.css";

const Home = () => {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call for fraud prediction
    setTimeout(() => {
      const riskScore = Math.random();
      const fraudProbability = (riskScore * 100).toFixed(2);
      
      setPrediction({
        riskScore: fraudProbability,
        status: fraudProbability > 70 ? 'HIGH RISK' : fraudProbability > 30 ? 'MEDIUM RISK' : 'LOW RISK',
        recommendation: fraudProbability > 70 ? 'BLOCK TRANSACTION' : fraudProbability > 30 ? 'REVIEW REQUIRED' : 'APPROVE TRANSACTION'
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="prediction-container">
      <div className="prediction-content">
        <div className="prediction-header">
          <h1 className="prediction-title">Fraud Detection Prediction</h1>
          <p className="prediction-subtitle">
            Enter transaction details to analyze fraud probability using our advanced AI model
          </p>
        </div>

        <div className="prediction-layout">
          <div className="form-wrapper">
            <form className="transaction-form" onSubmit={handleSubmit}>
              {/* Transaction Details */}
              <div className="form-section fade-in">
                <h3>📊 Transaction Details</h3>
                <div className="input-grid">
                  <input 
                    type="datetime-local" 
                    name="transactionDate"
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="number" 
                    name="amount"
                    placeholder="Transaction Amount ($)" 
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="text" 
                    name="merchant"
                    placeholder="Merchant Name" 
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="text" 
                    name="mcc"
                    placeholder="Merchant Category Code (MCC)" 
                    onChange={handleInputChange}
                  />
                  <input 
                    type="text" 
                    name="location"
                    placeholder="Transaction Location" 
                    onChange={handleInputChange}
                  />
                  <select name="currency" onChange={handleInputChange} required>
                    <option value="">Select Currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>
              </div>

              {/* Card Details */}
              <div className="form-section fade-in delay-1">
                <h3>💳 Card Details</h3>
                <div className="input-grid">
                  <input 
                    type="text" 
                    name="cardholderName"
                    placeholder="Cardholder Name" 
                    onChange={handleInputChange}
                    required 
                  />
                  <input 
                    type="text" 
                    name="cardNumber"
                    placeholder="Card Number (Last 4 digits)" 
                    maxLength="4"
                    onChange={handleInputChange}
                  />
                  <select name="cardType" onChange={handleInputChange} required>
                    <option value="">Card Type</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="amex">American Express</option>
                    <option value="discover">Discover</option>
                  </select>
                  <input 
                    type="month" 
                    name="expiryDate"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Risk Factors */}
              <div className="form-section fade-in delay-2">
                <h3>🔍 Risk Assessment</h3>
                <div className="input-grid">
                  <select name="transactionType" onChange={handleInputChange}>
                    <option value="">Transaction Type</option>
                    <option value="online">Online Purchase</option>
                    <option value="instore">In-Store</option>
                    <option value="atm">ATM Withdrawal</option>
                    <option value="transfer">Money Transfer</option>
                  </select>
                  <select name="deviceType" onChange={handleInputChange}>
                    <option value="">Device Type</option>
                    <option value="mobile">Mobile</option>
                    <option value="desktop">Desktop</option>
                    <option value="tablet">Tablet</option>
                    <option value="pos">POS Terminal</option>
                  </select>
                  <input 
                    type="text" 
                    name="ipLocation"
                    placeholder="IP Location (Optional)" 
                    onChange={handleInputChange}
                  />
                  <select name="timeOfDay" onChange={handleInputChange}>
                    <option value="">Time of Day</option>
                    <option value="morning">Morning (6AM-12PM)</option>
                    <option value="afternoon">Afternoon (12PM-6PM)</option>
                    <option value="evening">Evening (6PM-12AM)</option>
                    <option value="night">Night (12AM-6AM)</option>
                  </select>
                </div>
                <textarea 
                  name="additionalInfo"
                  placeholder="Additional Information (Optional)" 
                  rows="3"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="predict-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Analyzing Transaction...
                  </>
                ) : (
                  <>
                    🔮 Predict Fraud Risk
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Prediction Results */}
          {prediction && (
            <div className="prediction-results fade-in">
              <h3>🎯 Prediction Results</h3>
              <div className="result-card">
                <div className="risk-score">
                  <span className="score-value">{prediction.riskScore}%</span>
                  <span className="score-label">Fraud Probability</span>
                </div>
                <div className={`risk-status ${prediction.status.toLowerCase().replace(' ', '-')}`}>
                  {prediction.status}
                </div>
                <div className="recommendation">
                  <strong>Recommendation:</strong> {prediction.recommendation}
                </div>
                <div className="confidence-meter">
                  <div className="meter-label">Confidence Level</div>
                  <div className="meter-bar">
                    <div 
                      className="meter-fill" 
                      style={{width: `${100 - prediction.riskScore}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
