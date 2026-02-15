import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Github, Folder, Image, X, ExternalLink, BookOpen } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const popoverRef = useRef(null);

    // Close popover when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isExpanded && popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isExpanded]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') setIsExpanded(false);
        };
        if (isExpanded) {
            document.addEventListener('keydown', handleEsc);
        }
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isExpanded]);

    return (
        <div ref={cardRef} style={{ position: 'relative' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                style={{
                    backgroundColor: 'var(--exp-projects-bg)',
                    borderRadius: '12px',
                    border: '1px solid var(--exp-projects-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '420px',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s, transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--exp-projects-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--exp-projects-border)'}
            >
                {/* Thumbnail */}
                <div style={{
                    width: '100%',
                    height: '160px',
                    backgroundColor: 'var(--card-bg)',
                    borderBottom: '1px solid var(--exp-projects-border)',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    flexShrink: 0
                }}>
                    {project.thumbnail ? (
                        project.thumbnail.toLowerCase().endsWith('.mp4') || project.thumbnail.toLowerCase().endsWith('.webm') ? (
                            <video
                                src={project.thumbnail}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        ) : (
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        )
                    ) : (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-muted)'
                        }}>
                            <Image size={32} />
                            <span style={{ fontSize: '0.75rem' }}>Thumbnail</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <Folder size={24} color="var(--exp-projects-accent)" />
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            {project.links && project.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label || "Link"}
                                    style={{
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-projects-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    {link.type === 'github' ? (
                                        <Github size={18} />
                                    ) : link.type === 'blogpost' ? (
                                        <>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{link.label}</span>
                                            <BookOpen size={16} />
                                        </>
                                    ) : (
                                        <>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{link.label}</span>
                                            <ExternalLink size={16} />
                                        </>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        {project.title}
                    </h3>

                    <span style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)',
                        marginBottom: '0.5rem'
                    }}>
                        {project.period}
                    </span>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        marginBottom: '0.75rem',
                        flexGrow: 1,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {project.description}
                    </p>

                    {/* Read more button */}
                    <button
                        onClick={() => setIsExpanded(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--exp-projects-accent)',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            padding: '0',
                            marginBottom: '0.75rem',
                            textAlign: 'left',
                            width: 'fit-content',
                            opacity: 0.85
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
                    >
                        Read more →
                    </button>

                    {/* Research Aspects */}
                    {project.researchAspects && project.researchAspects.length > 0 && (
                        <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                {project.researchAspects.map(aspect => (
                                    <span
                                        key={aspect}
                                        style={{
                                            fontSize: '0.7rem',
                                            color: 'var(--exp-projects-accent)',
                                            backgroundColor: 'var(--card-bg)',
                                            border: '1px solid var(--exp-projects-border)',
                                            padding: '0.15rem 0.4rem',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        {aspect}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                        {project.tech.map(tech => (
                            <span key={tech} style={{
                                color: 'var(--text-muted)',
                                fontSize: '0.75rem',
                                fontFamily: 'monospace'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Expanded Popover - positioned absolutely, doesn't affect grid */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        ref={popoverRef}
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            zIndex: 50,
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: '12px',
                            border: '1px solid var(--exp-projects-accent)',
                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setIsExpanded(false)}
                            style={{
                                position: 'absolute',
                                top: '0.75rem',
                                right: '0.75rem',
                                background: 'rgba(0, 0, 0, 0.5)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '28px',
                                height: '28px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 10
                            }}
                        >
                            <X size={16} />
                        </button>

                        {/* Thumbnail */}
                        <div style={{
                            width: '100%',
                            height: '160px',
                            backgroundColor: 'var(--card-bg)',
                            borderBottom: '1px solid var(--exp-projects-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            {project.thumbnail ? (
                                project.thumbnail.toLowerCase().endsWith('.mp4') || project.thumbnail.toLowerCase().endsWith('.webm') ? (
                                    <video
                                        src={project.thumbnail}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                )
                            ) : (
                                <div style={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                                    gap: '0.5rem', color: 'var(--text-muted)'
                                }}>
                                    <Image size={32} />
                                    <span style={{ fontSize: '0.75rem' }}>Thumbnail</span>
                                </div>
                            )}
                        </div>

                        {/* Expanded Content */}
                        <div style={{ padding: '1.25rem', maxHeight: '350px', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                                <Folder size={24} color="var(--exp-projects-accent)" />
                                <div style={{ display: 'flex', gap: '0.8rem' }}>
                                    {project.links && project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.label || "Link"}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                transition: 'color 0.2s',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.3rem',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--exp-projects-accent)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >
                                            {link.type === 'github' ? (
                                                <Github size={18} />
                                            ) : link.type === 'blogpost' ? (
                                                <>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{link.label}</span>
                                                    <BookOpen size={16} />
                                                </>
                                            ) : (
                                                <>
                                                    <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{link.label}</span>
                                                    <ExternalLink size={16} />
                                                </>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                                {project.title}
                            </h3>

                            <span style={{
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                marginBottom: '0.75rem',
                                display: 'block'
                            }}>
                                {project.period}
                            </span>

                            {/* Full description */}
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.85rem',
                                marginBottom: '1rem',
                                lineHeight: 1.7
                            }}>
                                {project.description}
                            </p>

                            {/* Research Aspects */}
                            {project.researchAspects && project.researchAspects.length > 0 && (
                                <div style={{ marginBottom: '0.75rem' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                                        {project.researchAspects.map(aspect => (
                                            <span
                                                key={aspect}
                                                style={{
                                                    fontSize: '0.7rem',
                                                    color: 'var(--exp-projects-accent)',
                                                    backgroundColor: 'var(--exp-projects-bg)',
                                                    border: '1px solid var(--exp-projects-border)',
                                                    padding: '0.15rem 0.4rem',
                                                    borderRadius: '4px'
                                                }}
                                            >
                                                {aspect}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map(tech => (
                                    <span key={tech} style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.75rem',
                                        fontFamily: 'monospace'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section container" style={{ minHeight: 'auto' }}>
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
                Selected Projects
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
