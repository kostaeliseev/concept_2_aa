import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative overflow-hidden">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="bg-navy p-6 text-center">
            <h3 className="text-xl font-heading font-bold text-white">
                {isSubmitted ? "Request Received" : "Unlock Commission Schedule"}
            </h3>
            <p className="text-blue-200/80 text-sm mt-1">
                {isSubmitted ? "Check your email shortly." : "See the $10k avg case breakdown."}
            </p>
        </div>

        <div className="p-6 md:p-8">
            {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                    <CheckCircle className="text-wellnessGreen w-16 h-16" />
                    <p className="text-charcoal font-semibold">We'll be in touch regarding your strategy call.</p>
                    <button onClick={onClose} className="text-bridgeBlue underline font-semibold text-sm">Return to page</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label htmlFor="name" className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-1">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-bridgeBlue/20 focus:border-bridgeBlue outline-none transition-all bg-gray-50"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-1">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-bridgeBlue/20 focus:border-bridgeBlue outline-none transition-all bg-gray-50"
                        placeholder="john@agency.com"
                    />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-charcoal uppercase tracking-wide mb-1">Phone Number</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-bridgeBlue/20 focus:border-bridgeBlue outline-none transition-all bg-gray-50"
                        placeholder="(555) 123-4567"
                    />
                    </div>
                    <button 
                    type="submit"
                    className="w-full bg-gold hover:bg-goldHover text-navy font-extrabold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 mt-2"
                    >
                    Book Strategy Call
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};