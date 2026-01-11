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
                    fontSize: '2rem',
                    marginBottom: '2.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>01.</span>
                Research Interests
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    maxWidth: '900px'
                }}
            >
                {/* Research Areas */}
                <div>
                    <h3 style={{
                        fontSize: '1.1rem',
                        color: 'var(--accent)',
                        marginBottom: '1.5rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Areas of Interest
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {researchStatement.areas.map((area, index) => (
                            <motion.li
                                key={area}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                style={{
                                    marginBottom: '0.8rem',
                                    paddingLeft: '1.2rem',
                                    position: 'relative',
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}
                            >
                                <span style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '0.5em',
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: 'var(--accent)',
                                    borderRadius: '50%'
                                }}></span>
                                {area}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Narrative */}
                <div>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: 1.9,
                        marginBottom: '1.5rem'
                    }}>
                        {researchStatement.intro}
                    </p>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.9
                    }}>
                        {researchStatement.narrative}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default ResearchStatement;
