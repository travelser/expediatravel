import React, { useState } from 'react';
import { Calendar, MapPin, User, Search, Building2, Plane, Package, Car, Ticket } from 'lucide-react';

const tabs = [
  { id: 'stays', label: 'Hospedaje', icon: <Building2 size={18} /> },
  { id: 'flights', label: 'Vuelos', icon: <Plane size={18} /> },
  { id: 'cars', label: 'Autos', icon: <Car size={18} /> },
  { id: 'packages', label: 'Paquetes', icon: <Package size={18} /> },
  { id: 'activities', label: 'Actividades', icon: <Ticket size={18} /> }
];

type TabKey = 'stays' | 'flights' | 'cars' | 'packages' | 'activities';

const popularDestinations: Record<TabKey, string[]> = {
  stays: ['Cancún', 'Ciudad de México', 'Guadalajara', 'Puerto Vallarta'],
  flights: ['Monterrey', 'Tijuana', 'Mérida', 'Los Cabos'],
  cars: ['Aeropuerto CDMX', 'Aeropuerto Cancún', 'Aeropuerto Guadalajara'],
  packages: ['Riviera Maya', 'Los Cabos', 'Puerto Vallarta', 'Acapulco'],
  activities: ['Tours en Cancún', 'Xcaret', 'Chichén Itzá', 'Xel-Há']
};

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('stays');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-5xl mx-auto -mt-8 relative z-10">
      {/* Tabs */}  
      <div className="flex overflow-x-auto mb-6 -mx-4 px-4 md:px-0 md:mx-0">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`flex items-center px-4 py-2 mr-2 text-sm md:text-base font-medium rounded-full whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-expedia-blue text-white' 
                : 'bg-gray-100 text-expedia-gray hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id as TabKey)}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Form */}
      {activeTab === 'stays' && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-expedia-gray mb-1">Destino</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-expedia-light-gray" size={18} />
                <input
                  type="text"
                  placeholder="¿A dónde vas?"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-expedia-blue"
                  onFocus={() => setShowDestinations(true)}
                  onBlur={() => setTimeout(() => setShowDestinations(false), 200)}
                />
                {showDestinations && (
                  <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 p-2">
                    <div className="text-sm font-medium text-expedia-gray mb-2">Destinos populares</div>
                    {popularDestinations[activeTab].map((dest, idx) => (
                      <div key={idx} className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer text-expedia-gray">
                        {dest}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-expedia-gray mb-1">Fechas</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-expedia-light-gray" size={18} />
                <input
                  type="text"
                  placeholder="Entrada - Salida"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-expedia-blue"
                  onFocus={() => setShowDatePicker(true)}
                  onBlur={() => setTimeout(() => setShowDatePicker(false), 200)}
                />
                {showDatePicker && (
                  <div className="absolute top-full left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 p-4">
                    <div className="text-center text-sm text-expedia-gray">
                      Calendario (UI demostrativa)
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-expedia-gray mb-1">Viajeros</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-expedia-light-gray" size={18} />
                <input
                  type="text"
                  placeholder="2 personas, 1 habitación"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-expedia-blue"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                id="add-flight"
                type="checkbox"
                className="h-4 w-4 text-expedia-blue focus:ring-expedia-blue border-gray-300 rounded"
              />
              <label htmlFor="add-flight" className="ml-2 block text-sm text-expedia-gray">
                Agregar vuelo
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="add-car"
                type="checkbox"
                className="h-4 w-4 text-expedia-blue focus:ring-expedia-blue border-gray-300 rounded"
              />
              <label htmlFor="add-car" className="ml-2 block text-sm text-expedia-gray">
                Agregar auto
              </label>
            </div>
          </div>

          <button className="w-full md:w-auto bg-expedia-blue hover:bg-expedia-hover text-white py-3 px-6 rounded font-medium flex items-center justify-center transition-colors">
            <Search size={18} className="mr-2" />
            Buscar
          </button>
        </div>
      )}

      {activeTab !== 'stays' && (
        <div className="p-8 text-center text-expedia-light-gray">
          <div className="mt-4 text-sm">
            <div className="font-medium mb-2">Destinos populares para {tabs.find(t => t.id === activeTab)?.label}:</div>
            <div className="flex flex-wrap justify-center gap-2">
              {popularDestinations[activeTab].map((dest, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-expedia-gray">
                  {dest}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;