
import React from 'react';
import { Star, Heart, Trophy } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Star className="w-6 h-6" />,
      text: "4.9 on Google",
      gradient: "from-yellow-500 to-orange-500",
      shadow: "shadow-yellow-200/50"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "4.8 on Trustpilot", 
      gradient: "from-green-500 to-emerald-500",
      shadow: "shadow-green-200/50"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      text: "Featured on Shark Tank",
      gradient: "from-blue-500 to-purple-500",
      shadow: "shadow-blue-200/50"
    }
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`group flex items-center space-x-4 px-8 py-4 bg-gradient-to-r ${badge.gradient} rounded-2xl text-white font-bold text-base transition-all duration-300 hover:scale-105 ${badge.shadow} shadow-xl hover:shadow-2xl cursor-pointer`}
        >
          <div className="group-hover:scale-110 transition-transform duration-300">
            {badge.icon}
          </div>
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
