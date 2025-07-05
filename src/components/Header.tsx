
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b-2 border-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Bambinos.Live
          </div>
          <Button 
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
          >
            Join Class
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
