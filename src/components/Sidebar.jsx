// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ role = 'patient' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Menus selon le rôle
  const menus = {
    patient: [
      
      { path: '/find-doctors', label: 'Find Doctors', icon: '/Expert.png' },
      { path: '/pharmacien', label: 'Nearby Pharmacies', icon: '/Group.png' },
      { path: '/health-associations', label: 'Health Associations', icon: '/Vector-1.png' },
      { path: '/instant-consultation', label: 'Instant Consultation', icon: '/si_ai-fill.png' },
    ],
    doctor: [
      { path: '/doctor-dashboard', label: 'Dashboard', icon: '/Vector-4.png' },
      { path: '/doctor-patients', label: 'Patients', icon: '/patients-icon.png' },
      { path: '/doctor-appointments', label: 'Appointment', icon: '/appointments-icon.png' },
      
    ],
    pharmacist: [
      { path: '/pharmacy-interface', label: 'Dashboard', icon: '/dashboard-icon.png' },
      { path: '/pharmacy-inventory', label: 'Inventory', icon: '/inventory-icon.png' },
      { path: '/pharmacy-profile', label: 'Profile', icon: '/profile-icon.png' },
    ],
  };

  const menuItems = menus[role] || menus.patient;

  return (
    <aside className="w-72 min-h-screen flex flex-col shadow-lg bg-[#6D28D93B] border-r border-[rgba(65,37,110,0.2)]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 px-4 pt-6">
        <img src="/logo saha.svg" alt="SahaDz" className="h-16 w-auto" />
      </div>

      {/* Menu Items */}
      <nav className="space-y-1 flex-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center gap-3 px-4 py-4 
                transition-all duration-300 group
                border-l-[13px]
                ${isActive 
                  ? 'bg-[rgba(118,14,175,0.45)] text-white border-l-[rgba(65,37,110,0.95)]' 
                  : 'text-[#41256E] border-l-transparent hover:border-l-[rgba(65,37,110,0.95)] hover:bg-[rgba(118,14,175,0.45)] hover:text-white'
                }
              `}
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img src={item.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-left flex-1">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Back to Home */}
      <div className="p-4 border-t border-[#41256E]/20">
        <button
          onClick={() => navigate('/')}
          className="w-full py-3 text-[#6D28D9] font-medium hover:bg-[#6D28D9]/10 rounded-lg transition"
        >
          Back to Home
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;