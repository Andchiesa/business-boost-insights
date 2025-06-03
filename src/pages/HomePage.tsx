
import React from 'react';
import { BusinessForm } from '../components/ui/forms';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedBackground from '../components/ui/common/AnimatedBackground';
import FeatureCard from '../components/ui/common/FeatureCard';

const HomePage: React.FC = () => {
  const { texts } = useLanguage();

  const handleFormSubmit = (data: any) => {
    // Handle form submission and data processing here
    console.log('Form data submitted:', data);
    // Redirect to results page or process data as needed
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {texts.features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                title={feature.title} 
                description={feature.description} 
                icon={feature.icon} 
              />
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
