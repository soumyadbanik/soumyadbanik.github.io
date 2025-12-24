# Portfolio Website Setup & Deployment Guide

This guide will help you launch your new "exclusive" researcher portfolio.

## 1. Prerequisites
Ensure you have **Node.js** installed. You can check by running `node -v` in your terminal. If not installed, download it from [nodejs.org](https://nodejs.org/).

## 2. Local Setup
I have already generated the source code for you. Now you need to install the dependencies and run it.

1.  Open your terminal in this directory (`C:\Users\Soumya\Documents\soumyadbanik`).
2.  Install dependencies:
    ```bash
    npm install
    ```
    *Note: This will install React, Framer Motion (for animations), and Vite.*

3.  Start the local server:
    ```bash
    npm run dev
    ```
4.  Open the link shown (usually `http://localhost:5173`) to view your creative portfolio.

## 3. Customization
-   **Content**: Edit `src/data/resume.js` to update your bio, projects, or add new experiences.
-   **Images**: For the "Creative" section, I used placeholders. To add real photos:
    1.  Place images in the `public/` folder (create one if it doesn't exist).
    2.  Update `src/components/ExtraCurricular.jsx` to reference them.

## 4. Deployment to GitHub Pages
To host this on `soumyadbanik.github.io`, follow these steps:

### Option A: Manual Build & Push (Simplest)
1.  Build the project:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder.
3.  You can configure GitHub Pages (in Repo Settings > Pages) to serve from a specific branch.

### Option B: Automated Deploy (Recommended)
1.  Install the `gh-pages` deployer:
    ```bash
    npm install gh-pages --save-dev
    ```
2.  Add this script to your `package.json` (inside `"scripts"`):
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
3.  Run the deploy command:
    ```bash
    npm run deploy
    ```
4.  Your site will be live at `https://soumyadbanik.github.io/soumyadbanik/` (or root if configured).

## Design Philosophy Implemented
-   **Structure**: Clean, semantic HTML5 with React components.
-   **Aesthetics**: "Dark Mode" luxury tech vibe. Uses a deep black/gray palette with an Electric Blue accent (`#3b82f6`).
-   **Animations**: Used `framer-motion` for staggering entrance animations (fade-ins) and hover effects on project cards.
-   **Typography**: Used 'Space Grotesk' for headings (modern, tech-focused) and 'Outfit' for body text (clean, rigorous).
