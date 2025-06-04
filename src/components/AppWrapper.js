// src/components/AppWrapper.js
import React from 'react';
import siteConfig from '../siteConfig';

const AppWrapper = ({ children }) => {
    const styles = {
        appWrapper: {
            minHeight: '100vh',
            position: 'relative',
            // Changed from 'fixed' to 'scroll' (or just remove 'fixed')
            // 'scroll' is the default attachment, image scrolls with page
            background: `url(${process.env.PUBLIC_URL + siteConfig.backgroundImageUrl}) no-repeat center center`,
            backgroundSize: 'cover', // Will cover the entire body/wrapper
            display: 'flex',
            flexDirection: 'column',
        },
        // Optional overlay, if you uncomment, make its position 'absolute' if AppWrapper is relative
        // overlay: {
        //     position: 'absolute', // If AppWrapper is relative and you want overlay to scroll with it
        //     top: 0,
        //     left: 0,
        //     width: '100%',
        //     height: '100%', // Might need to be 100% of content or use JS to match scroll height
        //     backgroundColor: siteConfig.colors.backgroundOverlay,
        //     zIndex: 1, // Just above background, below content
        // }
    };

    return (
        <div style={styles.appWrapper}>
            {/* <div style={styles.overlay}></div> */}
            {/* Content needs its own z-index to be above the overlay if used */}
            <div style={{ position: 'relative', zIndex: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {children}
            </div>
        </div>
    );
};

export default AppWrapper;