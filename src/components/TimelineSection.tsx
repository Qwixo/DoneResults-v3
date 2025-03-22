import React from 'react';
import { TimelineDemo } from './TimelineDemo';

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
        <div className="section-intro">
          <p>Follow our timeline to see how we've evolved and the milestones we've achieved along the way.</p>
        </div>
        
        <TimelineDemo />
      </div>
    </section>
  );
};

export default TimelineSection;
