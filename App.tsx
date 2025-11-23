import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Elephant } from './components/Elephant';
import { Solution } from './components/Solution';
import { Specs } from './components/Specs';
import { Testimonial } from './components/Testimonial';
import { Closing } from './components/Closing';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal selection:bg-bridgeBlue selection:text-white">
      <Navbar onCtaClick={openModal} />
      
      <main>
        <Hero onCtaClick={openModal} />
        <Elephant />
        <Solution />
        <Specs />
        <Testimonial />
        <Closing onCtaClick={openModal} />
      </main>

      <footer className="bg-navy text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p className="mb-2">&copy; {new Date().getFullYear()} Longevity Planners. All rights reserved.</p>
          <p>Bridge by EquiTrust is a registered trademark of EquiTrust Life Insurance Company.</p>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;