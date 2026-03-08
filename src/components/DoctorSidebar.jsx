import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaClipboardList, FaUserInjured, FaCalendar } from 'react-icons/fa';

const DoctorSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      icon: FaClipboardList, 
      label: 'Dashboard', 
      path: '/doctor-dashboard' 
    },
    { 
      icon: FaUserInjured, 
      label: 'Patients', 
      path: '/doctor-patients' 
    },
    { 
      icon: FaCalendar, 
      label: 'Appointment', 
      path: '/doctor-appointments' 
    },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg fixed left-0 top-0 flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b" style={{ borderColor: '#41256E' }}>
        <h1 className="text-2xl font-bold" style={{ color: '#6D28D9' }}>SahaDz</h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'text-white' 
                  : 'text-gray-600 hover:bg-[#6D28D9]/10'
              }`}
              style={isActive ? { backgroundColor: '#6D28D9' } : {}}
            >
              <Icon className="text-lg" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default DoctorSidebar;