
import React from 'react';

const TrustBadges = () => {
  const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const TrustpilotIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00B67A"/>
    </svg>
  );

  const SharkTankIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FFD700"/>
    </svg>
  );

  const badges = [
    {
      icon: <GoogleIcon />,
      text: "4.9 on Google",
      bgColor: "bg-white",
      textColor: "text-gray-700",
      borderColor: "border-gray-200"
    },
    {
      icon: <TrustpilotIcon />,
      text: "4.8 on Trustpilot", 
      bgColor: "bg-white",
      textColor: "text-gray-700",
      borderColor: "border-gray-200"
    },
    {
      icon: <SharkTankIcon />,
      text: "Featured on Shark Tank",
      bgColor: "bg-white",
      textColor: "text-gray-700",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 px-4 py-2.5 ${badge.bgColor} ${badge.textColor} rounded-full border ${badge.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm`}
        >
          <div className="flex-shrink-0">
            {badge.icon}
          </div>
          <span className="font-semibold text-sm whitespace-nowrap">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
