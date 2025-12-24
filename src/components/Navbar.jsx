import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Creative', href: '#creative' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'
                }`}
            style={{
                height: '80px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 2rem'
            }}
        >
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
                S<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
