import React from 'react';

interface DestinationCardProps {
  imageUrl: string;
  name: string;
  description?: string;
  isLarge?: boolean;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  imageUrl, 
  name, 
  description,
  isLarge = false 
}) => {
  return (
    <div className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${
      isLarge ? 'col-span-2 md:col-span-1' : ''
    }`}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{name}</h3>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default DestinationCard;