import React, { useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import VideoSection from './components/VideoSection';
import Story from './components/Story';
import Method from './components/Method';
import Filter from './components/Filter';
import Bio from './components/Bio';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Define the global AOS type since we are loading it via CDN
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Animate On Scroll (AOS)
    if (window.AOS) {
      window.AOS.init({
        once: true, // Animations happen only once
        offset: 100, // Offset (in px) from the original trigger point
        duration: 800, // Duration of animation
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col w-full">
      <Hero id="hero" nextSectionId="pain-points" />
      <PainPoints id="pain-points" />
      <VideoSection id="video" />
      <Story id="story" />
      <Method id="method" />
      <Filter id="filter" nextSectionId="bio" />
      <Bio id="bio" />
      <Steps id="steps" nextSectionId="faq" />
      <FAQ id="faq" nextSectionId="final-cta" />
      <CtaSection id="final-cta" />
      <Footer />
    </main>
  );
};

export default App;