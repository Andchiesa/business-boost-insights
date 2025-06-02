import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAnalysisSimulator } from '@/hooks/useAnalysisSimulator';
import Navbar from '@/components/layout/Navbar';
import AnimatedBackground from '@/components/common/AnimatedBackground';
import CircularScore from '@/components/common/CircularScore';
import FreeAnalysisSection from '@/components/sections/FreeAnalysisSection';
import PaywallSection from '@/components/sections/PaywallSection';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const Resultado: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { texts } = useLanguage();
  
  const analysisData = location.state?.analysisData;
  const { isLoading, result } = useAnalysisSimulator(analysisData);

  // Redirect se não tiver dados
  if (!analysisData) {
    navigate('/analise');
    return null;
  }

  const handleUpgrade = () => {
    // TODO: Implementar navegação para página de pagamento
    console.log('Upgrade to premium');
    navigate('/pricing');
  };

  const handleBackToAnalysis = () => {
    navigate('/analise');
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return texts.result.score.excellent;
    if (score >= 60) return texts.result.score.good;
    if (score >= 40) return texts.result.score.average;
    return texts.result.score.poor;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <AnimatedBackground />
        <Navbar />
        
        <div className="relative z-10 container mx-auto px-6 py-12 flex items-center justify-center min-h-[calc(100vh-120px)]">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-purple-300 mb-2">
              {texts.result.loading}
            </h2>
            <p className="text-gray-400">
              Estamos analisando todos os aspectos do seu negócio...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={handleBackToAnalysis}
            variant="outline"
            className="mb-6 border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nova Análise
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {texts.result.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              {texts.result.subtitle} <span className="text-purple-400 font-semibold">{analysisData.businessName}</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna da Esquerda - Score e Info */}
          <div className="lg:col-span-1">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-purple-300 mb-4">
                  {texts.result.score.title}
                </h3>
                
                <CircularScore score={result?.score || 0} size="lg" className="mx-auto mb-4" />
                
                <div className="text-lg font-semibold text-white mb-2">
                  {getScoreLabel(result?.score || 0)}
                </div>
                
                <p className="text-gray-400 text-sm">
                  {texts.result.score.description}
                </p>
              </div>
            </div>

            {/* Informações do Negócio */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h4 className="font-bold text-white mb-4">Informações Analisadas</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-400">Negócio:</span>
                  <span className="text-white ml-2">{analysisData.businessName}</span>
                </div>
                <div>
                  <span className="text-gray-400">Segmento:</span>
                  <span className="text-white ml-2">{analysisData.segment}</span>
                </div>
                <div>
                  <span className="text-gray-400">Link Principal:</span>
                  <span className="text-blue-400 ml-2 break-all">{analysisData.mainLink}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Análise e Paywall */}
          <div className="lg:col-span-2 space-y-8">
            {/* Análise Gratuita */}
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {texts.result.freeAnalysis.title}
                </h2>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 text-purple-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 text-purple-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar
                  </Button>
                </div>
              </div>

              <FreeAnalysisSection
                strengths={result?.strengths || []}
                issues={result?.issues || []}
              />
            </div>

            {/* Paywall Section */}
            <PaywallSection onUpgrade={handleUpgrade} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resultado;

