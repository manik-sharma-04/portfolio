# Manik Sharma - Personal Portfolio Website

A clean, modern, and mobile-responsive personal portfolio website built with pure HTML5, CSS3, and lightweight vanilla JavaScript. Designed for university evaluation and professional presentation.

- **Live Site**: [https://manik-sharma-04.github.io/portfolio/)
- **Author**: Manik Sharma (CSE & AI Student | Machine Learning Developer)
- **Repository**: [https://github.com/manik-sharma-04/portfolio](https://github.com/manik-sharma-04/portfolio)

---

## ☕ Theme & Design Concept

The portfolio utilizes a **Dark Theme Coffee Palette**:
- **Backgrounds**: Deep espresso (`#120d0a`) and dark roast (`#1a130f`)
- **Cards**: Rich mocha brown (`#231a14`) with warm glow hover states
- **Accents**: Warm golden caramel (`#c98e57`)
- **Typography**: Fresh latte cream (`#f7f1eb`) for headings, steamed milk (`#d8c6b7`) for body text
- **Font Pairing**: *Playfair Display* (classic editorial serif) for headings and *Plus Jakarta Sans* (clean geometric sans-serif) for body text

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) for accessibility and clean architecture.
- **CSS3**: Custom properties (CSS variables), CSS Flexbox, CSS Grid, media queries, and smooth animations without any external CSS framework.
- **Vanilla JavaScript**: Lightweight script (under 20 lines) dedicated strictly to mobile hamburger navigation and accessibility state management.
- **No external frameworks or build steps**: Zero npm dependencies, runs instantly in any browser.

---

## 📁 Folder Structure

```text
portfolio/
├── index.html               # Main HTML entry point (semantic structure)
├── style.css                # Dark coffee palette styling, grid/flexbox, animations
├── script.js                # Minimal JavaScript for mobile navigation toggle
├── README.md                # Project documentation and local running guide
├── EXPLANATION.md           # In-depth architectural explanation for academic viva
└── assets/
    ├── images/              # Profile, project thumbnails, and certificate badges
    │   └── README.txt       # Instructions for adding/renaming images
    └── resume/              # Curriculum Vitae / Resume PDF file
        ├── Manik-Sharma-Resume.pdf
        └── README.txt       # Instructions for placing your resume PDF
```

---

## 🚀 How to Run Locally

Because this project is built using native web standards with zero dependencies, you do not need Node.js, a web server, or any build tool.

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/manik-sharma-04/portfolio.git
   cd portfolio
   ```
2. **Open in Browser**:
   - Double-click `index.html` in your file explorer (or right-click -> Open with Chrome / Edge / Firefox / Safari).
   - Alternatively, open the folder in VS Code and use the **Live Server** extension.

---

## 🖼️ Adding Images and Resume

1. **Images**:
   Place your images in `assets/images/` using these names:
   - `profile.jpg` (or `.png`)
   - `project-car-price.jpg` (or `.png`)
   - `project-calories.jpg` (or `.png`)
   - `project-hr-analytics.jpg` (or `.png`)
   - `certificate-ai900.jpg` (or `.png`)
   - `certificate-az900.jpg` (or `.png`)
   *(If an image uses `.png`, change the extension inside `index.html` as indicated by the comments).*

2. **Resume**:
   Place your resume inside `assets/resume/` named:
   - `Manik-Sharma-Resume.pdf`

---

## 📜 License

Created by Manik Sharma for academic submission and professional portfolio showcase. Feel free to explore the code.
