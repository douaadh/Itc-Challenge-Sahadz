import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSearch, FaBell, FaCalendar, FaUsers, FaUserClock, 
  FaCheck, FaTimes, FaStar, FaClipboardList, FaChartLine 
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(10);

  // Sample data
  const stats = {
    todayAppointments: 12,
    totalPatients: 120,
    pendingPatients: 12
  };

  const todaySchedule = [
    {
      id: 1,
      time: '9:00 - 9:30',
      patient: 'Ahmed khalifa',
      status: 'Confirmed'
    },
    {
      id: 2,
      time: '9:00 - 9:30',
      patient: 'Ahmed khalifa',
      status: 'Pending'
    },
    {
      id: 3,
      time: '10:00 - 10:30',
      patient: 'Sarah Mohamed',
      status: 'Confirmed'
    }
  ];

  const patientRequests = [
    {
      id: 1,
      patient: 'Ahmed khalifa',
      date: 'March 09',
      time: '10:00 AM'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      text: 'Excellent doctor',
      rating: 5,
      patient: '7 years'
    }
  ];

  const handleAcceptRequest = (id) => {
    alert(`Request ${id} accepted!`);
  };

  const handleRejectRequest = (id) => {
    alert(`Request ${id} rejected!`);
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      {/* Sidebar */}
      <Sidebar role="doctor"/>

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
       

        {/* Welcome Message */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome, Dr. Amine</h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Today's Appointments */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-gray-800 mb-1">Today's Appointments</p>
                <p className="text-3xl font-bold" style={{ color: '#41256E' }}>{stats.todayAppointments}</p>
              </div>
              <FaCalendar className="text-3xl" style={{ color: '#6D28D9' }} />
            </div>
          </div>

          {/* Total Patients */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-gray-800 mb-1">Total Patients</p>
                <p className="text-3xl font-bold" style={{ color: '#41256E' }}>{stats.totalPatients}</p>
              </div>
              <FaUsers className="text-3xl" style={{ color: '#6D28D9' }} />
            </div>
          </div>

          {/* Pending Patients */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-medium text-gray-800 mb-1">Pending Patients</p>
                <p className="text-3xl font-bold" style={{ color: '#41256E' }}>{stats.pendingPatients}</p>
              </div>
              <FaUserClock className="text-3xl" style={{ color: '#6D28D9' }} />
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Left Column - Schedule & Reviews */}
          <div className="col-span-2 space-y-6">
            {/* Today's Schedule */}
            <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Today's Schedule</h3>
              <div className="space-y-3">
                {todaySchedule.map((appointment) => (
                  <div 
                    key={appointment.id}
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{appointment.time}</p>
                      <p className="text-sm text-gray-600">{appointment.patient}</p>
                    </div>
                    <span 
                      className="px-4 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: appointment.status === 'Confirmed' ? '#10b981' : '#f59e0b',
                        color: 'white'
                      }}
                    >
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Reviews</h3>
              <div className="space-y-3">
                {recentReviews.map((review) => (
                  <div 
                    key={review.id}
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{review.text}</p>
                      <p className="text-sm text-gray-600">{review.patient}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Patient Requests */}
          <div>
            <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)' }}>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Patient Requests</h3>
              <div className="space-y-3">
                {patientRequests.map((request) => (
                  <div 
                    key={request.id}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                  >
                    <p className="font-semibold text-gray-800 mb-1">{request.patient}</p>
                    <p className="text-sm text-gray-600 mb-3">{request.date} - {request.time}</p>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleRejectRequest(request.id)}
                        className="flex-1 py-2 rounded-lg font-medium transition"
                        style={{  color: 'black' }}
                      >
                        <FaTimes className="inline mr-1" />
                      </button>
                      <button 
                        onClick={() => handleAcceptRequest(request.id)}
                        className="flex-1 py-2 rounded-lg font-medium transition"
                        style={{  color: 'black' }}
                      >
                        <FaCheck className="inline mr-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;