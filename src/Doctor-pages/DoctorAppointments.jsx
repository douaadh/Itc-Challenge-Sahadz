import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSearch, FaBell, FaClipboardList, FaCalendar, 
  FaUserInjured
} from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorAppointments = () => {
  const navigate = useNavigate();

  // Sample appointments data
  const appointments = [
    {
      id: 1,
      patient: 'Ahmed khalifa',
      time: '9:00 - 9:30',
      date: '10 march',
      status: 'Confirmed'
    },
    {
      id: 2,
      patient: 'Ahmed khalifa',
      time: '9:00 - 9:30',
      date: '10 march',
      status: 'Confirmed'
    },
    {
      id: 3,
      patient: 'Sarah Mohamed',
      time: '10:00 - 10:30',
      date: '10 march',
      status: 'Pending'
    },
    {
      id: 4,
      patient: 'Karim Benali',
      time: '11:00 - 11:30',
      date: '10 march',
      status: 'Confirmed'
    }
  ];

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'confirmed':
        return '#10b981';
      case 'pending':
        return '#f59e0b';
      case 'cancelled':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      {/* Sidebar */}
      <Sidebar role="doctor" />
     

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
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#6D28D9] flex items-center justify-center">
                <FaUserInjured className="text-white text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Dr. Amine</h3>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment List Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaCalendar className="text-2xl" style={{ color: '#41256E' }} />
            <h2 className="text-2xl font-bold" style={{ color: '#41256E' }}>
              Appointment List
            </h2>
          </div>

          {/* Appointments Container */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}>
            <div className="space-y-3">
              {appointments.map((appointment) => (
                <div 
                  key={appointment.id}
                  className="rounded-lg p-4 flex items-center justify-between"
                  style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                >
                  {/* Patient Name */}
                  <div className="w-1/4">
                    <h3 className="font-semibold text-gray-800">
                      {appointment.patient}
                    </h3>
                  </div>

                  {/* Time and Date */}
                  <div className="w-1/3 text-center">
                    <p className="text-sm text-gray-600">
                      {appointment.time}, {appointment.date}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="w-1/4 flex justify-end">
                    <span 
                      className="px-4 py-1.5 rounded-lg text-xs font-medium"
                      style={{ 
                        color: getStatusColor(appointment.status),
                        
                      }}
                    >
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;