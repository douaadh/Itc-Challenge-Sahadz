import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPhone } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const PharmacienPage = () => {
  const navigate = useNavigate();
  const [wilaya, setWilaya] = useState('');
  const [city, setCity] = useState('');

  // Sample pharmacies data
  const pharmacies = [
    {
      id: 1,
      name: 'Pharmacy Amine',
      location: 'Blida Centre',
      distance: '0.8 km away',
      hours: 'Open until 22:00',
      rating: 3,
      is24h: false,
    },
    {
      id: 2,
      name: 'Pharmacy Amine',
      location: 'Blida Centre',
      distance: '2 km away',
      hours: 'Open 24/7',
      rating: 3,
      is24h: true,
    },
    {
      id: 3,
      name: 'Pharmacy Amine',
      location: 'Blida Centre',
      distance: '0.8 km away',
      hours: 'Open until 22:00',
      rating: 3,
      is24h: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      <Sidebar role="patient" />
      
      <div className="flex-1 p-8">
        {/* Header */}
         <div className="mb-8">
            <div className="flex items-center justify-between">
              {/* User Info - Left Side */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Hello User!</h1>
                <p className="text-gray-500 text-sm mt-1">Monday, March 09</p>
              </div>
              
              {/* Profile Image - Right Side */}
              <img 
                src="/user-profile.png" 
                alt="Profile" 
                className="w-12 h-12 rounded-full object-cover shadow-md cursor-pointer hover:opacity-90 transition"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.onerror = null;
                  e.target.src = "image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%237B61FF' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                  e.target.classList.remove('hidden');
                }}
              />
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </div>

        {/* Search Section */}
        <div className="p-2 mb-8">
          <div className="flex gap-8 items-end">
            {/* Wilaya Dropdown */}
            <div className="w-[199px]">
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="w-full px-4 py-3 bg-[#6D28D9]/20 text-[#6D28D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#7B61FF] cursor-pointer font-medium"
              >
                <option value="">Wilaya</option>
                <option value="blida">Blida</option>
                <option value="algiers">Algiers</option>
                <option value="oran">Oran</option>
              </select>
            </div>

            {/* City Dropdown */}
            <div className="w-[199px]">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 bg-[#6D28D9]/20 text-[#6D28D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#7B61FF] cursor-pointer font-medium"
              >
                <option value="">City</option>
                <option value="blida-centre">Blida Centre</option>
                <option value="boufarik">Boufarik</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="px-8 py-3 bg-[#7B61FF] text-white rounded-lg font-semibold hover:bg-[#6D28D9] transition shadow-md ml-auto">
              Search
            </button>
          </div>
        </div>

        {/* Pharmacies List */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Showing 12 pharmacies near you
          </h2>

          <div className="space-y-4">
            {pharmacies.map((pharmacy) => (
              <div 
                key={pharmacy.id}
                className="rounded-2xl shadow-md p-6 border border-[#41256EF2]"
              >
                {/* Row 1: Icon + Name + Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <img 
                        src="/Group-1.png" 
                        alt="Pharmacy" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-[#41256EF2]">
                      {pharmacy.name}
                    </h3>
                  </div>
                  
                  {/* Stars - Using FaStar instead of images */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${
                          i < pharmacy.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Row 2: Location Info - STACKED (not one line) */}
                <div className="space-y-1 text-sm text-gray-600 mb-4 ml-14">
                  <div>{pharmacy.location}</div>
                  <div>{pharmacy.distance}</div>
                  <div className={pharmacy.is24h ? 'text-green-600 font-semibold' : ''}>
                    {pharmacy.hours}
                  </div>
                </div>

                {/* Row 3: Buttons */}
                <div className="flex gap-4 ml-14">
                  <button className="px-6 py-2 border border-[#41256EF2] text-[#41256EF2] rounded-lg hover:bg-[#6D28D9]/10 transition font-medium">
                    View Details
                  </button>
                  <button className="px-6 py-2 border border-[#41256EF2] text-[#41256EF2] rounded-lg hover:bg-[#6D28D9]/10 transition font-medium">
                    Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="flex justify-end items-center gap-2 text-[#6D28D9]">
          <img 
            src="/phone-icon.png" 
            alt="Phone" 
            className="w-6 h-6"
          />
          <span className="text-lg font-semibold">+213 - 14</span>
        </div>
      </div>

      {/* 🚨 Emergency Button - Added Only This Section */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center gap-2 z-50">
        <span className="text-white font-semibold text-xs bg-red-600 px-3 py-1 rounded-full shadow-lg">
          +213 - 14
        </span>
        <button 
          className="w-16 h-16  hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse border-4 border-white"
          onClick={() => alert('🚨 Emergency: Calling +213-14')}
        >
          <img 
            src="/emergency.png" 
            alt="Emergency" 
            className="w-10 h-10 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <FaPhone className="text-2xl text-white hidden" />
        </button>
        <span className="text-white font-bold text-xs bg-red-600 px-4 py-1 rounded-full shadow-lg">
          Emergency
        </span>
      </div>
    </div>
  );
};

export default PharmacienPage;