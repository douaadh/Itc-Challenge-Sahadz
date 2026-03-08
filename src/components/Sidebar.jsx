import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { 
      path: '/find-doctors', 
      label: 'Find Doctors', 
      icon: '/Expert.png'
    },
    { 
      path: '/pharmacien',  // ✅ Changed from '/pharmacies' to '/pharmacien'
      label: 'Nearby Pharmacies', 
      icon: '/Group.png'
    },
    { 
      path: '/health-associations', 
      label: 'Health Associations', 
      icon: '/Vector-1.png'
    },
    { 
      path: '/instant-consultation', 
      label: 'Instant Consultation', 
      icon: '/si_ai-fill.png'
    },
  ];

  return (
    <aside className="w-72 min-h-screen p-4 flex flex-col shadow-lg bg-[#6D28D93B]">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8 px-2">
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
              className={`w-full flex items-center gap-8 px-5 py-4 transition-all duration-300 group relative ${
                isActive
                  ? 'bg-[#760EAFC4] text-white shadow-lg'
                  : 'text-[#6D28D9]/23'
              }`}
              style={{
                borderLeft: isActive ? '13px solid #41256EF2' : '13px solid transparent',
                borderRadius: isActive ? '0px 12px 12px 0px' : '12px'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderLeft = '13px solid #41256EF2';
                  e.currentTarget.style.borderRadius = '0px 12px 12px 0px';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderLeft = '13px solid transparent';
                  e.currentTarget.style.borderRadius = '12px';
                }
              }}
            >
              <div 
                className={`w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className={`w-full h-full object-contain ${
                    isActive ? 'filter brightness-0 invert' : ''
                  }`}
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