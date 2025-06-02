import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AnalysisItem {
  category: string;
  status: 'good' | 'warning' | 'error';
  message: string;
}

interface AnalysisResult {
  score: number;
  strengths: AnalysisItem[];
  issues: AnalysisItem[];
}

export const useAnalysisSimulator = (businessData: any) => {
  const { texts } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const simulateAnalysis = async () => {
      // Simular tempo de processamento
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Gerar análise baseada nos dados do negócio
      const mockResult: AnalysisResult = {
        score: Math.floor(Math.random() * 40) + 30, // Score entre 30-70 para mostrar oportunidades
        strengths: generateStrengths(businessData),
        issues: generateIssues(businessData)
      };

      setResult(mockResult);
      setIsLoading(false);
    };

    simulateAnalysis();
  }, [businessData, texts]);

  const generateStrengths = (data: any): AnalysisItem[] => {
    const strengths: AnalysisItem[] = [];

    if (data.mainLink.includes('instagram')) {
      strengths.push({
        category: texts.result.categories.social,
        status: 'good',
        message: 'Presença ativa no Instagram detectada'
      });
    }

    if (data.segment) {
      strengths.push({
        category: texts.result.categories.marketing,
        status: 'good', 
        message: 'Segmento de mercado bem definido'
      });
    }

    return strengths;
  };

  const generateIssues = (data: any): AnalysisItem[] => {
    const issues: AnalysisItem[] = [];

    if (!data.mainLink.includes('http')) {
      issues.push({
        category: texts.result.categories.website,
        status: 'error',
        message: 'Website próprio não detectado'
      });
    }

    issues.push({
      category: texts.result.categories.seo,
      status: 'warning',
      message: 'Otimização para buscas precisa de melhorias'
    });

    issues.push({
      category: texts.result.categories.googleBusiness,
      status: 'error',
      message: 'Perfil no Google Meu Negócio não encontrado'
    });

    return issues;
  };

  return { isLoading, result };
};

