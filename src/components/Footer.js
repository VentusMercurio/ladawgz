// src/components/Footer.js
import React from 'react';
import siteConfig from '../siteConfig';

const Footer = () => {
    const { colors, businessName, footer } = siteConfig;
    const styles = {
        footer: {
            backgroundColor: 'rgba(10,10,10,0.8)', // Dark semi-transparent
            backdropFilter: 'blur(3px)',
            color: '#AAAAAA',
            textAlign: 'center',
            padding: '30px 20px',
            fontSize: '0.9rem',
            position: 'relative', // Ensure it's above background image if AppWrapper overlay isn't used
            zIndex: 2,
            borderTop: `1px solid ${colors.primaryOrange}55`
        },
        copyright: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.85rem',
            letterSpacing: '0.5px',
        },
        // Social links can be part of Contact section or minimal here
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.copyright}>
                © {new Date().getFullYear()} {businessName}. {footer.copyrightText}
            </p>
        </footer>
    );
};
export default Footer;