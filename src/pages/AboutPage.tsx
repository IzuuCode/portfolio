import React from 'react';
import { PageShell } from '@/components/PageShell';
import { About } from '@/components/About';

const AboutPage: React.FC = () => {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
};

export default AboutPage;
