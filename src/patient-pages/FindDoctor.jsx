import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaHospitalAlt, FaClock, FaSearch, FaStar } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const FindDoctor = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [wilaya, setWilaya] = useState('');
  const [city, setCity] = useState('');

  // Sample doctors data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Lina Sahli',
      specialty: 'dermatology',
      location: 'Boufarik, Blida',
      clinic: 'Riad Clinic',
      hours: 'Open at 8:00 AM',
      experience: '10 Years Experience',
      rating: 4,
    },
    {
      id: 2,
      name: 'Dr. Lina Sahli',
      specialty: 'dermatology',
      location: 'Boufarik, Blida',
      clinic: 'Riad Clinic',
      hours: 'Open at 8:00 AM',
      experience: '10 Years Experience',
      rating: 4,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#E9E9F5]">
      <Sidebar />
      
      {/* Main Content - Removed p-8 padding, no border-radius */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-8 px-6 pt-6">
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
              className="w-12 h-12 object-cover shadow-md cursor-pointer hover:opacity-90 transition"
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="border-b border-[#41256E] mt-4"></div>
        </div>

        {/* Search Section - Row 1: Search + Speciality */}
        <div className="mb-4 px-6">
          <div className="flex gap-3">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="search doctor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#E9E9F5] border border-[#41256E] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] text-sm"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Speciality Dropdown */}
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="px-5 py-2.5 bg-[#6D28D9] text-white border border-[#41256E] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] cursor-pointer font-medium text-sm hover:bg-[#5a21a3] transition"
            >
              <option value="">speciality</option>
              <option value="dermatology">Dermatology</option>
              <option value="cardiology">Cardiology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
        </div>

        {/* Search Section - Row 2: Wilaya + City + Search Button */}
        <div className="mb-6 px-6">
          <div className="flex gap-3 items-end">
            {/* Wilaya Dropdown */}
            <div className="w-[100px]">
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="w-full px-3 py-2 bg-[#E9E9F5] text-[#6D28D9] border border-[#41256E] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] cursor-pointer font-medium text-xs"
              >
                <option value="">wilaya</option>
                <option value="blida">Blida</option>
                <option value="algiers">Algiers</option>
                <option value="oran">Oran</option>
              </select>
            </div>

            {/* City Dropdown */}
            <div className="w-[100px]">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 bg-[#E9E9F5] text-[#6D28D9] border border-[#41256E] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] cursor-pointer font-medium text-xs"
              >
                <option value="">city</option>
                <option value="blida-centre">Blida Centre</option>
                <option value="boufarik">Boufarik</option>
              </select>
            </div>

            {/* Search Button */}
            <button 
              className="px-6 py-2.5 bg-[#6D28D9] text-white border border-[#41256E] font-semibold hover:bg-[#5a21a3] transition shadow-sm ml-auto text-sm"
            >
              Search
            </button>
          </div>
          <div className="border-b border-[#41256E] mt-10"></div>
        </div>

        {/* Doctors List */}
        <div className="mb-8 px-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-5">
            Showing most searched doctors
          </h2>

          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="p-6 border border-[#41256E] shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  {/* Left Side: Avatar + Doctor Info */}
                  <div className="flex items-start gap-3 flex-1">
                    {/* Doctor Avatar */}
                    <img 
                      src="/user-profile.png" 
                      alt={doctor.name}
                      className="w-12 h-12 object-cover shadow-md flex-shrink-0"
                      onError={(e) => {
                        e.target.onerror = null;
                      }}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 mb-0.5">{doctor.name}</h3>
                      <p className="text-[#6D28D9] text-sm font-medium mb-1">{doctor.specialty}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < doctor.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-gray-500 text-xs ml-1">(120 reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Location Info */}
                  <div className="space-y-1.5 text-xs text-gray-600 text-right flex-shrink-0">
                    <div className="flex items-center justify-end gap-1.5">
                      <span>{doctor.location}</span>
                      <FaMapMarkerAlt className="text-[#6D28D9] text-sm flex-shrink-0" />
                    </div>
                    <div className="flex items-center justify-end gap-1.5">
                      <span>{doctor.clinic}</span>
                      <FaHospitalAlt className="text-[#6D28D9] text-sm flex-shrink-0" />
                    </div>
                    <div className="flex items-center justify-end gap-1.5">
                      <span>{doctor.hours}</span>
                      <FaClock className="text-[#6D28D9] text-sm flex-shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Experience + Buttons */}
                <div className="flex items-center gap-4 mt-4 pt-3 ">
                  <span className="text-gray-600 text-sm font-medium">{doctor.experience}</span>
                  <div className="flex gap-2 ml-auto">
                    <button 
                      onClick={() => navigate(`/doctor-profile/${doctor.id}`)}
                      className="px-5 py-2 bg-transparent border border-[#41256E] text-[#41256E] hover:bg-[#E9E9F5] transition font-medium text-sm"
                    >
                      view profile
                    </button>
                    <button 
                      onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                      className="px-5 py-2 bg-[#6D28D9] text-white border border-[#41256E] hover:bg-[#5a21a3] transition font-medium text-sm shadow-sm"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;