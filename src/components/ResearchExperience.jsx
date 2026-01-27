import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, ExternalLink } from 'lucide-react';

const ResearchItem = ({ item, index }) => {
    const hasRoles = item.roles && item.roles.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.25rem',
                marginBottom: '1rem',
                background: 'var(--exp-research-bg)',
                border: '1px solid var(--exp-research-border)',
                borderRadius: '12px'
            }}
        >
            {/* Institution Logo Placeholder */}
            <div style={{
                width: '48px',
                height: '48px',
                minWidth: '48px',
                borderRadius: '8px',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--exp-research-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--exp-research-accent)'
            }}>
                <GraduationCap size={24} />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                {hasRoles ? (
                    <>
                        {/* Institution Name */}
                        <h3 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem'
                        }}>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-research-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    {item.institution}
                                </a>
                            ) : item.institution}
                        </h3>

                        {/* Location */}
                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            marginBottom: '1rem'
                        }}>
                            {item.location}
                        </p>

                        {/* Roles */}
                        {item.roles.map((role, rIndex) => (
                            <div key={rIndex} style={{
                                position: 'relative',
                                paddingLeft: '1.25rem',
                                paddingBottom: rIndex < item.roles.length - 1 ? '1rem' : 0,
                                borderLeft: rIndex < item.roles.length - 1 ? '2px solid var(--exp-research-border)' : 'none'
                            }}>
                                {/* Role Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-5px',
                                    top: '6px',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--exp-research-accent)',
                                    border: '2px solid var(--bg-color)'
                                }}></div>

                                {/* Role Title */}
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: 'var(--exp-research-accent)',
                                    marginBottom: '0.15rem'
                                }}>
                                    {role.role}
                                </h4>

                                {/* Period */}
                                <p style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {role.period}
                                </p>

                                {/* Project */}
                                {role.project && (
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--exp-research-accent)',
                                        fontStyle: 'italic',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Project: {role.project}
                                    </p>
                                )}

                                {/* Description */}
                                {role.description && (
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {role.description}
                                    </p>
                                )}

                                {/* Contributions & Slides Link Container */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    {/* Contributions */}
                                    <div>
                                        {role.contributions && role.contributions.length > 0 && (
                                            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                                {role.contributions.map((point, i) => (
                                                    <li key={i} style={{
                                                        fontSize: '0.85rem',
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: 1.6,
                                                        marginBottom: '0.25rem'
                                                    }}>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Slides Link */}
                                    {role.link && (
                                        <a
                                            href={role.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.25rem',
                                                fontSize: '0.8rem',
                                                color: 'var(--exp-research-accent)',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                                padding: '0.25rem 0.5rem',
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(var(--exp-research-accent-rgb), 0.1)',
                                                transition: 'all 0.2s ease',
                                                whiteSpace: 'nowrap',
                                                flexShrink: 0
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'var(--exp-research-accent)';
                                                e.currentTarget.style.color = 'var(--bg-color)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(var(--exp-research-accent-rgb), 0.1)';
                                                e.currentTarget.style.color = 'var(--exp-research-accent)';
                                            }}
                                        >
                                            <ExternalLink size={12} />
                                            Slides
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {/* Role Title */}
                        <h4 style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--exp-research-accent)',
                            marginBottom: '0.15rem'
                        }}>
                            {item.role}
                        </h4>

                        {/* Institution Name */}
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.15rem',
                            fontWeight: 500
                        }}>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-research-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    {item.institution}
                                </a>
                            ) : item.institution}
                        </p>

                        {/* Period & Location */}
                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            marginBottom: '0.75rem'
                        }}>
                            {item.period} · {item.location}
                        </p>

                        {/* Project */}
                        {item.project && (
                            <p style={{
                                fontSize: '0.85rem',
                                color: 'var(--exp-research-accent)',
                                fontStyle: 'italic',
                                marginBottom: '0.5rem'
                            }}>
                                Project: {item.project}
                            </p>
                        )}

                        {/* Description */}
                        {item.description && (
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: '0.5rem'
                            }}>
                                {item.description}
                            </p>
                        )}

                        {/* Contributions */}
                        {item.contributions && item.contributions.length > 0 && (
                            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                {item.contributions.map((point, i) => (
                                    <li key={i} style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        marginBottom: '0.25rem'
                                    }}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </motion.div>
    );
};

const ResearchExperience = () => {
    return (
        <section id="research-experience" className="section container" style={{ minHeight: 'auto' }}>
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
                Research Experience
            </motion.h2>

            <div>
                {resumeData.researchExperience.map((item, index) => (
                    <ResearchItem key={item.institution} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ResearchExperience;
