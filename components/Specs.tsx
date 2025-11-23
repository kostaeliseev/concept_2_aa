import React from 'react';

export const Specs: React.FC = () => {
  return (
    <section className="py-16 bg-slate border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">At A Glance</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x-0 md:divide-x divide-gray-100">
                
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-heading font-bold text-navy mb-2">55-80</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Issue Ages</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl font-heading font-bold text-navy mb-2">$2M</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Max Premium</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl font-heading font-bold text-navy mb-2">70%</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Get Preferred</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-4xl font-heading font-bold text-gold mb-2">Instant</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Approval</span>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};