import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Analise from './pages/Analise';
import Resultado from './pages/Resultado';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/analise" element={<Analise />} />
      <Route path="/resultado" element={<Resultado />} />
      {/* Outras rotas futuras */}
      <Route path="/pricing" element={<div>Página de Pricing em construção...</div>} />
    </Routes>
  );
}

export default App;
