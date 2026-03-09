import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUserCircle, FaCalendarAlt, FaClock, FaChevronDown, FaCalendarPlus, FaPhone } from 'react-icons/fa';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: 'Dr Karim Akli',
      specialty: 'Cardiologist',
      date: 'Monday, March 09',
      time: '2:30 PM',
      status: 'Status'
    },
    {
      id: 2,
      doctorName: 'Dr Karim Akli',
      specialty: 'Cardiologist',
      date: 'Monday, March 09',
      time: '2:30 PM',
      status: 'Status'
    },
    {
      id: 3,
      doctorName: 'Dr Karim Akli',
      specialty: 'Cardiologist',
      date: 'Monday, March 09',
      time: '2:30 PM',
      status: 'Status'
    }
  ]);

  return (
    <div className="flex min-h-screen bg-[#E9E9F5] relative">
      <Sidebar role="patient" />
      
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
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
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback icon */}
              <div 
                className="w-12 h-12 bg-[#7B61FF] items-center justify-center cursor-pointer hover:bg-[#6D28D9] transition hidden"
              >
                <FaUserCircle className="text-3xl text-white" />
              </div>
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </div>

          {/* Upcoming Appointment Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarPlus className="text-3xl" style={{ color: 'rgba(65, 37, 110, 1)' }} />
              <h2 
                className="text-3xl font-extrabold bg-gradient-to-r from-[#6D28D9] to-[#41256E] bg-clip-text text-transparent"
                style={{
                  background: 'linear-gradient(90deg, rgba(109, 40, 217, 0.95) 51.92%, rgba(65, 37, 110, 0.95) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Upcoming Appointment
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="bg-[#E0E0E0] p-6"
                >
                  {/* Doctor Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center flex-shrink-0">
                      <FaUserCircle className="text-3xl text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-base">{appointment.doctorName}</h3>
                      <p className="text-sm" style={{ color: 'rgba(65, 37, 110, 1)' }}>
                        {appointment.specialty}
                      </p>
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt style={{ color: 'rgba(65, 37, 110, 1)' }} />
                      <span className="text-sm">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock style={{ color: 'rgba(65, 37, 110, 1)' }} />
                      <span className="text-sm">{appointment.time}</span>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="relative">
                    <button className="w-full px-4 py-2.5 bg-[#B8A7E8] hover:bg-[#A897D8] text-gray-800 rounded-lg font-medium text-sm flex items-center justify-between transition-all duration-200">
                      <span>{appointment.status}</span>
                      <FaChevronDown className="text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Button - Fixed Bottom Right */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center gap-2 z-50">
        {/* Emergency Phone Number */}
        <span className="text-white font-semibold text-sm bg-red-600 px-3 py-1 rounded-full shadow-lg">
          +213 - 14
        </span>
        
        {/* Emergency Button */}
        <button 
          className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
          onClick={() => alert('Emergency: Call +213-14')}
        >
          <FaPhone className="text-3xl text-white" />
        </button>
        
        {/* Emergency Label */}
        <span className="text-white font-bold text-sm bg-red-600 px-4 py-1 rounded-full shadow-lg">
          Emergency
        </span>
      </div>
    </div>
  );
};

export default PatientDashboard;