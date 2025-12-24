import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExtraCurricular from './components/ExtraCurricular';

function App() {
    // Smooth scroll behavior
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    return (
        <div className="App">
            <Navbar />

            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <ExtraCurricular />
            </main>

            <footer style={{
                padding: '2rem 0',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                marginTop: '4rem',
                borderTop: '1px solid var(--card-border)'
            }}>
                <div className="container">
                    <p>Designed & Built by Soumyadeep Banik</p>
                    <p style={{ marginTop: '0.5rem', opacity: 0.6 }}>© {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
