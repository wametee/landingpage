import React, { useState } from 'react';
import { Download } from 'lucide-react';
import HeroImage from '../assets/hero.jpg';
import Modal from './Modal';

const Hero = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded text-center">
        <h2 className="text-4xl font-bold mb-4 text-white max-w-md text-center">
          Turn Your Passion into a Career with Hands-On Training at KISE College
        </h2>
        <p className="text-xl mb-8 text-white max-w-md text-center">
          Download your free guide & discover the best career paths for you!
        </p>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Download className="mr-2" />
          Get Your Free Career Guide Now!
        </button>
        {/* Conditional rendering of the modal */}
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default Hero;