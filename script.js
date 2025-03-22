document.addEventListener('DOMContentLoaded', function() {
  // Hero Section Animations
  const heroHeadingPart1 = document.querySelector('.hero-heading-part.part-1');
  const heroHeadingPart2 = document.querySelector('.hero-heading-part.part-2');
  const heroHeadingPart3 = document.querySelector('.hero-heading-part.part-3');
  const heroSubheadline = document.querySelector('.hero-subheadline');
  const ctaButton = document.querySelector('.hero-content .cta-button');
  
  // Sequential animation for hero heading parts - ensure this runs immediately
  function animateHeroHeading() {
    // First part: "Want More Clients?"
    setTimeout(() => {
      if (heroHeadingPart1) {
        heroHeadingPart1.style.opacity = '1';
        heroHeadingPart1.style.transform = 'translateY(0)';
        
        // Trigger glitch effect
        heroHeadingPart1.classList.add('glitch-active');
        setTimeout(() => {
          if (heroHeadingPart1) {
            heroHeadingPart1.classList.remove('glitch-active');
          }
        }, 300);
      }
    }, 100);
    
    // Second part: "Guaranteed"
    setTimeout(() => {
      if (heroHeadingPart2) {
        heroHeadingPart2.style.opacity = '1';
        heroHeadingPart2.style.transform = 'translateY(0)';
        
        // Trigger glitch effect
        heroHeadingPart2.classList.add('glitch-active');
        setTimeout(() => {
          if (heroHeadingPart2) {
            heroHeadingPart2.classList.remove('glitch-active');
          }
        }, 300);
      }
    }, 500);
    
    // Third part: "—Or You Don't Pay."
    setTimeout(() => {
      if (heroHeadingPart3) {
        heroHeadingPart3.style.opacity = '1';
        heroHeadingPart3.style.transform = 'translateY(0)';
        
        // Trigger glitch effect with different animation
        heroHeadingPart3.classList.add('glitch-active-alt');
        setTimeout(() => {
          if (heroHeadingPart3) {
            heroHeadingPart3.classList.remove('glitch-active-alt');
          }
        }, 400);
      }
    }, 900);
    
    // Subheadline: fade in slowly
    setTimeout(() => {
      if (heroSubheadline) {
        heroSubheadline.style.opacity = '1';
        heroSubheadline.style.transform = 'translateY(0)';
      }
    }, 1300);
    
    // CTA Button: fade in
    setTimeout(() => {
      if (ctaButton) {
        ctaButton.style.opacity = '1';
        ctaButton.style.transform = 'translateY(0)';
      }
    }, 1700);
  }
  
  // Start the hero animations immediately
  animateHeroHeading();
  
  // Mouse-following dotted background for hero section
  const hero = document.getElementById('hero');
  const heroDots = document.querySelector('.hero-dots-highlight');
  
  // Track mouse position
  let mouseX = 0;
  let mouseY = 0;
  
  // Function to handle mouse movement in hero section
  function handleHeroMouseMove(e) {
    if (hero && heroDots) {
      const rect = hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Set CSS variables for the mask position
      heroDots.style.setProperty('--mouse-x', `${mouseX}px`);
      heroDots.style.setProperty('--mouse-y', `${mouseY}px`);
      
      // Show the effect
      heroDots.style.opacity = '1';
    }
  }
  
  // Add mouse move event listener to the hero section
  if (hero && heroDots) {
    hero.addEventListener('mousemove', handleHeroMouseMove);
    
    // Hide the effect when mouse leaves
    hero.addEventListener('mouseleave', () => {
      if (heroDots) {
        heroDots.style.opacity = '0';
      }
    });
  }
  
  // Fade out dots at the bottom of hero section
  function updateDotsFade() {
    if (hero) {
      const heroRect = hero.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      
      // Calculate how far we've scrolled into the hero section
      const scrollPercentage = Math.min(1, scrollPosition / (heroRect.height * 0.5));
      
      // Update the opacity of the dots based on scroll position
      const dotsFade = document.querySelector('.hero-dots-fade');
      if (dotsFade) {
        dotsFade.style.opacity = Math.min(1, scrollPercentage * 2);
      }
    }
  }
  
  // Update dots fade on scroll
  window.addEventListener('scroll', updateDotsFade);
  
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Header visibility on scroll
  const header = document.getElementById('main-header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    if (header) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
      
      lastScrollTop = scrollTop;
    }
  });

  // Mouse-following Glowing Effect for Feature Cards
  const featuresContainer = document.getElementById('features-container');
  const featureCards = document.querySelectorAll('.feature-card-wrapper');
  
  // Track mouse position
  let featureMouseX = 0;
  let featureMouseY = 0;
  
  // Animation frame request ID
  let animationFrameId = null;
  
  // Function to handle mouse movement
  function handleMouseMove(e) {
    featureMouseX = e.clientX;
    featureMouseY = e.clientY;
    
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    
    animationFrameId = requestAnimationFrame(updateGlowingEffects);
  }
  
  // Function to update glowing effects<boltAction type="file" filePath="script.js">  // Function to update glowing effects based on mouse position
  function updateGlowingEffects() {
    featureCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const glowingEffect = card.querySelector('.glowing-effect');
      
      if (!glowingEffect) return;
      
      // Calculate center of the card
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to center
      const distanceFromCenter = Math.hypot(featureMouseX - centerX, featureMouseY - centerY);
      const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * 0.01; // Default value if CSS var not available
      
      // Check if mouse is within inactive zone
      if (distanceFromCenter < inactiveRadius) {
        card.classList.remove('active');
        return;
      }
      
      // Check if mouse is within proximity (default to 64px if CSS var not available)
      const proximity = 64;
      const isActive = 
        featureMouseX > rect.left - proximity &&
        featureMouseX < rect.left + rect.width + proximity &&
        featureMouseY > rect.top - proximity &&
        featureMouseY < rect.top + rect.height + proximity;
      
      if (isActive) {
        card.classList.add('active');
        
        // Calculate angle from center to mouse
        const angle = Math.atan2(featureMouseY - centerY, featureMouseX - centerX) * (180 / Math.PI) + 90;
        
        // Set the start angle for the mask
        glowingEffect.style.setProperty('--start', angle.toString());
      } else {
        card.classList.remove('active');
      }
    });
  }
  
  // Add mouse move event listener to the document for feature cards
  document.addEventListener('mousemove', handleMouseMove);
  
  // Initialize the dots fade effect
  updateDotsFade();
  
  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    document.removeEventListener('mousemove', handleMouseMove);
    if (hero) {
      hero.removeEventListener('mousemove', handleHeroMouseMove);
    }
    window.removeEventListener('scroll', updateDotsFade);
  });
});

// Add CSS for glitch animation directly in the script to avoid appendChild error
document.addEventListener('DOMContentLoaded', function() {
  // Create a style element
  const style = document.createElement('style');
  
  // Set the CSS text content
  style.textContent = `
    .glitch-active::before,
    .glitch-active::after {
      opacity: 1;
    }
    
    .glitch-active-alt::before,
    .glitch-active-alt::after {
      opacity: 1;
    }
    
    .glitch-active-alt::before {
      animation: glitch-anim-1 0.4s linear alternate-reverse;
      text-shadow: -2px 0 var(--dark-aqua);
    }
    
    .glitch-active-alt::after {
      animation: glitch-anim-2 0.4s linear alternate-reverse;
      text-shadow: 2px 0 var(--light-aqua);
    }
  `;
  
  // Safely append the style element to the head
  if (document.head) {
    document.head.appendChild(style);
  } else {
    // If head is not available yet, add it to the body
    document.body.appendChild(style);
  }
});
