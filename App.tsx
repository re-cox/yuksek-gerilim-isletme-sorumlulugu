
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutService from './components/AboutService';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <AboutService />
        <WhyUs />
        <Services />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
