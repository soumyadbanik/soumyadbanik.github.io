# Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations and a clean design.

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/soumyadbanik/soumyadbanik.github.io.git
   cd soumyadbanik.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📁 Project Structure

```
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Content data (resume.js, creative.js)
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   └── App.jsx          # Main app component
└── .github/workflows/   # CI/CD configuration
```

## ✏️ Customization

### Updating Content
Edit the data files in `src/data/`:
- **`resume.js`** - Work experience, education, projects, skills
- **`creative.js`** - Photography, music, and other creative content

### Adding Images
1. Place images in the `public/images/` folder
2. Reference them in your data files using `/images/your-image.jpg`

## 🌐 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions. Any push to the `main` branch triggers a new deployment.

### Manual Deployment
```bash
npm run build
```
The built files will be in the `dist/` folder.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
