
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SkinOptix',
    description: 'SkinOptix is a mobile application designed to help users identify common skin conditions using Machine Learning. By capturing and analyzing skin images, the app provides instant feedback and insights, making it easier for users to understand potential skin issues.',
    image: '📱',
    tech: ['Flutter', 'Dart', 'Python', 'TensorFlow'],
    github: 'https://github.com/IzuuCode/skinoptix',
    live: 'https://github.com/IzuuCode/skinoptix'
  },
  {
    title: 'Tax-Calculator',
    description: 'Tax Calculator is a user-friendly tool that helps individuals quickly estimate their income tax based on their earnings.Also able to change language and theme.',
    image: '💲',
    tech: ['React', 'TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/IzuuCode/Tax-Calculator',
    live: 'https://taxcalculatorxisuru.netlify.app/'
  },
  {
    title: 'Weather Web App',
    description: 'A beautiful weather dashboard that provides detailed forecasts, interactive maps, and personalized weather insights.',
    image: '🌤️',
    tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
    github: 'https://github.com/IzuuCode/weather-app/tree/main',
    live: 'https://weather-app-iota-ochre-61.vercel.app/'
  },
  {
    title: 'Tea-Sampling Mobile Application',
    description: 'A modern and user-friendly mobile application that allows users to explore, submit, and review tea leaf, root, and soil samples. Built with Flutter and Firebase for real-time interaction, seamless data handling, and an engaging user interface.',
    image: '📲',
    tech: ['Flutter', 'Dart', 'Figma', 'Firebase'],
    github: 'https://github.com/IzuuCode/tea_sampling_application',
    live: 'https://github.com/IzuuCode/tea_sampling_application'
  },
  {
    title: 'Flappy Bird Clone',
    description: 'A fun and addictive Flappy Bird clone built with Python, featuring smooth graphics, responsive controls, and engaging gameplay. Perfect for casual gaming enthusiasts.',
    image: '🐤',
    tech: ['Pythob', 'Tkinter', 'Pygame'],
    github: 'https://github.com/IzuuCode/flappy_Bird',
    live: 'https://github.com/IzuuCode/flappy_Bird'
  },
  {
    title: 'Personal Portafoliot',
    description: 'Welcome to the repository for my personal website — a digital space where I showcase my projects, technical skills, and share insights from my learning journey. Feel free to explore and get to know more about me',
    image: '👦🏼',
    tech: ['React', 'Javascript', 'Email.js', 'Typescript'],
    github: 'https://github.com',
    live: 'https://isurujayanada.me/'
  }
];

export const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('[data-project-card]');
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 relative z-10" ref={projectsRef} data-animate-section>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white animate-fade-in" data-animate>
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-project-card
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover-lift group opacity-0"
              >
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-blue-300 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover-scale"
                    >
                      <Github size={16} />
                      <span className="text-sm text-white">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover-scale"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm text-white">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
