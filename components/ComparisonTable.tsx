import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-slate">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-navy">The New Standard</h2>
            <p className="text-gray-500 mt-2">Why top producers are switching to Bridge.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header Row (Hidden on mobile, visible desktop) */}
            <div className="hidden md:grid grid-cols-3 bg-navy/5 p-6 border-b border-gray-100">
                <div className="col-span-1 font-bold text-gray-400 text-sm uppercase tracking-wider">Feature</div>
                <div className="col-span-1 font-bold text-gray-400 text-sm uppercase tracking-wider">Traditional LTC</div>
                <div className="col-span-1 font-bold text-navy text-sm uppercase tracking-wider">Bridge by EquiTrust</div>
            </div>

            {/* Rows */}
            {[
                { label: "Underwriting Time", old: "4-6 Weeks", new: "Instant Decision", highlight: true },
                { label: "Acceptance Rate", old: "High Declines (Medical)", new: "Guaranteed Issue (55-80)", highlight: true },
                { label: "Benefit Type", old: "Reimbursement", new: "Indemnity (Cash)", highlight: false },
                { label: "Agent Effort", old: "Chase Medical Records", new: "30-Min Interview", highlight: false },
            ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-1 md:grid-cols-3 p-6 md:items-center gap-4 md:gap-0 border-b border-gray-100 last:border-0 ${row.highlight ? 'bg-blue-50/30' : ''}`}>
                    
                    {/* Mobile Label */}
                    <div className="md:col-span-1 font-bold text-navy text-lg md:text-base">{row.label}</div>
                    
                    {/* Old Way */}
                    <div className="md:col-span-1 flex items-center text-gray-500">
                        <X size={16} className="text-red-400 mr-2" />
                        {row.old}
                    </div>
                    
                    {/* New Way */}
                    <div className="md:col-span-1 flex items-center font-bold text-navy">
                        <Check size={16} className="text-green-500 mr-2" />
                        {row.new}
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};