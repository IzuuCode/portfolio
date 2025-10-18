
import React, { useState, useEffect } from 'react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { LoadingAnimation } from '@/components/LoadingAnimation';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);

  const handleLoadingComplete = () => {
    setPageTransition(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Enhanced intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when element comes into view
          entry.target.classList.add('animate-on-scroll', 'visible');
          
          // Add staggered animations to child elements
          const children = entry.target.querySelectorAll('[data-animate]');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-fade-in-up');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all sections and animated elements
    const elementsToObserve = document.querySelectorAll('section, [data-animate-section]');
    elementsToObserve.forEach((element) => {
      element.classList.add('animate-on-scroll');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [isLoading]);

  if (isLoading && !pageTransition) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GalaxyBackground />
      <Navigation />
      <main 
        className={`relative z-10 transition-all duration-1000 ease-out ${
          pageTransition ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="transition-all duration-700 ease-in-out">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
