import React from 'react';
import { Smartphone, Award, Tag } from 'lucide-react';

const AppPromotion = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Descarga la app de Expedia
            </h2>
            <p className="text-gray-600 mb-6">
              Disfruta de ofertas exclusivas, organiza tus viajes y recibe actualizaciones en tiempo real desde cualquier lugar.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="text-blue-600 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800">Ofertas para miembros</h3>
                  <p className="text-gray-600 text-sm">Ahorra hasta un 10% cuando reserves desde la app</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Tag className="text-blue-600 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800">Precios exclusivos</h3>
                  <p className="text-gray-600 text-sm">Encontrarás tarifas que no están disponibles en ningún otro lugar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Smartphone className="text-blue-600 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-gray-800">Organiza tus viajes</h3>
                  <p className="text-gray-600 text-sm">Accede a tus reservaciones incluso sin conexión</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
                Descargar para iOS
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
                Descargar para Android
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-3xl border-2 border-gray-200 shadow-lg transform rotate-3 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Expedia App" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;