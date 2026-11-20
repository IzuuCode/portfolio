import React from 'react';
import { FileText, Calendar, ExternalLink } from 'lucide-react';

interface ResearchPaper {
  title: string;
  conferenceOrJournal: string;
  year: string;
  summary: string;
  coverImage?: string;
  link?: string;
}

const researchPapers: ResearchPaper[] = [
  {
    title: 'Skin Condition Classification with Mobile-First Machine Learning',
    conferenceOrJournal: 'Undergraduate Research Project',
    year: '2026',
    summary:
      'A practical study on improving early skin condition insights using lightweight models integrated into a Flutter mobile application.',
    coverImage: '/images/research/skin-classification-cover.jpg',
    link: '#',
  },
  {
    title: 'User Experience Improvements in Agriculture Sampling Systems',
    conferenceOrJournal: 'Student Innovation Forum',
    year: '2025',
    summary:
      'This paper evaluates UX and data quality outcomes when digitizing tea sampling and reporting workflows with mobile-first forms.',
    coverImage: '/images/research/agri-ux-cover.jpg',
    link: '#',
  },
];

export const ResearchPapers: React.FC = () => {
  return (
    <section className="py-14 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-5 text-white">
            Research <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Papers</span>
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Showcase your publications and undergraduate research work here. Add cover images to
            public/images/research and update the entries below.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {researchPapers.map((paper) => (
              <article
                key={`${paper.title}-${paper.year}`}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-52 bg-black/30">
                  <img
                    src={paper.coverImage || '/placeholder.svg'}
                    alt={`${paper.title} cover`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-3">{paper.title}</h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                    <div className="inline-flex items-center gap-2">
                      <FileText size={16} className="text-cyan-300" />
                      <span>{paper.conferenceOrJournal}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Calendar size={16} className="text-blue-300" />
                      <span>{paper.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-5">{paper.summary}</p>

                  {paper.link && paper.link !== '#' && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-300 hover:text-cyan-300 transition-colors"
                    >
                      <span>Read paper</span>
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
