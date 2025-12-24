import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const allSkills = Object.entries(resumeData.skills);

    return (
        <section id="skills" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontFamily: 'monospace' }}>04.</span>
                Skills
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                {allSkills.map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 style={{ textTransform: 'capitalize', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            {category}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {skills.map(skill => (
                                <li key={skill} style={{
                                    display: 'inline-block',
                                    marginRight: '0.8rem',
                                    marginBottom: '0.8rem',
                                    padding: '0.4rem 0.8rem',
                                    border: '1px solid var(--card-border)',
                                    borderRadius: '4px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.9rem'
                                }}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
