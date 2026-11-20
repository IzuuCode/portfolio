import React from 'react';
import { PageShell } from '@/components/PageShell';
import { Projects } from '@/components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <PageShell>
      <Projects />
    </PageShell>
  );
};

export default ProjectsPage;
