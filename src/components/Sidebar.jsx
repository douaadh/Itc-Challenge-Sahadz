import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      path: '/find-doctors', 
      label: 'Find Doctors', 
      icon: '/fluent_patient-32-filled.png'
    },
    { 
      path: '/pharmacies', 
      label: 'Nearby Pharmacies', 
      icon: '/healthicons_pharmacy-outline-24px.png'
    },
    { 
      path: '/health-associations', 
      label: 'Health Associations', 
      icon: '/Group.png'
    },
    { 
      path: '/instant-consultation', 
      label: 'Instant Consultation', 
      icon: '/boxicons_community-filled.png'
    },
  ];

  return (
    <aside className="w-72 min-h-screen p-4 flex flex-col shadow-lg bg-[#6D28D93B]">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8 px-2 ">
        <img 
            src="/logo saha.svg" 
            alt="SahaDz Logo" 
            className="w-full h-full object-contain"
          />
        </div>
       
    
      {/* Menu Items */}
      <nav className="space-y-1 flex-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-8 px-5 py-4 rounded-xl transition-all duration-300 group text-[#6D28D9]/23 ${
                isActive
                  ? 'bg-[#7B61FF] text-white shadow-lg'
                  : 'text-[#4A4A4A] hover:bg-[#6D28D93B] hover:shadow-md'
              }`}
            >
              <div 
                className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? 'filter brightness-0 invert' :  ''
                  
                }`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className={`font-semibold ${
                isActive ? 'text-white' : 'text-[#4a169d]'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      
    </aside>
  );
};

export default Sidebar;