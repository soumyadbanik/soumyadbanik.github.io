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
                    fontSize: '2rem',
                    marginBottom: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>07.</span>
                Methods & Tools
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2.5rem',
                maxWidth: '900px'
            }}>
                {sections.map(({ title, items, highlight }, index) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <h3 style={{
                            fontSize: '0.85rem',
                            marginBottom: '1rem',
                            color: highlight ? 'var(--accent)' : 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            fontWeight: 500
                        }}>
                            {title}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {items.map((item, i) => (
                                <li key={item} style={{
                                    marginBottom: '0.5rem',
                                    paddingLeft: '1rem',
                                    position: 'relative',
                                    color: highlight ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.5
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '0.55em',
                                        width: '4px',
                                        height: '4px',
                                        backgroundColor: highlight ? 'var(--accent)' : 'var(--text-muted)',
                                        borderRadius: '50%'
                                    }}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MethodsAndTools;
