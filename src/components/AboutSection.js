// src/components/AboutSection.js
import React from 'react';
import siteConfig from '../siteConfig';

const AboutSection = () => {
    const { colors, about, businessName, tagline, secondaryTagline } = siteConfig;
    const styles = {
        section: { textAlign: 'center', padding: '60px 20px', backgroundColor: 'rgba(0,0,0,0.2)' /* Slight darkening for this section */},
        // Heading can reuse tagline from Hero
        heading: {
            fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: colors.textWhite, textTransform: 'uppercase',
            lineHeight: 1.3, marginBottom: '15px',
        },
        subheading: { // secondaryTagline
            fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: 1.7, margin: '0 auto 30px auto', maxWidth: '700px',
            color: '#E0E0E0',
        },
        storyTextContainer: {
            backgroundColor: colors.cardBackground,
            padding: '30px',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '0 auto',
        },
        storyText: {
            fontSize: '1.05rem', color: '#DDDDDD', lineHeight: 1.8, textAlign: 'left',
            marginBottom: '15px',
        },
        // If you add an image for about section:
        // aboutImage: { maxWidth: '100%', borderRadius: '8px', marginTop: '30px' }
    };

    return (
        <section style={styles.section} id={about.anchorId} className="container">
            {/* Using hero taglines for the about section intro */}
            <h2 style={styles.heading}>{tagline}</h2>
            <p style={styles.subheading}>{secondaryTagline}</p>

            <div style={styles.storyTextContainer}>
                <p style={styles.storyText}>{about.text1}</p>
                <p style={styles.storyText}>{about.text2}</p>
            </div>
            {/* {about.imageUrl && <img src={process.env.PUBLIC_URL + about.imageUrl} alt="About L.A. Dawgz" style={styles.aboutImage}/>} */}
        </section>
    );
};
export default AboutSection;