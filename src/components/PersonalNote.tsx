import React from 'react';

const PersonalNote: React.FC = () => {
  return (
    <section id="personal-note" className="py-16">
      <div className="container mx-auto">
        <div className="two-column">
          <div className="column-left">
            <img src="/images/jan-photo.svg" alt="Jan Doe" className="founder-photo" />
          </div>
          <div className="column-right">
            <h2 className="text-3xl font-bold mb-6">A Personal Note</h2>
            <p>Hi, I'm Jan, the founder of DoneResults.</p>
            <p>After spending 10+ years in B2B sales and marketing roles, I discovered that most companies struggle with the same problem: generating quality leads consistently.</p>
            <p>I've personally sent over 50,000 cold emails and tested countless approaches. What I've learned is that personalization at scale is possible, but it requires the right blend of technology, human creativity, and process.</p>
            <p>That's why I started DoneResults - to help B2B companies generate real business opportunities through cold email without the usual spam tactics or generic templates.</p>
            <p>If you're tired of cold email campaigns that don't deliver results, let's talk.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalNote;
