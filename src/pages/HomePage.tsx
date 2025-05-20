import React from 'react';
import HeroSection from '../components/HeroSection';
import PromotionBanner from '../components/PromotionBanner';
import DestinationCard from '../components/DestinationCard';
import DealCard from '../components/DealCard';
import AppPromotion from '../components/AppPromotion';
import { MapPin } from 'lucide-react';

const HomePage = () => {
  const destinations = [
    {
      name: 'Cancún',
      imageUrl: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Playas de arena blanca y aguas turquesas'
    },
    {
      name: 'Ciudad de México',
      imageUrl: 'https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Historia, cultura y gastronomía en la capital'
    },
    {
      name: 'Los Cabos',
      imageUrl: 'https://images.pexels.com/photos/7263923/pexels-photo-7263923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Playas, golf y vistas impresionantes'
    },
    {
      name: 'Puerto Vallarta',
      imageUrl: 'https://images.pexels.com/photos/6580703/pexels-photo-6580703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Encanto mexicano junto al mar'
    }
  ];

  const deals = [
    {
      title: 'Grand Velas Riviera Maya',
      location: 'Playa del Carmen, Quintana Roo',
      imageUrl: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 9.6,
      reviewCount: 1452,
      price: 8750,
      originalPrice: 12500,
      discountPercent: 30,
      nights: 2
    },
    {
      title: 'Hyatt Ziva Cancún',
      location: 'Cancún, Quintana Roo',
      imageUrl: 'https://images.pexels.com/photos/2351289/pexels-photo-2351289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 9.4,
      reviewCount: 1287,
      price: 7890,
      originalPrice: 9990,
      discountPercent: 21,
      nights: 2
    },
    {
      title: 'Hard Rock Hotel Los Cabos',
      location: 'Cabo San Lucas, Baja California Sur',
      imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 8.9,
      reviewCount: 976,
      price: 6250,
      originalPrice: 8450,
      discountPercent: 26,
      nights: 2
    },
    {
      title: 'Hotel Xcaret México',
      location: 'Playa del Carmen, Quintana Roo',
      imageUrl: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 9.8,
      reviewCount: 2103,
      price: 9900,
      originalPrice: 14500,
      discountPercent: 32,
      nights: 2
    }
  ];

  return (
    <div>
      <HeroSection />
      
      <PromotionBanner />
      
      {/* Featured Destinations */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Destinos populares en México</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                imageUrl={destination.imageUrl}
                name={destination.name}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Deals Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-800 text-xs font-bold rounded-full mb-2">
                OFERTAS ESPECIALES
              </span>
              <h2 className="text-2xl font-bold text-gray-800">Ofertas destacadas para ti</h2>
            </div>
            <button className="text-blue-600 font-medium mt-4 md:mt-0">
              Ver todas las ofertas
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal, index) => (
              <DealCard
                key={index}
                imageUrl={deal.imageUrl}
                title={deal.title}
                location={deal.location}
                rating={deal.rating}
                reviewCount={deal.reviewCount}
                price={deal.price}
                originalPrice={deal.originalPrice}
                discountPercent={deal.discountPercent}
                nights={deal.nights}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Travel Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Explora por categoría</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Todo incluido', icon: '🏨' },
              { name: 'Playa', icon: '🏖️' },
              { name: 'Pequeñas ciudades', icon: '🏘️' },
              { name: 'Lujo', icon: '✨' },
              { name: 'Familiares', icon: '👨‍👩‍👧‍👦' },
              { name: 'Populares', icon: '🔥' },
              { name: 'Románticos', icon: '❤️' },
              { name: 'Económicos', icon: '💰' }
            ].map((category, idx) => (
              <div 
                key={idx}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <span className="text-2xl mr-3">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nearby Destinations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Destinos cerca de ti</h2>
          <p className="text-gray-600 mb-8">Escapes de fin de semana y viajes cortos</p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <MapPin className="text-blue-600 mr-2" size={20} />
              <span className="font-medium">Ciudad de México</span>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Cuernavaca', distance: '85 km', drive: '1.5 horas' },
                { name: 'Valle de Bravo', distance: '140 km', drive: '2 horas' },
                { name: 'Puebla', distance: '135 km', drive: '2 horas' },
                { name: 'Taxco', distance: '170 km', drive: '2.5 horas' },
                { name: 'Tepoztlán', distance: '82 km', drive: '1.5 horas' }
              ].map((destination, idx) => (
                <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {destination.name}
                  </span>
                  <div className="text-sm text-gray-600">
                    <span>{destination.distance}</span>
                    <span className="mx-2">•</span>
                    <span>{destination.drive}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <AppPromotion />
      
      {/* Inspiration Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Inspiración para tu próximo viaje</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Las 10 playas más hermosas de México',
                image: 'https://images.pexels.com/photos/1835718/pexels-photo-1835718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                type: 'Guía'
              },
              {
                title: 'Descubre los Pueblos Mágicos imperdibles',
                image: 'https://images.pexels.com/photos/11419356/pexels-photo-11419356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                type: 'Artículo'
              },
              {
                title: 'Gastronomía mexicana: un recorrido por sus sabores',
                image: 'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                type: 'Blog'
              }
            ].map((article, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mb-2">
                    {article.type}
                  </span>
                  <h3 className="font-bold text-gray-800 mb-2">{article.title}</h3>
                  <button className="text-blue-600 text-sm font-medium">Leer más</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;