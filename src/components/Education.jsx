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
            display: 'flex',
            gap: '1rem',
            padding: '1.25rem',
            marginBottom: '1rem',
            background: 'var(--exp-education-bg)',
            border: '1px solid var(--exp-education-border)',
            borderRadius: '12px'
        }}
    >
        {/* Icon */}
        <div style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '8px',
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--exp-education-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--exp-education-accent)'
        }}>
            <GraduationCap size={24} />
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
            {/* Degree */}
            <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--exp-education-accent)',
                marginBottom: '0.15rem'
            }}>
                {edu.degree}
            </h3>

            {/* Institution */}
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                marginBottom: '0.15rem',
                fontWeight: 500
            }}>
                {edu.link ? (
                    <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-education-accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    >
                        {edu.institution}
                    </a>
                ) : edu.institution}
            </p>

            {/* Period & Location */}
            <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '0.75rem'
            }}>
                {edu.period} · {edu.location}
            </p>

            {/* Coursework */}
            {edu.coursework && edu.coursework.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {edu.coursework.map(course => (
                        <span
                            key={course}
                            style={{
                                fontSize: '0.75rem',
                                color: 'var(--text-secondary)',
                                backgroundColor: 'var(--card-bg)',
                                border: '1px solid var(--exp-education-border)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '4px'
                            }}
                        >
                            {course}
                        </span>
                    ))}
                </div>
            )}
        </div>
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
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    marginBottom: '2rem',
                    color: 'var(--text-primary)'
                }}
            >
                Education
            </motion.h2>

            <div>
                {resumeData.education.map((edu, index) => (
                    <EducationItem key={edu.degree} edu={edu} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;
