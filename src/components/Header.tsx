import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Header = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Header;