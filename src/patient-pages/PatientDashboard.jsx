import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const PatientDashboard = () => {
  const navigate = useNavigate();

  // Sample upcoming appointments
  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Karim Alili',
      specialty: 'Cardiologist',
      date: 'Monday, March 09',
      time: '2:30 PM',
      status: 'Confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Lina Sahli',
      specialty: 'Dermatology',
      date: 'Monday, March 09',
      time: '4:00 PM',
      status: 'Pending'
    },
    {
      id: 3,
      doctor: 'Dr. Karim Alili',
      specialty: 'Cardiologist',
      date: 'Monday, March 09',
      time: '2:30 PM',
      status: 'Confirmed'
    }
  ]);

  const handleStatusChange = (appointmentId, newStatus) => {
    setUpcomingAppointments(appointments =>
      appointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
      <Sidebar />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hello User!</h1>
            <p className="text-gray-600">Monday, March 09</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white rounded-lg shadow hover:shadow-md transition">
              <img src="/bell-icon.png" alt="Notifications" className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 bg-[#7B61FF] rounded-full flex items-center justify-center text-white font-bold">
              <img src="/user-icon.png" alt="User" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Upcoming Appointments Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#6D28D9] mb-4">Upcoming Appointment</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {upcomingAppointments.map((appointment) => (
              <div 
                key={appointment.id} 
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-300"
                style={{ backgroundColor: '#D9D9D9' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <img 
                        src="/fluent_patient-32-filled.png" 
                        alt="Doctor" 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{appointment.doctor}</h3>
                      <p className="text-sm text-[#6D28D9]">{appointment.specialty}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <img 
                      src="/calendar-icon.png" 
                      alt="Calendar" 
                      className="w-4 h-4 mr-2"
                    />
                    {appointment.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <img 
                      src="/clock-icon.png" 
                      alt="Time" 
                      className="w-4 h-4 mr-2"
                    />
                    {appointment.time}
                  </div>
                </div>

                {/* Status Dropdown */}
                <select
                  value={appointment.status}
                  onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                  className="w-full py-2 bg-white/50 text-[#6D28D9] rounded-lg border-none font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7B61FF] text-center"
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            ))}
          </div>
        </div>

     

      </div>
    </div>
  );
};

export default PatientDashboard;