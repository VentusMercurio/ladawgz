// src/components/BookingSection.js
import React from 'react';
import siteConfig from '../siteConfig';

const BookingSection = () => {
    const { colors, bookings } = siteConfig;
    const styles = {
        section: { textAlign: 'center', padding: '60px 20px' },
        heading: {
            fontSize: 'clamp(2.2rem, 5.5vw, 3.2rem)', color: colors.primaryYellow,
            marginBottom: '20px', textTransform: 'uppercase',
        },
        text: {
            fontSize: '1.1rem', color: '#E0E0E0', maxWidth: '600px',
            margin: '0 auto 35px auto', lineHeight: 1.7,
        },
        // Button uses global .button .button-secondary (or primary)
    };

    return (
        <section style={styles.section} id={bookings.anchorId} className="container">
            <h2 style={styles.heading}>{bookings.heading}</h2>
            <p style={styles.text}>{bookings.text}</p>
            <a href={bookings.contactLink} className="button button-primary">
                {bookings.ctaText}
            </a>
        </section>
    );
};
export default BookingSection;