
import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const FOMONotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    "Kavya (Age 6) just booked a ₹49 demo!",
    "Arjun (Age 8) joined from Mumbai!",
    "Priya (Age 5) started her journey!",
    "Rohit (Age 7) from Delhi just enrolled!",
    "Sneha (Age 9) booked her demo class!",
    "Kiran (Age 6) from Bangalore joined!",
    "Aditi (Age 8) from Pune just signed up!",
    "Vikram (Age 7) completed his demo!"
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
    
    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 bg-white border-2 border-green-200 rounded-2xl shadow-2xl p-4 max-w-xs transform transition-all duration-500 z-50 ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <CheckCircle className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <p className="text-sm text-gray-900 font-semibold">{currentNotification}</p>
          <p className="text-xs text-gray-500 mt-1">Just now</p>
        </div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default FOMONotifications;
