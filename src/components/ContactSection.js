// src/components/ContactSection.js
import React from 'react';
import siteConfig from '../siteConfig';

const ContactSection = () => {
    const { colors, contact } = siteConfig;
    const styles = {
        section: { textAlign: 'center', padding: '60px 20px' },
        heading: {
            fontSize: 'clamp(2.2rem, 5.5vw, 3.2rem)', color: colors.primaryOrange,
            marginBottom: '30px', textTransform: 'uppercase',
        },
        contactInfo: { marginBottom: '30px' },
        infoItem: {
            fontSize: '1.2rem', color: colors.textWhite, margin: '10px 0',
            fontFamily: "'Montserrat', sans-serif", fontWeight: 500,
        },
        infoLink: { color: colors.primaryYellow, fontWeight: 'bold' },
        socialPrompt: {
            fontSize: '1.3rem', color: colors.primaryTeal, marginBottom: '15px',
            fontFamily: "'Bebas Neue', cursive", letterSpacing: '1px',
        },
        socialIcons: { display: 'flex', justifyContent: 'center', gap: '25px' },
        socialLink: {
            color: colors.textWhite, fontSize: '2rem',
            transition: 'color 0.2s ease, transform 0.2s ease',
        },
        socialLinkHover: { color: colors.primaryPink, transform: 'scale(1.1)' },
    };

    return (
        <section style={styles.section} id={contact.anchorId} className="container">
            <h2 style={styles.heading}>{contact.heading}</h2>
            <div style={styles.contactInfo}>
                {contact.phone && <p style={styles.infoItem}>Call/Text: <a href={`tel:${contact.phone.replace(/\D/g,'')}`} style={styles.infoLink}>{contact.phone}</a></p>}
                {contact.email && <p style={styles.infoItem}>Email: <a href={`mailto:${contact.email}`} style={styles.infoLink}>{contact.email}</a></p>}
            </div>
            <p style={styles.socialPrompt}>{contact.socialPrompt}</p>
            <div style={styles.socialIcons}>
                {siteConfig.footer.socialLinks.map(link => ( // Reusing footer social links
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                       style={styles.socialLink}
                       onMouseEnter={(e) => { e.target.style.color = styles.socialLinkHover.color; e.target.style.transform = styles.socialLinkHover.transform; }}
                       onMouseLeave={(e) => { e.target.style.color = styles.socialLink.color; e.target.style.transform = 'none'; }}
                       aria-label={link.name}>
                        {link.icon /* Placeholder, use actual icons */}
                    </a>
                ))}
            </div>
        </section>
    );
};
export default ContactSection;