<!-- next aprt of implementation  -->

<!-- [Here is the exact React and CSS code you need to paste into your files to transform your current layout into the exact Execor style. 

I have broken this down section by section. You can paste the CSS directly into your main stylesheet (e.g., `App.css` or `style.css`), and update your React components with the provided HTML structures. -->

---

### 1. Efficient Bookkeeping Solutions (Image Cards)

**Update your React JSX:**
Wrap your text in a structure that allows for absolute positioning over a background image.

```jsx
<section className="services-image-section">
  <div className="container">
    <span className="section-pill">Our Services</span>
    <h2 className="section-title">Efficient Bookkeeping Solutions</h2>
    <p className="section-desc">Our team tailors workflows to your business needs, uses modern accounting tech, and brings practical expertise across industries.</p>
    
    <div className="services-image-grid">
      {/* Card 1 */}
      <div className="img-card" style={{backgroundImage: "url('YOUR_IMAGE_URL_1')"}}>
        <div className="img-card-label">
          <h3>Accounting</h3>
          <a href="#">Learn More &rarr;</a>
        </div>
      </div>
      {/* Card 2 */}
      <div className="img-card" style={{backgroundImage: "url('YOUR_IMAGE_URL_2')"}}>
        <div className="img-card-label">
          <h3>Business Strategy</h3>
          <a href="#">Learn More &rarr;</a>
        </div>
      </div>
      {/* Add Cards 3 and 4 following the same pattern */}
    </div>
  </div>
</section>
```

**Paste into CSS:**
```css
.services-image-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.img-card {
  position: relative;
  height: 450px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.img-card-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
}

.img-card-label h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.img-card-label a {
  text-decoration: none;
  color: #1A2B2D;
  font-weight: bold;
  font-size: 0.9rem;
}
```

---

### 2. Our Business Impact (Giant Numbers)

**Update your React JSX:**
```jsx
<section className="impact-section">
  <div className="container">
    <span className="section-pill transparent-pill">Our Business Impact</span>
    <div className="impact-grid">
      <div className="impact-item">
        <span className="huge-number">30%</span>
        <p>Businesses that work with Execor reduce tax liability</p>
      </div>
      <div className="impact-item">
        <span className="huge-number">80%</span>
        <p>Automating accounting processes reduces manual workload</p>
      </div>
      <div className="impact-item">
        <span className="huge-number">78%</span>
        <p>Small businesses see higher profits after hiring Execor</p>
      </div>
    </div>
  </div>
</section>
```

**Paste into CSS:**
```css
.impact-section {
  padding: 80px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 30px;
}

.huge-number {
  display: block;
  font-size: 5rem; /* ~80px */
  font-family: 'Georgia', serif;
  color: #1A2B2D;
  line-height: 1;
  margin-bottom: 15px;
}

.impact-item p {
  color: #6B7C7E;
  font-size: 1.1rem;
  line-height: 1.5;
}
```

---

### 3. Meet Our Leaders (Typography Polish)

**Paste into CSS:**
*(Assuming your HTML structure is already a grid of images and text)*
```css
.leader-card {
  transition: transform 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-10px);
}

.leader-name {
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  color: #1A2B2D;
  margin-top: 20px;
  margin-bottom: 5px;
}

.leader-role {
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  color: #6B7C7E;
  font-style: italic; /* Crucial for the exec look */
}
```

---

### 4. Helpful Worksheets (Distinct Borders & Background)

**Update your React JSX:**
Make sure you have a wrapper div for the title to apply the left border, and a separate footer div for the download link.

```jsx
<div className="worksheet-card">
  <div className="ws-content">
    <h3 className="ws-title">Entity Summary Worksheet</h3>
    <p>To summarize your multimember LLC, partnership, or corporation financial information.</p>
  </div>
  <div className="ws-footer">
    <span>Download</span>
    <span className="arrow-down">&darr;</span>
  </div>
</div>
```

**Paste into CSS:**
```css
.worksheets-section {
  background-color: #F4F4F2; /* Specific light gray */
  padding: 100px 0;
}

.worksheet-card {
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
}

.ws-title {
  font-size: 1.4rem;
  color: #1A2B2D;
  border-left: 2px solid #1A2B2D; /* The signature Execor line */
  padding-left: 15px;
  margin-bottom: 20px;
  line-height: 1.3;
}

.ws-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eaeaea;
  padding-top: 20px;
  font-weight: bold;
  color: #1A2B2D;
  cursor: pointer;
}
```

---

### 5. CTA Section (Dark Mode)

**Update your React JSX:**
```jsx
<section className="dark-cta-section">
  <div className="container center-content">
    <span className="award-text">2024 Angies List Super Service Award</span>
    <h2 className="cta-title">Ready to Come in For an Appointment?</h2>
    <p className="cta-desc">Get in touch with our accounting professionals and work with the top CPAs in the country.</p>
    <button className="btn-green">Schedule a Consultation</button>
  </div>
</section>
```

**Paste into CSS:**
```css
.dark-cta-section {
  background-color: #0E2B2C; /* Deep Teal/Charcoal */
  padding: 100px 0;
  text-align: center;
  color: #ffffff;
}

.award-text {
  color: #A2C08A; /* Light Green */
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
  margin-bottom: 20px;
}

.cta-title {
  font-family: 'Georgia', serif;
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.cta-desc {
  font-size: 1.2rem;
  color: #b0c4c4;
  max-width: 600px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
}

.btn-green {
  background-color: #D8F3B9; /* Light Green */
  color: #0E2B2C;
  padding: 15px 35px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-green:hover {
  background-color: #c4e4a2;
}
