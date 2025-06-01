
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Eye, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Sistema Inteligente de Análise</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Seu {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Negócio
            </span>{" "}
            no{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Digital
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-300 font-normal">
              com Inteligência Artificial
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Como identificar o que não está funcionando na sua divulgação 
         <p> e transformar sua realidade online </p> 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={() => navigate('/analise')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
          >
            <Eye className="w-5 h-5 mr-2" />
            Iniciar Pesquisa Online
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-10 py-6 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300"
          >
            <Target className="w-5 h-5 mr-2" />
            Ver Demonstração
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-purple-400" size={32} />
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Análise Completa
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Escaneamos todos os aspectos de como está seu negócio online</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/50 transition-all duration-300">
              <span className="text-white font-bold text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-purple-300">Google Meu Negócio</h3>
            <p className="text-gray-400 leading-relaxed">Análise avançada do seu perfil no Google Maps e posicionamento em buscas locais</p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/50 transition-all duration-300">
              <span className="text-white font-bold text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-cyan-300">Redes Sociais</h3>
            <p className="text-gray-400 leading-relaxed">Escaneamento completo de Instagram, Facebook, TikTok e LinkedIn com IA</p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/50 transition-all duration-300">
              <span className="text-white font-bold text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-pink-300">Website & SEO</h3>
            <p className="text-gray-400 leading-relaxed">Análise profunda de usabilidade, responsividade e otimização para buscas</p>
          </div>
          
          <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-300">Marketing Digital</h3>
            <p className="text-gray-400 leading-relaxed">Auditoria de tráfego pago, e-mail marketing e estratégias de conteúdo</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 py-20 border-y border-purple-500/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Pronto para o futuro?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 opacity-90">
            Análise gratuita com IA em menos de 3 minutos
          </p>
          <Button 
            onClick={() => navigate('/analise')}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
          >
            <Zap className="w-6 h-6 mr-2" />
            Começar Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
