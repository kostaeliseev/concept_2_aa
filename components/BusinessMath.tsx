import React from 'react';
import { Check } from 'lucide-react';

export const BusinessMath: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-6 max-w-6xl">
        
        {/* Changed alignment to items-start to fix mobile centering issue */}
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          
          {/* Left: The Pitch */}
          <div className="flex-1 space-y-8 w-full">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy leading-tight text-left">
              You Are Leaving Revenue On The Table.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              Traditional LTC carriers decline up to <strong>40%</strong> of your applicants due to health history. That is marketing money set on fire.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-left">
              With Bridge, you turn the "Uninsurable" into revenue. 
              <span className="block mt-4 p-4 bg-slate rounded-lg border-l-4 border-gold italic text-navy font-medium">
                "Stop burning bridges with declined customers. Turn your 'Maybe' pile into a 'Yes'."
              </span>
            </p>
          </div>

          {/* Right: The Numbers (No box, just clean typography) */}
          <div className="flex-1 w-full">
            <div className="flex flex-col space-y-10">
                
                <div className="text-left">
                    <span className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">The Upside</span>
                    <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-7xl font-heading font-bold text-navy tracking-tighter">$10,000</span>
                    </div>
                    <span className="text-lg text-gold font-semibold">Average Commission Per Case</span>
                </div>

                <div className="h-px w-full bg-gray-100"></div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-4 text-left">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check size={16} className="text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy">One Case Per Month</h4>
                            <p className="text-sm text-gray-500">Adds ~$120k/year to your bottom line.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 text-left">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check size={16} className="text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy">Zero Medical Exams</h4>
                            <p className="text-sm text-gray-500">Video interview only. Approved on the spot.</p>
                        </div>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};