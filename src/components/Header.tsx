
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-blue-600">
            Bambinos.Live
          </div>
          <Button 
            onClick={scrollToBooking}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Join Class
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
