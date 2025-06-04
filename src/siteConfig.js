// src/siteConfig.js for la-dawgz

const COLORS = {
    primaryOrange: '#FF8C00', // Dark Orange (sunset)
    primaryYellow: '#FFD700', // Gold / Yellow (sunset)
    primaryTeal: '#008080',   // Teal (ocean/palm trees)
    primaryPink: '#FF69B4',   // Hot Pink (accent)
    textWhite: '#FFFFFF',
    textBlack: '#222222', // For buttons on light backgrounds if any
    backgroundOverlay: 'rgba(0, 0, 0, 0.4)', // Overlay for text legibility on background
    cardBackground: 'rgba(0, 0, 0, 0.65)', // Semi-transparent dark cards
};

const siteConfig = {
    colors: COLORS,
    businessName: "L.A. Dawgz",
    tagline: "Born in the heart of L.A., Raised on the streets of New York.",
    secondaryTagline: "At L.A. Dawgz, we're serving up authentic West Coast street dogs with all the heat, flair, and flavor of Los Angeles – right here in the Capital Region.",
    
    logoUrl: "/assets/images/la-dawgz-logo.PNG", // <<<< You'll need to get this from your Carrd site or recreate
    backgroundImageUrl: "/assets/images/my-new-bg.png", // <<<< The persistent background image

    navLinks: [
        { name: "Home", path: "/" }, // Or link to #hero
        { name: "Menu", path: "/#menu" }, // Use hash links for single page initially
        { name: "About", path: "/#about" },
        { name: "Book Us", path: "/#bookings" },
        { name: "Merch", externalUrl: "YOUR_SHOPIFY_STORE_URL_HERE" }, // <<<< REPLACE
        { name: "Contact", path: "/#contact" },
    ],

    hero: {
        // Content will use siteConfig.tagline and secondaryTagline
        ctaText: "Book Now", // From your mobile screenshot
        ctaLink: "/#bookings",
    },

    menu: {
        anchorId: "menu",
        heading: "The Menu",
        items: [
            {
                name: "The L.A. Dawg",
                price: "$6", // Example, adjust as needed
                description: "The iconic Los Angeles Bacon-Wrapped Hot Dog. A street food legend.",
                imageUrl: "/assets/images/menu-la-dawg.jpg", // <<<< Replace with actual image
            },
            {
                name: "The Fairfax",
                price: "$7",
                description: "Inspired by LA's foodie scene. Beef dog, spicy aioli, pickled onions, cotija cheese.",
                imageUrl: "/assets/images/menu-fairfax.jpg", // <<<< Replace
            },
            {
                name: "Elote Dog",
                price: "$7.50",
                description: "Grilled corn, mayo, chili powder, lime, and cotija cheese on a classic dawg.",
                imageUrl: "/assets/images/menu-elote-dog.jpg", // <<<< Replace
            },
            // Add more menu items
        ],
        // You can add a "Sides" or "Drinks" array here too
        drinksIntro: "And for thirst-quenching refreshment...",
        drinks: [
             { name: "Horchata", description: "Creamy and refreshing rice-flavored drink.", imageUrl: "/assets/images/drink-horchata.jpg"}, // <<<< Replace
             { name: "Agua Frescas", description: "Rotating fresh fruit waters (Jamaica, Mango, Sandia).", imageUrl: "/assets/images/drink-agua-fresca.jpg"}, // <<<< Replace
        ]
    },

    about: {
        anchorId: "about",
        heading: "Our Story", // Or keep it as the tagline from hero
        text1: "L.A. Dawgz started with a simple craving: the authentic taste of a Los Angeles street dog, miles away from the West Coast. We missed the sizzle, the bacon, the grilled onions and peppers – that whole vibrant experience.",
        text2: "So, we decided to bring it here. We're passionate about using quality ingredients, classic L.A. techniques, and adding our own unique flair. More than just food, L.A. Dawgz is about bringing a slice of that energetic, sun-soaked culture to every bite.",
        imageUrl: "/assets/images/about-us-image.jpg", // <<<< Image of your setup, team, or an iconic LA shot
    },

    bookings: {
        anchorId: "bookings",
        heading: "Book L.A. Dawgz For Your Event!",
        text: "Bring the flavor of L.A. to your next party, corporate event, festival, or pop-up! We offer flexible catering and on-site cooking options. Let's make your event unforgettable.",
        ctaText: "Inquire About Booking",
        contactLink: "/#contact", // Link to contact section/form
        // Or directly use a Formspree link for booking inquiries
        // formspreeBookingEndpoint: "YOUR_LADawgz_BOOKING_FORMSPREE_ID",
    },
    
    merch: {
        anchorId: "merch", // Not strictly needed if it's just a link out
        heading: "Dawgz Out!",
        text: "Visit our shop and rock out with your dawgz out! Fresh tees, hats, and more.",
        imageUrl: "/assets/images/our girl.png", // <<<< Image from your merch screenshot
        buttonText: "Shop Our Merch",
        shopifyUrl: "https://ladawgz.myshopify.com/", // <<<< REPLACE (same as navLink)
    },

    contact: {
        anchorId: "contact",
        heading: "Hit Us Up!",
        phone: "(562) 714-4883", // (555) 588-3294
        email: "ladawgz51@gmail.com",
        socialPrompt: "Follow the flavor journey:",
    },

    footer: {
        socialLinks: [ // Add your actual social links
            { name: "Instagram", url: "https://instagram.com/ladawgz", icon: "IG" },
            { name: "Facebook", url: "https://facebook.com/ladawgz", icon: "FB" },
            { name: "TikTok", url: "https://tiktok.com/@ladawgz", icon: "TT" },
        ],
        copyrightText: "All Dawgz Reserved."
    }
};

export default siteConfig;