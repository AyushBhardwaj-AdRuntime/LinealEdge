<!-- OurServicesSectionOne.jsx (Efficient Bookkeeping Solutions)
This is the first Services section, focusing on bookkeeping -->


import React from 'react';

const OurServicesSectionOne = () => {
  return (
    <section className="section section-our-services-1">
      <div className="container">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title">Efficient Bookkeeping Solutions</h2>
        <p className="section-intro-text">Insert the service introduction text from the website about tailoring workflows, leveraging tech, and industry focus.</p>
        <div className="services-grid">
          <ServiceCard title="Accounting" />
          <ServiceCard title="Business Strategy" />
          <ServiceCard title="Tax Preparation" />
          <ServiceCard title="Tax Planning" />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title }) => (
    <div className="service-card">
        <h3 className="card-title">{title}</h3>
        <a href="#" className="card-link">Learn More</a>
    </div>
);

export default OurServicesSectionOne;



<!-- BusinessImpactSection -->


import React from 'react';

const BusinessImpactSection = () => {
  const impacts = [
    { value: '30%', text: 'Businesses that work with Execor reduce tax liability' },
    { value: '80%', text: 'Automating accounting processes reduces manual workload' },
    { value: '78%', text: 'Small businesses see higher profits after hiring Execor' },
  ];

  return (
    <section className="section section-business-impact">
      <div className="container">
        <span className="section-subtitle">Our Business Impact</span>
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <div key={index} className="impact-item">
              <span className="impact-value">{impact.value}</span>
              <p className="impact-text">{impact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;


<!-- MeetOurLeadersSection -->


import React from 'react';

const MeetOurLeadersSection = () => {
  return (
    <section className="section section-meet-our-leaders">
      <div className="container">
        <span className="section-subtitle">Personal and Business Accounting Team</span>
        <h2 className="section-title">Meet Our Leaders</h2>
        <p className="section-intro-text">Add the full introductory text about the professional team here...</p>
        <div className="actions-row">
            <a href="https://execor.vamtam.com/about/team/" className="btn btn-primary">Meet the Team</a>
            <a href="https://execor.vamtam.com/about/careers/" className="link-arrow">Career Opportunities</a>
        </div>
        <div className="leaders-grid">
          <LeaderCard 
            imageUrl="PLACEHOLDER_FOR_DANIEL_BRILA_URL" 
            name="Daniel Brila" 
            role="President"
            url="https://execor.vamtam.com/about/team/daniel-brila/"
          />
          <LeaderCard 
            imageUrl="PLACEHOLDER_FOR_REBECA_JOHNSON_URL" 
            name="Rebeca Johnson" 
            role="Senior Tax Manager"
            url="https://execor.vamtam.com/about/team/rebeca-johnson/"
          />
        </div>
      </div>
    </section>
  );
};

const LeaderCard = ({ imageUrl, name, role, url }) => (
    <a href={url} className="leader-card">
        <img src={imageUrl} alt={name} className="leader-image" />
        <div className="leader-info">
            <h3 className="leader-name">{name}</h3>
            <p className="leader-role">{role}</p>
        </div>
    </a>
);

export default MeetOurLeadersSection;

<!-- OurServicesSectionTwo.jsx (The Pulse of Tax Industry Trends)
This is the second services section, with specific benefits and an illustration. -->


import React from 'react';

const OurServicesSectionTwo = () => {
  return (
    <section className="section section-our-services-2">
      <div className="container">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title">We're on The Pulse of Tax Industry Trends</h2>
        <div className="button-container">
            <a href="https://execor.vamtam.com/contact/" className="btn btn-secondary">Contact us</a>
        </div>
        <div className="services-features-flex">
            <div className="features-list">
                <FeatureItem 
                    iconClass="icon-time-savings" 
                    title="Time Savings" 
                    text="Add full time savings text from website here..."
                />
                <FeatureItem 
                    iconClass="icon-profitability" 
                    title="Increased Profitability" 
                    text="Add full profitability text from website here..."
                />
                <FeatureItem 
                    iconClass="icon-risk-reduction" 
                    title="Risk Reduction" 
                    text="Add full risk reduction text from website here..."
                />
            </div>
            <div className="illustration-container">
                <img src="PLACEHOLDER_FOR_CHART_ILLUSTRATION_URL" alt="Growth chart illustration" className="chart-illustration" />
                <div className="chart-stats">
                    <p>Growth of Businesses Using Execor Professional Accounting Services</p>
                    {/* Add chart stat elements here */}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ iconClass, title, text }) => (
    <div className="feature-item">
        <i className={`feature-icon ${iconClass}`}></i>
        <div className="item-content">
            <h3 className="item-title">{title}</h3>
            <p className="item-text">{text}</p>
        </div>
    </div>
);

export default OurServicesSectionTwo;
<!-- 
TestimonialsSection.jsx
This implements the static structure. A slider library (like swiper.js or slick-carousel) would be needed for the functionality shown in the original screenshot. -->

import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Add full quote from Rebbeca Parker here...",
      name: "Rebbeca Parker",
      role: "CEO, Forex"
    },
    {
        quote: "Add full quote from Carlos Moya here...",
        name: "Carlos Moya",
        role: "CEO, TAX Com"
    },
    {
        quote: "Add full quote from Jack Wolf here...",
        name: "Jack Wolf",
        role: "Entrepreneur, Salon Bank"
    }
    // Add more testimonials here to repeat for the loop.
  ];

  return (
    <section className="section section-testimonials">
      <div className="container">
        <span className="section-subtitle">Testimonials</span>
        <h2 className="section-title">Why Our Clients Love to Work with Us!</h2>
        <div className="testimonials-header">
            <div className="google-review-badge">
                <a href="https://www.google.com/search?sa=X&sca_esv=4f0a5c27e1f09180&hl=en&tbm=lcl&q=CHAN+%26+COMPANY+LLC+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2tLA0NzUzNzA2NDaxNLI0tDAz3cDI-IpRytnD0U9BTcHZ3zfA0S9SwcfHWSEotSwztbx4ESseSQDKjGFuVAAAAA&rldimm=1897567031349291865&ved=2ahUKEwjm5qyrybmMAxXHQvEDHYd-GNMQ9fQKegQIRhAF&biw=1723&bih=861&dpr=2#lkt=LocalPoiReviews">Google Reviews</a>
                <span>5.0</span> {/* Star rating, simplified */}
            </div>
            <a href="https://execor.vamtam.com/about/testimonials/" className="link-arrow">Read All Testimonials</a>
        </div>
        
        {/* Placeholder for testimonials loop. For a slider, this structure would change for your slider library. */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        {/* Logos section */}
        <div className="client-logos-grid">
            <p>Fortune 500 Professionals Trust Execor CPA</p>
            {/* Add placeholder logos here */}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, name, role }) => (
    <div className="testimonial-card">
        <i className="icon-star-rating"></i> {/* Star rating graphic placeholder */}
        <p className="testimonial-quote">{quote}</p>
        <div className="testimonial-author">
            <p className="author-name">{name}</p>
            <p className="author-role">{role}</p>
        </div>
    </div>
);

export default TestimonialsSection;
<!-- OurBlogSection.jsx -->
import React from 'react';

const OurBlogSection = () => {
  const blogPosts = [
    {
      imageUrl: "PLACEHOLDER_FOR_SENIORS_BLOG_IMAGE_URL",
      categories: [{name: 'Property', url: 'https://execor.vamtam.com/category/property/'}],
      date: 'March 28, 2025',
      title: 'Do Seniors Pay Property Taxes in Massachusetts?',
      excerpt: 'Add full excerpt text about MA seniors & property taxes here...',
      url: 'https://execor.vamtam.com/2025/03/28/do-seniors-pay-property-taxes-in-massachusetts/'
    },
    {
        imageUrl: "PLACEHOLDER_FOR_REDUCE_TAXES_BLOG_IMAGE_URL",
        categories: [{name: 'Property', url: 'https://execor.vamtam.com/category/property/'}, {name: 'Tax', url: 'https://execor.vamtam.com/category/tax/'}],
        date: 'March 28, 2025',
        title: 'Reduce Taxes and Sleep Well at Night',
        excerpt: 'Add full excerpt text about reducing taxes and slepping well here...',
        url: 'https://execor.vamtam.com/2025/03/28/reduce-taxes-and-sleep-well-at-night/'
    },
    // Add more blog posts for testing
  ];

  return (
    <section className="section section-our-blog">
      <div className="container">
        <span className="section-subtitle">Our blog</span>
        <h2 className="section-title">Insights & Strategies. Your Guide to Smarter Accounting.</h2>
        <div className="actions-row">
            <a href="https://execor.vamtam.com/blog/" className="btn btn-secondary">View More</a>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPostCard = ({ imageUrl, categories, date, title, excerpt, url }) => (
    <div className="blog-post-card">
        <a href={url} className="image-link">
            <img src={imageUrl} alt={title} className="post-image" />
        </a>
        <div className="card-content">
            <div className="post-meta">
                <span className="post-categories">
                    {categories.map((category, index) => (
                        <a key={index} href={category.url}>{category.name}</a>
                    ))}
                </span>
                <span className="post-date">{date}</span>
            </div>
            <a href={url} className="title-link">
                <h3 className="post-title">{title}</h3>
            </a>
            <p className="post-excerpt">{excerpt}</p>
        </div>
    </div>
);

export default OurBlogSection;

<!-- WorksheetsSection.jsx
Adapting from the previous turn, for consistency within the whole page code. -->

import React from 'react';

const WorksheetsSection = () => {
  const worksheets = [
    {
      title: 'Entity Summary Worksheet',
      description: 'To summarize your multimember LLC, partnership, or corporation’s financial information.',
      url: 'https://execor.vamtam.com/worksheet'
    },
    {
        title: 'Tax Info Sheet',
        description: 'We’ll need these tax documents and information to file.',
        url: 'https://execor.vamtam.com/worksheet'
    },
    {
        title: 'Rental Real Estate Worksheet',
        description: 'To summarize income and expenses from a rental unit',
        url: 'https://execor.vamtam.com/worksheet'
    }
  ];

  return (
    <section className="section section-worksheets">
      <div className="container">
        <span className="section-subtitle">Personal and Business Accounting Team</span>
        <h2 className="section-title">Helpful Worksheets to Simplify Your Finances</h2>
        <div className="actions-row">
            <a href="https://execor.vamtam.com/worksheets/" className="btn btn-secondary">View More</a>
        </div>
        <div className="worksheets-grid">
          {worksheets.map((worksheet, index) => (
            <WorksheetCard key={index} {...worksheet} />
          ))}
        </div>
        <div className="awards-container">
            <p>2024 Angies List Super Service Award</p>
            {/* Award graphic placeholder */}
        </div>
      </div>
    </section>
  );
};

const WorksheetCard = ({ title, description, url }) => (
    <div className="worksheet-card">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a href={url} className="link-download">Download</a>
    </div>
);

export default WorksheetsSection;

<!-- CTASection.jsx -->

import React from 'react';

const CTASection = () => {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-content">
            <h2 className="section-title">Ready to Come in For an Appointment?</h2>
            <p>Get in touch with our accounting professionals and work with the top CPAs in the country.</p>
            <div className="button-container">
                <a href="https://execor.vamtam.com/free-consultation/" className="btn btn-primary">Schedule a Consultation</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


<!-- Centralized CSS Structure (src/style.css)
Here is a large block of CSS that styles all the components above. This styles things based on the classes used and assumes a 1200px container for consistency. -->

<!-- CSS -->
/* --- Global Styles --- */
:root {
  --bg-color-main: #fbfbf9;
  --bg-color-secondary: #ffffff;
  --text-color-primary: #1A2B2D;
  --text-color-secondary: #6B7C7E;
  --accent-color-primary: #A2C08A; /* The main green */
  --accent-color-secondary: #0E2B2C; /* Darker green */
  --accent-color-dark: #1F2D2E;
  --white: #ffffff;
  
  --font-family-title: 'Georgia', serif;
  --font-family-body: 'Arial', sans-serif;
  --font-family-other: 'Arial', sans-serif; /* Simplified for base fonts */
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color-main);
  color: var(--text-color-primary);
  font-family: var(--font-family-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px; /* Add some base padding for the container */
}

/* --- Typographical Structure --- */
.section-subtitle {
  display: inline-block;
  color: var(--text-color-secondary);
  font-family: var(--font-family-other);
  font-size: 14px;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 25px;
}

.section-title {
  color: var(--text-color-primary);
  font-family: var(--font-family-title);
  font-size: 48px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 30px;
}

.section-intro-text {
  color: var(--text-color-secondary);
  font-family: var(--font-family-body);
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 50px;
}

.section {
    padding-top: 100px;
    padding-bottom: 100px;
}

/* --- Common Components --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  border-radius: 4px;
  font-family: var(--font-family-other);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary {
  background-color: var(--accent-color-primary);
  color: var(--accent-color-secondary);
  border: 1px solid var(--accent-color-primary);
}

.btn-primary:hover {
  background-color: #92b07a;
  border-color: #92b07a;
}

.btn-secondary {
  background-color: transparent;
  color: var(--accent-color-secondary);
  border: 1px solid var(--accent-color-secondary);
}

.btn-secondary:hover {
  background-color: var(--accent-color-secondary);
  color: var(--white);
}

.link-arrow {
    display: inline-flex;
    align-items: center;
    color: var(--text-color-primary);
    font-weight: 700;
    text-decoration: none;
    border-bottom: 2px solid var(--accent-color-primary);
    padding-bottom: 2px;
}

.link-arrow:after {
    content: "\2192"; /* Unicode for right arrow */
    font-size: 1.3em;
    margin-left: 0.5em;
    transition: transform 0.2s ease;
}

.link-arrow:hover:after {
    transform: translateX(4px);
}

.button-container {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;
}

.actions-row {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    margin-bottom: 50px;
}

/* --- Section: Our Vision --- */
.section-our-vision .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
}

.feature-card {
    background-color: var(--bg-color-secondary);
    padding: 50px;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
}

.feature-card .card-title {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 28px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 20px;
}

.feature-card .card-text {
    color: var(--text-color-secondary);
    line-height: 1.6;
}

/* --- Section: Our Services 1 --- */
.section-our-services-1 .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.service-card {
    background-color: var(--accent-color-secondary);
    color: var(--white);
    padding: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Push content to bottom */
}

.service-card .card-title {
    color: var(--white);
    font-family: var(--font-family-title);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
}

.service-card .card-link {
    color: var(--white);
    text-decoration: none;
    font-weight: 700;
}

.service-card .card-link:after {
    content: "\2192"; /* Right arrow */
    margin-left: 0.5em;
}

/* --- Section: Business Impact --- */
.section-business-impact .impact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.impact-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.impact-value {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 60px;
    font-weight: 400;
}

.impact-text {
    color: var(--text-color-secondary);
    line-height: 1.5;
}

/* --- Section: Meet Our Leaders --- */
.section-meet-our-leaders .leaders-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.leader-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    color: inherit;
    transition: box-shadow 0.3s ease;
}

.leader-card:hover {
    box-shadow: 0 10px 30px rgba(14, 43, 44, 0.05);
}

.leader-image {
    max-width: 100%;
    height: auto;
    display: block;
}

.leader-info {
    padding: 20px;
}

.leader-name {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
}

.leader-role {
    color: var(--text-color-secondary);
    font-style: italic;
    font-size: 14px;
}

/* --- Section: Our Services 2 --- */
.section-our-services-2 .services-features-flex {
    display: flex;
    align-items: flex-start;
    gap: 60px;
}

.services-features-flex .features-list {
    flex: 1;
}

.services-features-flex .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
}

