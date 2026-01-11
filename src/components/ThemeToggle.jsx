import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ style = {} }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                border: `1px solid ${isDark ? 'var(--card-border)' : 'rgba(0, 0, 0, 0.15)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: isDark ? 'var(--text-primary)' : 'var(--text-primary)',
                transition: 'all 0.3s ease',
                boxShadow: isDark
                    ? '0 2px 10px rgba(0, 0, 0, 0.3)'
                    : '0 2px 10px rgba(0, 0, 0, 0.1)',
                ...style
            }}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 180,
                    scale: 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                }}
            >
                {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
