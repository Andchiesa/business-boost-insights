import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: 'purple' | 'cyan' | 'pink' | 'blue';
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ feature }) => {
  const colorClasses = {
    purple: {
      border: 'border-purple-500/20 hover:border-purple-500/50',
      bg: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25 group-hover:shadow-purple-500/50',
      text: 'text-purple-300'
    },
    cyan: {
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      bg: 'from-cyan-500 to-cyan-600',
      shadow: 'shadow-cyan-500/25 group-hover:shadow-cyan-500/50',
      text: 'text-cyan-300'
    },
    pink: {
      border: 'border-pink-500/20 hover:border-pink-500/50',
      bg: 'from-pink-500 to-pink-600',
      shadow: 'shadow-pink-500/25 group-hover:shadow-pink-500/50',
      text: 'text-pink-300'
    },
    blue: {
      border: 'border-blue-500/20 hover:border-blue-500/50',
      bg: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/25 group-hover:shadow-blue-500/50',
      text: 'text-blue-300'
    }
  };

  const colors = colorClasses[feature.color];

  return (
    <div className={`group bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border ${colors.border} transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105`}>
      <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${colors.shadow} transition-all duration-300`}>
        {feature.id === 'digital-marketing' ? (
          <TrendingUp className="text-white" size={24} />
        ) : (
          <span className="text-white font-bold text-2xl" aria-hidden="true">
            {feature.icon}
          </span>
        )}
      </div>
      <h3 className={`text-xl font-bold mb-3 ${colors.text}`}>
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;

