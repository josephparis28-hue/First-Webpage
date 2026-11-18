# Joseph Paris | Developer Portfolio

A personal portfolio website showcasing my background as a Computer Applications student, my web development interests and programming skills, my projects, and my professional goals. The site is designed to be clean, responsive, accessible, and easy to maintain while I continue learning and building.

**Live website:** <https://josephparis28-hue.github.io/First-Webpage/>  
**GitHub repository:** <https://github.com/josephparis28-hue/First-Webpage>

> This repository contains my **personal developer portfolio**, not the separate ROEH 111 business website. Changes published to GitHub Pages may take a short time to appear.

## About the Project

This project began as a first webpage and has been redesigned into a more complete, single-page portfolio. It demonstrates how HTML, CSS, and a small amount of JavaScript work together to create a professional, user-friendly website without a frontend framework.

The site introduces who I am, highlights what I am learning, shares examples of my work, and gives visitors ways to contact me.

## Website Sections

| Section | Content |
| --- | --- |
| **Home** | Introduction, personal tagline, and links to the projects and contact sections. |
| **About** | My Computer Applications background and approach to purposeful, responsible technology. |
| **Skills & Interests** | Frontend development (HTML, CSS, JavaScript), programming foundations (C, C++, C#, Python), and human-centered design principles. |
| **Projects** | ROEH 111 Digital Revamp (featured) and this Joseph Paris Portfolio. |
| **Goals** | Improving code quality, designing for people, and continuing to learn through real projects. |
| **Contact** | Email contact and a link to my GitHub profile. |

## Features

- Responsive layouts for desktop, tablet, and mobile screens.
- Sticky navigation with section links and a mobile menu.
- Hero section with clear calls to action.
- Project cards with project descriptions, status labels, and links.
- Coordinated navy, teal, and light background sections.
- Keyboard-accessible navigation controls, visible focus styles, a skip-to-content link, and semantic page sections.
- Reduced-motion support for visitors who prefer less animation.
- JavaScript that manages the mobile menu, scrolls reliably to sections (including Goals), powers the Back to Top button, and updates the footer year.
- A lightweight, static design that can be hosted with GitHub Pages.

## Technologies Used

- **HTML5:** Semantic structure and website content.
- **CSS3:** Layouts, colors, typography, responsive breakpoints, and visual effects.
- **JavaScript (vanilla):** Mobile menu, section scrolling, Back to Top button, and automatic copyright year.
- **Google Fonts:** Manrope and DM Sans; local/system font fallbacks are also provided.
- **GitHub Pages:** Static website hosting.

No npm installation, build process, server, database, or API key is required.

## Project Files

```text
First-Webpage/
├── index.html    # Portfolio content and page structure
├── style.css     # Styles, layout, and responsive design
├── script.js     # Mobile navigation and footer year
└── README.md     # Project overview and setup instructions
```

## Run Locally

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a web browser.

Because this is a static site, no additional setup is required. An editor such as Visual Studio Code and its Live Server extension can be useful during development, but are optional.

## Navigation and Scrolling

- Click **Goals** in the main navigation or **More about my goals** in the About section to reach the Goals section.
- Click **Back to top ↑** in the footer to return to the start of the page.
- Standard anchor links (`href="#goals"`, for example) work even without JavaScript. JavaScript enhances scrolling and closes the mobile menu after selecting a section.
- The CSS uses `scroll-margin-top` so the sticky header does not cover section headings. Reduced-motion settings are respected.

## Code Formatting

`index.html`, `style.css`, and `script.js` use readable indentation, descriptive comments, and separate lines for elements, properties, and JavaScript statements. Only individual decorative code sample lines stay together so their visual formatting is preserved.

## Edit and Maintain the Site

- **Update my bio, skills, goals, project descriptions, or links:** Edit `index.html`.
- **Change colors, fonts, spacing, or layouts:** Edit `style.css`. The primary theme colors are defined near the top of the file using CSS custom properties in `:root`.
- **Adjust mobile menu behavior:** Edit `script.js`.
- **Add a new project:** Add another project card within the `projects-grid` element in `index.html`, then check the layout on mobile.
- **Update contact information:** Change the email and GitHub links in the contact section of `index.html`.

## Accessibility and Testing

The website includes semantic landmarks, heading structure, a skip link, visible keyboard focus, descriptive navigation labels, and a reduced-motion stylesheet rule. These features support accessibility, but they **do not replace testing**.

Before publishing major updates, check that:

- Navigation links reach the correct sections, especially Goals, and the footer Back to Top button scrolls all the way up.
- The mobile menu opens, closes, and works with a keyboard.
- Text is readable and cards fit on small screens without horizontal scrolling.
- Project links and email links work.
- Contrast, page structure, and other accessibility issues are reviewed using tools such as Lighthouse or WAVE.

## Projects Featured

- **[Joseph Paris Portfolio](https://josephparis28-hue.github.io/First-Webpage/)** — this site; ongoing improvements.
- **[ROEH 111 Digital Revamp](https://josephparis28-hue.github.io/Roeh-111/)** — featured business website project; marked *In progress*.

ROEH 111 now replaces the former Open Door COGIC project card, and appears only once. Project status labels describe the portfolio at the time of writing; update them as the projects change. The portfolio project links to this site instead of an outdated separate personal-website URL.

## Current Scope and Future Improvements

This is a **static portfolio**. It uses `mailto:` for email contact and does **not** include a contact-form backend, login system, database, or content-management system.

Possible future updates include detailed project case studies, screenshots, a downloadable résumé, additional portfolio work, and more usability and accessibility testing.

## Contact

- **GitHub:** <https://github.com/josephparis28-hue>
- **Email:** [Josephparis28@gmail.com](mailto:Josephparis28@gmail.com)

---

*© 2026 Joseph Paris. Built with purpose.*
