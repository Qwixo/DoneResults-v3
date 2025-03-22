import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "How much does it cost?",
      answer: "Our pricing starts at $3,500 per month for a single campaign targeting up to 500 prospects. We also offer custom packages for larger campaigns or multiple target audiences. Book a call for a custom quote."
    },
    {
      question: "How long until we see results?",
      answer: "Most clients start seeing responses within the first week of campaign launch. Typically, it takes 2-3 weeks to generate your first meetings, and 4-6 weeks to see a consistent flow of opportunities."
    },
    {
      question: "Do you guarantee results?",
      answer: "Yes! If we don't generate at least 10 qualified meetings for your business in the first 60 days, we'll continue working for free until we do. This guarantee applies to all our standard packages."
    },
    {
      question: "What industries do you work with?",
      answer: "We specialize in B2B services, SaaS, and professional services. Our approach works particularly well for businesses with average contract values of $10,000+ and complex sales cycles."
    },
    {
      question: "Do you write the emails or do we?",
      answer: "We handle everything! Our team researches your prospects, crafts all email copy, sets up the technical infrastructure, and manages the entire campaign. You just need to show up for the meetings we book."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <div className="faq-toggle">+</div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
