import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BusinessForm } from '../components/forms';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from '../components/common/AnimatedBackground';
import FeatureCard from '../components/common/FeatureCard';

const HomePage: React.FC = () => {
  const { texts } = useLanguage();
  const navigate = useNavigate();

  const handleFormSubmit = (data: any) => {
    // Simule a análise e gere resultados
    const simulatedScore = 80;
    const simulatedStrengths = ['Good social media presence', 'Responsive website'];
    const simulatedIssues = ['Low SEO ranking', 'No Google Business profile'];

    // Navega para a página de resultados passando os dados
    navigate('/results', {
      state: {
        score: simulatedScore,
        strengths: simulatedStrengths,
        issues: simulatedIssues,
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto p-4">
        <header className="py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">{texts.hero.title}</h1>
          <p className="text-lg text-gray-600 text-center mt-2">{texts.hero.subtitle}</p>
        </header>

        <section className="py-8">
          <BusinessForm onSubmit={handleFormSubmit} />
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{texts.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {texts.features.items.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </section>

        <footer className="py-6 text-center text-gray-500">
          <p>© 2025 Business Boost Insights. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
