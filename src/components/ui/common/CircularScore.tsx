import React from 'react';

interface CircularScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CircularScore: React.FC<CircularScoreProps> = ({ 
  score, 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: { container: 'w-16 h-16', stroke: '4', text: 'text-sm' },
    md: { container: 'w-24 h-24', stroke: '6', text: 'text-lg' },
    lg: { container: 'w-32 h-32', stroke: '8', text: 'text-2xl' }
  };

  const { container, stroke, text } = sizes[size];
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStrokeColor = (score: number) => {
    if (score >= 80) return 'stroke-green-400';
    if (score >= 60) return 'stroke-yellow-400';
    if (score >= 40) return 'stroke-orange-400';
    return 'stroke-red-400';
  };

  return (
    <div className={`relative ${container} ${className}`}>
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-gray-700"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`${getStrokeColor(score)} transition-all duration-1000 ease-out`}
        />
      </svg>
      {/* Score text */}
      <div className={`absolute inset-0 flex items-center justify-center ${text} font-bold ${getScoreColor(score)}`}>
        {score}
      </div>
    </div>
  );
};

export default CircularScore;
