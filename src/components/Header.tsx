import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone } from 'lucide-react';

const Header = () => {
  const phoneNumber = '5550677546';

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-[#FCC507] p-1.5 rounded mr-1">
                <Plane size={20} className="text-[#00153D] transform -rotate-45" />
              </div>
              <span className="text-[#FCC507] font-bold text-2xl tracking-tight">
                expedia
              </span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center bg-[#F0F3FF] px-4 py-2 rounded-full hover:bg-[#E5E9FF] transition-colors"
            >
              <Phone size={18} className="text-[#1668E3] mr-2" />
              <span className="text-[#1668E3] font-medium text-sm">
                {phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;