import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over a clickable element
            const target = e.target;
            const isLink = target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            setLinkHovered(isLink);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const cursorClasses = `fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference`;

    // Only show on desktop (coarse pointer check usually implies touch)
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return null;

    return (
        <>
            <motion.div
                className={cursorClasses}
                style={{
                    x: position.x - 8,
                    y: position.y - 8,
                    width: '16px',
                    height: '16px',
                    backgroundColor: 'var(--text-primary)',
                    borderRadius: '50%',
                    opacity: hidden ? 0 : 1,
                }}
            />
            <motion.div
                className={cursorClasses}
                animate={{
                    scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
                    opacity: hidden ? 0 : 1,
                    backgroundColor: linkHovered ? 'var(--accent)' : 'transparent',
                    border: linkHovered ? 'none' : '1px solid var(--text-primary)'
                }}
                transition={{
                    scale: { duration: 0.15 },
                    opacity: { duration: 0.2 }
                }}
                style={{
                    x: position.x - 24,
                    y: position.y - 24,
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    position: 'fixed'
                }}
            />
        </>
    );
};

export default CustomCursor;
