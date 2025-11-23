import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  
  // Stats updated for the "Defensive" angle (Compliance, Speed, Retention)
  const stats = [
    { value: "Reg 187", label: "Compliant" },
    { value: "100%", label: "Asset Protection" },
    { value: "Instant", label: "Approval" },
    { value: "Retain", label: "Your Clients" },
    // Duplicates for seamless loop
    { value: "Reg 187", label: "Compliant" },
    { value: "100%", label: "Asset Protection" },
    { value: "Instant", label: "Approval" },
    { value: "Retain", label: "Your Clients" },
  ];

  return (
    <div className="relative bg-navy pt-16 md:pt-20 pb-0 flex flex-col items-center justify-center overflow-hidden min-h-[90vh]">
      {/* Sophisticated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00263E] to-[#001219]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl flex-grow flex flex-col justify-center">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-[1.1] mb-6 tracking-tight">
          If You Don't Talk LTC With Your <br className="hidden md:block" />
          Top Clients, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Someone Else Will.</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto font-light">
          Regulation 187 and Best Interest Standards are clear: <span className="text-white font-semibold">Ignoring the LTC conversation is a liability.</span>
          <br className="hidden md:block" />
          <span className="text-gold font-semibold mt-4 block">Turn a compliance headache into your biggest revenue driver.</span>
        </p>
        
        {/* CTA Area */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <button 
            onClick={onCtaClick}
            className="w-full md:w-auto bg-gold hover:bg-goldHover text-navy text-lg font-extrabold py-5 px-12 rounded-lg shadow-lg shadow-gold/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="mt-4 text-sm text-gray-500 font-medium">The only Guaranteed-Issue Hybrid on the market.</p>
          
          {/* Branding - Explicitly below CTA */}
          <div className="mt-8 flex flex-col items-center opacity-90">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Powered By</span>
            <div className="flex items-center gap-3 border px-4 py-2 rounded-full border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="text-white font-heading font-bold text-base tracking-wider leading-none">Bridge</span>
                <span className="w-px h-3 bg-gray-600"></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">EquiTrust</span>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Carousel (Marquee) */}
      <div className="w-full bg-navy/50 border-t border-white/10 backdrop-blur-sm overflow-hidden py-12 relative z-20">
         <div className="animate-marquee-slow whitespace-nowrap flex items-center gap-0">
            {[...stats, ...stats, ...stats, ...stats].map((stat, idx) => (
                <div key={idx} className="flex items-center">
                    <div className="flex flex-col items-center justify-center min-w-[90vw] md:min-w-[350px] px-6 border-r border-white/5 last:border-0">
                        <span className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">{stat.value}</span>
                        <span className="text-base md:text-xs font-bold text-gold uppercase tracking-widest mt-3">{stat.label}</span>
                    </div>
                </div>
            ))}
         </div>
         {/* Fade edges */}
         <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#001c2e] to-transparent pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#001c2e] to-transparent pointer-events-none"></div>
      </div>

    </div>
  );
};