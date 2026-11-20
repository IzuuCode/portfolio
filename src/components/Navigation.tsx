
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MENU_ITEMS = [
  { label: 'home', path: '/' },
  { label: 'about', path: '/about' },
  { label: 'skills', path: '/skills' },
  { label: 'education', path: '/education' },
  { label: 'projects', path: '/projects' },
  { label: 'certificates', path: '/certificates' },
  { label: 'research', path: '/research' },
  { label: 'contact', path: '/contact' },
] as const;

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Brand on the left - text only */}
          <div className="text-base sm:text-xl md:text-2xl font-bold text-white transition-all duration-300 whitespace-nowrap">
            <Link to="/" className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Isuru Jayanada
            </Link>
          </div>

          {/* Horizontal nav across all breakpoints with horizontal scroll on small screens */}
          <div className="flex-1 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-start sm:justify-end gap-4 sm:gap-5 min-w-max pb-1">
            {MENU_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-white capitalize relative group text-xs sm:text-sm md:text-base"
                >
                  <span className={`transition-colors ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{item.label}</span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isActive ? 'w-full bg-gradient-to-r from-blue-400 to-cyan-400' : 'w-0 group-hover:w-full bg-white/30'
                  }`} />
                </Link>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
