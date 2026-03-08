import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Default menu items for regular users
  const defaultMenuItems = [
    { 
      path: '/find-doctors', 
      label: 'Find Doctors', 
      icon: '/Expert.png'
    },
    { 
      path: '/pharmacien',
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

  // Use provided menuItems or default to user menu
  const items = menuItems || defaultMenuItems;

  return (
    <aside className="w-72 min-h-screen flex flex-col shadow-lg bg-[#6D28D93B] border-r border-[rgba(65,37,110,0.2)]">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-8 px-4 pt-4">
        <img 
          src="/logo saha.svg" 
          alt="SahaDz Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    
      {/* Menu Items */}
      <nav className="space-y-1 flex-1">
        {items.map((item, index) => {
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
              <div 
                className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
              >
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className={`w-full h-full object-contain ${
                    isActive ? 'filter brightness-0 invert' : ''
                  }`}
                />
              </div>
              <span className={`font-semibold text-left flex-1 ${
                isActive ? 'text-white' : 'text-[#41256E] group-hover:text-white'
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