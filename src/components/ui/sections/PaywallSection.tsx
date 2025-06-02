import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown, Check, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaywallSectionProps {
  onUpgrade: () => void;
}

const PaywallSection: React.FC<PaywallSectionProps> = ({ onUpgrade }) => {
  const { texts } = useLanguage();

  return (
    <div className="relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
      
      <div className="relative z-20 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
            {texts.result.paywall.title}
          </h3>
          
          <p className="text-gray-300 text-lg">
            {texts.result.paywall.subtitle}
          </p>
        </div>

        {/* Features list */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {texts.result.paywall.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-white mb-2">
            {texts.result.paywall.price}
          </div>
          <div className="flex items-center justify-center space-x-2 text-green-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">{texts.result.paywall.guarantee}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={onUpgrade}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 text-lg rounded-xl shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
        >
          <Zap className="w-5 h-5 mr-2" />
          {texts.result.paywall.cta}
        </Button>
      </div>
    </div>
  );
};

export default PaywallSection;

