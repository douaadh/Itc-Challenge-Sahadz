import React from 'react';

const ServiceCard = ({ image, title, description, bgColor }) => {
  return (
    <div className={`${bgColor}  rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1`}>
      <div className="flex items-start space-x-4">
        {image && (
          <div className="w-16 h-16 flex items-center justify-center shrink-0 p-3">
            <img src={image} alt={title} className="w-full h-full object-contain" />
          </div>
        )}
        <div>
          <h3 className=" text-3xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700 leading-relaxed text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;0