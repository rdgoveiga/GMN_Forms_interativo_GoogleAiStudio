
import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Loader2, CheckCircle2, Menu, RefreshCw, XCircle, CheckCircle, Phone, MapPin, Star, ShieldCheck, Globe, Navigation, Share2, Camera, Info, MessageSquare } from 'lucide-react';
import { STEPS, THEME } from './constants';
import { FormData, LeadPayload } from './types';

const SkippLogo = () => (
  <div className="flex flex-col items-center justify-center mb-6 w-full max-w-[320px] mx-auto scale-100">
    <div className="flex items-center gap-4">
      <svg width="120" height="100" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A020F0" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#00F5D4" />
          </linearGradient>
        </defs>
        <path 
          d="M148 25C148 25 135 15 125 18C115 21 120 28 110 32C100 36 85 30 70 38C55 46 50 65 65 80C80 95 110 90 125 75C140 60 155 45 158 35C161 25 148 25 148 25ZM118 12C122 8 128 5 132 8C136 11 130 15 125 18C120 21 115 16 118 12Z" 
          fill="url(#logoGrad)" 
        />
        <path 
          d="M131.5 17.5C136 12 143 8.5 143 12C143 14 139 16.5 134 19.5" 
          stroke="url(#logoGrad)" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M124.646 19.4678C130.638 17.394 139.734 16.6667 141.528 20.6667C143.322 24.6667 138.647 31.7943 133.435 38.3333C122.385 52.2001 106.885 62.0668 89.266 66.8668C83.9932 68.3031 78.5309 69.1171 73.0469 69.2668C61.4651 69.5828 49.9984 66.4668 39.866 60.0668C27.9366 52.5273 17.8427 42.2721 10.466 30.1667C8.166 26.3667 6.466 22.3667 5.266 18.2667C5.02111 17.4307 5.4988 16.5684 6.33333 16.3333C7.16787 16.0983 8.04167 16.5828 8.266 17.4333C9.366 21.6333 11.066 25.6333 13.266 29.3667C20.0634 40.5218 29.3512 49.9576 40.3333 56.8668C49.3789 62.5574 59.6389 65.419 70.0469 65.2668C74.9547 65.1953 79.8459 64.5126 84.6 63.2668C100.321 59.136 114.248 50.413 124.646 37.9333C129.429 32.1943 134.103 25.4667 133.322 21.6667C132.541 17.8667 124.646 19.4678 124.646 19.4678Z" 
          fill="url(#logoGrad)"
        />
        <path 
          d="M85 64C95 64 105 58 112 50C119 42 122 35 122 30" 
          stroke="url(#logoGrad)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-4xl font-black italic tracking-tighter" style={{ 
          background: 'linear-gradient(to bottom, #A020F0, #3B82F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Skipp
        </span>
        <span className="text-3xl font-bold text-[#0B0B0B] -mt-1 tracking-tight">
          Digital
        </span>
      </div>
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="w-full mt-6 bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden text-left animate-fade-in">
    <div className="bg-[#F5F5F7] px-4 py-2.5 flex items-center justify-between border-b border-gray-200">
      <span className="text-[10px] font-bold text-gray-400">OK</span>
      <div className="flex-1 mx-3 bg-white rounded-full py-1 px-3 border border-gray-200 flex items-center gap-1.5 overflow-hidden">
        <div className="w-2 h-2 rounded-full bg-[#2FBBA8]" />
        <span className="text-[10px] text-gray-500 font-medium truncate">business.google.com</span>
      </div>
      <div className="flex items-center gap-3">
        <Menu size={14} className="text-gray-400" />
        <RefreshCw size={12} className="text-gray-400" />
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-1 mb-4">
        <span className="text-xs font-bold text-black">Think with Google</span>
        <span className="text-[8px] text-gray-400">▼</span>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed font-sans-regular">
        No Brasil, o uso do digital tem crescido significativamente.{' '}
        <span className="text-[#2FBBA8] font-bold">91% das buscas</span>{' '}
        relacionadas a serviços e produtos{' '}
        <span className="text-[#2FBBA8] font-bold">acontecem antes mesmo de as pessoas irem à empresa</span>. 
        Isso significa que o futuro do setor tende a ser mais online. 
        A pergunta que fica é: a sua empresa está pronta para navegar neste contexto?
      </p>
    </div>
  </div>
);

const MiniMap = () => (
  <div className="relative w-full h-full bg-[#E5E7EB] overflow-hidden">
    {/* Stylized Map Roads */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-0 w-full h-[3px] bg-white rotate-12" />
      <div className="absolute top-1/2 left-0 w-full h-[5px] bg-white -rotate-6" />
      <div className="absolute top-0 left-1/3 w-[4px] h-full bg-white rotate-3" />
      <div className="absolute top-0 right-1/4 w-[3px] h-full bg-white -rotate-12" />
      
      {/* Green patches */}
      <div className="absolute top-4 left-6 w-8 h-8 bg-green-100/40 rounded-full blur-xl" />
      <div className="absolute bottom-4 right-6 w-12 h-12 bg-green-100/40 rounded-full blur-xl" />
    </div>

    {/* Map Pin */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <div className="relative">
        <MapPin size={18} className="text-red-500 fill-red-500 drop-shadow-md animate-bounce" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-black/10 rounded-full blur-[1px]" />
      </div>
    </div>

    {/* Google Logo Shadow */}
    <div className="absolute bottom-1 left-1 opacity-20 text-[6px] font-black italic text-gray-400">Google</div>
  </div>
);

const HighFidelityComparison = () => {
  const items = [
    { antes: "ESCONDIDO NAS BUSCAS", depois: "NO TOPO DAS BUSCAS" },
    { antes: "Perfil incompleto", depois: "Perfil otimizado" },
    { antes: "Sem avaliações", depois: "Mais de 200 avaliações 5★" },
    { antes: "Perdendo clientes", depois: "Recebendo contatos diários" },
  ];

  const VERDE_CHECK = '#22C55E'; 

  return (
    <div className="w-full space-y-8 animate-fade-in px-2">
      <div className="flex justify-between items-start gap-4 pt-4">
        {/* Antes */}
        <div className="flex-1 flex flex-col items-center">
          <XCircle size={28} className="text-red-400 mb-2" fill="white" />
          <span className="text-sm font-black text-gray-400 mb-4 uppercase">Antes</span>
          <div className="relative w-full max-w-[130px] aspect-[9/18.5] bg-[#F9FAFB] rounded-[24px] border-[4px] border-[#E5E7EB] shadow-inner overflow-hidden p-2">
            <div className="w-full h-full bg-white rounded-xl shadow-sm p-1.5 flex flex-col gap-2 opacity-30 grayscale">
               <div className="h-2 w-12 bg-gray-200 rounded" />
               <div className="h-2 w-full bg-gray-100 rounded" />
               <div className="h-16 w-full bg-gray-50 rounded" />
               <div className="mt-auto h-4 w-full bg-gray-100 rounded" />
            </div>
          </div>
        </div>

        <div className="self-center pt-10">
          <ChevronRight size={24} className="text-gray-300" />
        </div>

        {/* Depois */}
        <div className="flex-1 flex flex-col items-center">
          <CheckCircle size={32} style={{ color: VERDE_CHECK }} className="mb-2" fill="white" />
          <span className="text-sm font-black mb-4 uppercase" style={{ color: VERDE_CHECK }}>Depois</span>
          <div 
            className="relative w-full max-w-[135px] aspect-[9/18.5] bg-white rounded-[26px] border-[5px] shadow-2xl overflow-hidden p-1.5 transition-all duration-500 hover:scale-105"
            style={{ borderColor: VERDE_CHECK }}
          >
            <div className="w-full h-full bg-white rounded-[18px] shadow-sm flex flex-col overflow-hidden">
               {/* Retangulo Roxo (Cabeçalho GMN) */}
               <div className="h-16 w-full bg-[#6366F1]/10 relative overflow-hidden flex flex-col justify-end p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Verified Badge & Camera */}
                  <div className="absolute top-1.5 right-1.5 flex gap-1 items-center">
                     <ShieldCheck size={10} className="text-blue-400 fill-white" />
                     <Camera size={10} className="text-white drop-shadow" />
                  </div>

                  {/* Business Name & Rating area (Demonstração Perfil GMN) */}
                  <div className="relative z-10 text-left">
                    <div className="h-2 w-20 bg-white rounded-[1px] mb-1" />
                    <div className="flex items-center gap-0.5">
                       <span className="text-[8px] font-black text-white">5.0</span>
                       <div className="flex gap-0.2">
                          {[1,2,3,4,5].map(i => <Star key={i} size={6} fill="#EAB308" color="#EAB308" />)}
                       </div>
                       <span className="text-[5px] text-white/90 font-bold ml-0.5">(247)</span>
                    </div>
                  </div>
               </div>

               <div className="p-1.5 space-y-2">
                  {/* Action Grid */}
                  <div className="grid grid-cols-4 gap-1 py-1 border-b border-gray-50">
                     {[
                       { icon: Phone, label: 'Ligar', active: true },
                       { icon: Navigation, label: 'Rotas' },
                       { icon: MessageSquare, label: 'Chat' },
                       { icon: Share2, label: 'Partilha' }
                     ].map((btn, i) => (
                       <div key={i} className="flex flex-col items-center gap-0.5">
                          <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center ${btn.active ? 'bg-[#2FBBA8] shadow-sm' : 'bg-gray-50 border border-gray-100'}`}>
                             <btn.icon size={8} className={btn.active ? 'text-white' : 'text-gray-400'} />
                          </div>
                          <span className="text-[4px] font-bold text-gray-500">{btn.label}</span>
                       </div>
                     ))}
                  </div>

                  {/* Retangulo Azul (Mini-mapa) */}
                  <div className="h-14 w-full bg-gray-100 rounded-lg border border-gray-100 relative overflow-hidden shadow-inner group">
                     <MiniMap />
                  </div>

                  {/* Detalhes de Contato Simulado */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin size={6} className="text-gray-400" />
                      <div className="h-1 w-24 bg-gray-100 rounded-[1px]" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe size={6} className="text-gray-400" />
                      <div className="h-1 w-16 bg-gray-100 rounded-[1px]" />
                    </div>
                  </div>
               </div>
               
               <div className="mt-auto bg-[#F0FDF4] py-1 text-center border-t border-[#DCFCE7]">
                  <span className="text-[5px] font-black tracking-widest uppercase" style={{ color: VERDE_CHECK }}>
                    Destaque Máximo no Google
                  </span>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Text List */}
      <div className="space-y-4 pt-4 px-2 pb-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4 text-center">
            <span className="flex-1 text-[11px] text-gray-400 font-medium leading-tight">{item.antes}</span>
            <div className="flex-none flex items-center gap-1.5">
               <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
               <div className="w-4 h-[1px] bg-gray-100" />
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: VERDE_CHECK }} />
            </div>
            <span className="flex-1 text-[11px] text-black font-black leading-tight">{item.depois}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEmailStep, setShowEmailStep] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  const currentStep = STEPS[currentStepIndex];

  const handleNext = useCallback(() => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowEmailStep(true);
    }
  }, [currentStepIndex]);

  const handleSelect = (optionId: string) => {
    if (currentStep.type === 'checkbox') {
      const currentValues = (formData[currentStep.id] as string[]) || [];
      const newValues = currentValues.includes(optionId)
        ? currentValues.filter(v => v !== optionId)
        : [...currentValues, optionId];
      setFormData(prev => ({ ...prev, [currentStep.id]: newValues }));
    } else {
      setFormData(prev => ({ ...prev, [currentStep.id]: optionId }));
      setTimeout(() => {
        handleNext();
      }, 300);
    }
  };

  const isStepValid = () => {
    if (currentStep.type === 'info' || currentStep.type === 'intro') return true;
    const value = formData[currentStep.id];
    if (!value) return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    if (window.confirm('Deseja reiniciar o formulário?')) {
      setCurrentStepIndex(0);
      setFormData({});
      setShowEmailStep(false);
      setIsSubmitted(false);
      setEmail('');
      setName('');
    }
  };

  const submitLead = async () => {
    setIsSubmitting(true);
    setError(null);
    
    const payload: LeadPayload = {
      timestamp: new Date().toISOString(),
      source: 'anuncio',
      device: window.innerWidth < 768 ? 'mobile' : 'desktop',
      answers: { ...formData, email, name },
      metadata: {
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || undefined
      }
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Ops — não conseguimos enviar seus dados agora. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="mb-6"><SkippLogo /></div>
        <CheckCircle2 size={64} color={THEME.primary} className="mb-6" />
        <h1 className="text-3xl font-bold mb-4">Obrigado!</h1>
        <p className="text-lg text-[#6B6B6B] mb-8">
          Recebemos suas informações. Em breve você receberá o seu guia no e-mail informado.
        </p>
        <button
          onClick={handleReset}
          className="w-full max-w-xs py-4 px-6 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95"
          style={{ backgroundColor: THEME.primary }}
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  if (showEmailStep) {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6 max-w-md mx-auto">
        <SkippLogo />
        <div className="flex-1 flex flex-col justify-center -mt-6">
          <h2 className="text-2xl font-bold text-center mb-2">Quase lá!</h2>
          <p className="text-center text-[#6B6B6B] mb-8">
            Informe onde deseja receber o seu checklist gratuito e as instruções para o seu guia.
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1 ml-1 text-[#0B0B0B]">Seu Nome (opcional)</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como quer ser chamado?"
                className="w-full p-4 border-2 border-gray-100 rounded-2xl focus:border-[#2FBBA8] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1 ml-1 text-[#0B0B0B]">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full p-4 border-2 border-gray-100 rounded-2xl focus:border-[#2FBBA8] outline-none transition-colors"
              />
            </div>
          </div>

          <button
            onClick={submitLead}
            disabled={isSubmitting}
            className="w-full mt-10 py-4 px-6 rounded-full text-white font-bold shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70"
            style={{ backgroundColor: THEME.primary }}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : 'Finalizar e Receber Guia'}
          </button>
          
          {error && <p className="text-red-500 text-center mt-4 text-sm">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] h-1.5 max-w-md mx-auto">
        <div 
          className="h-full transition-all duration-500 ease-out"
          style={{ backgroundColor: THEME.primary, width: `${currentStep.progress}%` }}
        />
      </div>

      <main className="flex-1 pt-12 pb-24 px-6 flex flex-col items-center">
        {currentStep.type !== 'intro' && <SkippLogo />}

        <div className="w-full flex-1 animate-fade-in flex flex-col">
          {currentStep.type === 'intro' ? (
            <div className="text-center pt-2">
              <p className="text-sm text-[#6B6B6B] mb-6 leading-relaxed">
                {currentStep.description}
              </p>
              <h1 className="text-3xl font-black text-[#0B0B0B] leading-tight mb-4 px-4">
                {currentStep.title}
              </h1>
              <p className="text-sm italic text-[#6B6B6B] mb-8">
                {currentStep.subtitle}
              </p>
              
              <button
                onClick={handleNext}
                className="w-full py-5 rounded-xl text-white font-bold shadow-[0_8px_20px_rgba(47,187,168,0.3)] transition-transform active:scale-95 mb-10"
                style={{ backgroundColor: THEME.primary }}
              >
                Continuar
              </button>

              <BrowserMockup />
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center leading-tight mb-4 text-[#0B0B0B]">
                {currentStep.title}
              </h1>

              {currentStep.description && (
                <p className="text-center text-[#6B6B6B] mb-8 text-sm px-4">
                  {currentStep.description}
                </p>
              )}

              {currentStep.subtitle && (
                <h2 className="text-lg font-bold text-center mb-8 whitespace-pre-line text-[#0B0B0B]">
                  {currentStep.subtitle}
                </h2>
              )}

              {currentStep.type === 'info' ? (
                <div className="space-y-10">
                  <HighFidelityComparison />

                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <div className="py-2.5 px-4 text-center text-white text-[10px] font-bold uppercase tracking-widest" style={{ backgroundColor: THEME.primary }}>
                      Oferta especial por tempo limitado:
                    </div>
                    <div className="p-8 bg-white flex flex-col">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h4 className="font-black text-xl text-[#0B0B0B]">Acesso Vitalício</h4>
                          <p className="text-[11px] text-[#6B6B6B] mt-1">Checklist Premium + Guia de Execução</p>
                        </div>
                        <div className="text-right">
                          <span className="block text-[11px] text-red-500 line-through opacity-70">De 197,00</span>
                          <span className="text-3xl font-black" style={{ color: THEME.primary }}>R$ 47,00</span>
                        </div>
                      </div>
                      <button 
                        onClick={handleNext}
                        className="w-full py-5 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 hover:brightness-110"
                        style={{ backgroundColor: THEME.primary }}
                      >
                        Desbloquear Guia Agora
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`grid gap-3 ${currentStep.gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {currentStep.options?.map((option) => {
                    const isSelected = currentStep.type === 'checkbox' 
                      ? ((formData[currentStep.id] as string[]) || []).includes(option.id)
                      : formData[currentStep.id] === option.id;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className={`
                          relative p-4 rounded-2xl text-left transition-all duration-200 shadow-sm border-2
                          ${isSelected 
                            ? 'border-[#2FBBA8] bg-[#E9F8F5]' 
                            : 'border-transparent bg-white shadow-sm ring-1 ring-gray-100'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          {currentStep.type === 'radio' && !currentStep.gridCols && (
                            <div className={`
                              w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
                              ${isSelected ? 'border-[#2FBBA8]' : 'border-gray-200'}
                            `}>
                              {isSelected && <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: THEME.primary }} />}
                            </div>
                          )}
                          {currentStep.type === 'checkbox' && (
                            <div className={`
                              w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0
                              ${isSelected ? 'border-[#2FBBA8] bg-[#2FBBA8]' : 'border-gray-200'}
                            `}>
                              {isSelected && <CheckCircle2 size={14} color="white" />}
                            </div>
                          )}
                          <span className="text-sm font-medium leading-snug text-[#0B0B0B]">
                            {option.label}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {currentStep.type === 'checkbox' && (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="w-full mt-10 py-5 rounded-full text-white font-bold shadow-lg transition-transform active:scale-95 disabled:opacity-50"
                  style={{ backgroundColor: THEME.primary }}
                >
                  Continuar
                </button>
              )}
            </>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-50 p-6 flex justify-between items-center z-40">
        <button 
          onClick={handleBack}
          disabled={currentStepIndex === 0}
          className="text-[#0B0B0B] disabled:opacity-10 active:opacity-50 transition-opacity"
          aria-label="Voltar"
        >
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>

        <button 
          onClick={handleNext}
          disabled={!isStepValid() || currentStep.type === 'intro'}
          className="text-[#0B0B0B] disabled:opacity-10 active:opacity-50 transition-opacity"
          aria-label="Próximo"
        >
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>

        <button 
          onClick={handleReset}
          className="text-[#0B0B0B] active:opacity-50 transition-opacity"
          aria-label="Reiniciar"
        >
          <RotateCcw size={28} strokeWidth={1.5} />
        </button>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
