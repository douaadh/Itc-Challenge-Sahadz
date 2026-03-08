import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaClipboardList } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorPatients = () => {
  const navigate = useNavigate();

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
    {
      id: 3,
      name: 'Sarah Mohamed',
      age: 35,
      phone: '+213 55612345',
      lastVisit: '10 Mar'
    },
    {
      id: 4,
      name: 'Karim Benali',
      age: 45,
      phone: '+213 55698765',
      lastVisit: '8 Mar'
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      {/* Sidebar */}
      <Sidebar type="doctor" />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Header */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between mb-8">
            {/* Search Bar */}
            <div className="relative w-96">
              <input
                type="text"
                placeholder="Search Patient"
                className="w-full px-4 py-2.5 border focus:outline-none focus:ring-2 text-sm"
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
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  10
                </span>
              </div>
              
              <div className="relative">
                <FaBell className="text-2xl cursor-pointer" style={{ color: '#6D28D9' }} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  10
                </span>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pl-6" style={{ borderLeft: '1px solid #41256E' }}>
                <div className="w-12 h-12 bg-[#6D28D9] flex items-center justify-center">
                  <span className="text-white text-xl font-bold">DA</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Dr. Amine</h3>
                  <p className="text-xs text-gray-500">Cardiologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient List Section */}
        <div className="px-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#41256E' }}>
            Patient List
          </h2>

          {/* Table Container */}
          <div style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr style={{ backgroundColor: 'rgba(109, 40, 217, 0.3)' }}>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Age</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Last Visit</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y" style={{ divideColor: '#41256E', divideOpacity: 0.2 }}>
                {patients.map((patient) => (
                  <tr 
                    key={patient.id}
                    className="hover:bg-[#6D28D9]/5 transition"
                    style={{ backgroundColor: 'rgba(109, 40, 217, 0.15)' }}
                  >
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                      {patient.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {patient.age}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {patient.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {patient.lastVisit}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/doctor-patient-profile/${patient.id}`)}
                        className="px-4 py-2 text-sm font-medium text-white transition border"
                        style={{ 
                          backgroundColor: '#6D28D9',
                          borderColor: '#41256E'
                        }}
                      >
                        Visit Profil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;