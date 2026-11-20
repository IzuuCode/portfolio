import React from 'react';
import { PageShell } from '@/components/PageShell';
import { ResearchPapers } from '@/components/ResearchPapers';

const ResearchPage: React.FC = () => {
  return (
    <PageShell>
      <ResearchPapers />
    </PageShell>
  );
};

export default ResearchPage;
