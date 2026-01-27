import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Building2 } from 'lucide-react';

const renderDescriptionWithLinks = (text) => {
    if (!text) return null;

    // Regex to match markdown-style links: [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        // Add the link
        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: 'var(--exp-industry-accent)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px'
                }}
            >
                {match[1]}
            </a>
        );

        lastIndex = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};

const ExperienceItem = ({ job, index }) => {
    const hasRoles = job.roles && job.roles.length > 0;

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
                background: 'var(--exp-industry-bg)',
                border: '1px solid var(--exp-industry-border)',
                borderRadius: '12px'
            }}
        >
            {/* Company Logo Placeholder */}
            <div style={{
                width: '48px',
                height: '48px',
                minWidth: '48px',
                borderRadius: '8px',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--exp-industry-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--exp-industry-accent)'
            }}>
                <Building2 size={24} />
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                {hasRoles ? (
                    <>
                        {/* Company Name */}
                        <h3 style={{
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem'
                        }}>
                            {job.link ? (
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-industry-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    {job.company}
                                </a>
                            ) : job.company}
                        </h3>

                        {/* Location */}
                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            marginBottom: '1rem'
                        }}>
                            {job.location}
                        </p>

                        {/* Roles */}
                        {job.roles.map((role, rIndex) => (
                            <div key={rIndex} style={{
                                position: 'relative',
                                paddingLeft: '1.25rem',
                                paddingBottom: rIndex < job.roles.length - 1 ? '1rem' : 0,
                                borderLeft: rIndex < job.roles.length - 1 ? '2px solid var(--exp-industry-border)' : 'none'
                            }}>
                                {/* Role Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-5px',
                                    top: '6px',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--exp-industry-accent)',
                                    border: '2px solid var(--bg-color)'
                                }}></div>

                                {/* Role Title */}
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    color: 'var(--exp-industry-accent)',
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

                                {/* Description */}
                                {role.description && (
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {renderDescriptionWithLinks(role.description)}
                                    </p>
                                )}

                                {/* Contributions */}
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
                        ))}
                    </>
                ) : (
                    <>
                        {/* Role Title */}
                        <h4 style={{
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            color: 'var(--exp-industry-accent)',
                            marginBottom: '0.15rem'
                        }}>
                            {job.role}
                        </h4>

                        {/* Company Name */}
                        <p style={{
                            fontSize: '0.9rem',
                            color: 'var(--text-primary)',
                            marginBottom: '0.15rem',
                            fontWeight: 500
                        }}>
                            {job.link ? (
                                <a
                                    href={job.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-industry-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                >
                                    {job.company}
                                </a>
                            ) : job.company}
                        </p>

                        {/* Period & Location */}
                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            marginBottom: '0.75rem'
                        }}>
                            {job.period} · {job.location}
                        </p>

                        {/* Description */}
                        {job.description && (
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                marginBottom: '0.5rem'
                            }}>
                                {renderDescriptionWithLinks(job.description)}
                            </p>
                        )}

                        {/* Contributions */}
                        {job.contributions && job.contributions.length > 0 && (
                            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
                                {job.contributions.map((point, i) => (
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

const IndustryExperience = () => {
    return (
        <section id="industry-experience" className="section container" style={{ minHeight: 'auto' }}>
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
                Industry Experience
            </motion.h2>

            <div>
                {resumeData.industryExperience.map((job, index) => (
                    <ExperienceItem key={job.company} job={job} index={index} />
                ))}
            </div>
        </section>
    );
};

export default IndustryExperience;
