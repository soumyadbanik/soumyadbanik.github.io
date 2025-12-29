import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { creativeData } from '../data/creative';
import { Play, Instagram, Image as ImageIcon } from 'lucide-react';

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
            color: '#fff'
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
    // Supports: https://www.instagram.com/p/ID/, https://instagr.am/p/ID/
    let postId = url;
    try {
        if (url.includes('instagram.com') || url.includes('instagr.am')) {
            const match = url.match(/\/p\/([^/]+)/);
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
            background: 'white', // Instagram embeds are usually white
            height: '480px', // Fixed height for vertical posts
            display: 'flex',
            justifyContent: 'center'
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

const ImageCard = ({ url, title }) => (
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





const CreativeSection = ({ title, items }) => {
    if (!items || items.length === 0) return null;

    // Special layout for Photography (Insta Grid)


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
                            <ImageCard url={item.url} title={item.title} />
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
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, var(--accent))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1
                }}>
                    Beyond Code
                </h1>
                <p style={{ maxWidth: '600px', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    Exploring the world through lenses, melodies, and colors.
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
                    <a href="https://instagram.com/soumyadbanik" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Instagram size={18} /> @soumyadbanik
                    </a>
                </div>

                <CreativeSection title="Photography" items={creativeData.photography} />
                <CreativeSection title="Short Films" items={creativeData.shortFilms} />
                <CreativeSection title="Vlogs" items={creativeData.vlogs} />
                <CreativeSection title="Song Covers" items={creativeData.songCovers} />
                <CreativeSection title="Sketches" items={creativeData.sketches} />

            </motion.div>
        </div>
    );
};

export default BeyondCode;
