import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FileText, Github } from 'lucide-react';

const TechnicalReports = () => {
    const { technicalReports, personalInfo } = resumeData;

    return (
        <section id="technical-reports" className="section container" style={{ minHeight: 'auto' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>05.</span>
                Technical Reports & Ongoing Work
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    marginBottom: '2rem',
                    maxWidth: '700px',
                    lineHeight: 1.7
                }}
            >
                I am actively developing technical documentation based on my applied work.
                While peer-reviewed publications are forthcoming, the following reports are in preparation:
            </motion.p>

            <div style={{ maxWidth: '700px' }}>
                {technicalReports.map((report, index) => (
                    <motion.div
                        key={report.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginBottom: '1.5rem',
                            padding: '1.2rem',
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '6px',
                            border: '1px solid var(--card-border)'
                        }}
                    >
                        <FileText size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <div>
                            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                                {report.title}
                            </h3>
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--accent)',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '3px',
                                marginBottom: '0.5rem',
                                display: 'inline-block'
                            }}>
                                {report.status}
                            </span>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginTop: '0.5rem'
                            }}>
                                {report.description}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* GitHub Link */}
                <motion.a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '1rem',
                        marginTop: '1.5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        borderRadius: '6px',
                        border: '1px dashed var(--card-border)',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--card-border)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                >
                    <Github size={20} />
                    <span>View open-source contributions and code repositories on GitHub</span>
                </motion.a>
            </div>
        </section>
    );
};

export default TechnicalReports;
