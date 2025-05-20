import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Globe, MessageSquare } from 'lucide-react';
import NavLinks from './NavLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-[#FCC507] font-bold text-2xl mr-8">
              expedia
            </Link>
            <NavLinks className="hidden md:flex" />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm flex items-center text-expedia-gray hover:text-expedia-blue">
              <Globe size={16} className="mr-1" />
              <span>Español</span>
              <ChevronDown size={16} />
            </button>
            <button className="text-sm flex items-center text-expedia-gray hover:text-expedia-blue">
              <MessageSquare size={16} className="mr-1" />
              <span>Servicio al cliente</span>
            </button>
            <button className="text-sm flex items-center text-expedia-gray hover:text-expedia-blue">
              <span>Mis viajes</span>
            </button>
            <button className="bg-expedia-blue text-white px-4 py-2 rounded hover:bg-expedia-hover transition">
              Iniciar sesión
            </button>
          </div>
          
          <button 
            className="md:hidden text-expedia-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <NavLinks className="flex flex-col space-y-4" />
            <div className="mt-6 flex flex-col space-y-4 border-t pt-4">
              <button className="text-sm flex items-center text-expedia-gray">
                <Globe size={16} className="mr-2" />
                <span>Español</span>
              </button>
              <button className="text-sm flex items-center text-expedia-gray">
                <MessageSquare size={16} className="mr-2" />
                <span>Servicio al cliente</span>
              </button>
              <button className="text-sm flex items-center text-expedia-gray">
                <User size={16} className="mr-2" />
                <span>Mis viajes</span>
              </button>
              <button className="w-full bg-expedia-blue text-white px-4 py-2 rounded hover:bg-expedia-hover transition">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;