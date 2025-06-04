// src/components/AppWrapper.js
import React from 'react';
import siteConfig from '../siteConfig';

const AppWrapper = ({ children }) => {
    const imageUrl = process.env.PUBLIC_URL + siteConfig.backgroundImageUrl;

    const styles = {
        // This div will just be a viewport-sized fixed background layer
        backgroundLayer: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1, // Behind everything
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center', // Or try 'top center' if image has important top elements
            backgroundSize: 'cover',
        },
        // This div will contain the scrollable content
        contentContainer: {
            position: 'relative', // To allow z-indexing of children if needed
            zIndex: 1,
            minHeight: '100vh', // Ensure it can fill the viewport at least
            display: 'flex',
            flexDirection: 'column',
            // If you want content sections to show the fixed bg through them,
            // they should have transparent or semi-transparent backgrounds.
            // The body's #111 color will be the ultimate fallback.
        }
    };

    return (
        <> {/* Use a fragment as we now have two sibling top-level divs */}
            <div style={styles.backgroundLayer}></div>
            <div style={styles.contentContainer}>
                {children} {/* Header, main, Footer */}
            </div>
        </>
    );
};

export default AppWrapper;