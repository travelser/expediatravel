import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Plane, Package, Car, Ticket, Ship } from 'lucide-react';

interface NavLinksProps {
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ className = "" }) => {
  const links = [
    { name: "Hospedaje", icon: <Building2 size={18} /> },
    { name: "Vuelos", icon: <Plane size={18} /> },
    { name: "Paquetes", icon: <Package size={18} /> },
    { name: "Autos", icon: <Car size={18} /> },
    { name: "Cosas que hacer", icon: <Ticket size={18} /> },
    { name: "Cruceros", icon: <Ship size={18} /> },
  ];

  return (
    <nav className={className}>
      {links.map((link, index) => (
        <Link 
          key={index}
          to="/" 
          className="flex items-center px-4 py-2 text-sm font-medium text-expedia-gray hover:text-expedia-blue transition border-b-2 border-transparent hover:border-expedia-blue"
        >
          {link.icon}
          <span className="ml-1">{link.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;