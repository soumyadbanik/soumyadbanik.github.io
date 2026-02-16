import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { creativeData } from '../data/creative';
import { Play, Instagram, Image as ImageIcon, ChevronRight } from 'lucide-react';
import SketchGallery from '../components/SketchGallery';

const SectionHeader = ({ title }) => (
    <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
            fontSize: '2rem',
            margin: '4rem 0 2rem',
            borderLeft: '4px solid var(--accent)',
            paddingLeft: '1rem',
            color: 'var(--text-primary)'
        }}
    >
        {title}
    </motion.h2>
);

const YouTubeEmbed = ({ id, title }) => (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
        <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    </div>
);

const InstagramEmbed = ({ url, title }) => {
    // Extract ID from URL if full URL is passed, otherwise assume it's an ID
    // Supports: https://www.instagram.com/p/ID/, https://instagr.am/p/ID/, /reel/ID/
    let postId = url;
    try {
        if (url.includes('instagram.com') || url.includes('instagr.am')) {
            const match = url.match(/\/(?:p|reel)\/([^/]+)/);
            if (match) postId = match[1];
        }
    } catch (e) {
        console.error("Invalid Instagram URL:", url);
    }

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            background: 'white',
            height: '650px',
            display: 'flex',
            justifyContent: 'center',
            transform: 'scale(0.85)',
            transformOrigin: 'top center',
            marginBottom: '-80px'
        }}>
            <iframe
                src={`https://www.instagram.com/p/${postId}/embed`}
                title={title}
                style={{
                    border: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                }}
                scrolling="no"
                allowTransparency="true"
            />
        </div>
    );
};

const ImageCard = ({ url, title, link }) => {
    const CardContent = (
        <motion.div
            whileHover={{ y: -5 }}
            style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '300px',
                cursor: 'pointer'
            }}
        >
            <img
                src={url}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
            />
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                color: 'white',
                fontWeight: '500'
            }}>
                {title}
            </div>
        </motion.div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
                {CardContent}
            </a>
        );
    }

    return CardContent;
};

const CreativeSection = ({ title, items }) => {
    if (!items || items.length === 0) return null;

    return (
        <section>
            <SectionHeader title={title} />
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {items.map((item, index) => (
                    <motion.div
                        key={item.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {item.type === 'youtube' ? (
                            <YouTubeEmbed id={item.id} title={item.title} />
                        ) : (item.type === 'instagram' || (item.url && item.url.includes('instagram.com'))) ? (
                            <InstagramEmbed url={item.url || item.id} title={item.title} />
                        ) : (
                            <ImageCard url={item.url} title={item.title} link={item.link} />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const BeyondCode = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    marginBottom: '2rem',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.3
                }}>
                    Beyond Code
                </h1>
                <div style={{ maxWidth: '800px', marginBottom: '4rem', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>

                    <blockquote style={{
                        margin: '2rem 0',
                        padding: '2rem',
                        background: 'var(--card-bg)',
                        borderLeft: '4px solid var(--accent)',
                        borderRadius: '0 12px 12px 0',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        fontSize: '1.5rem',
                        lineHeight: '1.6',
                        color: 'var(--text-primary)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}>
                        " The e<span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>art</span>h without <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>art</span> is just 'eh'."
                        <footer style={{
                            marginTop: '1rem',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-body)',
                            fontStyle: 'normal',
                            color: 'var(--text-secondary)',
                            fontWeight: '500',
                            textAlign: 'right'
                        }}>
                            — Demetri Martin
                        </footer>
                    </blockquote>

                    <p style={{ marginBottom: '1.5rem' }}>
                        Beyond algorithms and deep learning models, I perceive the world through <span style={{ color: 'var(--accent)', fontWeight: '500' }}>lenses, melodies, and sketches</span>.
                    </p>
                    <p>
                        I started using a camera in high school, after my father bought me one in eighth grade. The interest later flowed into Computer Vision.
                    </p>
                    <p>
                        During grad school, curiosity took over and I started exploring more Art forms. From doing art decos, graphic design e.g. desiging posters, banners for departmental events to performing arts, including theatre and music.
                        I'm still learning. Here are some glimpses of how I interpret the world.
                    </p>
                </div>

                {/* Sketches Section with custom gallery */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ margin: '4rem 0 2rem' }}
                    >
                        <Link
                            to="/sketches"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontSize: '2rem',
                                fontWeight: '700',
                                fontFamily: 'var(--font-heading)',
                                borderLeft: '4px solid var(--accent)',
                                paddingLeft: '1rem',
                                color: 'var(--text-primary)',
                                textDecoration: 'none',
                            }}
                        >
                            Sketches
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--accent)',
                                    color: 'var(--accent)',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: 'transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--accent)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <ChevronRight size={18} />
                            </span>
                        </Link>
                    </motion.div>
                    <SketchGallery sketches={creativeData.sketches} hideViewMore />
                </section>

                <CreativeSection title="Photography" items={creativeData.photography} />
                <CreativeSection title="Documentaries" items={creativeData.shortFilms} />
                <CreativeSection title="Shorts" items={creativeData.vlogs} />
                <CreativeSection title="Song Covers" items={creativeData.songCovers} />

                <div style={{
                    marginTop: '6rem',
                    paddingTop: '3rem',
                    borderTop: '1px solid var(--card-border)',
                    textAlign: 'center'
                }}>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Find more on my profiles</p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                        <a href="https://instagram.com/soumyadbanik" target="_blank" rel="noreferrer" style={{
                            color: 'var(--accent)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '0.8rem 1.5rem',
                            border: '1px solid var(--accent)',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}>
                            <Instagram size={24} /> @soumyadbanik
                        </a>
                        <a href="https://youtube.com/@soumyadbanik" target="_blank" rel="noreferrer" style={{
                            color: '#ff4444',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            padding: '0.8rem 1.5rem',
                            border: '1px solid #ff4444',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}>
                            <Play size={24} fill="#ff4444" /> YouTube
                        </a>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default BeyondCode;
