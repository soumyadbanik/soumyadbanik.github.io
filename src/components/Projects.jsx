import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -3 }}
        style={{
            backgroundColor: 'var(--card-bg)',
            padding: '1.8rem',
            borderRadius: '6px',
            border: '1px solid var(--card-border)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'border-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
            <Folder size={32} color="var(--accent)" />
            <div style={{ display: 'flex', gap: '0.8rem' }}>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                        <Github size={18} />
                    </a>
                )}
            </div>
        </div>

        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
            {project.title}
        </h3>

        <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            marginBottom: '0.8rem',
            fontFamily: 'monospace'
        }}>
            {project.period}
        </span>

        <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '1.2rem',
            flexGrow: 1,
            lineHeight: 1.7
        }}>
            {project.description}
        </p>

        {/* Research Aspects */}
        {project.researchAspects && project.researchAspects.length > 0 && (
            <div style={{ marginBottom: '1rem' }}>
                <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.4rem',
                    display: 'block'
                }}>
                    Research Focus
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.researchAspects.map(aspect => (
                        <span
                            key={aspect}
                            style={{
                                fontSize: '0.75rem',
                                color: 'var(--accent)',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '3px'
                            }}
                        >
                            {aspect}
                        </span>
                    ))}
                </div>
            </div>
        )}

        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', listStyle: 'none', padding: 0, marginTop: 'auto' }}>
            {project.tech.map(tech => (
                <li key={tech} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace'
                }}>
                    {tech}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="section container">
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
                <span style={{ color: 'var(--accent)', fontSize: '1.2rem', fontFamily: 'monospace' }}>04.</span>
                Research Projects
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
