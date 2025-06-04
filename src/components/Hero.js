// src/components/Hero.js
import React from 'react';
import siteConfig from '../siteConfig';

const Hero = () => {
    const { colors, businessName, tagline, secondaryTagline, hero } = siteConfig;

    const styles = {
        hero: {
            minHeight: 'calc(100vh - 70px)', // Adjust 70px based on your actual header height
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            textAlign: 'center',
            padding: '40px 20px', // Reduced top padding as logo takes space
            color: colors.textWhite,
            position: 'relative', 
            zIndex: 2,
            // Add some top margin to push content below the fixed header
            // This is better handled by padding on the hero itself if header is fixed
            // If header is sticky, this isn't strictly needed, but padding-top on hero is good.
            // marginTop: '70px', // Example if header is ~70px tall and fixed
        },
        logoContainer: {
            marginBottom: '25px', // Space between logo and first tagline
            width: '100%', // Allow it to center properly
            display: 'flex',
            justifyContent: 'center',
        },
        logoImg: {
            maxWidth: '350px', // Make logo larger
            width: '70%',      // Responsive width
            maxHeight: '35vh', // Allow it to be reasonably tall
            objectFit: 'contain',
            // filter: 'drop-shadow(3px 3px 5px rgba(0,0,0,0.5))', // Optional: add a drop shadow like Carrd
        },
        tagline: {
            fontFamily: "'Bebas Neue', cursive",
            fontSize: 'clamp(2rem, 6vw, 3.2rem)', // Make tagline prominent
            lineHeight: 1.2,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            margin: '0 auto 10px auto', // Tighter margin
            maxWidth: '800px',
            textShadow: '2px 2px 5px rgba(0,0,0,0.7)',
        },
        secondaryTagline: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', // Slightly larger
            lineHeight: 1.6,
            margin: '0 auto 35px auto', // More space before button
            maxWidth: '700px',
            fontWeight: 500,
        },
        // Button uses global .button .button-primary from App.css
        promoImageContainer: { 
            marginTop: '30px', 
            maxWidth: '550px', 
            width: '75%',      
            margin: '30px auto 0 auto', 
        },
        promoImage: { 
            width: '100%',
            height: 'auto',
            borderRadius: '8px', 
            boxShadow: '0 5px 15px rgba(0,0,0,0.4)', 
        }
    };

    return (
        <section style={styles.hero} id="hero">
            <div style={styles.logoContainer}>
                <img src={process.env.PUBLIC_URL + siteConfig.logoUrl} alt={businessName} style={styles.logoImg} />
            </div>
            <h1 style={styles.tagline}>{tagline}</h1> {/* Tagline is now H1 */}
            {/* If secondaryTagline is more of a sub-heading, h2 might be appropriate */}
            <p style={styles.secondaryTagline}>{secondaryTagline}</p>
            {hero.ctaText && (
                <a href={hero.ctaLink} className="button button-primary">
                    {hero.ctaText}
                </a>
            )}
            {hero.promoImageUrl && (
                <div style={styles.promoImageContainer}>
                    <img
                        src={process.env.PUBLIC_URL + hero.promoImageUrl}
                        alt={siteConfig.promoImageAlt || "L.A. Dawgz Special"}
                        style={styles.promoImage}
                    />
                </div>
            )}
        </section>
    );
};
export default Hero;