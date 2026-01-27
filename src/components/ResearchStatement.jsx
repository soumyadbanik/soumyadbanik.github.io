import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const ResearchStatement = () => {
    const { researchStatement } = resumeData;

    return (
        <section id="research" className="section container" style={{ minHeight: 'auto', paddingTop: '4rem', paddingBottom: '4rem' }}>
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
                Research Interests
            </motion.h2>

            <div>
                {/* Research Areas as Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1.5rem'
                    }}
                >
                    {researchStatement.areas.map((area, index) => (
                        <span
                            key={area}
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'var(--exp-interest-bg)',
                                border: '1px solid var(--exp-interest-border)',
                                borderRadius: '20px',
                                color: 'var(--exp-interest-accent)',
                                fontSize: '0.85rem',
                                fontWeight: 500
                            }}
                        >
                            {area}
                        </span>
                    ))}
                </motion.div>

                {/* Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        marginBottom: '1rem'
                    }}>
                        {researchStatement.intro}
                    </p>
                    {researchStatement.narrative && (
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            lineHeight: 1.8
                        }}>
                            {researchStatement.narrative}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ResearchStatement;
