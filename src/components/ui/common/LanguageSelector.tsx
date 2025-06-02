import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-4 h-4 text-purple-400" />
        <span className="text-sm text-gray-300">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-purple-500/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-purple-500/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code ? 'bg-purple-500/20 text-purple-300' : 'text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;

