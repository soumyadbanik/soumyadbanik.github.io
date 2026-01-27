import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import BeyondCode from './pages/BeyondCode';
import SketchesPage from './pages/SketchesPage';
import { Eye } from 'lucide-react';

// ============ CONFIGURATION ============
// Set to false to disable visitor counter
const SHOW_VISITOR_COUNTER = false;
// =======================================

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

// Visitor Counter Component
const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Try multiple counter services for reliability
        const fetchCount = async () => {
            try {
                // Using CountAPI
                const response = await fetch('https://api.countapi.xyz/hit/soumyadbanik-portfolio/visits');
                if (response.ok) {
                    const data = await response.json();
                    setCount(data.value);
                } else {
                    throw new Error('CountAPI failed');
                }
            } catch (error) {
                // Fallback: Use localStorage for local development demo
                const storedCount = parseInt(localStorage.getItem('visitor_count') || '0', 10);
                const newCount = storedCount + 1;
                localStorage.setItem('visitor_count', newCount.toString());
                setCount(newCount);
            }
            setLoading(false);
        };

        fetchCount();
    }, []);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            marginTop: '0.75rem',
            color: 'var(--text-muted)',
            fontSize: '0.8rem'
        }}>
            <Eye size={14} />
            <span>
                {loading ? '...' : count !== null ? `${count.toLocaleString()} views` : 'Welcome!'}
            </span>
        </div>
    );
};


function App() {
    // Global smooth scroll setting
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <AnimatedBackground />
                <ScrollToTop />
                <ScrollProgress />
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/beyond-code" element={<BeyondCode />} />
                        <Route path="/sketches" element={<SketchesPage />} />
                    </Routes>
                </main>

                <footer style={{
                    padding: '2rem 0',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    marginTop: 'auto',
                    borderTop: '1px solid var(--card-border)'
                }}>
                    <div className="container">
                        <p>Designed & Built by Soumyadeep Banik</p>
                        <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>© {new Date().getFullYear()}</p>
                        {SHOW_VISITOR_COUNTER && <VisitorCounter />}
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;

