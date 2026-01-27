import React from 'react';

const ExternalLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            color: 'var(--accent)',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--accent)'}
        onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
    >
        {children}
    </a>
);

export default ExternalLink;
