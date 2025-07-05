
import React from 'react';
import { Star, Heart, Play } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Star className="w-4 h-4 text-yellow-600" />,
      text: "4.8 on Google",
      bgColor: "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200",
      textColor: "text-yellow-800"
    },
    {
      icon: <Heart className="w-4 h-4 text-green-600" />,
      text: "4.7 on Trustpilot",
      bgColor: "bg-gradient-to-r from-green-50 to-green-100 border-green-200",
      textColor: "text-green-800"
    },
    {
      icon: <Play className="w-4 h-4 text-red-600" />,
      text: "Featured on Shark Tank",
      bgColor: "bg-gradient-to-r from-red-50 to-red-100 border-red-200",
      textColor: "text-red-800"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center space-x-2 px-4 py-3 rounded-full border-2 ${badge.bgColor} shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
        >
          {badge.icon}
          <span className={`text-sm font-bold ${badge.textColor}`}>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
