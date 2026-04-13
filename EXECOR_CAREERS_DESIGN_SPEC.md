# Execor Careers Page - Complete Design Specification

## Page Overview
**URL:** https://execor.vamtam.com/about/careers/
**Page Title:** We Cultivate an Atmosphere
**Layout:** Single column, full-width responsive design with image split sections and data table

---

## 1. HEADER & NAVIGATION

### Navigation Bar
- **Background:** White/light background (#ffffff or #f9f9f9)
- **Logo:** "Execor" with green accent (X in green) - left aligned
- **Height:** ~80-100px (standard header)
- **Spacing:** Padding ~20px horizontal on desktop
- **Menu:** Hamburger menu toggle on right side
- **Sticky:** Yes (appears to be fixed/sticky on scroll)
- **Contact Button:** "Contact Us" green CTA button on right (rounded pill style)

---

## 2. HERO SECTION

### Breadcrumb Navigation
```
Home > Careers
```
- **Font Size:** ~14-16px
- **Color:** Dark gray (#3a3a3a or #505050)
- **Separator:** ">" character with spaces
- **Position:** Below header, above main title
- **Padding:** Top 20-30px

### Main Title
- **Text:** "We Cultivate an Atmosphere"
- **Font:** Serif (appears to be Playfair Display or similar)
- **Font Size:** ~56-72px (responsive, clamps larger on desktop)
- **Font Weight:** 400-500 (light to normal)
- **Color:** Very dark navy (#1a1a1a or #0f0f0f)
- **Line Height:** 1.1-1.2
- **Letter Spacing:** Normal
- **Margin Top:** 40-60px

### Hero Description
- **Text:** "We provide customized, highly analytical solutions, bringing a fresh perspective and a creative, resourceful approach to our clients' most challenging diligence."
- **Font:** Sans-serif (Segoe UI, Arial, or system sans)
- **Font Size:** ~18-20px
- **Font Weight:** 400 (regular)
- **Color:** Dark gray (#3a3a3a or #555555)
- **Line Height:** 1.6-1.7
- **Max Width:** ~600-700px
- **Margin Top:** 20-30px

### Hero Background
- **Background Color:** Light cream/off-white (#f5f5f5 or #fcfcfc)
- **Padding:** 40px 20px (mobile) to 80px 40px (desktop)
- **Border Bottom:** Subtle divider line #e0e0e0 or similar

---

## 3. "WHY WORK IN EXECOR?" SECTION

### Section Header
- **Text:** "Why Worn in Execor?" (note: appears to be a typo for "Work")
- **Tag/Label:** Small uppercase label above
- **Font:** Serif or bold sans
- **Font Size:** ~20-24px
- **Color:** Dark (#1a1a1a)
- **Margin Bottom:** 30-40px

### Three-Column Feature List
```html
[Icon] A global workforce
[Icon] More than 1000 colleagues  
[Icon] Located in 20+ offices
```

#### List Structure
- **Layout:** Grid with 3 columns (desktop), 1 column (mobile)
- **Gap:** 30-40px between items
- **Padding:** 0px (list itself has no padding)

#### List Items
- **Icon:** Colored decorative icons/bullets (circles or custom shapes)
- **Icon Size:** ~24-32px
- **Icon Color:** Green accent or teal (#bee6b5 or #4a7c6f)
- **Text Font:** Sans-serif
- **Text Size:** ~16-18px
- **Text Weight:** 600 (semi-bold)
- **Text Color:** Dark (#2a2a2a)
- **Item Padding:** 0 (icons and text inline, flex layout)
- **Icon-Text Gap:** 12-16px

### CTA Button - "View Open Positions"
- **Text:** "View Open Positions"
- **Link:** Anchor to #jobs section
- **Style:** Pill-shaped button with arrow icon
- **Background Color:** Green (#bee6b5 or preset green)
- **Text Color:** Dark (#1a1a1a or white)
- **Padding:** ~12-16px 32px
- **Border Radius:** 999px (full pill)
- **Font Size:** ~16px
- **Font Weight:** 600-700
- **Icon:** Right arrow (→) or chevron
- **Hover State:** Slightly darker green, scale up slightly, or shadow increase
- **Margin Top:** 30-40px

---

## 4. SPLIT SECTION - "DO YOU WANT TO BE PART OF OUR TEAM?"

### Layout
- **Grid:** 2 columns on desktop (1fr 1fr), single column on mobile
- **Gap:** 60-80px
- **Alignment:** Items vertically centered
- **Padding:** 60-100px 20-40px

### Left Column (Image)
- **Element:** Hero/office lifestyle image
- **Width:** 100% of column
- **Height:** ~400-500px (aspect ratio maintained)
- **Border Radius:** 12-16px
- **Border:** None or very subtle
- **Box Shadow:** Subtle shadow (0 10px 30px rgba(0,0,0,0.1))
- **Image Path:** Shows office worker with laptop at window (photo)

### Right Column (Content)
- **Layout:** Flex column, vertical stack

#### Section Label
- **Text:** "Why Worn in Execor?" (or similar)
- **Font Size:** ~12-14px
- **Font Weight:** 700
- **Text Transform:** Uppercase
- **Letter Spacing:** 1-2px
- **Color:** Muted gray or green (#999 or #888)
- **Margin Bottom:** 15-20px

#### Section Title
- **Text:** "Do You Want To Be Part of Our Team?"
- **Font:** Serif (Playfair Display)
- **Font Size:** ~36-44px
- **Font Weight:** 400-500
- **Color:** Dark (#1a1a1a)
- **Line Height:** 1.15-1.25
- **Margin Bottom:** 20-30px

#### Main Copy Paragraph
- **Text:** "We believe in equality of opportunity. To live. To succeed. To grow. To be more than."
- **Font:** Sans-serif
- **Font Size:** ~16-18px
- **Font Weight:** 400
- **Color:** Dark gray (#3a3a3a or #555)
- **Line Height:** 1.6-1.7
- **Margin Bottom:** 30-40px

#### Contact Link Card
- **Type:** Email link styled as a card/item
- **Background:** White or light gray (#f9f9f9)
- **Padding:** 24-30px
- **Border Radius:** 8-12px
- **Border:** 1px solid #e0e0e0 or none
- **Display:** Flex, space-between, items centered
- **Hover:** Slight lift effect (translateY -5px) and shadow increase

##### Contact Link Structure
```
[Icon] For career inquires, please email
       careers@execor.com               [→ Arrow]
```

- **Icon:** Mail/envelope icon (left side)
- **Icon Color:** Green or accent color
- **Icon Size:** 24-32px
- **Heading Text:** "For career inquires, please email"
- **Heading Font Size:** ~14-16px
- **Heading Font Weight:** 600
- **Email Text:** "careers@execor.com"
- **Email Font Size:** ~18-20px
- **Email Font Weight:** 700
- **Email Color:** Dark (#1a1a1a)
- **Arrow Icon:** Right arrow, green color, transitions right on hover
- **Link:** mailto:careers@execor.com?subject=Hello

---

## 5. JOBS TABLE SECTION

### Section ID
- **ID:** `#jobs` (for anchor navigation)

### Table Header
- **Background Color:** Very light gray (#f0f0f0 or #f5f5f5)
- **Padding:** 20px horizontal, 16px vertical
- **Border Bottom:** 1px solid #e0e0e0

#### Column Headers
```
Position | City | Location type | [Apply]
```

1. **Position** - Left aligned, primary column
2. **City** - Center or left aligned
3. **Location type** - Center or left aligned  
4. **Apply** - Right aligned, no header text (icon column)

- **Font Size:** 14-16px
- **Font Weight:** 600-700
- **Color:** Dark gray (#555 or #3a3a3a)
- **Text Transform:** None (capitalize first letter only)
- **Letter Spacing:** Normal

### Table Rows (Data Rows)

#### Row Structure (Example)
```
Associate Consultant | New York | Hybrid | [Apply →]
```

#### Row Styling
- **Background:** White (#ffffff)
- **Alt Row Background:** Very light (#f9f9f9) on alternate rows (optional)
- **Padding:** 24-30px horizontal, 20-24px vertical
- **Border Bottom:** 1px solid #e0e0e0 or #f0f0f0
- **Hover State:** 
  - Background slightly darker (#f5f5f5)
  - Scale or lift subtle effect
  - Cursor: pointer

#### Cell Content

**Position Cell (Left)**
- **Font Size:** 16-18px
- **Font Weight:** 600
- **Color:** Dark (#1a1a1a)
- **Link Styling:** Underline on hover, dark text

**City & Location Type Cells (Middle)**
- **Font Size:** 16px
- **Font Weight:** 400
- **Color:** Dark gray (#3a3a3a or #555)

**Apply Button (Right)**
- **Style:** Inline link with arrow icon
- **Text:** "Apply"
- **Font Size:** 16px
- **Font Weight:** 600-700
- **Color:** Green (#bee6b5 or green preset)
- **Background:** Light green or transparent
- **Padding:** 8-12px 16-20px
- **Border Radius:** 4-6px or pill (999px)
- **Icon:** Right arrow (→)
- **Icon Size:** 14-16px
- **Icon Color:** Match text or slightly darker
- **Hover State:**
  - Background darker
  - Icon translates right (+3px)
  - Slight scale increase
- **Link Destination:** Individual job posting page

### Jobs Table Responsive (Mobile)
- **Desktop:** Full HTML table
- **Tablet/Mobile:** Convert to card layout or single column
- **Breakpoint:** ~991px or ~768px
- **Mobile Layout:** Stack vertically, each job as a card with all details visible

---

## 6. COLOR PALETTE

### Primary Colors
- **Dark Text/Primary:** #1a1a1a or #0f0f0f (very dark navy/black)
- **Dark Gray (Secondary Text):** #3a3a3a, #555555, #3d3d3d
- **Muted Gray (Tertiary):** #888888, #999999, #969696
- **Light Gray (Dividers):** #e0e0e0, #f0f0f0, #eeeeee
- **White Background:** #ffffff
- **Off-White Background:** #f5f5f5, #f9f9f9, #fcfcfc

### Accent Color
- **Green (Primary CTA/Accent):** #bee6b5 (mint green) or #4CAF50 or similar
- **Hover Green:** Slightly darker shade of accent green

### Background Sections
- **Hero/Section Background:** #f5f5f5 or #fcfcfc
- **Card/Content Background:** #ffffff
- **Footer Background:** #1a1a1a or #2a2a2a (dark)

---

## 7. TYPOGRAPHY

### Font Family Stack
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}

h1, h2, h3, h4, h5 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

### Font Sizes & Weights

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Page H1 (Title) | 56-72px | 400-500 | #1a1a1a |
| Section H5 | 20-24px | 600-700 | #1a1a1a |
| Body/Copy | 16-18px | 400 | #3a3a3a |
| Small Label | 12-14px | 700 | #666 |
| Table Header | 14-16px | 600-700 | #555 |
| Table Body | 16-18px | 400 | #3a3a3a |
| Jobs Title | 16-18px | 600 | #1a1a1a |
| CTA Button | 16px | 600-700 | text color varies |

### Line Height
| Type | Line Height |
|------|-------------|
| Headings | 1.1 - 1.25 |
| Body Copy | 1.6 - 1.7 |
| Table Rows | 1.4 - 1.5 |
| Labels | 1.2 |

---

## 8. SPACING & LAYOUT

### Section Padding
- **Desktop:** 80-100px vertical, 40px horizontal
- **Tablet:** 60px vertical, 30px horizontal
- **Mobile:** 40px vertical, 20px horizontal

### Common Gaps & Margins
- **Section Gap:** 60-80px
- **Component Gap:** 30-40px
- **Item Gap:** 16-24px
- **Inline Gap:** 8-16px

### Max Width Container
- **Desktop Max:** 1200px or full width with side padding
- **Padding Sides:** 20-40px on desktop, 16-20px on tablet, 16px on mobile

---

## 9. IMAGES & VISUAL ELEMENTS

### Hero Image (Split Section)
- **Type:** Office/lifestyle photography
- **Subject:** Worker at desk/window with laptop
- **Dimensions:** Landscape orientation, maintains aspect ratio
- **Quality:** High resolution, professional quality
- **Border Radius:** 12-16px rounded corners
- **Shadow:** Subtle drop shadow

### Icons
- **Style:** Line icons or minimal fill
- **Color:** Green accent or dark gray
- **Sizes:** 24px (list), 32px (buttons), 16px (inline)
- **Examples:** Mail icon, arrow icon, chevron

---

## 10. RESPONSIVE BREAKPOINTS

```css
/* Desktop (Default) */
Default styling as described above

/* Tablet - 991px and below */
@media (max-width: 991px) {
  - Reduce padding/margins by 15-20%
  - Hero grid: 1fr (single column)
  - Adjust font sizes down slightly
  - Hamburger menu active
  - Table converts to cards (optional)
}

/* Mobile - 768px and below */
@media (max-width: 768px) {
  - Further reduce padding (30px vertical, 16px horizontal)
  - Hero title ~40-48px
  - Body text ~16px (may reduce to 14-15px)
  - Single column for all sections
  - Stack list items vertically
  - Convert table to mobile card layout
}
```

---

## 11. PAGE SECTIONS SUMMARY

1. **Header/Navigation** - Sticky navigation with logo and menu
2. **Hero Section** - Breadcrumb, large serif title, description, light background
3. **Why Work Here** - 3-column feature list with icon bullets and CTA button
4. **Content Split** - Image (left) + Content (right) with email contact card
5. **Jobs Table** - Searchable/browsable job listings with Apply links
6. **Footer** - Social links, copyright, links to terms/privacy

---

## 12. INTERACTIVE ELEMENTS

### Hover States
- **Buttons:** Background color darken, slight scale increase (1.02x), shadow increase
- **Links:** Color change, underline, slight translate (2-3px right for arrow icons)
- **Cards:** Lift effect (translateY -5px), shadow increase
- **Table Rows:** Background color change, cursor pointer

### Transitions
- **Duration:** 0.2-0.3s for most transitions
- **Timing:** Ease-out or ease-in-out
- **Properties:** background-color, transform, box-shadow, color

---

## 13. NOTES FOR REPLICATION

- The page uses a clean, professional design with serif headlines and sans-serif body
- Green accent color drives CTAs and interactive elements
- Images are high-quality, professional photography
- Jobs table has good spacing and readability
- Responsive design adapts gracefully from desktop to mobile
- All text maintains high contrast for accessibility
- Animation is subtle and professional, not flashy
- Overall aesthetic: Modern, corporate, trustworthy, professional
