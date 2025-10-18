
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center text-white px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              ISURU JAYANADA
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 transition-all duration-500 hover:text-white">
            Developer & Tech Enthusiast
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto leading-relaxed transition-all duration-500 hover:text-gray-300">
            Creating digital experiences that bridge the gap between design and technology. 
            Passionate about crafting beautiful, functional, and user-centered solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/IzuuCode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/isuru-jayanada-044738265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.behance.net/isurujayanada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300 text-sky-300">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.68.76-.63.16-1.31.24-2.05.24H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.72-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.9 1.736-1.194.673-.294 1.405-.44 2.182-.44.86 0 1.622.18 2.273.54.673.36 1.225.87 1.68 1.53.447.66.738 1.435.896 2.32.158.88.188 1.84.03 2.88H16.94v.007zm-2.707-4.287c-.437-.464-1.08-.696-1.896-.696-.563 0-1.01.148-1.34.447-.33.298-.55.6-.668.91-.118.31-.196.58-.196.82h4.1c0-.81-.56-1.48-1-1.48zm9.268-5.373h-5.213v1.517h5.213v-1.517z"/>
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B94715795099&text=Hello%20Isuru...&type=phone_number&app_absent=0
"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-12 transition-transform duration-300 text-sky-300">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.585"/>
              </svg>
            </a>
            <a
              href="mailto:isurujayanada2002@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
