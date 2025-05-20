import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PromotionBanner = () => {
  return (
    <div className="bg-expedia-darkblue text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <ShieldCheck className="w-5 h-5" />
          <p className="text-sm">
            Llama ahora al 555 067 7546 y ahorra desde 10% en más de 100,000 hoteles en el mundo por ser socio. 
          </p>
          <button className="text-sm font-semibold text-white hover:underline">
         
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;