.feature-item .item-title {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
}

.feature-item .item-text {
    color: var(--text-color-secondary);
    line-height: 1.6;
}

.services-features-flex .illustration-container {
    flex: 1;
}

.chart-illustration {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 30px;
}

.chart-stats p {
    color: var(--text-color-secondary);
    font-weight: 700;
    margin-bottom: 20px;
}

/* Add chart stat element styling here */

/* --- Section: Testimonials --- */
.section-testimonials .testimonials-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    margin-bottom: 50px;
}

.google-review-badge {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 700;
}

.google-review-badge span {
    color: var(--text-color-primary);
    font-size: 20px;
}

.google-review-badge a {
    color: var(--text-color-secondary);
    text-decoration: none;
}

/* Slider implementation details needed here for interactivity */
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
}

.testimonial-card {
    background-color: var(--bg-color-secondary);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
}

.icon-star-rating {
    display: block;
    margin-bottom: 30px;
    /* Add icon details here */
}

.testimonial-quote {
    color: var(--text-color-primary);
    font-family: var(--font-family-body);
    font-style: italic;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 40px;
}

.testimonial-author .author-name {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 18px;
    font-weight: 400;
}

.testimonial-author .author-role {
    color: var(--text-color-secondary);
    font-size: 14px;
}

.client-logos-grid {
    text-align: center;
}

