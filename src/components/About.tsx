import React from 'react';
import { Code, Palette, Rocket, Download } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white" data-animate>
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center" data-animate>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
I'm an UI/UX Engineer and Tech enthusiast currently pursuing my degree at General Sir John Kotelawala Defence University. With hands-on experience in web and mobile app development, I've built impactful solutions like SkinOptix, Tea Sampling, and the Weather Application. My journey started with a deep curiosity about technology, which evolved into a strong drive to create meaningful, user-centered digital experiences across platforms.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies and have a keen eye for design. 
                I believe that great software is not just functional, but also beautiful and intuitive.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Code className="mx-auto mb-4 text-blue-400" size={32} />
                  <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">Writing maintainable and scalable code</p>
                </div>
                
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Palette className="mx-auto mb-4 text-sky-400" size={32} />
                  <h3 className="text-white font-semibold mb-2">Design</h3>
                  <p className="text-gray-400 text-sm">Creating beautiful user experiences</p>
                </div>
                
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Rocket className="mx-auto mb-4 text-cyan-400" size={32} />
                  <h3 className="text-white font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">Always learning new technologies</p>
                </div>
              </div>
            </div>
            
            <div className="relative -mt-12 sm:-mt-16 md:-mt-24">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  {/* Add image here */}
                  <img
                    src="/images/me.jpg"  // Path to your image inside the 'public/images' folder
                    alt="Your image description"
                    className="w-full h-full object-cover rounded-full"  // Full circle fit
                  />
                </div>
              </div>
              <div className="text-center mt-6" data-animate>
                <a
                  href="/cv/isuru-jayanada-cv.pdf"
                  download
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-700 via-sky-700 to-cyan-700 text-white text-lg font-semibold hover:from-blue-600 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/10 border border-white/10"
                  aria-label="Download CV as PDF"
                >
                  <Download size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
