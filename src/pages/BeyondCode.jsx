import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink, Camera, Video, Music, Palette } from 'lucide-react';

const CreativeItem = ({ type, title, color, icon: Icon }) => (
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
            overflow: 'hidden',
            border: '1px solid var(--card-border)'
        }}
    >
        <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.7)',
            color: '#fff',
            opacity: 0,
            transition: 'opacity 0.3s'
        }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
        >
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{title}</span>
        </div>
        <Icon size={48} color="var(--text-secondary)" />
    </motion.div>
);

const BeyondCode = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, var(--accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Beyond Code
                </h1>
                <p style={{ maxWidth: '600px', marginBottom: '4rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    When I'm not training models or optimizing algorithms, I explore the world through lenses, melodies, and colors. This is my creative playground.
                </p>

                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Gallery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                        <CreativeItem type="photo" title="Urban Photography" color="#1a1a1a" icon={Camera} />
                        <CreativeItem type="video" title="Short Films" color="#1f1f1f" icon={Video} />
                        <CreativeItem type="art" title="Digital Art" color="#1a1a1a" icon={Palette} />
                        <CreativeItem type="music" title="Acoustic Covers" color="#1f1f1f" icon={Music} />
                        <CreativeItem type="photo" title="Nature" color="#1a1a1a" icon={Camera} />
                        <CreativeItem type="video" title="Vlogs" color="#1f1f1f" icon={Youtube} />
                    </div>
                </section>

                <div style={{ textAlign: 'center', marginTop: '3rem', padding: '3rem', borderTop: '1px solid var(--card-border)' }}>
                    <p style={{ marginBottom: '1.5rem', color: '#888' }}>Find more of my creative work on social media</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-primary)',
                            padding: '0.8rem 1.5rem',
                            border: '1px solid var(--card-border)',
                            borderRadius: 'full'
                        }}>
                            <Instagram size={20} /> Instagram
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--text-primary)',
                            padding: '0.8rem 1.5rem',
                            border: '1px solid var(--card-border)',
                            borderRadius: 'full'
                        }}>
                            <Youtube size={20} /> YouTube
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BeyondCode;
