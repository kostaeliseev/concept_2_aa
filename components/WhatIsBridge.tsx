import React from 'react';
import { Plus, Equal } from 'lucide-react';

export const WhatIsBridge: React.FC = () => {
  return (
    <section className="py-20 bg-slate">
      <div className="container mx-auto px-6 md:px-6 max-w-6xl">
        
        <div className="text-center mb-12">
             <span className="text-gold font-bold uppercase tracking-widest text-sm">The Formula</span>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mt-2">How Bridge Works</h2>
        </div>

        {/* The Equation Visual */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-16">
            
            {/* Element 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center w-full md:w-64 h-48 flex flex-col justify-center items-center relative">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">You Take</span>
                <span className="text-2xl font-bold text-navy">Existing Asset</span>
                <span className="text-sm text-gray-500 mt-2">Old Annuity, CD, Savings</span>
            </div>

            {/* Operator */}
            <div className="bg-navy/5 p-3 rounded-full">
                <Plus className="text-navy w-6 h-6" />
            </div>

            {/* Element 2 */}
            <div className="bg-navy p-6 rounded-2xl shadow-xl shadow-navy/20 text-center w-full md:w-64 h-48 flex flex-col justify-center items-center relative transform md:-translate-y-2">
                 <span className="text-blue-200 font-bold uppercase text-xs tracking-widest mb-2">You Add</span>
                <span className="text-2xl font-bold text-white">Bridge</span>
                <span className="text-sm text-gray-300 mt-2">The Guaranteed-Issue Vehicle</span>
            </div>

            {/* Operator */}
             <div className="bg-navy/5 p-3 rounded-full">
                <Equal className="text-navy w-6 h-6" />
            </div>

            {/* Element 3 */}
            <div className="bg-gold p-6 rounded-2xl shadow-glow text-center w-full md:w-64 h-48 flex flex-col justify-center items-center relative">
                 <span className="text-white/80 font-bold uppercase text-xs tracking-widest mb-2">You Get</span>
                <span className="text-3xl font-bold text-white">3x Leverage</span>
                <span className="text-sm text-white/90 mt-2">Tax-Free for Care</span>
            </div>
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-4">
                <h3 className="text-lg font-bold text-navy mb-2">1. The Base (FIA)</h3>
                <p className="text-gray-600 text-sm">Principal protection from market loss. Growth potential based on indices.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">2. The Rider (LTC)</h3>
                <p className="text-gray-600 text-sm">Guaranteed approval for ages 55-80. No medical exams. No phone interviews.</p>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-navy mb-2">3. The Benefit (Cash)</h3>
                <p className="text-gray-600 text-sm">Indemnity model. Pays cash for home care or facility. No receipts required.</p>
            </div>
        </div>

      </div>
    </section>
  );
};