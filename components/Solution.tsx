import React from 'react';
import { Stethoscope, Shield, Heart } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        <div className="text-center mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-sm">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3">Bridge Removes The Friction</h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">Make the offer with zero risk of embarrassment or decline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <Stethoscope className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No Medical Exams</h3>
                <p className="text-gray-400 leading-relaxed">
                    You never have to apologize for a decline again. Video interview only.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Asset Protection</h3>
                <p className="text-gray-400 leading-relaxed">
                    Protect their AUM from being drained by nursing home costs. Keep the assets in your book.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <Heart className="text-gold w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Wellness Rewards</h3>
                <p className="text-gray-400 leading-relaxed">
                    The 'NeverStop' program gives you a positive reason to call your clients annually, increasing retention.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};