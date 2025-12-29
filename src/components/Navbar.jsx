import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (!isHome) return; // Allow Link to handle navigation if not home
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'About', href: '#about', isHash: true },
        { name: 'Experience', href: '#experience', isHash: true },
        { name: 'Projects', href: '#projects', isHash: true },
        { name: 'Skills', href: '#skills', isHash: true },
        { name: 'Beyond Code', href: '/beyond-code', isHash: false },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-300 ${scrolled || !isHome ? 'backdrop-blur-md bg-black/80 border-b border-white/10' : 'bg-transparent'
                }`}
            style={{
                height: '80px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 2rem'
            }}
        >
            <Link to="/" className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
                S<span style={{ color: 'var(--accent)' }}>.</span>
            </Link>

            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        {link.isHash ? (
                            isHome ? (
                                <button
                                    onClick={() => scrollToSection(link.href.substring(1))}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '0.9rem',
                                        opacity: 0.8,
                                        cursor: 'pointer',
                                        color: 'inherit',
                                        fontFamily: 'inherit'
                                    }}
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link to={`/${link.href}`} style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    {link.name}
                                </Link>
                            )
                        ) : (
                            <Link
                                to={link.href}
                                style={{
                                    fontSize: '0.9rem',
                                    opacity: location.pathname === link.href ? 1 : 0.8,
                                    color: location.pathname === link.href ? 'var(--accent)' : 'inherit'
                                }}
                            >
                                {link.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
