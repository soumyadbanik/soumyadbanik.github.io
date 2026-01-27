# 🎨 Modern Portfolio Template

A clean, modern, and fully responsive portfolio website template built with React and Vite. Perfect for developers, researchers, and creative professionals.

[![Deploy to GitHub Pages](https://github.com/soumyadbanik/soumyadbanik.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/soumyadbanik/soumyadbanik.github.io/actions/workflows/deploy.yml)

## ✨ Live Demo

**[View Live Demo →](https://soumyadbanik.github.io/)**

![Portfolio Preview](public/images/preview.png)

---

## 🚀 Features

- **🎯 Modern Design** - Clean, professional aesthetic with smooth animations
- **📱 Fully Responsive** - Looks great on all devices (mobile, tablet, desktop)
- **🌙 Dark/Light Mode** - Built-in theme toggle with system preference detection
- **⚡ Fast Performance** - Built with Vite for lightning-fast load times
- **🎬 Smooth Animations** - Powered by Framer Motion
- **📝 Easy Customization** - All content managed through simple data files
- **🔧 Zero Config Deployment** - Automatic GitHub Pages deployment via Actions

---

## 🛠️ Use This Template

### Option 1: Use GitHub Template (Recommended)

1. Click the **"Use this template"** button at the top of this repository
2. Name your new repository `<your-username>.github.io` for a personal site
3. Clone your new repository and follow the setup steps below

### Option 2: Fork & Clone

```bash
# Clone the repository
git clone https://github.com/soumyadbanik/soumyadbanik.github.io.git my-portfolio
cd my-portfolio

# Remove the original git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

### Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✏️ Customization

### 1. Update Your Personal Information

Edit **`src/data/resume.js`** to update:
- Personal info (name, title, email, social links)
- Research/Work experience
- Education
- Projects
- Skills & tools

```javascript
// src/data/resume.js
export const resumeData = {
    personalInfo: {
        name: "Your Name",
        title: "Your Title",
        email: "your@email.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        // ... more fields
    },
    // ... rest of your data
};
```

### 2. Update Creative Content (Optional)

If you want to showcase creative work, edit **`src/data/creative.js`**:
- Photography
- Videos/Documentaries
- Music/Song covers
- Art/Sketches

### 3. Add Your Images

1. Place your images in `public/images/`
2. Reference them in your data files:
   ```javascript
   thumbnail: "/images/projects/your-project.png"
   ```

### 4. Update Meta Information

Edit **`index.html`** to update:
- Page title
- Meta description
- Open Graph tags for social sharing

### 5. Add Your CV/Resume

1. Place your PDF in `public/` folder
2. Update the link in `src/components/Hero.jsx`

---

## 📁 Project Structure

```
├── public/
│   ├── images/           # Your images and assets
│   ├── favicon.svg       # Site favicon
│   └── your-cv.pdf       # Your resume PDF
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── ...
│   ├── data/
│   │   ├── resume.js     # Main content data
│   │   └── creative.js   # Creative portfolio data
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── BeyondCode.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Global styles & CSS variables
├── .github/
│   └── workflows/
│       └── deploy.yml    # Auto-deployment configuration
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This template includes a GitHub Actions workflow for automatic deployment.

1. **Create your repository** named `<username>.github.io`

2. **Push your code** to the `main` branch

3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**

4. **Done!** Every push to `main` will auto-deploy your site

### Manual Build

```bash
# Build for production
npm run build

# Preview the build locally
npm run preview
```

The built files will be in the `dist/` folder.

---

## 🎨 Theming & Styling

### CSS Variables

All colors and design tokens are defined in `src/index.css`. Customize the look by editing:

```css
:root {
    --accent: #3b82f6;           /* Primary accent color */
    --bg-primary: #0a0a0a;       /* Background color */
    --text-primary: #ffffff;     /* Primary text color */
    /* ... more variables */
}
```

### Adding Custom Fonts

1. Add font imports to `index.html`
2. Update font-family in `src/index.css`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [React](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |
| [React Router](https://reactrouter.com/) | Navigation |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

Created by [Soumyadeep Banik](https://github.com/soumyadbanik)

If you use this template, a star ⭐ would be appreciated!

---

<p align="center">
  Made with ❤️ and React
</p>
