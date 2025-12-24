import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

const CreativeItem = ({ type, title, color }) => (
    <motion.div
        whileHover={{ scale: 1.05, zIndex: 10 }}
        style={{
            aspectRatio: '1',
            backgroundColor: color || '#222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.3)',
            color: '#fff',
            opacity: 0,
            transition: 'opacity 0.3s'
        }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
        >
            <span style={{ fontWeight: 'bold' }}>{title}</span>
        </div>
        {type === 'video' ? <Youtube size={32} /> : <Instagram size={32} />}
    </motion.div>
);

const ExtraCurricular = () => {
    return (
        <section id="creative" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '2.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
                <span style={{ color: 'var(--accent)', fontSize: '1.5rem', fontFamily: 'monospace' }}>05.</span>
                Creative
            </motion.h2>
            <p style={{ maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                Beyond algorithms and code, I explore the world through lenses and melodies. A glimpse into my photography, cinematography, and art.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                {/* Mock Grid */}
                <CreativeItem type="photo" title="Photography" color="#2a2a2a" />
                <CreativeItem type="video" title="Cinematography" color="#333" />
                <CreativeItem type="photo" title="Art" color="#2a2a2a" />
                <CreativeItem type="video" title="Covers" color="#333" />
                <CreativeItem type="photo" title="Travel" color="#2a2a2a" />
                <CreativeItem type="photo" title="Theatre" color="#333" />
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--accent)',
                    borderBottom: '1px solid var(--accent)',
                    paddingBottom: '2px'
                }}>
                    See more on Instagram <ExternalLink size={16} /> {/* Note: Defined ExternalLink in App or import */}
                </a>
            </div>
        </section>
    );
};

// Fix for missing import in this file
import { ExternalLink } from 'lucide-react';

export default ExtraCurricular;
