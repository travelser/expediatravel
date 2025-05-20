import React from 'react';
import { ChevronDown, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Acerca de Expedia',
      links: ['Quiénes somos', 'Empleo', 'Lista de viaje', 'Inversores', 'Programa de afiliados']
    },
    {
      title: 'Explorar',
      links: ['Reseñas', 'Artículos de viaje', 'Ciudades', 'Aeropuertos', 'Hoteles populares']
    },
    {
      title: 'Políticas',
      links: ['Privacidad', 'Términos de uso', 'Mapa del sitio', 'Accesibilidad', 'Tus derechos de privacidad']
    },
    {
      title: 'Ayuda',
      links: ['Soporte', 'Cancelar reservación', 'Coronavirus', 'Utilizar un cupón', 'Grupo de reservas']
    }
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* App promotion */}
        <div className="mb-12 pb-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Ahorra tiempo y dinero</h3>
              <p className="text-gray-400">
                Recibe ofertas especiales y promociones exclusivas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Footer links for desktop */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer links for mobile - accordion style */}
        <div className="md:hidden space-y-4 mb-12">
          {footerLinks.map((section, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full py-2 text-left font-bold">
                {section.title}
                <ChevronDown size={18} />
              </button>
              <ul className="hidden space-y-2 mt-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <div className="flex items-center mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold mr-8">expedia</a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-right">
            © 2025 Expedia, Inc. Todos los derechos reservados. <br />
            Expedia y el logo de Avión son marcas registradas o marcas de Expedia, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;