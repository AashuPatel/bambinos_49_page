
import React from 'react';
import { Star, Heart, Play } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Star className="w-5 h-5 text-yellow-600" />,
      text: "4.8 on Google",
      bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-600",
      textColor: "text-white",
      shadow: "shadow-yellow-200"
    },
    {
      icon: <Heart className="w-5 h-5 text-white" />,
      text: "4.7 on Trustpilot",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600 border-green-700",
      textColor: "text-white",
      shadow: "shadow-green-200"
    },
    {
      icon: <Play className="w-5 h-5 text-white" />,
      text: "Featured on Shark Tank",
      bgColor: "bg-gradient-to-r from-red-500 to-red-600 border-red-700",
      textColor: "text-white",
      shadow: "shadow-red-200"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center space-x-3 px-5 py-3 rounded-full border-2 ${badge.bgColor} ${badge.shadow} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}
        >
          {badge.icon}
          <span className={`text-sm font-bold ${badge.textColor}`}>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
