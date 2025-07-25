import React, { useState, useEffect } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const FOMONotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    "Kavya (Age 6) just booked her demo!",
    "Arjun (Age 8) joined from Mumbai!",
    "Priya (Age 5) started learning!",
    "Rohit (Age 7) from Delhi enrolled!",
    "Sneha (Age 9) booked demo class!",
    "Kiran (Age 6) from Bangalore joined!",
    "Aditi (Age 8) from Pune signed up!",
    "Vikram (Age 7) completed demo!",
    "Ananya (Age 10) from Chennai joined!",
    "Dev (Age 11) started his journey!"
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const interval = setInterval(showNotification, Math.random() * 5000 + 6000);

    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 max-w-xs sm:max-w-xs transform transition-all duration-500 z-50 border border-green-400/20 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'
        }`}
    >
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="flex-shrink-0 p-1.5 sm:p-2 bg-white/20 rounded-lg sm:rounded-xl">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-white font-bold truncate">{currentNotification}</p>
          <p className="text-xs text-green-100 mt-0.5 sm:mt-1 font-medium flex items-center">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
            Just now
          </p>
        </div>
      </div>
    </div>
  );
};

export default FOMONotifications;
