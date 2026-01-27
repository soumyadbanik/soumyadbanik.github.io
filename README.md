# Portfolio Website Template

A responsive portfolio website built with React and Vite. Designed for developers, researchers, and professionals who want a clean, modern web presence.

**[Live Demo](https://soumyadbanik.github.io/)**

---

## 🚀 Features

- Responsive design (mobile, tablet, desktop)
- Dark and light mode with system preference detection
- Smooth scroll animations
- Automatic deployment to GitHub Pages
- All content managed through simple JavaScript files

---

## Using This Template

### Option 1: GitHub Template

1. Click **"Use this template"** at the top of this repository
2. Name your repository `<your-username>.github.io`
3. Clone and customize

### Option 2: Fork or Clone

```bash
git clone https://github.com/soumyadbanik/soumyadbanik.github.io.git my-portfolio
cd my-portfolio

# Start fresh (optional)
rm -rf .git
git init
```

---

## 📦 Setup

**Requirements:** Node.js v18 or higher

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Customization

### Personal Information

Edit `src/data/resume.js`:

```javascript
export const resumeData = {
    personalInfo: {
        name: "Your Name",
        title: "Your Title",
        email: "your@email.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
    },
    // Add your experience, education, projects, skills...
};
```

### Creative Content

Edit `src/data/creative.js` to add photography, videos, music, or artwork.

### Images

1. Place images in `public/images/`
2. Reference as `/images/your-image.png`

### CV/Resume PDF

1. Place your PDF in `public/`
2. Update the link in `src/components/Hero.jsx`

### Site Metadata

Edit `index.html` to update the page title, description, and Open Graph tags.

---

## 📁 Project Structure

```
public/
├── images/              # Images and assets
├── favicon.svg
└── your-cv.pdf

src/
├── components/          # UI components
├── data/
│   ├── resume.js        # Main content
│   └── creative.js      # Creative portfolio
├── pages/
├── context/
├── App.jsx
├── main.jsx
└── index.css            # Styles and CSS variables

.github/workflows/
└── deploy.yml           # Auto-deployment config
```

---

## 🌐 Deployment

### GitHub Pages (Automatic)

1. Push code to the `main` branch
2. Go to repository **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

Every push to `main` will automatically deploy.

### Manual Build

```bash
npm run build
npm run preview   # Preview locally
```

Built files are in `dist/`.

---

## Styling

Colors and design tokens are in `src/index.css`:

```css
:root {
    --accent: #3b82f6;
    --bg-primary: #0a0a0a;
    --text-primary: #ffffff;
}
```

---

## Tech Stack

- React
- Vite
- Framer Motion
- Lucide React
- React Router

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## Contributing

Issues and pull requests are welcome.

---

Created by [Soumyadeep Banik](https://github.com/soumyadbanik)
