import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      image: '/Expert.png',
      title: 'Expert Consultations',
      description: 'Book appointments or consult with top-rated medical professionals via secure video calls.',
      bgColor: 'bg-[#6D28D9]/20'
    },
    {
      image: '/Group.png',
      title: 'Smart Pharmacy Locator',
      description: 'Find open pharmacies near you in real-time and check medication availability instantly.',
      bgColor: 'bg-teal-100'
    },
    {
      image: '/boxicons_community-filled.png',
       title: 'Community Support',
      description: 'Connect with health associations and patient groups for guidance, resources, and shared experiences.',
      bgColor: 'bg-teal-100'
    },
    {
      image: '/AI.png',
      title: '24/7 AI Assistance',
      description: 'Chat with our intelligent assistant for symptom checking, health tips, and instant navigation.',
      bgColor: 'bg-[#6D28D9]/20'
    }
  ];

  return (
    <section className="py-20 ">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="mb-16">
    <div className="flex items-center justify-center relative">
      <div className="h-0.5 bg-purple-700 absolute left-0 right-0"></div>
      <h2 className="relative bg-white px-8 text-6xl font-bold text-gray-800 z-10">
        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6D28D9] to-[#3A1573]">
          Services
        </span>
      </h2>
    </div>
  

        </div>

        <div className="grid md:grid-cols-2 text-2xl gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;