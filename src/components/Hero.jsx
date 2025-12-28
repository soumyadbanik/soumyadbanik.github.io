import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* Background Effect */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <div className="container" style={{ maxWidth: '1000px', textAlign: 'left', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}
                >
                    Hello, I am
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #999)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    {resumeData.personalInfo.name}.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}
                >
                    {resumeData.personalInfo.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ maxWidth: '600px', fontSize: '1.1rem', color: '#ccc', marginBottom: '3rem', lineHeight: 1.8 }}
                >
                    {resumeData.personalInfo.about}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'flex', gap: '1.5rem' }}
                >
                    <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                        style={{
                            padding: '0.8rem 2rem',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            borderRadius: '4px',
                            fontWeight: 500
                        }}>
                        LinkedIn
                    </a>
                    <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer"
                        style={{
                            padding: '0.8rem 2rem',
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--bg-color)',
                            borderRadius: '4px',
                            fontWeight: 600,
                            border: '1px solid white'
                        }}>
                        GitHub
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <ArrowDown size={24} className="animate-bounce" color="var(--text-secondary)" />
            </motion.div>
        </section>
    );
};

export default Hero;
