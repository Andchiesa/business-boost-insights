
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

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
    // Store form data in localStorage for the report
    localStorage.setItem('businessData', JSON.stringify(formData));
    navigate('/relatorio');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="text-yellow-500 hover:text-yellow-400"
        >
          <ArrowLeft className="mr-2" size={20} />
          Voltar
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">L3</span>
          </div>
          <span className="text-yellow-500 font-semibold">Digital Media</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Conte-nos sobre seu <span className="text-yellow-500">negócio</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Precisamos de algumas informações para personalizar sua análise
          </p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-500">Informações do Negócio</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-white">Nome do Negócio *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Ex: Padaria do João"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="niche" className="text-white">Nicho/Segmento *</Label>
                <Select onValueChange={(value) => handleInputChange('niche', value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Selecione seu segmento" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {niches.map((niche) => (
                      <SelectItem key={niche} value={niche} className="text-white hover:bg-gray-600">
                        {niche}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.niche === "Outros (especifique)" && (
                <div className="space-y-2">
                  <Label htmlFor="customNiche" className="text-white">Especifique seu nicho</Label>
                  <Input
                    id="customNiche"
                    value={formData.customNiche}
                    onChange={(e) => handleInputChange('customNiche', e.target.value)}
                    placeholder="Descreva seu segmento"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="targetAudience" className="text-white">Público-alvo</Label>
                <Input
                  id="targetAudience"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  placeholder="Ex: Mulheres de 25-45 anos, classe B/C"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-white">Região de Atuação</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Ex: São Paulo - SP, Zona Norte"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Orçamento para Marketing Digital (mensal)</Label>
                <Select onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Selecione sua faixa de orçamento" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="0-500" className="text-white hover:bg-gray-600">R$ 0 - R$ 500</SelectItem>
                    <SelectItem value="500-1500" className="text-white hover:bg-gray-600">R$ 500 - R$ 1.500</SelectItem>
                    <SelectItem value="1500-3000" className="text-white hover:bg-gray-600">R$ 1.500 - R$ 3.000</SelectItem>
                    <SelectItem value="3000-5000" className="text-white hover:bg-gray-600">R$ 3.000 - R$ 5.000</SelectItem>
                    <SelectItem value="5000+" className="text-white hover:bg-gray-600">Acima de R$ 5.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo" className="text-white">Informações Adicionais</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Conte-nos mais sobre seu negócio, objetivos, desafios atuais..."
                  className="bg-gray-700 border-gray-600 text-white h-24"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 text-lg"
                disabled={!formData.businessName || !formData.niche}
              >
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
