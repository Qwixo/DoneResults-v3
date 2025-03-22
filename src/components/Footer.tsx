import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://i.imgur.com/jbOMOyH.png" alt="DoneResults Logo" />
          </div>
          
          <div className="footer-links">
            <a href="#what-we-do">What We Do</a>
            <a href="#results">Results</a>
            <a href="#process">Process</a>
            <a href="#guarantee">Guarantee</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} DoneResults. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
