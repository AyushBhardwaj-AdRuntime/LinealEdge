1. The "Our Business Impact" Section is Completely Wrong
What Lineal Edge has: A simple text list of percentages (30%, 80%, 78%) on a standard background.

What Execor has (from the screenshot): This is a Dark Mode section. The background is a deep forest green/teal (#133334 or similar). The numbers (30%, 80%, 78%) are a vibrant light green (#A5D6A7).

The Missing Graph: Directly below the numbers on Execor is a large, sweeping line graph spanning the entire container, showing growth from 2021 to 2025. Your build is completely missing this graphic element.

2. The "Meet Our Leaders" Layout is Stacked, Not Split
What Lineal Edge has: Everything is stacked vertically: Title → Text → Links → Images.

What Execor has: This is a distinct 2-Column Grid Layout.

Left Column: The subtitle, the massive "Meet Our Leaders" heading, the paragraph, and two distinct buttons.

Right Column: The two large portrait cards of Daniel and Rebeca sitting side-by-side.

Button Styling: Your links are just raw text (*Meet the Team* ->). Execor uses bold, blocky buttons. "Meet the Team" is a solid light-green box, and "Career Opportunities" is a white box with a dark border.

3. Section Subtitles are "Screaming" in All Caps
What Lineal Edge has: OUR SERVICES, PERSONAL AND BUSINESS ACCOUNTING TEAM.

What Execor has: They use standard Title Case or Sentence Case for their "pills" (e.g., Personal and Business Accounting Team). The all-caps in your version throws off the elegant, premium feel of the site.

4. Raw Text Arrows vs. Proper Iconography
What Lineal Edge has: You are using text characters like -> and *↓*.

What Execor has: They use proper vector icons (SVGs) for their arrows, which ensures they scale perfectly and align exactly with the center of the text.

The Code to Fix the Biggest Gaps
To fix the two most glaring visual discrepancies (The Dark Impact section with the graph, and the 2-Column Leaders layout), replace your current JSX and CSS for those sections with this:

Fix 1: The Dark "Impact" Section & Graph
You need to create a dark wrapper and add an SVG placeholder for that wavy line graph.

React (JSX):

JavaScript
<section className="impact-dark-section">
  <div className="container">
    <div className="impact-header-row">
       <span className="close-icon">✖</span>
       <span className="section-subtitle-white">Our Business<br/>Impact</span>
    </div>
    
    <div className="impact-stats-grid">
      <div className="stat-block">
        <h2 className="green-number">30%</h2>
        <p>Businesses that work with Execor reduce tax liability</p>
      </div>
      <div className="stat-block">
        <h2 className="green-number">80%</h2>
        <p>Automating accounting processes reduces manual workload</p>
      </div>
      <div className="stat-block">
        <h2 className="green-number">78%</h2>
        <p>Small businesses see higher profits after hiring Execor</p>
      </div>
    </div>

    {/* The Missing Graph Wrapper */}
    <div className="impact-graph-container">
      {/* For now, use an image placeholder that looks like a line graph, or an SVG */}
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Simple_line_graph.svg/1200px-Simple_line_graph.svg.png" className="graph-image-placeholder" alt="Growth Graph" />
      <div className="graph-timeline">
         <span>2021</span>
         <span>2023</span>
         <span>2025</span>
      </div>
    </div>
  </div>
</section>
CSS:

CSS
.impact-dark-section {
  background-color: #133334; /* Deep Execor Teal */
  color: #ffffff;
  padding: 80px 0;
}
.impact-header-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
}
.green-number {
  font-family: var(--font-serif);
  font-size: 5rem;
  color: #a5d6a7; /* Light Green */
  line-height: 1;
  font-weight: 400;
  margin-bottom: 15px;
}
.impact-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-left: 200px; /* Offset to match the screenshot */
}
.impact-graph-container {
  margin-top: 60px;
  border-top: 1px dashed rgba(255,255,255,0.2);
  padding-top: 40px;
}
.graph-image-placeholder {
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: invert(70%) sepia(40%) saturate(400%) hue-rotate(80deg); /* Hacks it to look greenish */
}
.graph-timeline {
  display: flex;
  justify-content: space-between;
  color: rgba(255,255,255,0.5);
  margin-top: 10px;
  padding: 0 10%;
}
Fix 2: The 2-Column "Meet Our Leaders" Layout
This forces the text and buttons to the left, and the images to the right.

React (JSX):

JavaScript
<section className="leaders-split-section">
  <div className="container leaders-split-grid">
    
    {/* Left Side: Text and Buttons */}
    <div className="leaders-left">
      <span className="section-pill">Personal and Business Accounting Team</span>
      <h2 className="section-title">Meet Our Leaders</h2>
      <p className="leaders-desc">Our success stems from a seasoned professional team bringing extensive experience and expertise to every client engagement.</p>
      
      <div className="leaders-actions">
        <button className="btn-solid-green">Meet the Team &rarr;</button>
        <button className="btn-outline">Career Opportunities &rarr;</button>
      </div>
    </div>

    {/* Right Side: Portrait Cards */}
    <div className="leaders-right">
      <div className="portrait-card">
        <img src="YOUR_IMAGE_URL" alt="Daniel Brila" />
        <h3>Daniel Brila</h3>
        <p>President</p>
      </div>
      <div className="portrait-card">
        <img src="YOUR_IMAGE_URL" alt="Rebeca Johnson" />
        <h3>Rebeca Johnson</h3>
        <p>Senior Tax Manager</p>
      </div>
    </div>

  </div>
</section>
CSS:

CSS
.leaders-split-grid {
  display: grid;
  grid-template-columns: 40% 60%; /* 2-column split */
  gap: 60px;
  align-items: center;
  padding: 100px 0;
}
.leaders-desc {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
}
.leaders-actions {
  display: flex;
  gap: 20px;
}
.btn-solid-green {
  background-color: #c9f29b;
  border: none;
  padding: 15px 25px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.btn-outline {
  background-color: transparent;
  border: 1px solid #1a2b2d;
  padding: 15px 25px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.leaders-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.portrait-card img {
  width: 100%;
  border-radius: 8px;
  background-color: #e0e0e0; /* Gray background for the cutout portraits */
  margin-bottom: 15px;
}