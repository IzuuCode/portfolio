import React from 'react';
import { PageShell } from '@/components/PageShell';
import { Certificates } from '@/components/Certificates';

const CertificatesPage: React.FC = () => {
  return (
    <PageShell>
      <Certificates />
    </PageShell>
  );
};

export default CertificatesPage;
