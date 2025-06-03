
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CircularScore from '../components/ui/common/CircularScore';

interface ResultsPageProps {
  score: number;
  strengths: string[];
  issues: string[];
}

const ResultsPage: React.FC<ResultsPageProps> = ({ score = 75, strengths = [], issues = [] }) => {
  const { texts } = useLanguage();

  return (
    <div className="container mx-auto p-4">
      <header className="py-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">{texts.result.title}</h1>
        <p className="text-lg text-gray-600 text-center mt-2">{texts.result.subtitle}</p>
      </header>

      <section className="py-8">
        <div className="text-center">
          <CircularScore score={score} />
          <p className="mt-4 text-gray-600">{texts.result.score.title}</p>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{texts.result.freeAnalysis.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">{texts.result.freeAnalysis.strengths.title}</h3>
            <ul>
              {strengths.length > 0 ? strengths.map((strength, index) => (
                <li key={index} className="text-gray-700">{strength}</li>
              )) : (
                <li className="text-gray-500">{texts.result.freeAnalysis.strengths.noStrengths}</li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{texts.result.freeAnalysis.issues.title}</h3>
            <ul>
              {issues.length > 0 ? issues.map((issue, index) => (
                <li key={index} className="text-gray-700">{issue}</li>
              )) : (
                <li className="text-gray-500">{texts.result.freeAnalysis.issues.noIssues}</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500">
        <p>© 2025 Business Boost Insights. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResultsPage;
