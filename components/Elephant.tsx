import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Elephant: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 max-w-6xl">
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: The Hard Truth */}
          <div className="flex-1 space-y-8 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full text-red-600 border border-red-100 mb-2">
                <AlertTriangle size={14} />
                <span className="text-xs font-bold uppercase tracking-wide">The Elephant in the Room</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy leading-tight text-left">
              You know the stats. <br />
              <span className="text-gold">70% of your clients</span> will need care.
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              But you avoid the conversation because traditional LTC underwriting is a nightmare, and you don't want to ruin the relationship with a decline. 
            </p>
            
            <p className="text-lg font-semibold text-navy leading-relaxed text-left border-l-4 border-navy pl-4">
              "So you leave the door open for another advisor to step in."
            </p>
          </div>

          {/* Right: The Liability Visual */}
          <div className="flex-1 w-full bg-slate rounded-3xl p-8 md:p-12 border border-gray-100 relative">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                 <AlertTriangle size={120} className="text-navy" />
             </div>
             
             <h3 className="text-xl font-bold text-navy mb-6 z-10 relative">The Risk of Silence</h3>
             
             <div className="space-y-6 relative z-10">
                 <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm font-bold text-red-500 border border-red-100 shrink-0">1</div>
                     <div>
                         <h4 className="font-bold text-charcoal">The National Mandate</h4>
                         <p className="text-sm text-gray-500 mt-1">45+ States have adopted NAIC Model #275. You must address known risks.</p>
                     </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm font-bold text-red-500 border border-red-100 shrink-0">2</div>
                     <div>
                         <h4 className="font-bold text-charcoal">Relationship Risk</h4>
                         <p className="text-sm text-gray-500 mt-1">A decline from a traditional carrier embarrasses the client.</p>
                     </div>
                 </div>
                 <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm font-bold text-red-500 border border-red-100 shrink-0">3</div>
                     <div>
                         <h4 className="font-bold text-charcoal">The Trojan Horse Risk</h4>
                         <p className="text-sm text-gray-500 mt-1">If you leave the LTC gap open, a competitor will use it to move your entire book.</p>
                     </div>
                 </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};