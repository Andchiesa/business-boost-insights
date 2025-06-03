import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { HomePage, ResultsPage } from './pages';

const ResultsPageWrapper: React.FC = () => {
  const location = useLocation();
  const state = location.state as {
    score: number;
    strengths: string[];
    issues: string[];
  } | undefined;

  if (!state) {
    // Se não houver dados, redireciona para a home
    return <Navigate to="/" replace />;
  }

  return <ResultsPage score={state.score} strengths={state.strengths} issues={state.issues} />;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPageWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
