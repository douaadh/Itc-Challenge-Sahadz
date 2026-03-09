import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaStar, FaComments, FaCalendar, FaPhone, FaUser } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  // Sample doctor data
  const doctor = {
    id: 1,
    name: 'Dr. Lina Sahli',
    specialty: 'Dermatologist',
    location: 'Boufarik, Blida',
    clinic: 'Riad Clinic',
    hours: 'Open at 8:00 AM',
    rating: 4.5,
    reviews: 120,
    experience: '10 Years',
    about: 'Dr Lina Sahli is certified Dermatologist. With over 10 years of medical experience, she provides personalized care for all ages.',
    languages: ['French', 'Arabic'],
    education: 'University of Blida',
    certification: 'Board Certified Dermatologist',
    price: '2000 DA',
    image: '/profile-user-patient.png'
  };

  // Sample reviews
  const reviews = [
    {
      id: 1,
      patient: 'Nariman Bo',
      rating: 5,
      comment: 'Great doctor and service',
      date: '27 Dec 20'
    }
  ];

  const handleBookAppointment = () => {
    navigate(`/book-appointment/${doctor.id}`);
  };

  const handleRatingSubmit = () => {
    if (rating > 0) {
      alert(`Thank you for rating ${rating} stars!`);
      setRating(0);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#E9E9F5]">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
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
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="border-b border-gray-300 mt-4"></div>
          </div>

          {/* Doctor Profile Card */}
          <div className="p-8 mb-6">
            <div className="flex items-start gap-8 mb-8">
              {/* Doctor Avatar - LARGER SIZE */}
              <div className="w-48 h-48 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-transparent shadow-lg">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23E9E9F5' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
                <p className="text-[#6D28D9] text-xl font-semibold mb-3">{doctor.specialty}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl ${
                          i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-base">({doctor.reviews} reviews)</span>
                </div>

                {/* Location Info */}
                <div className="space-y-2 text-base text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#6D28D9]" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#6D28D9]" />
                    <span>{doctor.clinic}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#6D28D9]" />
                    <span>{doctor.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Doctor - With bottom border */}
            <div className="mb-6">
              <h3 
                className="text-xl font-semibold text-[#6D28D9] mb-3 pb-2"
                style={{ borderBottom: '1px solid #41256E' }}
              >
                About doctor
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">{doctor.about}</p>
            </div>

            {/* Details Grid - ONLY Vertical Border, NO Horizontal Borders */}
            <div className="mb-6 pb-6" style={{ borderBottom: '1px solid #41256E' }}>
              <div className="flex">
                {/* Left Column: Labels - ONLY vertical border on right */}
                <div className="w-48 space-y-3" style={{ borderRight: '1px solid #41256E', paddingRight: '20px' }}>
                  <p className="text-base text-gray-700 font-medium">Languages</p>
                  <p className="text-base text-gray-700 font-medium">Education</p>
                  <p className="text-base text-gray-700 font-medium">Certification</p>
                  <p className="text-base text-gray-700 font-medium">Visit Price</p>
                </div>
                {/* Right Column: Values - NO borders */}
                <div className="flex-1 space-y-3 pl-6">
                  <p className="font-semibold text-gray-800 text-base">{doctor.languages.join(' + ')}</p>
                  <p className="font-semibold text-gray-800 text-base">{doctor.education}</p>
                  <p className="font-semibold text-gray-800 text-base">{doctor.certification}</p>
                  <p className="font-semibold text-[#6D28D9] text-2xl">{doctor.price}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Aligned to Right */}
            <div className="flex justify-end gap-4">
              <button className="px-8 py-3 border-2 border-[#6D28D9] text-[#6D28D9] rounded-xl hover:bg-[#6D28D9]/10 transition font-semibold flex items-center gap-2 text-base">
                <FaComments />
                Start Chat
              </button>
              <button 
                onClick={handleBookAppointment}
                className="px-8 py-3 bg-[#7B61FF] text-white rounded-xl hover:bg-[#6D28D9] transition font-semibold flex items-center gap-2 shadow-md text-base"
              >
                <FaCalendar />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="p-8 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-[#6D28D9]">Reviews</h3>
              <button className="text-[#7B61FF] hover:text-[#6D28D9] font-medium text-base">
                Add review
              </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-6 mb-8">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="pb-6 rounded-xl p-5"
                  style={{ border: '1px solid #41256E', }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
                        <img 
                          src="/profile-user-patient.png" 
                          alt={review.patient}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full items-center justify-center hidden" style={{ border: '1px solid #41256E' }}>
                          <FaUser className="text-[#41256E] text-xl" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">{review.patient}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-base" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-base text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600 text-base mt-2">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Rate and Review */}
            <div className="rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-2 text-lg">Rate and review</h4>
              <p className="text-base text-gray-600 mb-4">Show others what it's like</p>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className="text-4xl transition-transform hover:scale-110"
                  >
                    <FaStar
                      className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
                    />
                  </button>
                ))}
              </div>

              {rating > 0 && (
                <button
                  onClick={handleRatingSubmit}
                  className="px-8 py-3 bg-[#7B61FF] text-white rounded-lg hover:bg-[#6D28D9] transition font-semibold text-base"
                >
                  Submit Review
                </button>
              )}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex justify-end items-center gap-2 text-[#6D28D9]">
            <FaPhone className="text-3xl" />
            <span className="text-xl font-semibold">+213 - 14</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;