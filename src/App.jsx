import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import BeyondCode from './pages/BeyondCode';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
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
                <ScrollToTop />
                <ScrollProgress />
                <Navbar />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/beyond-code" element={<BeyondCode />} />
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
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
