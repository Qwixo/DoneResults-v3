import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started?</h2>
        <p className="text-center mb-8">Book a free 30-minute strategy call to discuss your goals and see if we're a good fit.</p>
        
        <div className="text-center">
          <a href="https://calendly.com/doneresults/strategy" className="cta-button" target="_blank" rel="noopener noreferrer">
            Book Your Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
