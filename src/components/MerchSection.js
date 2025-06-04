// src/components/MerchSection.js
import React from 'react';
import siteConfig from '../siteConfig';

const MerchSection = () => {
    const { colors, merch } = siteConfig;
    const styles = {
        section: { textAlign: 'center', padding: '60px 20px', backgroundColor: 'rgba(0,0,0,0.2)'},
        card: { // Using global .content-card
            maxWidth: '450px',
            margin: '0 auto',
        },
        heading: { // Merch heading inside the card
            fontSize: 'clamp(2rem, 5vw, 3rem)', color: colors.primaryPink,
            marginBottom: '15px', textTransform: 'uppercase',
        },
        // Image uses default img styling from .content-card in App.css
        text: {
            fontSize: '1.05rem', color: '#E0E0E0', margin: '20px auto 25px auto',
            lineHeight: 1.6,
        },
        // Button uses global .button .button-primary
    };

    return (
        <section style={styles.section} id="merch" className="container"> {/* Added id for potential nav */}
            <div style={styles.card} className="content-card">
                <h2 style={styles.heading}>{merch.heading}</h2>
                {merch.imageUrl && <img src={process.env.PUBLIC_URL + merch.imageUrl} alt="L.A. Dawgz Merch" />}
                <p style={styles.text}>{merch.text}</p>
                <a href={merch.shopifyUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
                    {merch.buttonText}
                </a>
            </div>
        </section>
    );
};
export default MerchSection;