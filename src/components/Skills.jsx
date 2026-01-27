import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const { methodsAndTools } = resumeData;

    // Combine all skills into a single array
    const allSkills = [
        ...methodsAndTools.researchAreas,
        ...methodsAndTools.methods,
        ...methodsAndTools.frameworks,
        ...methodsAndTools.tools,
        ...methodsAndTools.programming
    ];

    return (
        <section id="skills" className="section container" style={{ minHeight: 'auto' }}>
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
                Skills
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                }}
            >
                {allSkills.map((skill, index) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * (index % 10) }}
                        style={{
                            padding: '0.5rem 1rem',
                            background: 'var(--exp-skills-bg)',
                            border: '1px solid var(--exp-skills-border)',
                            borderRadius: '10px',
                            color: 'var(--exp-skills-accent)',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
