import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
        <div className="two-column">
          <div className="column-left">
            <h3>Cold Email Campaigns That Actually Work</h3>
            <p>We create and execute highly personalized cold email campaigns that generate real responses, meetings, and sales opportunities for your business.</p>
            <p>Unlike generic email blasts or automated sequences, our campaigns are meticulously researched, individually crafted, and continuously optimized to reach decision-makers at your target companies.</p>
          </div>
          <div className="column-right">
            <img src="/images/ai-outreach.svg" alt="AI-Powered Outreach" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
