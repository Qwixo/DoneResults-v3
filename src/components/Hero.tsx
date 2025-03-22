import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    
    const handleHeroMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const rect = hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      const dotsHighlight = hero.querySelector('.hero-dots-highlight') as HTMLElement;
      if (dotsHighlight) {
        dotsHighlight.style.setProperty('--mouse-x', `${mouseX}px`);
        dotsHighlight.style.setProperty('--mouse-y', `${mouseY}px`);
        dotsHighlight.style.opacity = '1';
      }
    };
    
    const updateDotsFade = () => {
      const hero = heroRef.current;
      if (!hero) return;
      
      const dotsHighlight = hero.querySelector('.hero-dots-highlight') as HTMLElement;
      if (!dotsHighlight) return;
      
      // Check if mouse is within hero section
      const rect = hero.getBoundingClientRect();
      const isMouseInHero = 
        mouseX >= 0 && 
        mouseX <= rect.width && 
        mouseY >= 0 && 
        mouseY <= rect.height;
      
      dotsHighlight.style.opacity = isMouseInHero ? '1' : '0';
    };
    
    // Add event listeners
    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleHeroMouseMove);
      
      // Animate hero heading
      const animateHeading = () => {
        const headingParts = hero.querySelectorAll('.hero-heading-part');
        headingParts.forEach((part, index) => {
          setTimeout(() => {
            (part as HTMLElement).style.opacity = '1';
            (part as HTMLElement).style.transform = 'translateY(0)';
          }, 300 + index * 200);
        });
        
        // Animate hero paragraph
        const heroParagraph = hero.querySelector('.hero-content p');
        if (heroParagraph) {
          setTimeout(() => {
            (heroParagraph as HTMLElement).style.opacity = '1';
            (heroParagraph as HTMLElement).style.transform = 'translateY(0)';
          }, 300 + headingParts.length * 200);
        }
        
        // Animate CTA button
        const ctaButton = hero.querySelector('.cta-button');
        if (ctaButton) {
          setTimeout(() => {
            (ctaButton as HTMLElement).style.opacity = '1';
            (ctaButton as HTMLElement).style.transform = 'translateY(0)';
          }, 300 + (headingParts.length + 1) * 200);
        }
      };
      
      // Start animations after a short delay
      setTimeout(animateHeading, 500);
      
      // Set up glitch effect
      const glitchElements = hero.querySelectorAll('.glitch');
      glitchElements.forEach(el => {
        const text = el.textContent || '';
        el.setAttribute('data-text', text);
        
        // Trigger glitch animation randomly
        setInterval(() => {
          el.classList.add('glitch-active');
          setTimeout(() => {
            el.classList.remove('glitch-active');
          }, 300);
        }, 3000 + Math.random() * 5000);
      });
      
      // Set up alternative glitch effect
      const glitchAltElements = hero.querySelectorAll('.glitch-alt');
      glitchAltElements.forEach(el => {
        const text = el.textContent || '';
        el.setAttribute('data-text', text);
        
        // Trigger glitch animation randomly
        setInterval(() => {
          el.classList.add('glitch-active-alt');
          setTimeout(() => {
            el.classList.remove('glitch-active-alt');
          }, 400);
        }, 4000 + Math.random() * 6000);
      });
    }
    
    // Clean up
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleHeroMouseMove);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-dots"></div>
        <div className="hero-dots-highlight"></div>
        <div className="hero-dots-fade"></div>
      </div>
      
      <div className="hero-content">
        <h1>
          <span className="hero-heading-part">Cold Email Campaigns That</span>{' '}
          <span className="hero-heading-part highlight-guaranteed glitch">Actually Work</span>
        </h1>
        
        <p>
          We create and execute highly personalized cold email campaigns that generate real responses, meetings, and sales opportunities for B2B companies.
        </p>
        
        <a href="#contact" className="cta-button">Book a Free Strategy Call</a>
      </div>
    </section>
  );
};

export default Hero;
