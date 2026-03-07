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
import DoctorProfile from './patient-pages/DoctorProfile';
import BookingForm from './patient-pages/BookingForm';

// Pharmacy Pages
import PharmacienPage from './pharmacy-pages/pharmacienPage';

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
        <Route path="/register" element={<Registre />} />
        
        {/* ===== PATIENT ROUTES ===== */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/find-doctors" element={<FindDoctor />} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
        <Route path="/book-appointment/:id" element={<BookingForm />} />
        
        {/* ===== PHARMACY ROUTES ===== */}
        <Route path="/pharmacien" element={<PharmacienPage />} />
        
        {/* ===== DOCTOR ROUTES (Future) ===== */}
        {/* <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> */}
        
        {/* ===== HEALTH ASSOCIATIONS ROUTE (Future) ===== */}
        {/* <Route path="/health-associations" element={<HealthAssociations />} /> */}
        
        {/* ===== INSTANT CONSULTATION ROUTE (Future) ===== */}
        {/* <Route path="/instant-consultation" element={<InstantConsultation />} /> */}
      </Routes>
    </Router>
  );
}

export default App;