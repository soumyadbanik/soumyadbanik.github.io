import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowDown, Mail, FileText, Linkedin, Github } from 'lucide-react';
import ExternalLink from './ExternalLink';

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
                maxWidth: '1000px',
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
                        Hello, Welcome to my page! I'm
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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            maxWidth: '100%',
                            margin: '0 auto',
                            textAlign: 'left',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            lineHeight: 1.8
                        }}
                    >
                        <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                            I am a Computer Vision Engineer at <ExternalLink href="https://quidich.com/">Quidich Innovation Labs</ExternalLink>, a sports broadcasting company based in India.
                            I work with the teams responsible for building real-time vision systems for live productions, primarily focused on global cricket.
                        </p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                            My industry work focuses on Multi-view geometry and 3D vision for Human Pose Estimation and Reconstruction, motion capture (MoCap), Human Activity Recognition (HAR), Person Re-Identification (Re-ID), Segmentation, and Object Tracking for high-speed broadcast cameras and edge devices. During my time at Happymonk.ai, where I worked on human action recognition, I was supervised by <ExternalLink href="https://www.bits-pilani.ac.in/goa/snehanshu-saha/">Prof. Snehanshu Saha</ExternalLink>{''}.
                        </p>
                        <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                            Previously I worked at <ExternalLink href="https://www.isical.ac.in/~ash/">Prof. Ashish Ghosh</ExternalLink>'s lab at <ExternalLink href="https://www2.isical.ac.in/~miu/">MIU</ExternalLink> @ <ExternalLink href="https://www.isical.ac.in/">ISI, Kolkata</ExternalLink> as a Project Linked Junior Research Fellow on Human Activity Recognition for healthcare using Graph representation learning.
                        </p>
                        <p style={{ fontSize: '0.95rem' }}>
                            In 2019, I submitted my undergrad thesis on Video Steganography at <ExternalLink href="https://rkmrc.in/pg-departments/computer-science-2/">RKMRC, Narendrapur</ExternalLink>{' '}under the supervision of <ExternalLink href="https://scholar.google.com/citations?user=LlEHeMgAAAAJ&hl=en">Prof. Bibek Ranjan Ghosh</ExternalLink>{''}.
                            In 2021, I completed my M.Sc. in Computer Science at{' '}
                            <ExternalLink href="https://rkmvu.ac.in/">Ramakrishna Mission Vivekananda Educational and Research Institute</ExternalLink>, Belur, India.
                            I was extremely fortunate to attend some great courses and receive mentorship from <ExternalLink href="https://scholar.google.com/citations?user=rOiTTvMAAAAJ&hl=en">Prof. Joydeep Mukherjee</ExternalLink> and <ExternalLink href="https://scholar.google.com/citations?hl=en&user=mVAg1nwAAAAJ">Prof. Sujoy Biswas</ExternalLink>{' '}
                            during their courses on Graph Theory and Machine Learning Systems, <ExternalLink href="http://cs.rkmvu.ac.in/~tamal/">Tamal Maharaj</ExternalLink>, Computer Vision and Pattern Recognition (CS342) - which really helped me shape my research direction. Please feel free to reach out to me at <span style={{fontWeight: 'bold'}}>soumya[dot]d[dot]banik[at]gmail[dot]com</span> if our work intersects.
                        </p>
                    </motion.div>

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

                        {/* CV Hover Menu - macOS Folder Style with Glowing Effect */}
                        <div
                            className="cv-hover-menu"
                            style={{
                                position: 'relative',
                                marginLeft: '0.5rem',
                                zIndex: 20
                            }}
                        >
                            {/* Invisible buffer zone */}
                            <div
                                className="cv-buffer-zone"
                                style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '-30px',
                                    right: '-100px',
                                    bottom: '-70px',
                                    zIndex: 5
                                }}
                            />

                            {/* Main CV Button - Transparent to match social icons */}
                            <div
                                className="cv-folder-button"
                                style={{
                                    position: 'relative',
                                    padding: '0.6rem 1rem',
                                    background: 'transparent',
                                    color: 'var(--text-secondary)',
                                    borderRadius: '6px',
                                    fontWeight: 500,
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    transition: 'all 0.2s ease',
                                    border: '1px solid var(--card-border)'
                                }}
                            >
                                {/* Folder Tab - subtle indicator */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-4px',
                                    left: '8px',
                                    width: '20px',
                                    height: '6px',
                                    background: 'var(--card-border)',
                                    borderRadius: '3px 3px 0 0',
                                    zIndex: -1,
                                    transition: 'background 0.2s ease'
                                }} className="folder-tab" />
                                {/* Peek indicator */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '14px',
                                    height: '2px',
                                    background: 'var(--card-border)',
                                    borderRadius: '2px 2px 0 0',
                                    transition: 'background 0.2s ease'
                                }} className="peek-indicator" />
                                <FileText size={16} />
                                <span>CV</span>
                            </div>

                            {/* Option 1: Full CV - Horizontal Right Position */}
                            <a
                                href="BANIK.Soumyadeep_full_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cv-fan-item item-1"
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '100%',
                                    transform: 'translateY(-50%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    zIndex: 9,
                                    opacity: 0,
                                    transformOrigin: 'left center',
                                    transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    pointerEvents: 'none',
                                    textDecoration: 'none'
                                }}
                            >
                                {/* Simple Icon - theme aware */}
                                <span className="cv-icon" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <FileText size={26} strokeWidth={1.8} />
                                </span>
                                {/* Title Pill */}
                                <span style={{
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: '#f8f0e3',
                                    color: '#2a2a2a',
                                    borderRadius: '15px',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.12)'
                                }}>
                                    Full CV
                                </span>
                            </a>

                            {/* Option 2: Single Page CV - Stacked Below Item 1 */}
                            <a
                                href="BANIK.Soumyadeep_single_page_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cv-fan-item item-2"
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    zIndex: 8,
                                    opacity: 0,
                                    transformOrigin: 'top left',
                                    transform: 'translate(0, 0) scale(0.6)',
                                    transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    transitionDelay: '0.05s',
                                    pointerEvents: 'none',
                                    textDecoration: 'none'
                                }}
                            >
                                {/* Simple Icon - theme aware */}
                                <span className="cv-icon" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <FileText size={26} strokeWidth={1.8} />
                                </span>
                                {/* Title Pill */}
                                <span style={{
                                    padding: '0.4rem 0.8rem',
                                    backgroundColor: '#f8f0e3',
                                    color: '#2a2a2a',
                                    borderRadius: '15px',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.12)'
                                }}>
                                    Single Page CV
                                </span>
                            </a>

                            <style>{`
                                /* Folder button hover - match social icons with glow */
                                .cv-hover-menu:hover .cv-folder-button {
                                    border-color: var(--accent);
                                    color: var(--accent);
                                    background-color: rgba(59, 130, 246, 0.1);
                                    box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
                                }
                                .cv-hover-menu:hover .folder-tab,
                                .cv-hover-menu:hover .peek-indicator {
                                    background: var(--accent) !important;
                                }

                                /* Theme-aware icon colors */
                                .cv-icon {
                                    color: #f8f0e3;
                                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
                                }
                                [data-theme="light"] .cv-icon {
                                    color: #5a4a3a;
                                    filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
                                }

                                /* Item 1: Horizontal Slide Right with slight tilt */
                                .cv-hover-menu:hover .item-1 {
                                    opacity: 1 !important;
                                    transform: translateY(-50%) translateX(12px) rotate(-3deg) scale(1) !important;
                                    pointer-events: auto !important;
                                }

                                /* Item 2: Stacked below Item 1, aligned left edges */
                                .cv-hover-menu:hover .item-2 {
                                    opacity: 1 !important;
                                    transform: translate(12px, 8px) rotate(5deg) scale(1) !important;
                                    pointer-events: auto !important;
                                }

                                .cv-fan-item:hover {
                                    z-index: 25 !important;
                                }
                                
                                /* Blue highlighter on hover for both themes - icons only */
                                .cv-fan-item:hover .cv-icon {
                                    color: var(--accent) !important;
                                    filter: drop-shadow(0 2px 6px rgba(59, 130, 246, 0.4)) !important;
                                }
                                
                                /* Fix precise hover interactions */
                                .cv-hover-menu:hover .item-1:hover {
                                    transform: translateY(-50%) translateX(12px) rotate(-3deg) scale(1.06) !important;
                                }
                                .cv-hover-menu:hover .item-2:hover {
                                    transform: translate(12px, 8px) rotate(5deg) scale(1.06) !important;
                                }

                                /* Mobile Fallback */
                                @media (max-width: 768px) {
                                    .cv-hover-menu {
                                        position: relative;
                                        overflow: visible !important;
                                    }
                                    .cv-buffer-zone {
                                        left: -50px !important;
                                        right: -50px !important;
                                        bottom: -100px !important;
                                    }
                                    .cv-fan-item.item-1,
                                    .cv-fan-item.item-2 {
                                        left: 50% !important;
                                        top: 100% !important;
                                    }
                                    .cv-hover-menu:hover .item-1,
                                    .cv-hover-menu:active .item-1,
                                    .cv-hover-menu:focus-within .item-1 {
                                        opacity: 1 !important;
                                        transform: translate(-50%, 8px) rotate(0deg) scale(1) !important;
                                        pointer-events: auto !important;
                                    }
                                    .cv-hover-menu:hover .item-2,
                                    .cv-hover-menu:active .item-2,
                                    .cv-hover-menu:focus-within .item-2 {
                                        opacity: 1 !important;
                                        transform: translate(-50%, 45px) rotate(0deg) scale(1) !important;
                                        pointer-events: auto !important;
                                    }
                                    .cv-hover-menu:hover .item-1:hover,
                                    .cv-hover-menu:hover .item-2:hover {
                                        transform: translate(-50%, 8px) rotate(0deg) scale(1.06) !important;
                                    }
                                    .cv-hover-menu:hover .item-2:hover {
                                        transform: translate(-50%, 45px) rotate(0deg) scale(1.06) !important;
                                    }
                                }
                            `}</style>
                        </div>
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
