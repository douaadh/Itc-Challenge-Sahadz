import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaHospitalAlt, FaClock, FaSearch } from 'react-icons/fa';
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
    <div className="flex min-h-screen bg-[#F5F5FF]">
      <Sidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-6 pb-3 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Hello User!</h1>
              <p className="text-gray-500 text-xs mt-1">Monday, March 09</p>
            </div>
            {/* User Profile Icon */}
            <div className="w-10 h-10 bg-[#7B61FF] rounded-full flex items-center justify-center">
              <FaUser className="text-white text-lg" />
            </div>
          </div>
        </div>

        {/* Search Section - Row 1: Search + Speciality */}
        <div className="mb-4">
          <div className="flex gap-3">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="search doctor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent text-sm"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Speciality Dropdown */}
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="px-5 py-2.5 bg-[#7B61FF] text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#7B61FF] cursor-pointer font-medium text-sm"
            >
              <option value="">speciality</option>
              <option value="dermatology">Dermatology</option>
              <option value="cardiology">Cardiology</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>
        </div>

        {/* Search Section - Row 2: Wilaya + City + Search Button */}
        <div className="mb-6">
          <div className="flex gap-3 items-end">
            {/* Wilaya Dropdown */}
            <div className="w-[100px]">
              <select
                value={wilaya}
                onChange={(e) => setWilaya(e.target.value)}
                className="w-full px-3 py-2 bg-[#6D28D9]/20 text-[#6D28D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#7B61FF] cursor-pointer font-medium text-xs"
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
                className="w-full px-3 py-2 bg-[#6D28D9]/20 text-[#6D28D9] rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#7B61FF] cursor-pointer font-medium text-xs"
              >
                <option value="">city</option>
                <option value="blida-centre">Blida Centre</option>
                <option value="boufarik">Boufarik</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="px-6 py-2.5 bg-[#7B61FF] text-white rounded-lg font-semibold hover:bg-[#6D28D9] transition shadow-sm ml-auto text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Doctors List */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-700 mb-5">
            Showing most searched doctors
          </h2>

          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="bg-white rounded-xl shadow-sm p-5 border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    {/* Doctor Avatar */}
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUser className="text-gray-600 text-2xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-gray-800 mb-0.5">{doctor.name}</h3>
                      <p className="text-[#6D28D9] text-xs mb-2">{doctor.specialty}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-0.5 mb-2">
                        <span className="text-yellow-400 text-sm">
                          {'★'.repeat(doctor.rating)}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {'★'.repeat(5 - doctor.rating)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Location Info WITH ICONS */}
                  <div className="space-y-1.5 text-xs text-gray-600 mr-6">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#6D28D9] text-xs" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaHospitalAlt className="text-[#6D28D9] text-xs" />
                      <span>{doctor.clinic}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#6D28D9] text-xs" />
                      <span>{doctor.hours}</span>
                    </div>
                  </div>

                  {/* Bottom Row: Experience + Buttons (ALL IN ONE LINE) */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-gray-600 text-xs">{doctor.experience}</span>
                    <button 
                      onClick={() => navigate(`/doctor-profile/${doctor.id}`)}
                      className="px-5 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-xs"
                    >
                      view profile
                    </button>
                    <button 
                      onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                      className="px-5 py-2 bg-[#7B61FF] text-white rounded-lg hover:bg-[#6D28D9] transition font-medium text-xs shadow-sm"
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