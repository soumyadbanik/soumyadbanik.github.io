import React, { useEffect, useRef, useState } from 'react';

const SITE_KEY = 'pfBwooKtvORRDcenpQgCB9E4Qla_-FKFa6qMUlvTYu8';
const GLOBE_SIZE = 200;
const GLOBE_SRC = `https://mapmyvisitors.com/globe.js?d=${SITE_KEY}&w=${GLOBE_SIZE}`;
// The globe has no counter, so read the all-time total (t=tt) from the flat map widget's data endpoint
const COUNT_SRC = `https://mapmyvisitors.com/widget_call_home.js?d=${SITE_KEY}&t=tt`;

// Script tags inside JSX don't execute, so inject the widget script on mount
const VisitorMap = () => {
    const containerRef = useRef(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'mmvst_globe';
        script.src = GLOBE_SRC;
        script.async = true;

        // The globe only reveals itself on window 'load', which has already fired in an SPA,
        // so re-fire it once the widget has inserted its markup
        const observer = new MutationObserver(() => {
            if (container.querySelector('.mmvst_outer')) {
                observer.disconnect();
                window.dispatchEvent(new Event('load'));
            }
        });
        observer.observe(container, { childList: true, subtree: true });

        container.appendChild(script);

        return () => {
            observer.disconnect();
            container.innerHTML = '';
        };
    }, []);

    useEffect(() => {
        // JSONP: the response calls our callback with the widget's code as a string
        const callbackName = `mmvstCount_${Date.now()}`;
        window[callbackName] = (code) => {
            const match = typeof code === 'string' && code.match(/([\d,]+) Total Pageviews/);
            if (match) setTotal(match[1]);
        };

        const script = document.createElement('script');
        script.src = `${COUNT_SRC}&callback=${callbackName}`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            delete window[callbackName];
            script.remove();
        };
    }, []);

    return (
        <div style={{ marginTop: '1rem' }}>
            <div
                ref={containerRef}
                style={{
                    width: `${GLOBE_SIZE}px`,
                    margin: '0 auto'
                }}
            />
            {total && (
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {total} total visits
                </p>
            )}
        </div>
    );
};

export default VisitorMap;
