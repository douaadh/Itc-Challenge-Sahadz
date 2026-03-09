import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const PharmaInterface = () => {
  const [isOnDuty, setIsOnDuty] = useState(false);

  const workingHours = [
    { days: 'Friday - Monday', hours: '8:00-16:00' },
    { days: 'Sunday', hours: '9:00-14:00' },
    { days: 'Saturday', hours: '9:00-14:00' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E9E9F5' }}>
      {/* Header - Same Background as Page */}
      <div 
        className="px-8 py-5 flex items-center justify-between border-b border-[#41256E]/20"
        style={{ backgroundColor: '#E9E9F5' }}
      >
        {/* Logo - Much Bigger */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo saha.svg" 
            alt="SahaDz Logo" 
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Approved Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full"></span>
            <span className="text-xl font-semibold text-gray-800">Approved</span>
          </div>
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src="/Group-1.png" 
              alt="Pharmacy" 
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 max-w-5xl mx-auto">
        {/* Pharmacy Info Section */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/Group-1.png" 
                alt="Pharmacy" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold" style={{ color: '#41256E' }}>
              Pharmacy Amine
            </h1>
          </div>

          <button
            onClick={() => setIsOnDuty(!isOnDuty)}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition ${
              isOnDuty 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-green-400 text-white hover:bg-green-500'
            }`}
          >
            {isOnDuty ? 'On Duty' : 'Go On Duty'}
          </button>
        </div>

        {/* Working Hours Card */}
        <div 
          className="p-8 rounded-2xl border border-[#41256E]/20"
          style={{ backgroundColor: 'rgba(109, 40, 217, 0.08)' }}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold" style={{ color: '#6D28D9' }}>
              Working Hours
            </h2>
            <button 
              className="px-6 py-2.5 text-white rounded-xl flex items-center gap-2 hover:opacity-90 transition font-medium"
              style={{ backgroundColor: '#6D28D9' }}
            >
              <FaEdit className="text-base" />
              <span>Edit</span>
            </button>
          </div>

          {/* Working Hours List */}
          <div className="space-y-0">
            {workingHours.map((schedule, index) => (
              <div 
                key={index}
                className="flex items-center justify-between py-5 border-b border-[#41256E]/20 last:border-b-0"
              >
                <span className="text-base text-gray-700 font-semibold">
                  {schedule.days}
                </span>
                <span className="text-base text-gray-800 font-bold">
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaInterface;