// src/components/AppWrapper.js
import React from 'react';
import siteConfig from '../siteConfig';

const AppWrapper = ({ children }) => {
    const styles = {
        appWrapper: {
            minHeight: '100vh',
            position: 'relative', // For the pseudo-element or fixed background
            background: `url(${process.env.PUBLIC_URL + siteConfig.backgroundImageUrl}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
        },
        // Optional: Add an overlay if the background image is too bright for text
        // overlay: {
        //     position: 'fixed',
        //     top: 0,
        //     left: 0,
        //     width: '100%',
        //     height: '100%',
        //     backgroundColor: siteConfig.colors.backgroundOverlay, // From siteConfig
        //     zIndex: 0,
        // }
    };

    return (
        <div style={styles.appWrapper}>
            {/* <div style={styles.overlay}></div> // Uncomment if you need an overlay */}
            {children}
        </div>
    );
};

export default AppWrapper;