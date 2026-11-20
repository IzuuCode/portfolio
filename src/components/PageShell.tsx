import React from 'react';
import { GalaxyBackground } from '@/components/GalaxyBackground';
import { Navigation } from '@/components/Navigation';

interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GalaxyBackground />
      <Navigation />
      <main className="relative z-10 pt-20 md:pt-24 pb-10">{children}</main>
    </div>
  );
};