.client-logos-grid p {
    color: var(--text-color-secondary);
    font-weight: 700;
    margin-bottom: 20px;
}

/* --- Section: Our Blog --- */
.section-our-blog .blog-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.blog-post-card {
    background-color: var(--bg-color-secondary);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #f2f2f2;
}

.blog-post-card .post-image {
    max-width: 100%;
    height: auto;
    display: block;
}

.blog-post-card .card-content {
    padding: 30px;
}

.post-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    color: var(--text-color-secondary);
}

.post-categories a {
    color: inherit;
    text-decoration: none;
    margin-right: 1em;
}

.post-meta span {
    font-size: 14px;
}

.title-link {
    text-decoration: none;
    color: inherit;
}

.blog-post-card .post-title {
    color: var(--text-color-primary);
    font-family: var(--font-family-title);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 15px;
}

.blog-post-card .post-excerpt {
    color: var(--text-color-secondary);
    line-height: 1.6;
}

/* --- Section: Worksheets --- */
.section-worksheets {
    background-color: var(--white);
    padding-top: 100px;
    padding-bottom: 100px;
}

.section-worksheets .worksheets-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 60px;
}

.worksheet-card {
    background-color: var(--bg-color-main);
    padding: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

.worksheet-card .card-title {
    color: var(--text-color-primary);
    font-family: var(--font-family-other);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
}

.worksheet-card .card-text {
    color: var(--text-color-secondary);
    line-height: 1.5;
    margin-bottom: 30px;
}

.worksheet-card .link-download {
    color: var(--text-color-primary);
    text-decoration: none;
    font-weight: 700;
    margin-top: auto; /* Push content to bottom */
}

.worksheet-card .link-download:before {
    content: "\2193"; /* Unicode for down arrow */
    margin-right: 0.5em;
}

.awards-container {
    text-align: center;
    color: var(--text-color-secondary);
    font-weight: 700;
}

/* --- Section: CTA --- */
.section-cta {
    background-color: var(--accent-color-dark);
    color: var(--white);
    padding-top: 80px;
    padding-bottom: 80px;
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.section-cta .section-title {
    color: var(--white);
}

.section-cta .button-container {
    justify-content: center;
}

/* --- Section: Footer --- */
.footer {
    background-color: var(--accent-color-secondary);
    color: var(--white);
    padding-top: 80px;
    padding-bottom: 30px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    margin-bottom: 60px;
}

.footer .footer-title {
    color: var(--white);
    font-family: var(--font-family-other);
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
}

.footer-links-list li {
    list-style: none;
    margin-bottom: 15px;
}

.footer-links-list a {
    color: inherit;
    text-decoration: none;
}

.footer-contact address p {
    margin-bottom: 10px;
}

.footer-contact address a {
    color: inherit;
    text-decoration: none;
}

.social-links {
    margin-top: 30px;
    display: flex;
    gap: 15px;
}

.social-links a {
    color: inherit;
    text-decoration: none;
    /* Add social icon styles here */
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 30px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
}

.footer-bottom a {
    color: inherit;
    text-decoration: none;
}

.footer-bottom-links {
    display: flex;
    gap: 20px;
}