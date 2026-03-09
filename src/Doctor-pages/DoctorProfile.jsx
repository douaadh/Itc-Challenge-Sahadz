import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEdit, FaDownload, FaPlus, FaMapMarkerAlt, FaPhone, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample patient data
  const patient = {
    id: id,
    name: 'Ahmed khalifa',
    age: 20,
    bloodType: 'O+',
    location: 'Blida, Boufarik',
    phone: '+213 55679875',
    allergies: ['Penicillin'],
    chronicDisease: 'None',
    avatar: '/patient-avatar.png'
  };

  const medicalHistory = [
    { year: '2025', diagnosis: 'Migraine diagnosis' },
    { year: '2025', diagnosis: 'Migraine diagnosis' },
    { year: '2025', diagnosis: 'Migraine diagnosis' },
  ];

  const prescriptions = [
    { medication: 'Paracetamol', dosage: '500 mg', frequency: '1 tablet every 8 hours' },
    { medication: 'Paracetamol', dosage: '500 mg', frequency: '1 tablet every 8 hours' },
  ];

  const labResults = [
    { test: 'Blood Test', date: '10 march', status: 'Normal' },
  ];

  const doctorNotes = [
    { note: 'Patient reports frequent headaches over the past two weeks.' },
    { note: 'Vital signs are stable.' },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#E9E9F5' }}>
      {/* Sidebar */}
      <Sidebar role="doctor" />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#6D28D9' }}>
            <img 
              src="/patients-icon.png" 
              alt="Patients"
              className="w-6 h-6"
              style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(436%) hue-rotate(229deg) brightness(90%) contrast(96%)' }}
            />
            Patient Medical Record
          </h1>
        </div>

        {/* Patient Info Card */}
        <div 
          className="p-6 rounded-xl border border-[#41256E]/30 mb-6"
          style={{ backgroundColor: 'rgba(109, 40, 217, 0.08)' }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Patient Avatar */}
              <div className="w-16 h-16 rounded-full border-2 border-[#6D28D9] flex items-center justify-center bg-white">
                <img 
                  src={patient.avatar} 
                  alt={patient.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%236D28D9" viewBox="0 0 24 24"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              {/* Patient Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                  <span>Age: {patient.age}</span>
                  <span>Blood Type: {patient.bloodType}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaMapMarkerAlt className="text-[#6D28D9]" />
                    <span>{patient.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <FaPhone className="text-[#6D28D9] text-xs" />
                    <span>{patient.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button 
              className="px-4 py-2 text-white rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition"
              style={{ backgroundColor: '#6D28D9' }}
            >
              <FaEdit className="text-sm" />
              <span>Edit</span>
            </button>
          </div>

          {/* Allergies & Chronic Disease */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#41256E]/20">
            <div className="px-4 py-2 rounded-lg border border-[#41256E]/30" style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}>
              <span className="text-sm text-gray-700">
                <span className="font-semibold">Allergies:</span> {patient.allergies.join(', ')}
              </span>
            </div>
            <div className="px-4 py-2 rounded-lg border border-[#41256E]/30" style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}>
              <span className="text-sm text-gray-700">
                <span className="font-semibold">Chronic Disease:</span> {patient.chronicDisease}
              </span>
            </div>
          </div>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medical History */}
          <div 
            className="p-5 rounded-xl border border-[#41256E]/30"
            style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#6D28D9' }}>
                <img 
                  src="/medical-history-icon.png" 
                  alt="Medical History"
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(436%) hue-rotate(229deg) brightness(90%) contrast(96%)' }}
                />
                Medical History
              </h3>
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaPlus />
              </button>
            </div>
            <div className="space-y-2">
              {medicalHistory.map((item, index) => (
                <div key={index} className="text-sm text-gray-700">
                  <span className="font-semibold">-{item.year}:</span> {item.diagnosis}
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 mt-4 pt-4 border-t border-[#41256E]/20">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className={`w-7 h-7 rounded text-sm font-medium ${
                    num === 1 
                      ? 'bg-[#6D28D9] text-white' 
                      : 'text-gray-600 hover:bg-[#6D28D9]/10'
                  }`}
                >
                  {num}
                </button>
              ))}
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>

          {/* Prescriptions */}
          <div 
            className="p-5 rounded-xl border border-[#41256E]/30"
            style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#6D28D9' }}>
                <img 
                  src="/prescription-icon.png" 
                  alt="Prescriptions"
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(436%) hue-rotate(229deg) brightness(90%) contrast(96%)' }}
                />
                Prescriptions
              </h3>
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaPlus />
              </button>
            </div>
            <div className="space-y-3">
              {prescriptions.map((item, index) => (
                <div key={index} className="pb-3 border-b border-[#41256E]/20 last:border-b-0">
                  <div className="flex items-center justify-between text-sm font-semibold text-gray-800">
                    <span>{item.medication}</span>
                    <span>{item.dosage}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{item.frequency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Results */}
          <div 
            className="p-5 rounded-xl border border-[#41256E]/30"
            style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#6D28D9' }}>
                <img 
                  src="/lab-icon.png" 
                  alt="Lab Results"
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(436%) hue-rotate(229deg) brightness(90%) contrast(96%)' }}
                />
                Lab Results
              </h3>
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaPlus />
              </button>
            </div>
            <div className="space-y-3">
              {labResults.map((item, index) => (
                <div key={index} className="flex items-center justify-between pb-3 border-b border-[#41256E]/20 last:border-b-0">
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.test}</p>
                    <p className="text-xs text-gray-600">{item.date}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Notes */}
          <div 
            className="p-5 rounded-xl border border-[#41256E]/30"
            style={{ backgroundColor: 'rgba(109, 40, 217, 0.05)' }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2" style={{ color: '#6D28D9' }}>
                <img 
                  src="/notes-icon.png" 
                  alt="Doctor Notes"
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(36%) sepia(94%) saturate(436%) hue-rotate(229deg) brightness(90%) contrast(96%)' }}
                />
                Doctor Notes
              </h3>
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaPlus />
              </button>
            </div>
            <div className="space-y-3">
              {doctorNotes.map((item, index) => (
                <div key={index} className="text-sm text-gray-700">
                  <p>{item.note}</p>
                </div>
              ))}
            </div>
            {/* Navigation */}
            <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-[#41256E]/20">
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaChevronLeft className="text-sm" />
              </button>
              <button className="text-[#6D28D9] hover:opacity-80">
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;