import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import StatisticsSection from "./components/StatisticsSection";
import Login from './components/LoginPage';
import Registre from './components/RegistrePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <StatisticsSection />
            <Footer />
          </>
        } />
        
        {/* Login Page */}
        <Route path="/login" element={<Login/>} />
        
        {/* Register Page */}
        <Route path="/registre" element={<Registre />} />
      </Routes>
    </Router>
  );
}

export default App;