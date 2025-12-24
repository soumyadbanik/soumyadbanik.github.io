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
        whileHover={{ y: -5 }}
        style={{
            backgroundColor: 'var(--card-bg)',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid var(--card-border)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'border-color 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--card-border)'}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Folder size={40} color="var(--accent)" />
            <div style={{ display: 'flex', gap: '1rem' }}>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{project.title}</h3>
        <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>

        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', listStyle: 'none', padding: 0 }}>
            {project.tech.map(tech => (
                <li key={tech} style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'monospace' }}>
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
                style={{ fontSize: '2.5rem', marginBottom: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontFamily: 'monospace' }}>03.</span>
                Projects
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
