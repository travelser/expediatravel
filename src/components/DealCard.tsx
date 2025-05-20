import React from 'react';

interface DealCardProps {
  imageUrl: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  nights?: number;
}

const DealCard: React.FC<DealCardProps> = ({
  imageUrl,
  title,
  location,
  rating,
  reviewCount,
  price,
  originalPrice,
  discountPercent,
  nights = 1
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {discountPercent && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
            {discountPercent}% DESCUENTO
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-gray-800 line-clamp-1">{title}</h3>
            <p className="text-gray-600 text-sm">{location}</p>
          </div>
          <div className="flex items-center bg-blue-800 text-white px-2 py-1 rounded">
            <span className="font-bold text-sm">{rating}</span>
            <span className="text-xs ml-1">/10</span>
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="w-20 h-3 bg-gray-200 rounded overflow-hidden">
            <div 
              className="h-full bg-green-500" 
              style={{ width: `${Math.min(100, rating * 10)}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-600 ml-2">{reviewCount} reseñas</span>
        </div>
        
        <div className="mt-4 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-600">Desde</p>
            <div className="flex items-baseline">
              {originalPrice && (
                <span className="text-gray-500 line-through text-sm mr-2">
                  ${originalPrice.toLocaleString('es-MX')}
                </span>
              )}
              <span className="text-xl font-bold text-gray-900">${price.toLocaleString('es-MX')}</span>
            </div>
            <p className="text-xs text-gray-600">Total {nights} noche{nights > 1 ? 's' : ''}</p>
          </div>
          <button className="text-blue-600 font-medium text-sm">Ver oferta</button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;