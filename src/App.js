// src/App.js
import React from 'react';
import AppWrapper from './components/AppWrapper'; // For persistent background
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import MerchSection from './components/MerchSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'; // Import global styles

function App() {
  return (
    <AppWrapper> {/* Handles the persistent background */}
      <Header />
      <main> {/* Content will scroll over the fixed background */}
        <Hero />
        <MenuSection />
        <AboutSection />
        <BookingSection />
        <MerchSection />
        <ContactSection />
      </main>
      <Footer />
    </AppWrapper>
  );
}

export default App;