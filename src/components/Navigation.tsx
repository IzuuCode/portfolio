
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const MENU_ITEMS = ['home', 'about', 'skills', 'education', 'projects', 'contact'] as const;

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<(typeof MENU_ITEMS)[number]>('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };

    // Scroll spy using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id && MENU_ITEMS.includes(id as any)) {
              setActive(id as (typeof MENU_ITEMS)[number]);
            }
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.01 }
    );

    MENU_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // (Removed segmented control indicator to simplify navbar look)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500`}>
      {/* Scroll progress bar */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`container mx-auto px-4 md:px-6 py-3 ${scrolled ? 'pt-4' : 'pt-5'}`}>
        <div className="flex items-center justify-between px-0">
          {/* Brand on the left - text only */}
          <div className="text-xl md:text-2xl font-bold text-white transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Isuru Jayanada
            </span>
          </div>

          {/* Desktop nav - simple buttons */}
          <div className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => {
              const isActive = active === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-white capitalize relative group"
                >
                  <span className={`transition-colors ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{item}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full bg-gradient-to-r from-blue-400 to-cyan-400' : 'w-0 group-hover:w-full bg-white/30'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white transition-all duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4 animate-fade-in">
            <div className="grid gap-2">
              {MENU_ITEMS.map((item) => {
                const isActive = active === item;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`w-full text-left capitalize px-3 py-2 rounded-lg transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
