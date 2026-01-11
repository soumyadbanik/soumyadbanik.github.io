import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { creativeData } from '../data/creative';
import SketchGallery from '../components/SketchGallery';

const SketchesPage = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '6rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Back Link */}
                <Link
                    to="/beyond-code"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontSize: '1rem',
                        transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                    <ArrowLeft size={18} /> Back to Beyond Code
                </Link>

                {/* Page Header */}
                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.1
                }}>
                    Sketches & Illustrations
                </h1>

                <p style={{
                    maxWidth: '700px',
                    marginBottom: '3rem',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                }}>
                    A collection of my artistic expressions through pencil, charcoal, and digital sketches...
                </p>

                {/* Full Gallery Grid */}
                <SketchGallery sketches={creativeData.sketches} showAll={true} />
            </motion.div>
        </div>
    );
};

export default SketchesPage;
