
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">L3</span>
          </div>
          <span className="text-yellow-500 font-semibold">Digital Media</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Serviços</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Pacotes</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Indica+</a>
          <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">Contato</a>
          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
            ☀️
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-yellow-500">Analise</span> sua presença{" "}
          <span className="text-yellow-500">digital</span> e descubra{" "}
          <span className="text-yellow-500">oportunidades</span> de crescimento
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Sistema inteligente que avalia Google Meu Negócio, redes sociais, website 
          e estratégias de marketing digital do seu negócio
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => navigate('/analise')}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg rounded-full"
          >
            Começar Análise Gratuita
          </Button>
          <Button 
            variant="outline" 
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg rounded-full"
          >
            Ver Como Funciona
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-yellow-500" size={32} />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold">🗺️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Google Meu Negócio</h3>
            <p className="text-gray-300">Análise completa do seu perfil no Google Maps e posicionamento local</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Redes Sociais</h3>
            <p className="text-gray-300">Avaliação da presença em Instagram, Facebook, TikTok e LinkedIn</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold">🌐</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Website & SEO</h3>
            <p className="text-gray-300">Análise de usabilidade, responsividade e otimização para buscas</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <span className="text-black font-bold">📈</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Marketing Digital</h3>
            <p className="text-gray-300">Avaliação de tráfego pago, e-mail marketing e estratégias de conteúdo</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Pronto para descobrir suas oportunidades?
          </h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Análise gratuita em menos de 5 minutos
          </p>
          <Button 
            onClick={() => navigate('/analise')}
            className="bg-black hover:bg-gray-900 text-white font-semibold px-8 py-4 text-lg rounded-full"
          >
            Iniciar Análise Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
