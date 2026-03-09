import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaClipboardList } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorPatients = () => {
  const navigate = useNavigate();
  const [notifications] = useState(10);

  // Sample patient data
  const patients = [
    {
      id: 1,
      name: 'Ahmed khalifa',
      age: 20,
      phone: '+213 55679875',
      lastVisit: '12 Mar'
    },
    {
      id: 2,
      name: 'Ahmed khalifa',
      age: 20,
      phone: '+213 55679875',
      lastVisit: '12 Mar'
    },
  
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      {/* Sidebar */}
      <Sidebar type="doctor" />

      {/* Main Content */}
      <div className="flex-1 ml-8 p-8">
        {/* Top Header */}
     <div className="flex items-center justify-between mb-8">
              {/* Search Bar */}
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Search Patient"
                  className="w-full px-4 py-2.5 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: '#41256E',
                    '--tw-ring-color': '#6D28D9'
                  }}
                />
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
    
              {/* Right Side Icons & Profile */}
              <div className="flex items-center gap-6">
                {/* Notifications */}
                <div className="relative">
                  <FaClipboardList className="text-2xl cursor-pointer" style={{ color: '#6D28D9' }} />
                  {notifications > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </div>
                
                <div className="relative">
                  <FaBell className="text-2xl cursor-pointer" style={{ color: '#6D28D9' }} />
                  {notifications > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </div>
    
                {/* Profile */}
                <div className="flex items-center gap-3 pl-6" >
                  <img 
                    src="/user-profile.png" 
                    alt="Profile" 
                    className="w-12 h-12 rounded-full object-cover shadow-md cursor-pointer hover:opacity-90 transition"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%237B61FF' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                      e.target.classList.remove('hidden');
                    }}
                  />
                   
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Dr. Amine</h3>
                    <p className="text-xs text-gray-500">Cardiologist</p>
                  </div>
                </div>
              </div>
           
    

        {/* Patient List Section */}
        <div className="px-6 py-4">
          <h2 className="text-2xl  mb-6 font-extrabold bg-gradient-to-r from-[#6D28D9] to-[#41256E] bg-clip-text text-transparent" >
            Patient List
          </h2>
{/* Table Container - One Big Border Around with Padding */}
<div className=" border-[#41256E] p-4" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
  <table className="w-full">
    {/* Table Header - Rounded Corners */}
    <thead>
      <tr 
        style={{ 
          backgroundColor: 'rgba(109, 40, 217, 0.3)',
          borderRadius: '50px'
        }}
      >
        <th className="px-6 py-3 text-left text-xl font-semibold text-gray-900">Name</th>
        <th className="px-6 py-3 text-left text-xl font-semibold text-gray-900">Age</th>
        <th className="px-6 py-3 text-left text-xl font-semibold text-gray-900">Phone</th>
        <th className="px-6 py-3 text-left text-xl font-semibold text-gray-900">Last Visit</th>
        <th className="px-6 py-3 text-left text-xl font-semibold text-gray-900">Action</th>
      </tr>
    </thead>

    {/* Table Body - Each Row with Border Radius */}
    <tbody>
      {patients.map((patient, index) => {
        // Row 1 (index 0): NO background (transparent)
        // Row 2 (index 1): HAS purple background
        // Row 3 (index 2): NO background (transparent)
        // Row 4 (index 3): HAS purple background
        const hasBackground = index % 2 !== 0;
        
        return (
          <tr 
            key={patient.id}
            className="transition hover:bg-[#6D28D9]/30"
            style={{ 
              backgroundColor: hasBackground ? 'rgba(109, 40, 217, 0.3)' : 'transparent',
              borderRadius: '12px',
              marginBottom: '8px',
              display: 'table-row'
            }}
          >
            <td className="px-6 py-3 text-sm text-gray-800 font-medium">
              {patient.name}
            </td>
            <td className="px-6 py-3 text-sm text-gray-600">
              {patient.age}
            </td>
            <td className="px-6 py-3 text-sm text-gray-600">
              {patient.phone}
            </td>
            <td className="px-6 py-3 text-sm text-gray-600">
              {patient.lastVisit}
            </td>
            <td className="px-6 py-3">
              <button
                onClick={() => navigate(`/doctor-patient-profile/${patient.id}`)}
                className="px-8 py-2 text-sm font-medium text-white border-[#41256E] hover:opacity-90 transition rounded-lg"
                style={{ backgroundColor: '#6D28D9' }}
              >
                Visit Profil
              </button>
              
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;