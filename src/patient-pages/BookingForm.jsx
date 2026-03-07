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
    <div className="flex min-h-screen bg-[#F5F5FF]">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Hello User!</h1>
            <p className="text-gray-500 text-sm mt-1">Monday, March 09</p>
          </div>

          {/* Book Appointment Title */}
          <div className="flex items-center gap-3 mb-8">
            <FaCalendarAlt className="text-3xl text-[#7B61FF]" />
            <h2 className="text-3xl font-bold text-[#6D28D9]">Book Appointment</h2>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Select Date Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#6D28D9] mb-4">Select Date</h3>
              
              {/* Calendar Container - Same background & border throughout */}
              <div className="border border-gray-300 rounded-xl p-6 bg-[#F9F9FF]">
                
                {/* Calendar Header - Same styling as body */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300">
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
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#6D28D9] mb-4">Select Time</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                      selectedTime === time
                        ? 'bg-[#7B61FF] text-white shadow-md'
                        : 'bg-[#6D28D9]/20 text-[#6D28D9] hover:bg-[#6D28D9]/30'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Patient Information Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#6D28D9] mb-4">Patient Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#6D28D9]/10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#6D28D9]/10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B61FF] focus:border-transparent"
                    placeholder="05XXXXXXXX"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#7B61FF] text-white rounded-xl hover:bg-[#6D28D9] transition-all duration-200 font-semibold text-lg shadow-md hover:shadow-lg"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;