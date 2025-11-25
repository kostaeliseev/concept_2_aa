import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
            <span className="text-navy font-heading font-bold text-lg md:text-xl tracking-tight">
                Longevity<span className="font-light">Planners</span>
            </span>
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
            <div className="hidden md:flex flex-col leading-none">
                <span className="text-navy font-heading font-bold text-xs tracking-wider">Bridge</span>
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">By EquiTrust</span>
            </div>
        </div>

        {/* Action */}
        <button 
            onClick={onCtaClick}
            className="bg-gold hover:bg-goldHover text-navy text-xs md:text-sm font-extrabold py-3 px-4 md:px-6 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
        >
            Secure Your Territory
        </button>
      </div>
    </nav>
  );
};