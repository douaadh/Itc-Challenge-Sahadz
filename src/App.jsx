import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Shared Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import StatisticsSection from './components/StatisticsSection';
import Login from './components/LoginPage';
import Registre from './components/RegistrePage';

// Patient Pages
import PatientDashboard from './patient-pages/PatientDashboard';
import FindDoctor from './patient-pages/FindDoctor';
import PatientDoctorProfile from './patient-pages/DoctorProfile-patient';
import BookingForm from './patient-pages/BookingForm';

// Pharmacy Pages
import PharmaInterface from './pharmacy-pages/pharma-interface';
import PharmacienPage from './pharmacy-pages/pharmacienPage-for patient';

// Doctor Pages
import DoctorDashboard from './Doctor-pages/DoctorDashboard';
import DoctorPatients from './Doctor-pages/DoctorPatients';
import PatientMedicalRecord from './Doctor-pages/DoctorProfile';
import DoctorAppointments from './Doctor-pages/DoctorAppointments';
import DoctorProfilePage from './Doctor-pages/DoctorProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <StatisticsSection />
            <Footer />
          </>
        } />
        
        <Route path="/login" element={<Login />} />
       <Route path="/registre" element={<Registre />} /> 
        
        {/* ===== PATIENT ROUTES ===== */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/find-doctors" element={<FindDoctor />} />
        <Route path="/doctor-profile/:id" element={<PatientDoctorProfile />} />
        <Route path="/book-appointment/:id" element={<BookingForm />} />
        
        {/* ===== PHARMACY ROUTES ===== */}
        <Route path="/pharmacien" element={<PharmacienPage />} />
        <Route path="/pharmacy-interface" element={<PharmaInterface />} />
        
        {/* ===== DOCTOR ROUTES ===== */}
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-patients" element={<DoctorPatients />} />
        <Route path="/doctor-patient-profile/:id" element={<PatientMedicalRecord />} />
        <Route path="/doctor-appointments" element={<DoctorAppointments />} />
      </Routes>
    </Router>
  );
}

export default App;