
import React, { useState, useEffect } from 'react';

const FOMONotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const notifications = [
    "Kavya (Age 6) just booked a ₹49 demo!",
    "Arjun (Age 8) joined from Mumbai!",
    "Priya (Age 5) started her journey!",
    "Rohit (Age 7) from Delhi just enrolled!",
    "Sneha (Age 9) booked her demo class!",
    "Kiran (Age 6) from Bangalore joined!"
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

    const interval = setInterval(showNotification, Math.random() * 5000 + 5000);
    
    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-xs transform transition-all duration-500 z-40 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-sm text-gray-800 font-medium">{currentNotification}</p>
      </div>
    </div>
  );
};

export default FOMONotifications;
