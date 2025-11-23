import React from 'react';
import { Star } from 'lucide-react';

export const Testimonial: React.FC = () => {
  // Using a professional male placeholder
  const chrisImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-8 border-4 border-slate shadow-xl">
             <img src={chrisImage} alt="Chris Cox" className="w-full h-full object-cover" />
          </div>

          <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                  <Star key={i} className="fill-gold text-gold w-5 h-5" />
              ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy leading-relaxed mb-8 max-w-3xl">
              "This product gives you the opportunity to thrive, to bring something to the table that other people are not bringing. I’m not just an agent anymore; I’m a holistic planner."
          </h3>

          <div>
              <p className="text-navy font-bold text-lg">Chris Cox, CSA</p>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Certified Senior Advisor</p>
          </div>
        </div>

      </div>
    </section>
  );
};