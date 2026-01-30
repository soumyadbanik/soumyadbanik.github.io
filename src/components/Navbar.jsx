import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

import profilePic from '../assets/soumyadbanik.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 150);
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Close drawer when route changes
    useEffect(() => {
        setDrawerOpen(false);
    }, [location]);

    const scrollToSection = (id) => {
        setDrawerOpen(false);
        if (!isHome) return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'About', href: '#about', isHash: true },
        { name: 'Research', href: '#research', isHash: true },
        { name: 'Experience', href: '#industry-experience', isHash: true },
        { name: 'Projects', href: '#projects', isHash: true },
        { name: 'Education', href: '#education', isHash: true },
        { name: 'Beyond Code', href: '/beyond-code', isHash: false, isSpecial: true },
    ];

    // Normal navbar (top, before scroll)
    const NormalNavbar = () => (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                height: '70px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '0 1rem' : '0 2rem',
                backgroundColor: 'transparent'
            }}
        >
            <Link to="/" style={{ fontSize: '1.3rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                S<span style={{ color: 'var(--accent)' }}>.</span>B
            </Link>

            {isMobile ? (
                /* Mobile: Show hamburger + theme toggle */
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <ThemeToggle />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setDrawerOpen(true)}
                        style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--text-primary)',
                            boxShadow: '0 2px 10px var(--shadow-color)'
                        }}
                        aria-label="Open menu"
                    >
                        <Menu size={20} />
                    </motion.button>
                </div>
            ) : (
                /* Desktop: Show full nav links + theme toggle */
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ul style={{ display: 'flex', gap: '1.8rem', listStyle: 'none' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.isHash ? (
                                    isHome ? (
                                        <button
                                            onClick={() => scrollToSection(link.href.substring(1))}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                fontSize: '0.85rem',
                                                opacity: 0.7,
                                                cursor: 'pointer',
                                                color: 'inherit',
                                                fontFamily: 'inherit',
                                                transition: 'opacity 0.2s, color 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.opacity = 1;
                                                e.currentTarget.style.color = 'var(--accent)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.opacity = 0.7;
                                                e.currentTarget.style.color = 'inherit';
                                            }}
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link to={`/${link.href}`} style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                                            {link.name}
                                        </Link>
                                    )
                                ) : link.isSpecial ? (
                                    <Link
                                        to={link.href}
                                        style={{
                                            fontSize: '0.85rem',
                                            opacity: location.pathname === link.href ? 1 : 0.7,
                                            color: location.pathname === link.href ? 'var(--accent)' : 'inherit',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.4rem',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.opacity = '1';
                                            e.currentTarget.style.color = 'var(--accent)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.opacity = location.pathname === link.href ? '1' : '0.7';
                                            e.currentTarget.style.color = location.pathname === link.href ? 'var(--accent)' : 'inherit';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <Sparkles size={14} />
                                        <span>{link.name}</span>
                                    </Link>
                                ) : (
                                    <Link
                                        to={link.href}
                                        style={{
                                            fontSize: '0.85rem',
                                            opacity: location.pathname === link.href ? 1 : 0.7,
                                            color: location.pathname === link.href ? 'var(--accent)' : 'inherit',
                                            transition: 'opacity 0.2s, color 0.2s'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            )}
        </motion.nav>
    );

    // Sticky hamburger button (appears after scroll)
    const StickyMenuButton = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: '16px',
                left: '16px',
                zIndex: 100,
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
            }}
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDrawerOpen(true)}
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--text-primary)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                }}
                aria-label="Open menu"
            >
                <Menu size={22} />
            </motion.button>
            <ThemeToggle />
        </motion.div>
    );

    // Slide-out drawer
    const Drawer = () => (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 150,
                    backdropFilter: 'blur(4px)'
                }}
            />

            {/* Drawer Panel */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '280px',
                    backgroundColor: 'var(--bg-color)',
                    borderRight: '1px solid var(--card-border)',
                    zIndex: 200,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '4px 0 30px rgba(0,0,0,0.5)'
                }}
            >
                {/* Close button */}
                <button
                    onClick={() => setDrawerOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>

                {/* Profile photo in drawer */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingTop: '1rem'
                }}>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                        style={{
                            width: '90px',
                            height: '90px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '2px solid var(--accent)',
                            marginBottom: '1rem',
                            boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
                        }}
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </motion.div>
                    <span style={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        Soumyadeep Banik
                    </span>
                    <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        marginTop: '0.3rem'
                    }}>
                        Computer Vision Engineer
                    </span>
                </div>

                {/* Navigation links */}
                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 + index * 0.05 }}
                                style={{ marginBottom: '0.3rem' }}
                            >
                                {link.isHash ? (
                                    isHome ? (
                                        <button
                                            onClick={() => scrollToSection(link.href.substring(1))}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                fontSize: '1rem',
                                                color: 'var(--text-secondary)',
                                                cursor: 'pointer',
                                                fontFamily: 'inherit',
                                                padding: '0.75rem 1rem',
                                                width: '100%',
                                                textAlign: 'left',
                                                borderRadius: '6px',
                                                transition: 'all 0.2s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                                                e.currentTarget.style.color = 'var(--accent)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = 'var(--text-secondary)';
                                            }}
                                        >
                                            {link.name}
                                        </button>
                                    ) : (
                                        <Link
                                            to={`/${link.href}`}
                                            onClick={() => setDrawerOpen(false)}
                                            style={{
                                                display: 'block',
                                                fontSize: '1rem',
                                                color: 'var(--text-secondary)',
                                                padding: '0.75rem 1rem',
                                                borderRadius: '6px',
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ) : link.isSpecial ? (
                                    <Link
                                        to={link.href}
                                        onClick={() => setDrawerOpen(false)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '1rem',
                                            color: location.pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            backgroundColor: location.pathname === link.href ? 'var(--card-bg)' : 'transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--accent)';
                                            e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = location.pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)';
                                            e.currentTarget.style.backgroundColor = location.pathname === link.href ? 'var(--card-bg)' : 'transparent';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <Sparkles size={18} />
                                        {link.name}
                                    </Link>
                                ) : (
                                    <Link
                                        to={link.href}
                                        onClick={() => setDrawerOpen(false)}
                                        style={{
                                            display: 'block',
                                            fontSize: '1rem',
                                            color: location.pathname === link.href ? 'var(--accent)' : 'var(--text-secondary)',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '6px',
                                            backgroundColor: location.pathname === link.href ? 'var(--card-bg)' : 'transparent',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--card-border)',
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textAlign: 'center'
                }}>
                    © {new Date().getFullYear()} Soumyadeep Banik
                </div>
            </motion.div>
        </>
    );

    return (
        <>
            <AnimatePresence mode="wait">
                {!scrolled && !drawerOpen && <NormalNavbar key="normal-nav" />}
            </AnimatePresence>

            <AnimatePresence>
                {scrolled && !drawerOpen && <StickyMenuButton key="sticky-menu" />}
            </AnimatePresence>

            <AnimatePresence>
                {drawerOpen && <Drawer key="drawer" />}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
