// src/components/MenuSection.js
import React from 'react';
import siteConfig from '../siteConfig';

const MenuSection = () => {
    const { colors, menu } = siteConfig;
    const styles = {
        section: { textAlign: 'center', padding: '60px 20px' },
        heading: {
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: colors.primaryOrange,
            marginBottom: '40px', textTransform: 'uppercase',
        },
        itemsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto 50px auto',
        },
        menuItemCard: { // Using global .content-card style from App.css
            textAlign: 'center',
        },
        itemName: {
            fontFamily: "'Bebas Neue', cursive", fontSize: '1.8rem',
            color: colors.primaryYellow, marginBottom: '5px',
        },
        itemPrice: {
            fontFamily: "'Montserrat', sans-serif", fontSize: '1.1rem',
            color: colors.textWhite, fontWeight: 'bold', marginBottom: '10px',
        },
        itemDescription: {
            fontSize: '0.95rem', color: '#DDDDDD', lineHeight: 1.6,
        },
        drinksIntro: {
            fontFamily: "'Bebas Neue', cursive", fontSize: '2rem',
            color: colors.primaryTeal, marginTop: '60px', marginBottom: '20px',
        }
    };

    return (
        <section style={styles.section} id={menu.anchorId} className="container">
            <h2 style={styles.heading}>{menu.heading}</h2>
            <div style={styles.itemsGrid}>
                {menu.items.map((item, index) => (
                    <div key={index} style={styles.menuItemCard} className="content-card">
                        {item.imageUrl && <img src={process.env.PUBLIC_URL + item.imageUrl} alt={item.name} />}
                        <h3 style={styles.itemName}>{item.name}</h3>
                        {item.price && <p style={styles.itemPrice}>{item.price}</p>}
                        <p style={styles.itemDescription}>{item.description}</p>
                    </div>
                ))}
            </div>

            {menu.drinks && menu.drinks.length > 0 && (
                <>
                    <h3 style={styles.drinksIntro}>{menu.drinksIntro || "Refreshing Drinks"}</h3>
                    <div style={styles.itemsGrid}>
                        {menu.drinks.map((drink, index) => (
                            <div key={`drink-${index}`} style={styles.menuItemCard} className="content-card">
                                {drink.imageUrl && <img src={process.env.PUBLIC_URL + drink.imageUrl} alt={drink.name} />}
                                <h4 style={styles.itemName}>{drink.name}</h4>
                                <p style={styles.itemDescription}>{drink.description}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};
export default MenuSection;