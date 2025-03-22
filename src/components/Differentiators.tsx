import React, { useEffect } from 'react';

const Differentiators: React.FC = () => {
  useEffect(() => {
    let featureCards: HTMLElement[] = [];
    let featureMouseX = 0;
    let featureMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      featureMouseX = e.clientX;
      featureMouseY = e.clientY;
      requestAnimationFrame(updateGlowingEffects);
    };

    const updateGlowingEffects = () => {
      featureCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const glowingEffect = card.querySelector('.glowing-effect');
        if (!glowingEffect) return;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceFromCenter = Math.hypot(featureMouseX - centerX, featureMouseY - centerY);
        const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * 0.01;

        if (distanceFromCenter < inactiveRadius) {
          card.classList.remove('active');
          return;
        }

        const proximity = 64;
        const isActive =
          featureMouseX > rect.left - proximity &&
          featureMouseX < rect.left + rect.width + proximity &&
          featureMouseY > rect.top - proximity &&
          featureMouseY < rect.top + rect.height + proximity;

        if (isActive) {
          card.classList.add('active');
          const angle = Math.atan2(featureMouseY - centerY, featureMouseX - centerX) * (180 / Math.PI) + 90;
          (glowingEffect as HTMLElement).style.setProperty('--start', angle.toString());
        } else {
          card.classList.remove('active');
        }
      });
    };

    setTimeout(() => {
      featureCards = Array.from(document.querySelectorAll('.feature-card-wrapper')) as HTMLElement[];
      document.addEventListener('mousemove', handleMouseMove);
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="differentiators" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Makes Us Different</h2>
        <div className="section-intro">
          <p>Unlike typical cold email agencies or in-house campaigns, our approach is fundamentally different:</p>
        </div>

        <div className="features-grid">
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-personalization.svg" alt="Personalization" />
              </div>
              <h3>True Personalization</h3>
              <p>
                We research each prospect and craft messages that speak directly to their specific situation, not just "Hi {`{FirstName}`}" templates.
              </p>
            </div>
            <div className="glowing-effect"></div>
          </div>

          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-ai.svg" alt="AI-Powered" />
              </div>
              <h3>AI-Enhanced (Not Replaced)</h3>
              <p>We use AI to enhance human creativity, not replace it. This gives you the best of both worlds: scale and authenticity.</p>
            </div>
            <div className="glowing-effect"></div>
          </div>

          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-domain.svg" alt="Domain Protection" />
              </div>
              <h3>Domain Protection</h3>
              <p>Our proprietary sending infrastructure and warming protocols ensure your domain stays clean and emails land in the inbox.</p>
            </div>
            <div className="glowing-effect"></div>
          </div>

          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-followup.svg" alt="Smart Follow-ups" />
              </div>
              <h3>Smart Follow-up Sequences</h3>
              <p>Our follow-ups are contextual and add value, not just "bumping this to the top of your inbox" messages that annoy prospects.</p>
            </div>
            <div className="glowing-effect"></div>
          </div>

          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-reporting.svg" alt="Transparent Reporting" />
              </div>
              <h3>Transparent Reporting</h3>
              <p>You'll always know exactly how your campaigns are performing with our real-time dashboards and weekly analysis calls.</p>
            </div>
            <div className="glowing-effect"></div>
          </div>

          <div className="feature-card-wrapper">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <img src="/images/icon-speed.svg" alt="Speed" />
              </div>
              <h3>Speed to Market</h3>
              <p>We can launch your first campaign in as little as 7 days, not weeks or months like traditional agencies.</p>
            </div>
            <div className="glowing-effect"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
