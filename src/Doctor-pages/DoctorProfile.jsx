import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaSearch, FaBell, FaClipboardList, FaUserInjured, 
  FaMapMarkerAlt, FaPhone, FaEdit, FaDownload, FaPlus,
  FaStethoscope, FaPills, FaFlask, FaNotesMedical,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import DoctorSidebar from '../components/DoctorSidebar';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample patient data
  const patient = {
    id: 1,
    name: 'Ahmed khalifa',
    age: 20,
    bloodType: 'O+',
    location: 'Blida, Boufarik',
    phone: '+213 55679875',
    allergies: 'Penicillin',
    chronicDisease: 'None',
    image: '/user-profile.png'
  };

  const medicalHistory = [
    { year: '2025', diagnosis: 'Migraine diagnosis' },
    { year: '2025', diagnosis: 'Migraine diagnosis' },
    { year: '2025', diagnosis: 'Migraine diagnosis' },
    { year: '2024', diagnosis: 'Flu treatment' },
    { year: '2024', diagnosis: 'Annual checkup' }
  ];

  const prescriptions = [
    { medication: 'Paracetamol', dosage: '500 mg', frequency: '1 tablet every 8 hours' },
    { medication: 'Paracetamol', dosage: '500 mg', frequency: '1 tablet every 8 hours' }
  ];

  const labResults = [
    { test: 'Blood Test', date: '10 march', status: 'Normal' }
  ];

  const doctorNotes = [
    'Patient reports frequent headaches over the past two weeks.',
    'Vital signs are stable.'
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F5FF]">
    
      <DoctorSidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
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
            <div className="flex items-center gap-3 pl-6" style={{ borderLeft: '1px solid #41256E' }}>
              <div className="w-12 h-12 rounded-full bg-[#6D28D9] flex items-center justify-center">
                <span className="text-white text-xl font-bold">DA</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Dr. Amine</h3>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Medical Record Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#41256E' }}>
            Patient Medical Record
          </h2>
          <FaDownload className="text-2xl cursor-pointer" style={{ color: '#6D28D9' }} />
        </div>

        {/* Patient Info Card */}
        <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)', border: '1px solid #41256E' }}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              {/* Patient Avatar */}
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <FaUserInjured className="text-4xl text-gray-600" />
              </div>
              
              {/* Patient Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{patient.name}</h3>
                  <button 
                    className="px-4 py-1.5 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: '#6D28D9' }}
                  >
                    <FaEdit className="inline mr-1" />
                    Edit
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 mb-3">
                  <div>Age: <span className="font-semibold">{patient.age}</span></div>
                  <div>Blood Type: <span className="font-semibold">{patient.bloodType}</span></div>
                </div>

                <div className="flex gap-6 mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaMapMarkerAlt style={{ color: '#6D28D9' }} />
                    <span>{patient.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaPhone style={{ color: '#6D28D9' }} />
                    <span>{patient.phone}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="px-4 py-1.5 rounded-full text-sm" style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)', border: '1px solid #41256E' }}>
                    Allergies: <span className="font-semibold">Penicillin</span>
                  </div>
                  <div className="px-4 py-1.5 rounded-full text-sm" style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)', border: '1px solid #41256E' }}>
                    Chronic Disease: <span className="font-semibold">None</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Sections Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Medical History */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)', border: '1px solid #41256E' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaStethoscope style={{ color: '#6D28D9' }} />
                <h3 className="text-lg font-bold text-gray-800">Medical History</h3>
              </div>
              <FaPlus className="text-xl cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
            
            <div className="space-y-3 mb-4">
              {medicalHistory.map((item, idx) => (
                <div key={idx} className="text-sm">
                  <span className="font-semibold text-gray-800">{item.year}:</span>
                  <span className="text-gray-600 ml-2">{item.diagnosis}</span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-4 border-t" style={{ borderColor: '#41256E' }}>
              <FaChevronLeft className="cursor-pointer" style={{ color: '#6D28D9' }} />
              {[1, 2, 3, 4, 5].map((page) => (
                <span 
                  key={page}
                  className={`w-6 h-6 flex items-center justify-center rounded text-sm cursor-pointer ${
                    page === 1 ? 'text-white' : 'text-gray-600'
                  }`}
                  style={page === 1 ? { backgroundColor: '#6D28D9' } : {}}
                >
                  {page}
                </span>
              ))}
              <FaChevronRight className="cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
          </div>

          {/* Prescriptions */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)', border: '1px solid #41256E' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaPills style={{ color: '#6D28D9' }} />
                <h3 className="text-lg font-bold text-gray-800">Prescriptions</h3>
              </div>
              <FaPlus className="text-xl cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
            
            <div className="space-y-4">
              {prescriptions.map((prescription, idx) => (
                <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(109, 40, 217, 0.15)' }}>
                  <p className="font-semibold text-gray-800">{prescription.medication} <span className="text-sm font-normal">{prescription.dosage}</span></p>
                  <p className="text-sm text-gray-600 mt-1">{prescription.frequency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Results */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)', border: '1px solid #41256E' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaFlask style={{ color: '#6D28D9' }} />
                <h3 className="text-lg font-bold text-gray-800">Lab Results</h3>
              </div>
              <FaPlus className="text-xl cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
            
            <div className="space-y-3">
              {labResults.map((result, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: 'rgba(109, 40, 217, 0.15)' }}>
                  <div>
                    <p className="font-semibold text-gray-800">{result.test}</p>
                    <p className="text-sm text-gray-600">{result.date}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#10b981', color: 'white' }}>
                    {result.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Notes */}
          <div className="rounded-xl p-6" style={{ backgroundColor: 'rgba(109, 40, 217, 0.1)', border: '1px solid #41256E' }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaNotesMedical style={{ color: '#6D28D9' }} />
                <h3 className="text-lg font-bold text-gray-800">Doctor Notes</h3>
              </div>
              <FaPlus className="text-xl cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
            
            <div className="space-y-3">
              {doctorNotes.map((note, idx) => (
                <div key={idx} className="text-sm text-gray-600">
                  <span className="text-gray-400 mr-2">-</span>
                  {note}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t mt-4" style={{ borderColor: '#41256E' }}>
              <FaChevronLeft className="cursor-pointer" style={{ color: '#6D28D9' }} />
              <FaChevronRight className="cursor-pointer" style={{ color: '#6D28D9' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;