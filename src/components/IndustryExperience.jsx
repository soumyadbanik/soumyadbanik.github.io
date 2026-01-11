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
            marginBottom: '3rem',
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
            backgroundColor: 'var(--text-secondary)'
        }}></div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
            {job.role}
        </h3>
        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '0.3rem', fontWeight: 500 }}>
            {job.company}
        </h4>
        <span style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            display: 'block',
            marginBottom: '0.8rem',
            fontFamily: 'monospace'
        }}>
            {job.period} · {job.location}
        </span>

        <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {job.description}
        </p>

        <ul style={{ listStyle: 'none', padding: 0 }}>
            {job.contributions.map((point, i) => (
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
                        backgroundColor: 'var(--text-muted)',
                        borderRadius: '50%'
                    }}></span>
                    {point}
                </li>
            ))}
        </ul>
    </motion.div>
);

const IndustryExperience = () => {
    return (
        <section id="industry-experience" className="section container">
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
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>03.</span>
                Industry Experience
            </motion.h2>

            <div style={{ maxWidth: '800px' }}>
                {resumeData.industryExperience.map((job, index) => (
                    <ExperienceItem key={job.company} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

export default IndustryExperience;
