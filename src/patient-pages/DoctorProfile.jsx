import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaStar, FaComments, FaCalendar, FaPhone } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  // Sample doctor data (in real app, fetch from API using id)
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
    about: 'Dr. Lina Sahli is a certified Dermatologist. With over 10 years of medical experience, she provides personalized care for all ages.',
    languages: ['French', 'Arabic'],
    education: 'University of Blida',
    certification: 'Board Certified Dermatologist',
    price: '2000 DA',
    image: '/fluent_patient-32-filled.png'
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
    <div className="flex min-h-screen bg-[#F5F5FF]">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Hello User!</h1>
            <p className="text-gray-500 text-sm mt-1">Monday, March 09</p>
          </div>

          {/* Doctor Profile Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-6 border border-gray-200">
            <div className="flex items-start space-x-6 mb-6">
              {/* Doctor Avatar */}
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{doctor.name}</h2>
                <p className="text-[#6D28D9] text-lg font-semibold mb-2">{doctor.specialty}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({doctor.reviews} reviews)</span>
                </div>

                {/* Location Info */}
                <div className="space-y-1 text-sm text-gray-600">
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

            {/* About Doctor */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-[#6D28D9] mb-3">About doctor</h3>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Languages</p>
                <p className="font-semibold text-gray-800">{doctor.languages.join(' + ')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Education</p>
                <p className="font-semibold text-gray-800">{doctor.education}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Certification</p>
                <p className="font-semibold text-gray-800">{doctor.certification}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Visit Price</p>
                <p className="font-semibold text-[#6D28D9] text-lg">{doctor.price}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-3 border-2 border-[#6D28D9] text-[#6D28D9] rounded-xl hover:bg-[#6D28D9]/10 transition font-semibold flex items-center gap-2">
                <FaComments />
                Start Chat
              </button>
              <button 
                onClick={handleBookAppointment}
                className="px-6 py-3 bg-[#7B61FF] text-white rounded-xl hover:bg-[#6D28D9] transition font-semibold flex items-center gap-2 shadow-md"
              >
                <FaCalendar />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#6D28D9]">Reviews</h3>
              <button className="text-[#7B61FF] hover:text-[#6D28D9] font-medium text-sm">
                Add review
              </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-6 mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">
                          {review.patient.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{review.patient}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600 ml-15 pl-15">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Rate and Review */}
            <div className="bg-[#F9F9FF] rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Rate and review</h4>
              <p className="text-sm text-gray-600 mb-4">Show others what it's like</p>
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setRating(i + 1)}
                    className="text-3xl transition-transform hover:scale-110"
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
                  className="px-6 py-2 bg-[#7B61FF] text-white rounded-lg hover:bg-[#6D28D9] transition font-semibold"
                >
                  Submit Review
                </button>
              )}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="flex justify-end items-center gap-2 text-[#6D28D9]">
            <FaPhone className="text-2xl" />
            <span className="text-lg font-semibold">+213 - 14</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;