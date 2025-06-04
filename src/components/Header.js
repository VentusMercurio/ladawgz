// src/components/Header.js
import React, { useState, useEffect } from 'react';
import siteConfig from '../siteConfig';

const Header = () => {
    const { colors, businessName, logoUrl, navLinks } = siteConfig;
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        const checkMobileView = () => {
            // We need to re-evaluate isMobileView on resize for true responsiveness
            // This is a simplified version. A resize event listener would be more robust.
            setIsMobileMenuOpen(currentIsOpen => currentIsOpen && window.innerWidth < 850);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobileView); // Check on resize

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    // Define isMobileView inside the component so it's accessible
    const isMobileView = typeof window !== 'undefined' && window.innerWidth < 850;


    const headerBaseStyle = {
        position: 'fixed', // Fixed at the top
        top: 0,
        left: 0,
        width: '100%',
        padding: '15px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    };

    const headerScrolledStyle = {
        backgroundColor: 'rgba(20, 20, 20, 0.85)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    };

    const styles = {
        header: isScrolled ? { ...headerBaseStyle, ...headerScrolledStyle } : headerBaseStyle,
        logoLink: { textDecoration: 'none', zIndex: 1001 },
        logoImg: {
            height: '50px',
            maxHeight: '6vh',
            objectFit: 'contain',
            transition: 'height 0.3s ease',
        },
        nav: { display: 'flex', alignItems: 'center' },
        navLink: {
            marginLeft: '20px', textDecoration: 'none', color: colors.textWhite,
            fontWeight: '500', fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem',
            letterSpacing: '0.5px', transition: 'color 0.2s ease',
            padding: '5px 0', textTransform: 'uppercase',
        },
        navLinkHover: { color: colors.primaryYellow },
        mobileMenuIcon: {
            display: isMobileView ? 'block' : 'none', // Use isMobileView here
            fontSize: '2rem', cursor: 'pointer',
            color: colors.textWhite, zIndex: 1005, background: 'none', border: 'none', padding: 0
        },
        mobileNav: {
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'fixed', top: 0, 
            // Corrected logic for 'left' based on isMobileMenuOpen
            left: isMobileMenuOpen ? '0' : '-100%', 
            width: '100%', height: '100vh',
            backgroundColor: 'rgba(10,10,10,0.95)', 
            backdropFilter: 'blur(10px)',
            transition: 'left 0.3s ease-in-out', zIndex: 1002,
            padding: '20px',
        },
        mobileNavLink: {
            padding: '15px 0', textDecoration: 'none', color: colors.textWhite,
            fontFamily: "'Bebas Neue', cursive", fontSize: '2rem', textAlign: 'center', width: '100%',
            borderBottom: `1px solid ${colors.primaryOrange}44`,
        },
        closeButton: {
            position: 'absolute', top: '25px', right: '5%',
            fontSize: '2rem', color: colors.textWhite, background: 'none', border: 'none',
        }
    };

    return (
        <header style={styles.header}>
            <a href="/#hero" style={styles.logoLink} onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
                <img src={process.env.PUBLIC_URL + logoUrl} alt={businessName} style={styles.logoImg} />
            </a>

            {isMobileView ? (
                <button style={styles.mobileMenuIcon} onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">☰</button>
            ) : (
                <nav style={styles.nav}>
                    {navLinks.map(link => (
                        link.externalUrl ?
                        <a key={link.name} href={link.externalUrl} target="_blank" rel="noopener noreferrer" style={styles.navLink}
                           onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                           onMouseLeave={(e) => e.target.style.color = styles.navLink.color}>
                            {link.name}
                        </a>
                        :
                        <a key={link.name} href={link.path} style={styles.navLink}
                           onMouseEnter={(e) => e.target.style.color = styles.navLinkHover.color}
                           onMouseLeave={(e) => e.target.style.color = styles.navLink.color}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
            
            {/* This is the problematic block in your screenshot, corrected below */}
            {isMobileView && ( // Use isMobileView here to determine if this structure should even be possible to show
                 <nav style={{...styles.mobileNav, left: isMobileMenuOpen ? '0' : '-100%'}}> {/* Control 'left' with isMobileMenuOpen */}
                    <button style={styles.closeButton} onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">✕</button>
                    {navLinks.map(link => (
                         link.externalUrl ?
                         <a key={link.name} href={link.externalUrl} target="_blank" rel="noopener noreferrer" style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                             {link.name}
                         </a>
                         :
                         <a key={link.name} href={link.path} style={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                             {link.name}
                         </a>
                    ))}
                </nav>
            )}
        </header>
    );
};
export default Header;