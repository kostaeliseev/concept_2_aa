import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex justify-between items-center">
        {/* Logo Area - Simplified */}
        <div className="flex items-center">
            <span className="text-navy font-heading font-bold text-lg md:text-xl tracking-tight">
                Longevity<span className="font-light">Planners</span>
            </span>
        </div>

        {/* Action */}
        <button 
            onClick={onCtaClick}
            className="bg-gold hover:bg-goldHover text-navy text-xs md:text-sm font-extrabold py-3 px-4 md:px-6 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
        >
            Book Strategy Call
        </button>
      </div>
    </nav>
  );
};