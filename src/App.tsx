import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataSolutions from './components/DataSolutions';
import IndustryFinder from './components/IndustryFinder';
import Objectives from './components/Objectives';
import NewsSection from './components/NewsSection';
import Providers from './components/Providers';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Welcome from './components/Welcome';
import MarketInsights from './components/MarketInsights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DataSolutions />
      <IndustryFinder />
      <Objectives />
      <NewsSection />
      <Providers />
      <Statistics />
      <Testimonials />
      <Welcome />
      <MarketInsights />
      <Footer />
    </div>
  );
}

export default App;