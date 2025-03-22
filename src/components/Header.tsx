import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header" className={isVisible ? 'visible' : ''}>
      <div className="container">
        <div className="logo">
          <img src="https://i.imgur.com/jbOMOyH.png" alt="DoneResults Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#what-we-do">What We Do</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#guarantee">Guarantee</a></li>
            <li><a href="#contact" className="nav-cta">Book a Call</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
