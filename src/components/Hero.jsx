import { Stethoscope, MapPin, Sparkles } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ← Add this

const Hero = () => {
  const navigate = useNavigate(); // ← Add this

  return (
    <section className="relative min-h-screen">
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/bg.png" 
          alt="Healthcare background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent"></div>
      </div>

      {/* CONTENT OVER IMAGE */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        {/* LEFT - Text Content */}
        <div className="space-y-8">
          <h1 className="text-7xl text-black font-bold leading-tight">
            Your Health, Anywhere
            <span className="text-purple-700 block mt-2">in Algeria</span>
          </h1>
          
          <p className="text-2xl text-[#41256E]/95 font-bold leading-relaxed max-w-xl">
            Doctors, pharmacies, associations, and AI assistance—all working together for your 
            wellness. SahaDz is the digital bridge between you and a complete healthcare network.
          </p>

          {/* UPDATED BUTTON WITH NAVIGATION */}
          <button 
          
            className="px-12 py-4 bg-purple-700 text-white rounded-xl font-semibold text-xl 
              hover:bg-purple-800 transform hover:scale-105 transition shadow-lg hover:shadow-xl 
              cursor-pointer"
          >
            Find Care Now
          </button>

          {/* Stats */}
          <div className="flex items-center space-x-8 pt-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-6 h-6 text-purple-700" />
              <span className="text-gray-700 text-xl font-medium">Expert Doctors</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-purple-700" />
              <span className="text-gray-700 text-xl font-medium">Nationwide</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Hero;