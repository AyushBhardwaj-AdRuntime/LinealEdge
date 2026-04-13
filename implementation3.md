The Missing Part: Code to Fix It
To get that 1:1 match, we need to import the correct fonts and rewrite the JSX and CSS for those specific complex sections.

Step 1: Import the Correct Fonts
Put this at the very top of your global style.css file to pull in exact lookalike fonts from Google Fonts.

CSS
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

:root {
  --font-serif: 'Playfair Display', serif; /* Use this for ALL h1, h2, h3 */
  --font-sans: 'DM Sans', sans-serif; /* Use this for ALL p, a, span */
  --color-dark: #1a2b2d;
  --color-gray: #6b7c7e;
  --color-light-bg: #f7f7f5;
  --color-green: #c9f29b;
}

body {
  font-family: var(--font-sans);
  color: var(--color-gray);
}

h1, h2, h3, h4 {
  font-family: var(--font-serif);
  color: var(--color-dark);
  font-weight: 400;
}
Step 2: The "Pulse of Tax Industry" Grid Correction
Replace your current OurServicesSectionTwo.jsx with this masonry-style grid.

JavaScript
import React from 'react';

const PulseOfTaxTrends = () => {
  return (
    <section className="pulse-section">
      <div className="container">
        <span className="section-pill transparent-pill">Our Services</span>
        <h2 className="section-title">We're on The Pulse of Tax Industry Trends</h2>
        
        <div className="pulse-grid">
          {/* Card 1 */}
          <div className="pulse-card">
            <h3>Time Savings</h3>
            <p>Companies reduce financial admin work by 50% with automated accounting solutions.</p>
          </div>

          {/* Center Image */}
          <div className="pulse-image-container">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Accounting Desk" 
              className="pulse-image"
            />
          </div>

          {/* Card 2 */}
          <div className="pulse-card">
            <h3>Risk Reduction</h3>
            <p>82% of business failures are due to poor financial management — Execor helps prevent this.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PulseOfTaxTrends;
The CSS for the Pulse Grid:

CSS
.pulse-section {
  padding: 100px 0;
}

.pulse-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr; /* Center image is wider */
  gap: 30px;
  margin-top: 50px;
}

.pulse-card {
  background-color: #f4f5f6; /* Very light gray */
  padding: 40px;
  border-radius: 8px;
}

.pulse-card h3 {
  font-family: var(--font-sans); /* Execor uses sans-serif for these specific card titles */
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 500;
}

.pulse-card p {
  font-size: 1.05rem;
  line-height: 1.6;
}

.pulse-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
Step 3: The Testimonials Section Correction
Replace your Testimonials code with this highly-styled version to match the exact look in the screenshot.

JavaScript
import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <span className="section-pill">Testimonials</span>
        <h2 className="section-title">Why Our Clients Love to Work with Us!</h2>
        
        {/* Header Action Row */}
        <div className="testimonials-header-row">
          <div className="google-lockup">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="g-logo" />
            <span className="rating-score">5.0</span>
            <span className="rating-text">Google Reviews</span>
          </div>
          <button className="btn-light-green">Read All Testimonials &rarr;</button>
        </div>

        {/* Cards Grid */}
        <div className="testimonials-grid">
          
          <div className="test-card">
            <span className="huge-quote">“</span>
            <p className="quote-text">"Partnering with Execor has been a game-changer. Their expert accounting support gives me the clarity to focus on strategic growth, confident that our finances are in perfect order."</p>
            <div className="author-row">
              <img src="https://i.pravatar.cc/100?img=11" alt="Jack Wolf" className="author-avatar"/>
              <div className="author-info">
                <h4>Jack Wolf</h4>
                <p>Entrepreneur, Salon Bank</p>
              </div>
            </div>
          </div>

          <div className="test-card">
            <span className="huge-quote">“</span>
            <p className="quote-text">"Execor handles my accounting, allowing me to self-evaluate objectively and focus on leadership, team management, and achieving our goals."</p>
            <div className="author-row">
              <img src="https://i.pravatar.cc/100?img=5" alt="Rebbeca Parker" className="author-avatar"/>
              <div className="author-info">
                <h4>Rebbeca Parker</h4>
                <p>CEO, Forex</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
The CSS for Testimonials:

CSS
.testimonials-section {
  padding: 100px 0;
}

.testimonials-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
}

.google-lockup {
  display: flex;
  align-items: center;
  gap: 15px;
}

.g-logo {
  width: 30px;
}

.rating-score {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--color-dark);
}

.btn-light-green {
  background-color: var(--color-green);
  color: var(--color-dark);
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.test-card {
  background-color: var(--color-light-bg); /* Soft beige background */
  padding: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.huge-quote {
  font-family: var(--font-serif);
  font-size: 80px;
  color: #1a2b2d;
  line-height: 0.5;
  margin-bottom: 20px;
}

.quote-text {
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 40px;
  flex-grow: 1;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.author-info p {
  font-size: 0.9rem;
}