
import React from 'react';
import { Star, Heart, Play } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Star className="w-4 h-4 text-yellow-500" />,
      text: "4.8 on Google",
      bgColor: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Heart className="w-4 h-4 text-green-500" />,
      text: "4.7 on Trustpilot",
      bgColor: "bg-green-50 border-green-200"
    },
    {
      icon: <Play className="w-4 h-4 text-blue-500" />,
      text: "Featured on Shark Tank",
      bgColor: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center space-x-2 px-3 py-2 rounded-full border ${badge.bgColor} shadow-sm`}
        >
          {badge.icon}
          <span className="text-sm font-medium text-gray-700">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
