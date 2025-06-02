import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  current, 
  total, 
  className = '' 
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">
          Passo {current} de {total}
        </span>
        <span className="text-sm text-purple-400">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
