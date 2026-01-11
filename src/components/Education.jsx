import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap } from 'lucide-react';

const EducationItem = ({ edu, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        style={{
            marginBottom: '2.5rem',
            paddingLeft: '2rem',
            position: 'relative',
            borderLeft: '2px solid var(--card-border)'
        }}
    >
        <div style={{
            position: 'absolute',
            left: '-5px',
            top: '0',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)'
        }}></div>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
            {edu.degree}
        </h3>
        <h4 style={{ fontSize: '1rem', color: 'var(--accent)', marginBottom: '0.3rem', fontWeight: 500 }}>
            {edu.institution}
        </h4>
        <span style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            display: 'block',
            marginBottom: '0.8rem',
            fontFamily: 'monospace'
        }}>
            {edu.period} · {edu.location}
        </span>

        {edu.coursework && edu.coursework.length > 0 && (
            <div style={{ marginTop: '0.8rem' }}>
                <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '0.5rem'
                }}>
                    Relevant Coursework:
                </span>
                <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                }}>
                    {edu.coursework.join(' · ')}
                </p>
            </div>
        )}
    </motion.div>
);

const Education = () => {
    return (
        <section id="education" className="section container" style={{ minHeight: 'auto' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: '2rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>06.</span>
                Education
            </motion.h2>

            <div style={{ maxWidth: '700px' }}>
                {resumeData.education.map((edu, index) => (
                    <EducationItem key={edu.degree} edu={edu} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;
