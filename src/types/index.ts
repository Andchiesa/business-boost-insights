export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: 'purple' | 'cyan' | 'pink' | 'blue';
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
  'aria-label'?: string;
}

export type Language = 'pt' | 'en' | 'es';

export interface FormStep {
  label: string;
  placeholder: string;
  helper: string;
}

export interface FormTexts {
  title: string;
  subtitle: string;
  steps: FormStep[];
  segments: string[];
  validation: {
    required: string;
    invalidUrl: string;
    invalidEmail: string;
  };
  loading: {
    analyzing: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
  };
}

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

export interface TextsStructure {
  brand: {
    name: string;
    tagline: string;
    logo: string;
  };
  hero: {
    badge: string;
    title: {
      part1: string;
      highlight1: string;
      part2: string;
      highlight2: string;
    };
    subtitle: string;
    description: string;
  };
  buttons: {
    startAnalysis: string;
    viewDemo: string;
    startNow: string;
    next: string;
    previous: string;
    finish: string;
  };
  features: Feature[];
  cta: {
    title: string;
    subtitle: string;
  };
  form: FormTexts;
  result: ResultTexts;
}

export interface BusinessAnalysisData {
  businessName: string;
  mainLink: string;
  segment: string;
  email: string;
  timestamp?: string;
}
