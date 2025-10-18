import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const educations = [
  {
    degree: 'Ordinary Level',
    institution: 'Govt.Science College',
    location: 'Matale',
    period: '2017-2019',
    achievements: [
      '9 A’s in O/L Exams',
      'Awarded for achieving 9 A’s',
      'Participated in various sports events'
    ],
    color: 'from-blue-400 to-cyan-400'
  },
  {
    degree: 'Advance Level',
    institution: 'Govt.Science College',
    location: 'Matale',
    period: '2019-2022',
    achievements: [
      '2C & B A/L Exam',
      'Participate Tech Morph e-Sport club',
      'Participate Hackathon 2020'
    ],
    color: 'from-sky-400 to-cyan-400'
  },
  {
    degree: 'Bachelor of ICT',
    institution: 'General Sir John Kotelawala Defence University',
    location: 'Colombo',
    period: '2023-present',
    achievements: [
      'Developed multiple cross-platform apps',
      'Contributed to research ',
      'Science Olympiad State Champion'
    ],
    color: 'from-cyan-400 to-blue-400'
  },
  {
    degree: 'Software Engineering Intern',
    institution: 'DFAR-IT Division',
    location: 'Onsite',
    period: '2025 August - Present',
    achievements: [
      'Collaborated with cross‑functional teams to deliver features',
      'Created responsive UI components and design systems',
      'Improved accessibility and performance of key pages'
    ],
    color: 'from-blue-400 to-cyan-400',
    side: 'right'
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-500 hover:scale-105" data-animate>
              My <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-500 hover:text-white">
              Academic journey that shaped my expertise in technology and innovation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-sky-400 to-cyan-400 opacity-30 hidden md:block"></div>

            <div className="space-y-12">
              {educations.map((edu, index) => {
                const isLeft = (edu as any).side ? (edu as any).side === 'left' : index % 2 === 0;
                return (
                <div
                  key={edu.degree}
                  className={`group relative transition-all duration-700 ease-out hover:scale-105 ${isLeft ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 border-4 border-black z-10 hidden md:block group-hover:scale-150 transition-all duration-300"></div>

                  <div className={`glass-effect rounded-2xl p-8 max-w-lg ${isLeft ? 'md:mr-12' : 'md:ml-12'} transform transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 smooth-enter`}>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${edu.color} group-hover:scale-110 transition-all duration-300`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                          {edu.degree}
                        </h3>
                      </div>

                      <div className="space-y-2 text-gray-300">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-sky-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-green-400" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-gray-300 text-sm flex items-start gap-2 transform transition-all duration-300 hover:translate-x-2 hover:text-white"
                            style={{ animationDelay: `${(index * 0.2) + (achievementIndex * 0.1)}s` }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0 group-hover:scale-150 transition-all duration-300`}></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              );})}
            </div>
          </div>

          {/* Bottom section with stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center" data-animate>
            {[
              { label: 'Years of Study', value: '10+', icon: GraduationCap },
              { label: 'Awards', value: '10+', icon: Award },
              { label: 'Research Papers', value: '1', icon: Calendar }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group glass-effect rounded-xl p-6 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
