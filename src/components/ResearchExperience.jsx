import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const ResearchItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        style={{
            marginBottom: '3rem',
            paddingLeft: '2rem',
            position: 'relative',
            borderLeft: '2px solid var(--accent)'
        }}
    >
        <div style={{
            position: 'absolute',
            left: '-6px',
            top: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            border: '2px solid var(--bg-color)'
        }}></div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
            {item.role}
        </h3>
        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.3rem', fontWeight: 500 }}>
            {item.institution}
        </h4>
        <span style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            display: 'block',
            marginBottom: '0.5rem',
            fontFamily: 'monospace'
        }}>
            {item.period} · {item.location}
        </span>

        {item.project && (
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--accent)',
                marginBottom: '0.8rem',
                fontStyle: 'italic'
            }}>
                Project: {item.project}
            </p>
        )}

        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {item.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0 }}>
            {item.contributions.map((point, i) => (
                <li key={i} style={{
                    marginBottom: '0.6rem',
                    paddingLeft: '1.2rem',
                    position: 'relative',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.7
                }}>
                    <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.6em',
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--text-secondary)',
                        borderRadius: '50%'
                    }}></span>
                    {point}
                </li>
            ))}
        </ul>
    </motion.div>
);

const ResearchExperience = () => {
    return (
        <section id="research-experience" className="section container">
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
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>02.</span>
                Research Experience
            </motion.h2>

            <div style={{ maxWidth: '800px' }}>
                {resumeData.researchExperience.map((item, index) => (
                    <ResearchItem key={item.institution} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ResearchExperience;
