
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Lock, Star, TrendingUp } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/analise')}
          className="text-yellow-500 hover:text-yellow-400"
        >
          <ArrowLeft className="mr-2" size={20} />
          Nova Análise
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">L3</span>
          </div>
          <span className="text-yellow-500 font-semibold">Digital Media</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Relatório de Presença Digital
          </h1>
          <h2 className="text-xl text-yellow-500 mb-2">{businessData.businessName}</h2>
          <p className="text-gray-300">{businessData.niche === "Outros (especifique)" ? businessData.customNiche : businessData.niche}</p>
        </div>

        {/* Free Section - Strengths */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle className="text-green-500 mr-3" size={32} />
            <h2 className="text-2xl md:text-3xl font-bold text-green-500">
              ✅ O que está funcionando no seu negócio
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {strengthsData.map((strength, index) => (
              <Card key={index} className="bg-gray-800 border-green-500">
                <CardHeader>
                  <CardTitle className="text-green-500 flex items-center justify-between">
                    {strength.category}
                    <Badge className="bg-green-500 text-black">
                      {strength.score}/10
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strength.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-6 rounded-lg mt-6 border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-500 mb-2">🎉 Parabéns!</h3>
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
              <TrendingUp className="text-yellow-500 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
                🚀 Oportunidades de Crescimento
              </h2>
            </div>
            
            <div className="grid gap-6">
              {premiumOpportunities.slice(0, 2).map((opportunity, index) => (
                <Card key={index} className="bg-gray-800 border-yellow-500/30">
                  <CardHeader>
                    <CardTitle className="text-yellow-500 flex items-center justify-between">
                      {opportunity.category}
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                          Impacto {opportunity.impact}
                        </Badge>
                        <Badge variant="outline" className="border-blue-500 text-blue-500">
                          {opportunity.timeframe}
                        </Badge>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {opportunity.opportunities.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
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
            <div className="bg-gray-900/95 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500 text-center max-w-md mx-4">
              <Lock className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                Conteúdo Premium
              </h3>
              <p className="text-gray-300 mb-6">
                Identificamos <span className="text-yellow-500 font-bold">
                  {premiumOpportunities.reduce((acc, curr) => acc + curr.opportunities.length, 0)} oportunidades específicas
                </span> para acelerar o crescimento do seu negócio.
              </p>
              
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h4 className="text-yellow-500 font-semibold mb-2">O que você vai receber:</h4>
                <ul className="text-sm text-gray-300 space-y-1 text-left">
                  <li>✅ Planos de ação detalhados paso a paso</li>
                  <li>✅ Estratégias personalizadas para {businessData.niche}</li>
                  <li>✅ Cronogramas de implementação</li>
                  <li>✅ Consultas ilimitadas por 30 dias</li>
                  <li>✅ Atualizações contínuas das oportunidades</li>
                </ul>
              </div>
              
              <Button 
                onClick={() => setShowPremiumModal(true)}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 text-lg rounded-full"
              >
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
          <div className="bg-gray-900 rounded-2xl border border-yellow-500 p-8 max-w-lg w-full">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">Plano Premium</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Acesso completo às oportunidades</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Consultas ilimitadas (30 dias)</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Planos de ação detalhados</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Suporte prioritário</span>
                <CheckCircle className="text-green-500" size={20} />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-yellow-500">R$ 97/mês</div>
              <div className="text-gray-400">Primeiro mês com 50% de desconto</div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowPremiumModal(false)}
                className="flex-1 border-gray-600 text-gray-300"
              >
                Fechar
              </Button>
              <Button 
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
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
