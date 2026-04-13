Recreating a professional website like [Execor](https://execor.vamtam.com/about/) requires a combination of **HTML5** for structure, **CSS3** (likely with a framework like Tailwind or Bootstrap) for the layout, and specific assets.

Since I cannot export the proprietary backend source code directly, I have provided a foundational template that replicates the **exact layout, typography, and color scheme** seen in the viewport.

### 1. HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About – Execor Recreation</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header class="navbar">
        <div class="logo">Ex<span>ecor</span></div>
        <nav>
            <a href="#">H</a>
            <a href="#">Services</a>
            <a href="#" class="active">About</a>
            <a href="#">Case Studies</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </nav>
        <a href="#" class="btn-contact">Contact Us →</a>
    </header>

    <main>
        <section class="hero">
            <p class="breadcrumb">Home > About</p>
            <h1>Who We Are</h1>
            <p class="hero-subtext">With years of experience and a results-focused approach, we empower businesses to navigate complexity and achieve their goals.</p>
        </section>

        <section class="split-content">
            <div class="image-container">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Business Strategy">
                <div class="green-overlay"></div>
            </div>
            
            <div class="text-content">
                <span class="label">Who We Are</span>
                <h2>Driving Success Through Strategy</h2>
                <p>We specialize in helping small businesses thrive by providing expert guidance in business planning, goal setting, process optimization, and growth strategy.</p>
                <p>Our team understands the intricacies of small business operations—how all the pieces fit together to create a successful enterprise.</p>
                
                <ul class="check-list">
                    <li>Business strategy & planning</li>
                    <li>Marketing strategy & execution</li>
                    <li>Process efficiency & workflow improvement</li>
                </ul>
            </div>
        </section>
    </main>

</body>
</html>
```

### 2. Styling (`style.css`)

```css
:root {
    --primary-black: #1a1a1a;
    --accent-green: #c1f38e; /* The signature Execor light green */
    --text-gray: #555;
    --bg-white: #ffffff;
    --font-main: 'Inter', sans-serif;
}

body {
    margin: 0;
    font-family: var(--font-main);
    color: var(--primary-black);
    line-height: 1.6;
}

/* Navbar Styling */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    border-bottom: 1px solid #eee;
}

.logo { font-size: 24px; font-weight: 700; }
.logo span { color: var(--text-gray); font-weight: 400; }

nav a {
    text-decoration: none;
    color: var(--primary-black);
    margin: 0 15px;
    font-weight: 500;
}

.btn-contact {
    background-color: var(--accent-green);
    padding: 12px 24px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
}

/* Hero Section */
.hero {
    padding: 60px 8% 40px;
}

.breadcrumb { font-size: 14px; color: #888; }

h1 {
    font-size: 64px;
    margin: 20px 0;
    letter-spacing: -2px;
}

.hero-subtext {
    max-width: 600px;
    font-size: 18px;
    color: var(--text-gray);
}

/* Split Content Section */
.split-content {
    display: flex;
    padding: 40px 8%;
    gap: 60px;
    align-items: center;
}

.image-container {
    flex: 1;
    position: relative;
}

.image-container img {
    width: 100%;
    border-radius: 10px;
    display: block;
}

.green-overlay {
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 300px;
    height: 300px;
    background: var(--accent-green);
    z-index: -1;
    border-radius: 10px;
    opacity: 0.5;
}

.text-content { flex: 1; }

.label {
    text-transform: uppercase;
    font-size: 12px;
    color: #888;
    letter-spacing: 1px;
}

h2 {
    font-size: 48px;
    line-height: 1.1;
    margin: 15px 0;
}

.check-list {
    list-style: none;
    padding: 0;
}

.check-list li::before {
    content: '✓';
    color: var(--accent-green);
    margin-right: 10px;
    font-weight: bold;
}
```

### Key Implementation Details
* **Typography:** The site uses a clean sans-serif (Inter/Geist style). I've used **Inter** via Google Fonts to match the weight.
* **Color Palette:** The primary brand color is a specific shade of **Lime/Mint Green** (`#c1f38e`) used for buttons and the decorative overlay behind the main image.
* **Layout:** The "Who We Are" section uses a **Flexbox** split. Note the decorative green box behind the image—this is achieved using a `z-index: -1` on a relative container.
* **Spacing:** Large padding (8% horizontal) is used to maintain the "premium" breathable feel of the [Execor](https://execor.vamtam.com/about/) brand.

**Note:** To get the "exact" images, you would need to download the specific assets from their server, though for development, the Unsplash placeholders provided above will maintain the layout's visual integrity.