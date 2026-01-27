import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const MethodsAndTools = () => {
    const { methodsAndTools } = resumeData;

    const sections = [
        { title: 'Research Areas', items: methodsAndTools.researchAreas, highlight: true },
        { title: 'Methods', items: methodsAndTools.methods, highlight: false },
        { title: 'Frameworks & Libraries', items: methodsAndTools.frameworks, highlight: false },
        { title: 'Tools', items: methodsAndTools.tools, highlight: false },
        { title: 'Programming', items: methodsAndTools.programming, highlight: false }
    ];

    return (
        <section id="methods" className="section container" style={{ minHeight: 'auto' }}>
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
                Methods & Tools
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem'
            }}>
                {sections.map(({ title, items, highlight }, index) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        style={{
                            padding: '1.25rem',
                            background: highlight ? 'var(--exp-skills-bg)' : 'var(--card-bg)',
                            border: `1px solid ${highlight ? 'var(--exp-skills-border)' : 'var(--card-border)'}`,
                            borderRadius: '12px'
                        }}
                    >
                        <h3 style={{
                            fontSize: '0.8rem',
                            marginBottom: '0.75rem',
                            color: highlight ? 'var(--exp-skills-accent)' : 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontWeight: 600
                        }}>
                            {title}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {items.map((item) => (
                                <span key={item} style={{
                                    color: highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.4
                                }}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MethodsAndTools;
