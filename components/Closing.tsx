import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ClosingProps {
  onCtaClick: () => void;
}

export const Closing: React.FC<ClosingProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Protect Your Book. <br />
            <span className="text-gold">Upgrade Your Practice.</span>
        </h2>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Don't let another advisor step in to solve a problem you ignored. Secure your clients and your compliance standing today.
        </p>

        <div className="bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Secure Your Territory</h3>
            <button 
                onClick={onCtaClick}
                className="w-full md:w-auto bg-gold hover:bg-goldHover text-navy text-lg font-extrabold py-4 px-10 rounded-lg shadow-glow transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
                Bulletproof Your Business <ArrowRight size={20} />
            </button>
            <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                Complimentary Consultation
            </p>
        </div>
      </div>
    </section>
  );
};