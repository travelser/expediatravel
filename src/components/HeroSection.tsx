import React from 'react';
import SearchForm from './SearchForm';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[420px] overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Beach destination" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 pt-16 md:pt-24">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ahorra en tu próximo viaje
              </h1>
              <p className="text-xl text-white mb-8">
                Busca ofertas en hoteles, casas y mucho más...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Form positioned over the hero image */}
      <div className="container mx-auto px-4 relative">
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;