import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Logo Image */}
              <img
                src="https://bambinos.live/favicon.ico"
                alt="Bambinos Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              {/* Fallback con */}

            </div>
            <div className="font-bold text-xl mt-2 sm:text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bambinos.Live
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:block">
            <Button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0 text-sm sm:text-lg"
            >
              Join Class
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <div className="px-4 py-4">
              <Button
                onClick={scrollToBooking}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg border-0 text-base"
              >
                Join Class
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
