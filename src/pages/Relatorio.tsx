
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Lock, Star, TrendingUp, Zap } from "lucide-react";

interface BusinessData {
  businessName: string;
  niche: string;
  customNiche: string;
  targetAudience: string;
  location: string;
  budget: string;
  additionalInfo: string;
}

const Relatorio = () => {
  const navigate = useNavigate();
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('businessData');
    if (data) {
      setBusinessData(JSON.parse(data));
    } else {
      navigate('/analise');
    }
  }, [navigate]);

  if (!businessData) {
    return <div>Carregando...</div>;
  }

  const strengthsData = [
    {
      category: "Presença no Google",
      items: [
        "Negócio aparece nas buscas locais",
        "Informações básicas estão cadastradas"
      ],
      score: 6
    },
    {
      category: "Redes Sociais",
      items: [
        "Presença identificada no Instagram",
        "Publicações recentes encontradas"
      ],
      score: 7
    },
    {
      category: "Website",
      items: [
        "Presença online identificada",
        "Contato disponível para clientes"
      ],
      score: 5
    }
  ];

  const premiumOpportunities = [
    {
      category: "Google Meu Negócio",
      opportunities: [
        "Completar 100% das informações do perfil",
        "Adicionar fotos profissionais dos produtos/serviços",
        "Implementar estratégia de coleta de avaliações",
        "Otimizar descrição com palavras-chave locais"
      ],
      impact: "Alto",
      timeframe: "1-2 semanas"
    },
    {
      category: "Redes Sociais",
      opportunities: [
        "Criar perfil no TikTok com estratégia específica para " + (businessData.niche || "seu nicho"),
        "Implementar cronograma de publicações consistente",
        "Desenvolver estratégia de Stories interativos",
        "Otimizar uso de hashtags para seu segmento"
      ],
      impact: "Alto",
      timeframe: "2-3 semanas"
    },
    {
      category: "Tráfego Pago",
      opportunities: [
        "Configurar campanhas no Google Ads para buscas locais",
        "Implementar campanhas no Facebook/Instagram Ads",
        "Criar estratégia de remarketing para visitantes",
        "Otimizar segmentação baseada no seu público-alvo"
      ],
      impact: "Muito Alto",
      timeframe: "1 semana"
    },
    {
      category: "Website & SEO",
      opportunities: [
        "Otimizar velocidade de carregamento móvel",
        "Implementar SEO local para " + (businessData.location || "sua região"),
        "Criar página de captura de leads",
        "Implementar chat online para conversão"
      ],
      impact: "Alto",
      timeframe: "2-4 semanas"
    },
    {
      category: "Conteúdo & Engajamento",
      opportunities: [
        "Desenvolver calendário editorial específico para " + (businessData.niche || "seu segmento"),
        "Criar vídeos demonstrativos dos produtos/serviços",
        "Implementar estratégia de e-mail marketing",
        "Desenvolver programa de fidelização digital"
      ],
      impact: "Médio",
      timeframe: "3-4 semanas"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 flex items-center justify-between border-b border-purple-500/20 backdrop-blur-sm">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/analise')}
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 border border-purple-500/30"
        >
          <ArrowLeft className="mr-2" size={20} />
          Nova Análise
        </Button>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
            <span className="text-white font-bold text-lg">L3</span>
          </div>
          <div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold text-xl">
              Digital Media
            </span>
            <div className="text-xs text-gray-400">AI-Powered Analysis</div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Relatório Completo</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Relatório de Presença Digital
            </span>
          </h1>
          <h2 className="text-xl text-purple-300 mb-2">{businessData.businessName}</h2>
          <p className="text-gray-300">{businessData.niche === "Outros (especifique)" ? businessData.customNiche : businessData.niche}</p>
        </div>

        {/* Free Section - Strengths */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle className="text-green-400 mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              ✅ O que está funcionando no seu negócio
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {strengthsData.map((strength, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-green-500/30 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center justify-between">
                    {strength.category}
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold">
                      {strength.score}/10
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strength.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-400 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 p-6 rounded-2xl mt-6 border border-green-500/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              🎉 Parabéns!
            </h3>
            <p className="text-gray-300">
              Seu negócio já tem uma base sólida na presença digital. Identificamos {strengthsData.reduce((acc, curr) => acc + curr.items.length, 0)} pontos 
              fortes que estão funcionando e contribuindo para o crescimento do seu negócio.
            </p>
          </div>
        </div>

        {/* Premium Section - Locked */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10"></div>
          
          <div className="filter blur-sm">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-purple-400 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                🚀 Oportunidades de Crescimento
              </h2>
            </div>
            
            <div className="grid gap-6">
              {premiumOpportunities.slice(0, 2).map((opportunity, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-purple-400 flex items-center justify-between">
                      {opportunity.category}
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10">
                          Impacto {opportunity.impact}
                        </Badge>
                        <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10">
                          {opportunity.timeframe}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {opportunity.opportunities.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                      <li className="text-gray-500">+ mais {opportunity.opportunities.length - 2} estratégias...</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Lock Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 text-center max-w-md mx-4 shadow-2xl shadow-purple-500/25">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-purple-500/25">
                <Lock className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                Conteúdo Premium
              </h3>
              <p className="text-gray-300 mb-6">
                Identificamos <span className="text-purple-400 font-bold">
                  {premiumOpportunities.reduce((acc, curr) => acc + curr.opportunities.length, 0)} oportunidades específicas
                </span> para acelerar o crescimento do seu negócio.
              </p>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 rounded-xl mb-6 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">O que você vai receber:</h4>
                <ul className="text-sm text-gray-300 space-y-1 text-left">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Planos de ação detalhados paso a paso</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Estratégias personalizadas para {businessData.niche}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Cronogramas de implementação</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Consultas ilimitadas por 30 dias</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Atualizações contínuas das oportunidades</li>
                </ul>
              </div>
              
              <Button 
                onClick={() => setShowPremiumModal(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 text-lg rounded-2xl shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
              >
                <Zap className="w-5 h-5 mr-2" />
                🔓 Desbloquear Soluções Completas
              </Button>
              
              <p className="text-xs text-gray-500 mt-3">
                Plano mensal • Cancele quando quiser
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Modal */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border border-purple-500/30 p-8 max-w-lg w-full backdrop-blur-sm shadow-2xl shadow-purple-500/25">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/25">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Plano Premium
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-2">
                <span className="text-gray-300">Acesso completo às oportunidades</span>
                <CheckCircle className="text-green-400" size={20} />
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="text-gray-300">Consultas ilimitadas (30 dias)</span>
                <CheckCircle className="text-green-400" size={20} />
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="text-gray-300">Planos de ação detalhados</span>
                <CheckCircle className="text-green-400" size={20} />
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="text-gray-300">Suporte prioritário</span>
                <CheckCircle className="text-green-400" size={20} />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">R$ 97/mês</div>
              <div className="text-gray-400">Primeiro mês com 50% de desconto</div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowPremiumModal(false)}
                className="flex-1 border-purple-500/30 text-gray-300 hover:bg-purple-500/10"
              >
                Fechar
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold"
              >
                Assinar Agora
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Relatorio;
