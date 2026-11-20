import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    year: '2025',
    image: '/images/certificates/ui-ux-fundamentals.jpg',
    credentialUrl: 'https://www.coursera.org/',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    year: '2024',
    image: '/images/certificates/fullstack-web.jpg',
    credentialUrl: 'https://www.udemy.com/',
  },
  {
    title: 'Flutter App Development',
    issuer: 'Google Developers',
    year: '2024',
    image: '/images/certificates/flutter-dev.jpg',
    credentialUrl: 'https://developers.google.com/',
  },
];

export const Certificates: React.FC = () => {
  return (
    <section className="py-14 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-5 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Certificates</span>
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Replace these sample cards with your real certificates by adding images to
            public/images/certificates and updating this component list.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <article
                key={`${certificate.title}-${certificate.year}`}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-48 bg-black/30">
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-cyan-300 mb-3">
                    <Award size={18} />
                    <span className="text-sm">{certificate.issuer}</span>
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-2">{certificate.title}</h2>
                  <p className="text-gray-400 mb-4">Year: {certificate.year}</p>

                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-cyan-300 transition-colors"
                    >
                      <span>View credential</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
