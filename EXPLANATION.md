# Project Architecture & Defense Guide (EXPLANATION.md)

This comprehensive guide is designed to prepare you for your university evaluation and viva voce. It breaks down every technical and architectural decision made in this portfolio website into clear, accessible concepts.

---

## Table of Contents
1. [Topic 1: Project Structure and What Each File Does](#topic-1-project-structure-and-what-each-file-does)
2. [Topic 2: HTML Structure and Semantic Tags](#topic-2-html-structure-and-semantic-tags)
3. [Topic 3: CSS (Variables, Layout, Colors, Typography, Spacing)](#topic-3-css-variables-layout-colors-typography-spacing)
4. [Topic 4: Responsive Design and Media Queries](#topic-4-responsive-design-and-media-queries)
5. [Topic 5: The Small JavaScript Used (And Why Heavy JS Was Avoided)](#topic-5-the-small-javascript-used-and-why-heavy-js-was-avoided)
6. [Topic 6: Navigation and Smooth Scrolling](#topic-6-navigation-and-smooth-scrolling)
7. [Topic 7: Asset Management (Images, Resume, and How to Add New Files)](#topic-7-asset-management-images-resume-and-how-to-add-new-files)
8. [Topic 8: Git and GitHub Basics (Repo, Commit, Push)](#topic-8-git-and-github-basics-repo-commit-push)
9. [Topic 9: How GitHub Pages Deployment Works](#topic-9-how-github-pages-deployment-works)
10. [Topic 10: README and Repository Hygiene](#topic-10-readme-and-repository-hygiene)
11. [Topic 11: How to Modify the Site (Add Project, Cert, Change Colors)](#topic-11-how-to-modify-the-site-add-project-cert-change-colors)
12. [Likely Teacher Questions (15+ Viva Q&A)](#likely-teacher-questions-15-viva-qa)

---

## Topic 1: Project Structure and What Each File Does

### 1. What it is in simple words
A project structure is the intentional folder and file layout of a software codebase. Just like organizing documents into named folders in a filing cabinet, a web project separates its content (HTML), presentation (CSS), behavior (JavaScript), static assets (images, PDFs), and documentation (Markdown) into distinct files.

### 2. How it's used in MY site
The portfolio uses a clean, standard static site architecture:
- `index.html`: The central entry point. Contains the entire semantic structure and text content of all six sections.
- `style.css`: The singular stylesheet containing custom CSS variables, layout systems, component styles, and media queries.
- `script.js`: A lightweight, isolated JavaScript file (18 lines) dedicated strictly to mobile navigation interactions.
- `assets/images/`: Dedicated directory for media assets (`profile.jpg`, project mockups, certificate badges). Includes a `README.txt` guide.
- `assets/resume/`: Contains the PDF document (`Manik-Sharma-Resume.pdf`) and an explanatory `README.txt`.
- `README.md`: Public-facing project overview, live links, and setup instructions.
- `EXPLANATION.md`: Internal technical and viva defense documentation.

### 3. Why this approach was chosen
- **Separation of Concerns**: HTML handles content, CSS handles styling, and JS handles interactivity. Mixing these (e.g., inline CSS or inline JS) creates messy, hard-to-maintain code.
- **Zero Build Step Complexity**: By adhering to standard vanilla files and relative paths, any web server or browser can run this site without requiring node modules, Webpack, Vite, or package installations.
- **Portability on GitHub Pages**: GitHub Pages serves static files directly from the repository root. This clean layout makes deployment immediate and effortless.

### 4. Short sample answer you can say out loud:
> *"My project follows the industry standard separation of concerns. I have `index.html` for semantic structure, `style.css` for all visuals and animations, and a minimal `script.js` for mobile navigation. All images and the resume PDF are organized neatly under the `assets` folder. This eliminates unnecessary build tooling and ensures that GitHub Pages can serve the site instantly."*

---

## Topic 2: HTML Structure and Semantic Tags

### 2. What it is in simple words
Semantic HTML refers to using HTML elements that convey the meaning of the content enclosed inside them, rather than generic `<div>` or `<span>` containers. For example, `<header>` means introductory navigation, `<nav>` means navigational links, `<main>` means core page content, `<section>` represents a thematic group, and `<article>` represents self-contained items.

### 2. How it's used in MY site
Examining `index.html`:
- `<header class="site-header">` (Line 38): Houses the logo and primary navigation bar.
- `<nav class="nav-menu">` (Line 52): Contains the navigational `<ul>` and `<li>` items linking to section IDs.
- `<main>` (Line 66): Wraps the primary unique content of the page.
- `<section>` (e.g., `#home`, `#about`, `#skills`, `#projects`, `#certifications`, `#contact`): Groups each thematic part of the portfolio.
- `<article class="project-card">` and `<article class="skill-card">` (Lines 152, 203): Wraps individual projects, skills, and certifications, signifying that each card is a self-contained entity that could stand on its own.
- `<footer>` (Line 385): Contains the copyright and back-to-top navigational link.

### 3. Why this approach was chosen
- **Accessibility (a11y)**: Screen readers for visually impaired users use semantic tags to announce page landmarks (e.g., jumping straight to `<main>` or navigating through `<nav>`).
- **Search Engine Optimization (SEO)**: Search engine web crawlers (like Googlebot) prioritize content inside `<main>`, `<h1>`, and `<article>` tags to understand what the developer actually does.
- **Maintainability**: Reviewers and collaborating developers can scan the HTML tree effortlessly without drowning in "div soup."

### 4. Short sample answer you can say out loud:
> *"Instead of using generic `div` tags for everything, I structured the site with HTML5 semantic landmarks like `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`. For instance, each project card is an `<article>` because it represents a distinct, self-contained project. This improves both accessibility for screen readers and SEO indexing."*

---

## Topic 3: CSS (Variables, Layout with Flexbox/Grid, Colors, Typography, Spacing)

### 1. What it is in simple words
CSS (Cascading Style Sheets) controls how HTML elements are painted on the screen. 
- **CSS Variables (Custom Properties)** are centralized values defined with `--name` that can be reused across the stylesheet.
- **Flexbox** is a one-dimensional layout system used for aligning items in rows or columns.
- **CSS Grid** is a two-dimensional layout system designed for rows and columns simultaneously.
- **Typography & Colors** define readability, emotional tone, and hierarchy.

### 2. How it's used in MY site
Open `style.css`:
- **CSS Variables (`:root`)** (Lines 11–46):
  - Dark coffee palette: `--bg-primary: #120d0a;`, `--bg-secondary: #1a130f;`, `--bg-card: #231a14;`.
  - Latte & cream text: `--text-primary: #f7f1eb;`, `--text-secondary: #d8c6b7;`.
  - Caramel & mocha accents: `--accent-caramel: #c98e57;`, `--accent-mocha: #8e6549;`.
- **CSS Grid**:
  - Hero Section (`.hero-container`, Line 177): A 2-column grid (`1.2fr 0.8fr`) pairing headline content with the profile image.
  - Projects Section (`.projects-grid`, Line 333): A 3-column grid (`repeat(3, 1fr)`) displaying the three machine learning projects.
  - Skills Section (`.skills-grid`, Line 283): An auto-fitting responsive grid (`repeat(auto-fit, minmax(200px, 1fr))`).
- **Flexbox**:
  - Header & Navbar (`.nav-container`, `.nav-list`, Lines 116, 144): Flexbox row with `justify-content: space-between` and `align-items: center`.
  - Project Card Body (`.project-body`, Line 378): Flex column layout with `margin-top: auto` on buttons so that all cards maintain uniform button alignment regardless of description length.
- **Typography**:
  - Font pairing: `'Playfair Display'` for headings (academic, authoritative, editorial) and `'Plus Jakarta Sans'` for body text (clean, modern, highly legible).
  - Fluid sizing: `clamp(2rem, 3.5vw, 2.75rem)` for responsive titles that scale smoothly.

### 3. Why this approach was chosen
- **Maintainability via Variables**: If the user or an instructor wants to test a dark navy or slate theme instead of coffee, only 5 color variables in `:root` need to be changed rather than doing hundreds of search-and-replace edits.
- **Modern Layout Without Frameworks**: CSS Grid and Flexbox are natively supported in all modern browsers, making bulky frameworks like Bootstrap or Tailwind unnecessary for a clean portfolio.

### 4. Short sample answer you can say out loud:
> *"I designed the site using CSS variables in the `:root` pseudo-class for the dark coffee palette, so any accent or background color can be updated globally in one line. For layout, I used CSS Grid for 2D card layouts like the project showcase and skills, and Flexbox for 1D alignments like the navigation bar and button groups. Headings use the serif font Playfair Display for elegance, while the body uses Plus Jakarta Sans for crisp readability."*

---

## Topic 4: Responsive Design and Media Queries

### 1. What it is in simple words
Responsive web design is an engineering approach that ensures a website dynamically adjusts its layout, font sizes, and element arrangements according to the screen width of the user's device (desktop, tablet, or smartphone). **Media queries** (`@media`) apply specific CSS rules only when screen dimensions match defined conditions (breakpoints).

### 2. How it's used in MY site
Located in `style.css` (Section 14, Lines 465–548):
- **Viewport Meta Tag** (`index.html`, Line 5): `<meta name="viewport" content="width=device-width, initial-scale=1.0">` tells mobile browsers to render at native scale rather than zooming out a desktop layout.
- **Tablet Breakpoint (`@media (max-width: 992px)`)**:
  - Collapses the 2-column hero grid into a centered 1-column stack.
  - Shifts the 3-column project grid into a 2-column layout.
- **Mobile Breakpoint (`@media (max-width: 768px)`)**:
  - Hides the horizontal navbar and displays the `.nav-toggle` hamburger icon.
  - Converts `.nav-menu` into an absolute-positioned dropdown menu overlaying the content.
  - Transforms the projects, certifications, and contact grids into a clean single-column stack (`1fr`).
- **Small Phone Breakpoint (`@media (max-width: 480px)`)**:
  - Hero action buttons stretch to full width (`width: 100%`) for easy thumb tapping.
  - Certificate badges stack vertically.

### 3. Why this approach was chosen
- Over 60% of modern web traffic comes from mobile devices. Evaluators, recruiters, and colleagues will view this portfolio on different screen sizes.
- Using clean, standard breakpoints (992px, 768px, 480px) provides robust, natural transitions without layout breakage or horizontal scrollbars (`overflow-x: hidden`).

### 4. Short sample answer you can say out loud:
> *"I built mobile responsiveness using CSS media queries at three standard breakpoints: 992px for tablets, 768px for smartphones, and 480px for smaller phones. On desktop, the project showcase is a 3-column grid; on tablets, it seamlessly adapts to 2 columns, and on mobile, it stacks into 1 column. The navigation bar switches automatically to a touch-friendly hamburger menu on screens below 768px."*

---

## Topic 5: The Small JavaScript Used (And Why Heavy JS Was Avoided)

### 1. What it is in simple words
JavaScript is the programming language that enables interactive behaviors on a webpage. In modern web development, many features that previously required JavaScript (like layout adjustments, hover animations, and smooth scrolling) can now be performed entirely by CSS. JavaScript should only be used when actual state manipulation is required.

### 2. How it's used in MY site
Open `script.js` (18 lines total):
```javascript
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Toggle mobile menu on hamburger button click
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// 2. Automatically close mobile menu when any navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
```
It performs two essential user experience functions:
1. Listens for clicks on the hamburger button to toggle the `.active` class on the menu and the button (turning the 3 bars into an 'X' via CSS).
2. Updates `aria-expanded` between `"true"` and `"false"` for accessibility screen readers.
3. Automatically closes the menu when a user taps a navigation link, allowing them to see the section they selected.

### 3. Why this approach was chosen
- **Performance & Reliability**: Heavy JavaScript libraries (e.g., jQuery, React) increase page load times, introduce bundle sizes, and can break if scripts fail. By using native DOM APIs in under 20 lines, the site executes in less than 1 millisecond.
- **CSS Does the Heavy Lifting**: Hover states (`:hover`), transforms (`translateY`), transitions, and card lift effects are 100% hardware-accelerated CSS.

### 4. Short sample answer you can say out loud:
> *"I deliberately kept JavaScript to just 18 lines in `script.js`. It only handles the mobile hamburger menu toggle and accessibility attributes (`aria-expanded`). All other interactive features—such as card hover lift animations, button state transitions, and smooth scrolling—are handled purely by CSS. This keeps the website exceptionally fast, lightweight, and robust."*

---

## Topic 6: Navigation and Smooth Scrolling

### 1. What it is in simple words
In single-page portfolio websites, navigation links act as internal page anchors. Instead of loading an entirely new page from the server, clicking a link scrolls the viewport smoothly down to that exact section on the same page.

### 2. How it's used in MY site
- **HTML Anchors**: Navigation links use the hash symbol followed by the target element's ID (e.g., `<a href="#projects">`). In the body, the target section has matching ID: `<section id="projects">`.
- **CSS Native Smooth Scroll** (`style.css`, Line 60):
  ```css
  html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 20px);
  }
  ```
- **Preventing Header Overlap**: Because the navigation bar is fixed (`position: sticky`), jumping to an anchor would normally cause the sticky header to cover the section title. The CSS property `scroll-padding-top` tells the browser to stop scrolling with an offset equal to the header height plus 20px padding!

### 3. Why this approach was chosen
- Pure CSS `scroll-behavior: smooth` provides a smooth glide without requiring complex JavaScript scroll listener libraries or `window.scrollTo()` calculations.
- Using native anchor IDs ensures users can bookmark or share direct links to `#projects` or `#contact`.

### 4. Short sample answer you can say out loud:
> *"Navigation uses internal anchor links connecting `href="#section"` to section `id`s. I implemented smooth scrolling with pure CSS using `scroll-behavior: smooth`. To ensure the sticky header does not hide the section headings when jumping, I added `scroll-padding-top` on the root `html` element, which naturally offsets the scroll position."*

---

## Topic 7: Asset Management (Images, Resume, and How to Add New Files)

### 1. What it is in simple words
Static asset management is how non-code resources like photos, graphic icons, and downloadable PDF documents are organized, referenced in code, and delivered to visitors.

### 2. How it's used in MY site
- **Folder Structure**:
  - `assets/images/`: Stores all graphics (`profile.jpg`, `project-car-price.jpg`, `project-calories.jpg`, `project-hr-analytics.jpg`, `certificate-ai900.jpg`, `certificate-az900.jpg`).
  - `assets/resume/`: Stores `Manik-Sharma-Resume.pdf`.
- **Relative Path References**: In HTML, assets are referenced using relative paths (e.g., `src="assets/images/profile.jpg"` and `href="assets/resume/Manik-Sharma-Resume.pdf"`).
- **Graceful Fallback Layout**: If images are not yet added to the folder, the HTML and CSS include fallback placeholder boxes with icons and titles. The layout remains clean, structured, and visually appealing even before image files are copied in.
- **Easy Extension Swapping**: At the top of `index.html` (Lines 18–34), there is a centralized manifest. Next to every `<img>` tag is a comment:
  `<!-- NOTE: Change the file extension here if your image is .png or .jpg -->`
  If a screenshot is saved as `.png`, you simply edit `.jpg` to `.png` in that specific tag.
- **Opening Resume in New Tab**: The resume link uses `target="_blank" rel="noopener noreferrer"`. `target="_blank"` opens the PDF in a new tab so the user does not leave your website, while `rel="noopener noreferrer"` protects against tab-nabbing security exploits.

### 3. Why this approach was chosen
- Relative paths are mandatory for GitHub Pages. If an absolute path like `/assets/images/` or `C:/Desktop/...` were used, GitHub Pages would fail to load the files because the site is hosted in a repository sub-path (`/portfolio/`).

### 4. Short sample answer you can say out loud:
> *"All media files are stored within the `assets/` subdirectories using strictly relative paths so they work both locally and on GitHub Pages. I used `target='_blank'` with security attributes `rel='noopener noreferrer'` on the resume button so it opens safely in a new browser tab. Every image has dedicated fallback styling and clear HTML comments so changing from `.jpg` to `.png` takes only five seconds."*

---

## Topic 8: Git and GitHub Basics (Repo, Commit, Push)

### 1. What it is in simple words
- **Git** is a distributed version control system running locally on your computer that tracks changes made to files over time.
- **Repository (Repo)**: A project folder tracked by Git containing your code and its commit history.
- **Commit**: A snapshot of your project at a specific moment in time accompanied by a message describing what changed.
- **GitHub**: A cloud-based platform that hosts Git repositories online, allowing you to showcase code and publish live sites.
- **Push**: Uploading your local commits from your computer to the remote repository on GitHub.

### 2. How it's used in MY site
The development process is staged into atomic commits:
1. `git init`: Initializes the portfolio folder as a Git repository.
2. `git add index.html`: Stages the HTML structure file.
3. `git commit -m "feat: create semantic HTML structure for portfolio sections"`: Creates a version snapshot.
4. `git add style.css`: Stages styling and animations.
5. `git commit -m "style: implement dark coffee palette, typography, and responsive layout"`: Commits styles.
6. `git remote add origin https://github.com/manik-sharma-04/portfolio.git`: Connects local repo to GitHub.
7. `git push -u origin main`: Transmits all commits to GitHub.

### 3. Why this approach was chosen
- Staged commits provide an audit trail. If a mistake is made, you can easily revert to an earlier working commit.
- Having a public GitHub repository proves your technical capability and serves as verifiable evidence for your university assignment.

### 4. Short sample answer you can say out loud:
> *"Git is the local version control tool that records every incremental change I make through commits, while GitHub is the cloud host where my remote repository lives. I organize my workflow by staging files with `git add`, recording meaningful snapshots with `git commit`, and pushing them to GitHub with `git push origin main`."*

---

## Topic 9: How GitHub Pages Deployment Works

### 1. What it is in simple words
GitHub Pages is a free hosting service provided by GitHub that turns a repository containing static files (HTML, CSS, JavaScript) directly into a live, publicly accessible website on the internet.

### 2. How it's used in MY site
- When enabled in the repository's **Settings > Pages**, GitHub Pages looks at the root of the `main` branch.
- It automatically detects `index.html` as the default landing page.
- The web address generated is:
  `https://manik-sharma-04.github.io/portfolio/`
- Every time you push a new commit to the `main` branch, GitHub triggers a deployment action that updates the live site in roughly 60 seconds.

### 3. Why this approach was chosen
- No complex cloud server configurations, DNS setup, or hosting fees are required.
- It directly demonstrates mastery of the Git-to-deployment pipeline expected of modern software engineers.

### 4. Short sample answer you can say out loud:
> *"GitHub Pages hosts static websites directly from a GitHub repository. When configured to serve from the `main` branch, its built-in web server automatically detects `index.html` at the repository root and serves it over HTTPS at `https://manik-sharma-04.github.io/portfolio/`. Any future `git push` to `main` redeploys the site automatically."*

---

## Topic 10: README and Repository Hygiene

### 1. What it is in simple words
Repository hygiene refers to maintaining a professional, clean, and well-documented codebase. A `README.md` is the front page of a repository that immediately tells anyone who opens it what the project is, how it works, and how to run it.

### 2. How it's used in MY site
- `README.md` is formatted in Markdown with:
  - Project title and tagline.
  - Live preview link.
  - Theme and coffee palette breakdown.
  - Technologies used (HTML5, CSS3, Vanilla JS).
  - Clean folder directory tree.
  - Step-by-step instructions for running locally and placing assets.
- Files are named in lowercase with hyphens (kebab-case) such as `project-car-price.jpg` to avoid cross-platform operating system issues (e.g., Linux servers vs. Windows file paths).

### 3. Why this approach was chosen
- In professional engineering and academic grading, undocumented code is considered incomplete. A polished README proves professionalism and attention to detail.

### 4. Short sample answer you can say out loud:
> *"Repository hygiene means keeping the codebase well-documented and organized. My `README.md` acts as the project manual, outlining the live URL, design palette, folder architecture, and local setup steps so that any developer or evaluator can clone the repo and run it instantly."*

---

## Topic 11: How to Modify the Site (Add Project, Cert, Change Colors)

### 1. What it is in simple words
A good codebase is designed to be easily extensible. Adding new achievements, modifying text, or changing themes should take only a few minutes without breaking the layout.

### 2. How it's used in MY site

#### A. How to change color themes:
1. Open `style.css`.
2. Locate the `:root` block at lines 11–46.
3. Change the hex values:
   - For a **Slate Dark Theme**: change `--bg-primary` to `#0f172a`, `--bg-card` to `#1e293b`, and `--accent-caramel` to `#38bdf8` (sky blue).
   - The entire website instantly adopts the new colors.

#### B. How to add a 4th project:
1. Open `index.html` and find the `<div class="projects-grid">` section (around Line 195).
2. Copy one `<article class="project-card">...</article>` block and paste it below the third project.
3. Update the `<h3>` title, description paragraph, models used, and image path.
4. Because the CSS uses `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` or clean media queries, the grid automatically adapts to display the 4th card!

#### C. How to add a 3rd certification:
1. In `index.html`, locate `<div class="certifications-grid">` (around Line 295).
2. Duplicate one `<article class="cert-card">...</article>`.
3. Update the certification name, code (e.g., DP-900), and description.

#### D. How to add a new navigation section:
1. In `<ul class="nav-list">`, add a new list item: `<li><a href="#experience" class="nav-link">Experience</a></li>`.
2. Inside `<main>`, add:
   ```html
   <section id="experience" class="section">
     <div class="container">
       <div class="section-header">
         <h2 class="section-title">Experience</h2>
       </div>
       <!-- Your content here -->
     </div>
   </section>
   ```

### 3. Why this approach was chosen
- Modular, component-based markup ensures you never have to rewrite CSS when adding content; the existing classes `.project-card`, `.cert-card`, and `.btn` immediately format new elements consistently.

### 4. Short sample answer you can say out loud:
> *"The site is modular. To change colors, I edit the CSS variables in the `:root` selector of `style.css`. To add a new project, I duplicate one `<article class='project-card'>` inside `index.html` and fill in the details; the CSS Grid will accommodate the new card automatically without requiring any new CSS rules."*

---

## Likely Teacher Questions (15+ Viva Q&A)

Here are the most probable questions your professor or evaluator may ask during your evaluation, paired with concise, confident answers:

### Q1: "How would you add a new section or page if I asked you to do it right now?"
**Answer:**
> *"To add a new section on this page—for instance, an 'Experience' section—I would do three quick things: First, add a link in `<nav>`: `<a href='#experience' class='nav-link'>Experience</a>`. Second, create `<section id='experience' class='section'>` inside `<main>` using our `.container` and `.section-header` classes. Third, place the content inside. If you wanted a separate multi-page link instead, I would create an `experience.html` file, copy over the `<header>` and `<footer>`, and link directly to `experience.html` in the navigation."*

### Q2: "Why didn't you use Bootstrap or Tailwind CSS?"
**Answer:**
> *"I chose pure CSS3 to demonstrate my fundamental understanding of web standards, CSS variables, Flexbox, and CSS Grid. Frameworks like Bootstrap add significant overhead and generic styling, whereas writing custom CSS gives me complete control over performance, accessibility, and the custom coffee palette without external dependencies."*

### Q3: "What is the purpose of the `<meta name='viewport'>` tag in your HTML header?"
**Answer:**
> *"Without the viewport meta tag, mobile browsers assume they are displaying a desktop page and zoom out, making text unreadably tiny. The tag sets `width=device-width, initial-scale=1.0`, instructing the mobile device to render the website at its actual physical screen width with a 1:1 scale."*

### Q4: "Why are all your image paths relative rather than absolute?"
**Answer:**
> *"Relative paths (like `assets/images/profile.jpg`) are required for portability, especially when deploying on GitHub Pages. If I had used an absolute path like `/assets/images/...`, the browser would look at the root domain (`manik-sharma-04.github.io/`) instead of the repository folder (`manik-sharma-04.github.io/portfolio/`), causing all images to break."*

### Q5: "What is `box-sizing: border-box` and why did you put it in the universal reset `*`?"
**Answer:**
> *"By default in CSS (`content-box`), adding padding or a border increases the total rendered width of an element, often causing layout overflows. `box-sizing: border-box` forces padding and borders to be included inside the element's specified width, making responsive math and grid calculations completely predictable."*

### Q6: "Why did you use `<article>` instead of `<div>` for the project cards?"
**Answer:**
> *"In semantic HTML5, an `<article>` tag represents an independent, self-contained piece of content that makes sense on its own. Since each project has its own title, description, tags, and link, `<article>` provides semantic meaning to search engines and assistive technologies like screen readers."*

### Q7: "What is the difference between CSS Grid and Flexbox, and where did you use each?"
**Answer:**
> *"Flexbox is primarily one-dimensional—ideal for laying out items in a single row or column, such as my navigation bar and button groups. CSS Grid is two-dimensional—ideal for managing both rows and columns simultaneously, which is why I used CSS Grid for the project cards showcase and the skills section."*

### Q8: "How does the mobile navigation toggle work in your code?"
**Answer:**
> *"In `script.js`, a click event listener on the `#navToggle` button toggles the `.active` CSS class on both the button and `#navMenu`. In `style.css`, `.nav-menu` is hidden by default on screens under 768px (`display: none`), but when `.active` is added, it switches to `display: block` with a frosted dropdown effect. Clicking any link removes `.active` to dismiss the menu."*

### Q9: "Why did you put `aria-expanded` in your JavaScript?"
**Answer:**
> *"`aria-expanded` is an accessibility attribute. It communicates to screen readers whether the collapsible mobile navigation drawer is currently open (`true`) or closed (`false`), ensuring the site is inclusive and accessible to visually impaired users."*

### Q10: "What does `loading='lazy'` do on your project images?"
**Answer:**
> *"`loading='lazy'` is a native HTML attribute that defers loading offscreen images until the user scrolls near them. This saves bandwidth, reduces initial network payloads, and dramatically speeds up the initial page load time."*

### Q11: "Why does the hero profile image use `loading='eager'` while projects use `loading='lazy'`?"
**Answer:**
> *"The hero profile image is 'above the fold'—meaning it appears on screen immediately when the page loads. It uses `eager` so it downloads with highest priority. The project images are lower on the page, so they use `lazy` to avoid delaying the initial page display."*

### Q12: "Why do external links to GitHub and the resume have `rel='noopener noreferrer'`?"
**Answer:**
> *"When opening a link in a new tab using `target='_blank'`, the target page gets partial access to the opening window through the `window.opener` JavaScript object. `noopener noreferrer` prevents security vulnerabilities like reverse tab-nabbing and protects user privacy."*

### Q13: "What happens if an image file is missing or fails to load?"
**Answer:**
> *"The layout will not break. I styled the image containers with fixed aspect ratios (`16 / 9` and `1 / 1`) and a fallback layer underneath featuring a themed icon and title. If an image file hasn't been uploaded yet, the site displays a sleek, styled placeholder box instead of an ugly broken icon or collapsed card."*

### Q14: "What is `clamp()` in your CSS typography?"
**Answer:**
> *"`clamp(minimum, preferred, maximum)` is a modern CSS function for fluid typography. For example, `font-size: clamp(2rem, 3.5vw, 2.75rem)` allows headings to scale proportionally with the viewport width (`3.5vw`), while guaranteeing they never shrink below 2rem on small phones or grow above 2.75rem on large monitors."*

### Q15: "How does Git's staging area (`git add`) differ from committing (`git commit`)?"
**Answer:**
> *"`git add` places modified files into the staging area (index), which acts as a draft area where you select exactly which changes you want to package. `git commit` takes that staged snapshot and permanently records it into the repository history with an explanatory message."*

### Q16: "What is the difference between `main` and `origin/main` in Git?"
**Answer:**
> *"`main` is your local branch on your own computer. `origin/main` is the tracking branch that represents the state of the `main` branch on the remote server (GitHub). When you run `git push origin main`, your local commits are sent to update `origin/main`."*

### Q17: "How would you change the font family across the entire website?"
**Answer:**
> *"At lines 34–35 of `style.css`, I defined `--font-heading` and `--font-body`. To change fonts, I would import the new Google Font link in `index.html` and update those two CSS variable declarations in `style.css`. Every heading and paragraph across the site would update immediately."*

---

*End of EXPLANATION.md — You are now fully equipped to explain and defend every line of code!*
