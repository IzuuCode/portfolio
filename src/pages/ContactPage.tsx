import React from 'react';
import { PageShell } from '@/components/PageShell';
import { Contact } from '@/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
};

export default ContactPage;
