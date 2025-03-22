import React from 'react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Real Results & Proof</h2>
        <div className="section-intro">
          <p>Our cold email campaigns consistently deliver exceptional results for our clients. Here's what you can expect:</p>
        </div>
        
        <div className="results-grid">
          <div className="result-card">
            <img src="/images/result-1.svg" alt="Response Rate" />
            <h3>15-25%</h3>
            <p>Average response rate across campaigns</p>
          </div>
          
          <div className="result-card">
            <img src="/images/result-2.svg" alt="Meeting Rate" />
            <h3>5-10%</h3>
            <p>Meeting booking rate from cold prospects</p>
          </div>
          
          <div className="result-card">
            <img src="/images/result-3.svg" alt="ROI" />
            <h3>300%+</h3>
            <p>Average ROI on campaign investment</p>
          </div>
          
          <div className="result-card">
            <img src="/images/result-4.svg" alt="Deliverability" />
            <h3>98%+</h3>
            <p>Email deliverability rate</p>
          </div>
        </div>
        
        <div className="highlight-stat">
          <p>Our clients see an average of <strong>$15,000 - $50,000</strong> in new business from each campaign we run.</p>
        </div>
      </div>
    </section>
  );
};

export default Results;
