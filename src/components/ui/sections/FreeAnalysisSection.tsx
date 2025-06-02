import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AnalysisItem {
  category: string;
  status: 'good' | 'warning' | 'error';
  message: string;
}

interface FreeAnalysisSectionProps {
  strengths: AnalysisItem[];
  issues: AnalysisItem[];
}

const FreeAnalysisSection: React.FC<FreeAnalysisSectionProps> = ({
  strengths,
  issues
}) => {
  const { texts } = useLanguage();

  const getIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-400" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-green-500/30 bg-green-500/10';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'error':
        return 'border-red-500/30 bg-red-500/10';
      default:
        return 'border-gray-500/30 bg-gray-500/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Pontos Fortes */}
      <div>
        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          {texts.result.freeAnalysis.strengths.title}
        </h3>
        
        {strengths.length > 0 ? (
          <div className="space-y-3">
            {strengths.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border backdrop-blur-sm ${getStatusColor(item.status)}`}
              >
                <div className="flex items-start space-x-3">
                  {getIcon(item.status)}
                  <div>
                    <span className="font-medium text-white">{item.category}</span>
                    <p className="text-gray-300 text-sm mt-1">{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">
            {texts.result.freeAnalysis.strengths.noStrengths}
          </p>
        )}
      </div>

      {/* Principais Problemas */}
      <div>
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
          <XCircle className="w-6 h-6 mr-2" />
          {texts.result.freeAnalysis.issues.title}
        </h3>
        
        {issues.length > 0 ? (
          <div className="space-y-3">
            {issues.map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border backdrop-blur-sm ${getStatusColor(item.status)}`}
              >
                <div className="flex items-start space-x-3">
                  {getIcon(item.status)}
                  <div>
                    <span className="font-medium text-white">{item.category}</span>
                    <p className="text-gray-300 text-sm mt-1">{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">
            {texts.result.freeAnalysis.issues.noIssues}
          </p>
        )}
      </div>
    </div>
  );
};

export default FreeAnalysisSection;

