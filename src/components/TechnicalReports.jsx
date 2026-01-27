import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FileText, Github, ExternalLink } from 'lucide-react';

const TechnicalReports = () => {
    const { technicalReports, personalInfo } = resumeData;

    return (
        <section id="technical-reports" className="section container" style={{ minHeight: 'auto' }}>
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
                Thesis Projects and Technical Reports
            </motion.h2>

            <div>
                {technicalReports.map((report, index) => (
                    <motion.div
                        key={report.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            marginBottom: '1rem',
                            padding: '1.25rem',
                            backgroundColor: 'var(--exp-reports-bg)',
                            borderRadius: '12px',
                            border: '1px solid var(--exp-reports-border)'
                        }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            minWidth: '40px',
                            borderRadius: '8px',
                            backgroundColor: 'var(--card-bg)',
                            border: '1px solid var(--exp-reports-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FileText size={20} color="var(--exp-reports-accent)" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem', gap: '0.5rem' }}>
                                <h3 style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600, margin: 0, wordBreak: 'break-word', flex: '1 1 auto', minWidth: 0 }}>
                                    {report.title}
                                </h3>
                                {report.period && (
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                                        {report.period}
                                    </span>
                                )}
                            </div>
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--exp-reports-accent)',
                                backgroundColor: 'var(--exp-reports-bg)',
                                border: '1px solid var(--exp-reports-border)',
                                padding: '0.15rem 0.5rem',
                                borderRadius: '10px',
                                marginBottom: '0.5rem',
                                display: 'inline-block',
                                fontWeight: 500
                            }}>
                                {report.status}
                            </span>
                            <p style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginTop: '0.5rem'
                            }}>
                                {report.description}
                            </p>
                            {report.links && report.links.length > 0 && (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
                                    {report.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                fontSize: '0.8rem',
                                                color: 'var(--exp-reports-accent)',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.25rem'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                            onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                                        >
                                            <ExternalLink size={12} />
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
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
                        marginTop: '1rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        borderRadius: '12px',
                        border: '1px dashed var(--exp-reports-border)',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--exp-reports-accent)';
                        e.currentTarget.style.color = 'var(--exp-reports-accent)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--exp-reports-border)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                >
                    <Github size={18} />
                    <span>View open-source contributions and code repositories on GitHub</span>
                </motion.a>
            </div>
        </section>
    );
};

export default TechnicalReports;
