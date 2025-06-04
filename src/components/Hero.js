// src/components/Hero.js
import React from 'react';
import siteConfig from '../siteConfig';

const Hero = () => {
    const { colors, businessName, tagline, secondaryTagline, hero } = siteConfig;

    const styles = {
        hero: {
            minHeight: '100vh', // Full viewport height
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '100px 20px 50px', // Add more top padding for fixed header
            color: colors.textWhite,
            position: 'relative', // For z-indexing content above potential global bg overlay
            zIndex: 2,
        },
        logoContainer: { // Re-add logo here like on Carrd
            marginBottom: '30px',
        },
        logoImg: {
            maxWidth: '300px', // Adjust as needed
            width: '60%',
            maxHeight: '30vh',
            objectFit: 'contain',
        },
        tagline: {
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            lineHeight: 1.3,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            margin: '0 auto 20px auto',
            maxWidth: '800px',
            textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
        },
        secondaryTagline: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: 1.7,
            margin: '0 auto 40px auto',
            maxWidth: '700px',
            fontWeight: 500,
        },
        // Button uses global .button .button-primary
    };

    return (
        <section style={styles.hero} id="hero">
            <h1 style={styles.tagline}>{tagline}</h1>
            <p style={styles.secondaryTagline}>{secondaryTagline}</p>
            {hero.ctaText && (
                <a href={hero.ctaLink} className="button button-primary">
                    {hero.ctaText}
                </a>
            )}
        </section>
    );
};
export default Hero;