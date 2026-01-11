import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

const SketchCard = ({ sketch, index, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                aspectRatio: '1 / 1.2',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'box-shadow 0.3s ease'
            }}
        >
            <img
                src={sketch.url}
                alt={sketch.title}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                }}
            />
            {/* Hover overlay with title - controlled by parent hover state */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.5rem',
                    paddingTop: '3rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                }}
            >
                {sketch.title}
            </div>
        </motion.div>
    );
};

const SketchGallery = ({ sketches, showAll = false, hideViewMore = false }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(4);

    // Close lightbox on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedImage) {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    // Responsive visible count
    useEffect(() => {
        const updateVisibleCount = () => {
            if (showAll) {
                setVisibleCount(sketches?.length || 0);
            } else if (window.innerWidth < 640) {
                setVisibleCount(3); // Mobile
            } else if (window.innerWidth < 1024) {
                setVisibleCount(4); // Tablet
            } else {
                setVisibleCount(4); // Desktop
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, [showAll, sketches?.length]);

    if (!sketches || sketches.length === 0) return null;

    const displayedSketches = showAll ? sketches : sketches.slice(0, visibleCount);
    const hasMore = !showAll && sketches.length > visibleCount;

    return (
        <>
            {/* Gallery Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: showAll
                    ? 'repeat(auto-fill, minmax(280px, 1fr))'
                    : `repeat(${Math.min(visibleCount, displayedSketches.length)}, 1fr)`,
                gap: '1.5rem',
            }}>
                {displayedSketches.map((sketch, index) => (
                    <SketchCard
                        key={sketch.id || index}
                        sketch={sketch}
                        index={index}
                        onClick={() => setSelectedImage(sketch)}
                    />
                ))}
            </div>

            {/* View More Link */}
            {hasMore && !hideViewMore && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Link
                        to="/sketches"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.8rem 1.8rem',
                            background: 'transparent',
                            border: '2px solid var(--accent)',
                            borderRadius: '50px',
                            color: 'var(--accent)',
                            fontSize: '1rem',
                            fontWeight: '500',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent)';
                            e.target.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--accent)';
                        }}
                    >
                        View All Sketches <ArrowRight size={18} />
                    </Link>
                </motion.div>
            )}

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.95)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            cursor: 'pointer',
                            padding: '2rem'
                        }}
                    >
                        {/* Close button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                transition: 'background 0.3s',
                                zIndex: 10000
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Full image */}
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '65vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                            }}
                        />

                        {/* Image title and description - always visible below image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                marginTop: '1.5rem',
                                textAlign: 'center',
                                maxWidth: '600px',
                                padding: '0 2rem'
                            }}
                        >
                            <p style={{
                                color: 'white',
                                fontSize: '1.4rem',
                                fontWeight: '600',
                                marginBottom: selectedImage.description ? '0.8rem' : '0',
                                margin: 0
                            }}>
                                {selectedImage.title}
                            </p>
                            {selectedImage.description && (
                                <p style={{
                                    color: 'rgba(255, 255, 255, 0.75)',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    fontStyle: 'italic',
                                    marginTop: '0.8rem',
                                    margin: '0.8rem 0 0 0'
                                }}>
                                    {selectedImage.description}
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SketchGallery;
