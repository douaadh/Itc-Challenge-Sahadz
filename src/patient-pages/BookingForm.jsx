import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState('March');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    reason: ''
  });

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Time slots
  const timeSlots = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00'];

  // Generate dates
  const generateDates = () => {
    const dates = [];
    const daysInMonth = 31;
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    return dates;
  };

  const handlePrevMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex > 0) {
      setCurrentMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex < months.length - 1) {
      setCurrentMonth(months[currentIndex + 1]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
    navigate('/patient-dashboard');
  };

  return (
    <div className="flex min-h-screen bg-[#E9E9F5]">
      <Sidebar />
      
      <div className="flex-1 mr-10 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header with Profile Image on Right */}
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
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%237B61FF' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                  e.target.classList.remove('hidden');
                }}
              />
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </div>

          {/* Book Appointment Title with Gradient Text */}
          <div className="flex items-center gap-3 mb-8">
            <FaCalendarAlt className="text-3xl text-[#7B61FF]" />
            <h2 
              className="text-3xl font-extrabold bg-gradient-to-r from-[#6D28D9] to-[#41256E] bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, rgba(109, 40, 217, 0.95) 51.92%, rgba(65, 37, 110, 0.95) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Book Appointment
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Select Date Section */}
            <div className="mb-6">
              <div 
                className="rounded-xl p-6 border"
                style={{
                  borderColor: 'rgba(109, 40, 217, 0.95)',
                  boxShadow: '0px 4px 13.8px 0px #00000040'
                }}
              >
                <h3 
                  className="border-b pb-4 mb-6"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(109, 40, 217, 0.95)',
                    borderColor: 'rgba(109, 40, 217, 0.95)'
                  }}
                >
                  Select Date
                </h3>
                
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6 pb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-600" />
                    <span className="font-semibold text-gray-800">{currentMonth} 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      type="button" 
                      onClick={handlePrevMonth}
                      className="p-2 text-[#7B61FF] hover:bg-[#6D28D9]/20 rounded-lg transition"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>
                    <button 
                      type="button" 
                      onClick={handleNextMonth}
                      className="p-2 text-[#7B61FF] hover:bg-[#6D28D9]/20 rounded-lg transition"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 text-center">
                  {/* Days of Week */}
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                    <div key={idx} className="text-sm text-gray-500 font-medium py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Date Numbers */}
                  {generateDates().map((date) => (
                    <button
                      key={date}
                      type="button"
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedDate === date
                          ? 'bg-[#7B61FF] text-white shadow-md'
                          : 'text-gray-700 hover:bg-[#6D28D9]/20'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Select Time Section */}
            <div className="mb-6">
              <div 
                className="rounded-xl p-6 border"
                style={{
                  borderColor: 'rgba(109, 40, 217, 0.95)',
                  boxShadow: '0px 4px 8.1px 0px #00000040'
                }}
              >
                <h3 
                  className="border-b pb-4 mb-4"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(109, 40, 217, 0.95)',
                    borderColor: 'rgba(109, 40, 217, 0.95)'
                  }}
                >
                  Select Time
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className="py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                      style={{
                        backgroundColor: selectedTime === time ? '#7B61FF' : 'rgba(109, 40, 217, 0.12)',
                        color: selectedTime === time ? '#FFFFFF' : 'rgba(109, 40, 217, 0.95)'
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient Information Section */}
            <div className="mb-6">
              <div 
                className="rounded-xl p-6 border"
                style={{
                  borderColor: 'rgba(109, 40, 217, 0.95)',
                  boxShadow: '0px 4px 8.1px 0px #00000040'
                }}
              >
                <h3 
                  className="border-b pb-4 mb-4"
                  style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(109, 40, 217, 0.95)',
                    borderColor: 'rgba(109, 40, 217, 0.95)'
                  }}
                >
                  Patient Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent text-sm"
                      style={{
                        backgroundColor: 'rgba(109, 40, 217, 0.06)',
                        borderColor: 'rgba(109, 40, 217, 0.3)'
                      }}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent text-sm"
                      style={{
                        backgroundColor: 'rgba(109, 40, 217, 0.06)',
                        borderColor: 'rgba(109, 40, 217, 0.3)'
                      }}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button - Aligned to Right */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                style={{
                  backgroundColor: '#7B61FF',
                  color: '#FFFFFF'
                }}
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;