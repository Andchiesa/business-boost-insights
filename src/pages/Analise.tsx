
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Eye } from "lucide-react";

const Analise = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    niche: "",
    customNiche: "",
    targetAudience: "",
    location: "",
    budget: "",
    additionalInfo: ""
  });

  const niches = [
    "Restaurante/Alimentação",
    "Beleza/Estética",
    "Saúde/Medicina",
    "Educação/Cursos",
    "Varejo/Comércio",
    "Serviços Profissionais",
    "Tecnologia",
    "Imobiliário",
    "Fitness/Academia",
    "Turismo/Hospitalidade",
    "Outros (especifique)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('businessData', JSON.stringify(formData));
    navigate('/relatorio');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          onClick={() => navigate('/')}
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 border border-purple-500/30"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
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

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
            <Eye className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Análise Personalizada</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Conte-nos sobre seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              negócio
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Precisamos de algumas informações para personalizar sua análise
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-purple-500/20 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
          <CardHeader>
            <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-purple-400" />
              Informações do Negócio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-gray-300">Nome do Negócio *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Ex: Padaria do João"
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niche" className="text-gray-300">Nicho/Segmento *</Label>
                <Select onValueChange={(value) => handleInputChange('niche', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm">
                    <SelectValue placeholder="Selecione seu segmento" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-purple-500/30 backdrop-blur-sm">
                    {niches.map((niche) => (
                      <SelectItem key={niche} value={niche} className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">
                        {niche}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.niche === "Outros (especifique)" && (
                <div className="space-y-2">
                  <Label htmlFor="customNiche" className="text-gray-300">Especifique seu nicho</Label>
                  <Input
                    id="customNiche"
                    value={formData.customNiche}
                    onChange={(e) => handleInputChange('customNiche', e.target.value)}
                    placeholder="Descreva seu segmento"
                    className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-gray-300">Público-alvo</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  placeholder="Ex: Mulheres de 25-45 anos, classe B/C"
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-300">Região de Atuação</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Ex: São Paulo - SP, Zona Norte"
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-gray-300">Orçamento para Marketing Digital (mensal)</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm">
                    <SelectValue placeholder="Selecione sua faixa de orçamento" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-purple-500/30 backdrop-blur-sm">
                    <SelectItem value="0-500" className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">R$ 0 - R$ 500</SelectItem>
                    <SelectItem value="500-1500" className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">R$ 500 - R$ 1.500</SelectItem>
                    <SelectItem value="1500-3000" className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">R$ 1.500 - R$ 3.000</SelectItem>
                    <SelectItem value="3000-5000" className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">R$ 3.000 - R$ 5.000</SelectItem>
                    <SelectItem value="5000+" className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20">Acima de R$ 5.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-gray-300">Informações Adicionais</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Conte-nos mais sobre seu negócio, objetivos, desafios atuais..."
                  className="bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/20 h-24 backdrop-blur-sm"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-10 py-6 text-lg rounded-2xl shadow-lg shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"
                disabled={!formData.businessName || !formData.niche}
              >
                <Eye className="w-5 h-5 mr-2" />
                Gerar Análise Gratuita
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analise;
