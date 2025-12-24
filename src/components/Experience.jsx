import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const ExperienceItem = ({ job, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        style={{
            marginBottom: '4rem',
            paddingLeft: '2rem',
            position: 'relative',
            borderLeft: '2px solid var(--card-border)'
        }}
    >
        <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)' }}></div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{job.role}</h3>
        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{job.company}</h4>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>
            {job.period} | {job.location}
        </span>
        <p style={{ marginBottom: '1rem', color: '#ddd' }}>{job.description}</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {job.highlights.map((point, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', paddingLeft: '1rem', position: 'relative', color: '#aaa', fontSize: '0.95rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', backgroundColor: '#666', borderRadius: '50%' }}></span>
                    {point}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontFamily: 'monospace' }}>02.</span>
                Experience
            </motion.h2>
            <div style={{ maxWidth: '800px' }}>
                {resumeData.experience.map((job, index) => (
                    <ExperienceItem key={job.company} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Experience;
