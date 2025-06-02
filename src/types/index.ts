// ... tipos anteriores mantidos ...

export interface AnalysisItem {
  category: string;
  status: 'good' | 'warning' | 'error';
  message: string;
}

export interface AnalysisResult {
  score: number;
  strengths: AnalysisItem[];
  issues: AnalysisItem[];
}

export interface ResultTexts {
  title: string;
  subtitle: string;
  loading: string;
  score: {
    title: string;
    description: string;
    excellent: string;
    good: string;
    average: string;
    poor: string;
  };
  freeAnalysis: {
    title: string;
    strengths: {
      title: string;
      noStrengths: string;
    };
    issues: {
      title: string;
      noIssues: string;
    };
  };
  paywall: {
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
    price: string;
    guarantee: string;
  };
  categories: {
    website: string;
    social: string;
    seo: string;
    googleBusiness: string;
    marketing: string;
  };
}

// Atualizar TextsStructure para incluir result
export interface TextsStructure {
  // ... propriedades anteriores mantidas ...
  result: ResultTexts;
}

