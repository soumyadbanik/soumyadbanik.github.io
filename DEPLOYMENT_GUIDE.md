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

## 4. Deployment to GitHub Pages (Automated CI/CD)

I have configured a **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that will automatically build and deploy your site whenever you push to GitHub.

### Step 1: Create Repository
1.  Go to [GitHub.com](https://github.com/new).
2.  Create a new repository named `soumyadbanik.github.io` (or `soumyadbanik` if you prefer a project page).
3.  Do **not** extract a README or .gitignore (we already have them).

### Step 2: Push Your Code
You need to push this code to the new repository. Open your terminal in this folder (`C:\Users\Soumya\Documents\soumyadbanik`) and run the following (replace `YOUR_REPO_URL` with the one from Step 1, e.g., `https://github.com/soumyadbanik/soumyadbanik.github.io.git`):

```bash
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Step 3: Configure Pages
1.  Go to your Repository Settings > **Pages**.
2.  Under **Build and deployment** > **Source**, select **GitHub Actions** (it might default to "Deploy from a branch", change it to "GitHub Actions").
3.  That's it! Looking at the "Actions" tab in your repo, you should see a "Deploy to GitHub Pages" workflow running.

### Future Updates
Whenever you want to update your portfolio:
1.  Edit the code or `resume.js`.
2.  Commit the changes:
    ```bash
    git add .
    git commit -m "Updated resume"
    git push
    ```
3.  The site will automatically update within minutes.
