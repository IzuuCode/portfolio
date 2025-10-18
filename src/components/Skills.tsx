import React, { useEffect, useRef } from 'react';

const skills = [
  { name: 'Figma', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'HTML', level: 85 },
  { name: 'Css', level: 80 },
  { name: 'PHP', level: 70 },
  { name: 'Dart', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Node.js', level: 75 },
];

export const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('[data-skill-item]');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('translate-x-0', 'transition-all', 'duration-700');
              }, index * 100);
            });

            const skillBars = entry.target.querySelectorAll('[data-skill-bar]');
            skillBars.forEach((bar: Element, index) => {
              const targetWidth = (bar as HTMLElement).dataset.level;
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${targetWidth}%`;
              }, index * 100 + 200);
            });

            obs.unobserve(entry.target); // prevent retrigger
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white transition duration-500 hover:scale-105" data-animate>
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-6 group transform -translate-x-10 opacity-0" data-skill-item>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium transition group-hover:text-blue-400">
                    {skill.name}
                  </span>
                  <span className="text-blue-400 transition group-hover:text-cyan-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    data-skill-bar
                    data-level={skill.level}
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p
              className="text-gray-300 text-lg max-w-2xl mx-auto transition duration-500 opacity-0 animate-fade-in-up"
              data-animate
            >
              I'm always learning and adapting to new technologies. My passion
              for continuous improvement drives me to stay updated with the
              latest industry trends and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
