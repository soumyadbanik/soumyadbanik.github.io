import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowDown, Mail, FileText, Linkedin, Github } from 'lucide-react';

import profilePic from '../assets/soumyadbanik.png';

const Hero = () => {
    const iconButtonStyle = {
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--card-border)',
        borderRadius: '50%',
        color: 'var(--text-secondary)',
        transition: 'all 0.2s ease',
        backgroundColor: 'transparent'
    };

    const handleIconHover = (e, isEnter) => {
        if (isEnter) {
            e.currentTarget.style.borderColor = 'var(--accent)';
            e.currentTarget.style.color = 'var(--accent)';
            e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        } else {
            e.currentTarget.style.borderColor = 'var(--card-border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.backgroundColor = 'transparent';
        }
    };

    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            paddingBottom: '80px',
            overflow: 'hidden'
        }}>
            {/* Subtle Background Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <div className="container" style={{
                maxWidth: '800px',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem'
            }}>
                {/* Profile Image - Circular, on top */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                >
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid var(--accent)',
                        boxShadow: '0 0 40px rgba(59, 130, 246, 0.25)'
                    }}>
                        <img
                            src={profilePic}
                            alt={resumeData.personalInfo.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            marginBottom: '0.5rem',
                            fontWeight: 400,
                            letterSpacing: '0.02em'
                        }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            lineHeight: 1.1,
                            marginBottom: '0.6rem',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {resumeData.personalInfo.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '1.5rem',
                            fontWeight: 400,
                            letterSpacing: '0.01em'
                        }}
                    >
                        {resumeData.personalInfo.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontSize: '0.95rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            lineHeight: 1.8
                        }}
                    >
                        {resumeData.personalInfo.about}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {/* Icon Links */}
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            style={iconButtonStyle}
                            onMouseEnter={(e) => handleIconHover(e, true)}
                            onMouseLeave={(e) => handleIconHover(e, false)}
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            style={iconButtonStyle}
                            onMouseEnter={(e) => handleIconHover(e, true)}
                            onMouseLeave={(e) => handleIconHover(e, false)}
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            aria-label="Email"
                            style={iconButtonStyle}
                            onMouseEnter={(e) => handleIconHover(e, true)}
                            onMouseLeave={(e) => handleIconHover(e, false)}
                        >
                            <Mail size={20} />
                        </a>

                        {/* CV Button */}
                        <a
                            href="/soumyadbanik_cv_2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginLeft: '0.5rem',
                                padding: '0.6rem 1.2rem',
                                backgroundColor: 'var(--accent)',
                                color: '#ffffff',
                                borderRadius: '4px',
                                fontWeight: 500,
                                fontSize: '0.85rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                border: '1px solid var(--accent)',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'var(--accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--accent)';
                                e.currentTarget.style.color = '#ffffff';
                            }}
                        >
                            <FileText size={16} />
                            CV
                        </a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <ArrowDown size={20} className="animate-bounce" color="var(--text-secondary)" />
            </motion.div>
        </section>
    );
};

export default Hero;
