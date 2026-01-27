import React from 'react';

/**
 * Parses text containing markdown-style links [label](url) and renders them as clickable links.
 * Also handles newlines by rendering them as <br/> tags or separate paragraphs.
 * 
 * @param {string} text - The input text to parse.
 * @param {object} linkStyle - Optional custom styles for the link.
 * @returns {React.ReactNode} - The text with rendered links.
 */
export const renderTextWithLinks = (text, linkStyle = {}) => {
    if (!text) return null;

    // Default style for links
    const defaultLinkStyle = {
        color: 'inherit',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        fontWeight: 500
    };

    // Merge styles
    const style = { ...defaultLinkStyle, ...linkStyle };

    // Split logic to handling markdown links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        // Add the link
        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                style={style}
                onClick={(e) => e.stopPropagation()} // Prevent bubbling if parent is interactive
            >
                {match[1]}
            </a>
        );

        lastIndex = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
};
