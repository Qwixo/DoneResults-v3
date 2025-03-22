import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <div className="section-intro">
          <p>We've developed a streamlined process to get your campaigns up and running quickly while ensuring maximum results:</p>
        </div>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Discovery</h3>
            <p>We learn about your business, ideal customers, and value proposition to create a targeted campaign strategy.</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Research</h3>
            <p>Our team identifies and researches your ideal prospects to gather personalization data points.</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Campaign Creation</h3>
            <p>We craft personalized email sequences, set up tracking, and prepare your sending infrastructure.</p>
          </div>
          
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">4</div>
            <h3>Launch & Optimize</h3>
            <p>We launch your campaign and continuously optimize based on response data to improve results.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
