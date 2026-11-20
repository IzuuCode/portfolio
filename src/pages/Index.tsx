
import React, { useState, useEffect } from 'react';
import { PageShell } from '@/components/PageShell';
import { Hero } from '@/components/Hero';
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
    if (!isLoading) {
      const hero = document.querySelector('#home');
      if (hero) {
        hero.classList.add('animate-on-scroll', 'visible');
      }
    }
  }, [isLoading]);

  if (isLoading && !pageTransition) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <PageShell>
      <main 
        className={`relative z-10 transition-all duration-1000 ease-out ${
          pageTransition ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="transition-all duration-700 ease-in-out">
          <Hero />
        </div>
      </main>
    </PageShell>
  );
};

export default Index;
