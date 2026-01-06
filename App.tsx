
import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Loader2, CheckCircle2, Menu, RefreshCw, XCircle, CheckCircle, Phone, MapPin, Star, ShieldCheck, Globe, Navigation, Share2, Camera, MessageSquare, ArrowRight, Zap, ExternalLink } from 'lucide-react';
import { STEPS, THEME } from './constants';
import { FormData, LeadPayload } from './types';

const SkippLogo = () => (
  <div className="flex flex-col items-center justify-center mb-4 w-full max-w-[320px] mx-auto scale-90 sm:scale-100">
    <div className="flex items-center gap-4">
      <svg width="80" height="64" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
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
        <span className="text-2xl sm:text-3xl font-black italic tracking-tighter" style={{ 
          background: 'linear-gradient(to bottom, #A020F0, #3B82F6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Skipp
        </span>
        <span className="text-xl sm:text-2xl font-bold text-[#0B0B0B] -mt-1 tracking-tight">
          Digital
        </span>
      </div>
    </div>
  </div>
);

const BrowserMockup = () => (
  <div className="w-full mt-4 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden text-left animate-slide-up">
    <div className="bg-[#F9FAFB] px-4 py-2 flex items-center justify-between border-b border-gray-200">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/30" />
      </div>
      <div className="flex-1 mx-4 bg-white rounded-full py-1 px-3 border border-gray-100 flex items-center gap-1.5 shadow-inner">
        <ShieldCheck size={10} className="text-green-500" />
        <span className="text-[9px] text-gray-400 font-medium">business.google.com</span>
      </div>
      <Menu size={12} className="text-gray-300" />
    </div>
    <div className="p-4 sm:p-6">
      <div className="inline-flex items-center gap-1.5 bg-blue-50 px-2 py-1 rounded-md mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] font-bold text-blue-600 tracking-tight">Insights Google 2024</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans-regular">
        No Brasil, o uso do digital explodiu.{' '}
        <span className="text-[#2FBBA8] font-black">91% das buscas</span>{' '}
        ocorrem antes da compra física.{' '}
        <span className="text-gray-900 font-bold">A sua empresa é a primeira opção que eles encontram?</span>
      </p>
    </div>
  </div>
);

const MiniMap = ({ faded = false }) => (
  <div className={`relative w-full h-full ${faded ? 'bg-gray-100' : 'bg-[#E5E7EB]'} overflow-hidden`}>
    <div className="absolute inset-0">
      <div className={`absolute top-1/4 left-0 w-full h-[3px] bg-white rotate-12 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-1/2 left-0 w-full h-[5px] bg-white -rotate-6 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-0 left-1/3 w-[4px] h-full bg-white rotate-3 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-4 left-6 w-8 h-8 ${faded ? 'bg-gray-200' : 'bg-green-100/40'} rounded-full blur-xl`} />
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <MapPin size={20} className={`${faded ? 'text-gray-300' : 'text-red-500 fill-red-500'} drop-shadow-lg ${!faded && 'animate-bounce'}`} />
    </div>
    <div className="absolute bottom-1 left-2 opacity-30 text-[7px] font-black italic text-gray-500">Maps</div>
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
    <div className="w-full space-y-6 animate-fade-in px-2">
      <div className="flex justify-between items-start gap-4 pt-2">
        {/* Antes - Quadrado Vermelho/Apagado */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-2 opacity-50">
            <XCircle size={20} className="text-red-400" />
          </div>
          <span className="text-[9px] font-black text-gray-400 mb-3 uppercase tracking-widest">Antes</span>
          <div className="relative w-full max-w-[120px] aspect-[9/18.5] bg-[#F3F4F6] rounded-[24px] border-[4px] border-gray-200 shadow-sm overflow-hidden p-1.5 opacity-50 filter grayscale-[0.8]">
            <div className="w-full h-full bg-white rounded-[18px] shadow-sm flex flex-col overflow-hidden">
               {/* Cabeçalho Apagado */}
               <div className="h-14 w-full bg-gray-100 relative overflow-hidden flex flex-col justify-end p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="relative z-10 text-left">
                    <div className="h-1.5 w-14 bg-gray-300 rounded-[1px] mb-1" />
                    <div className="flex items-center gap-0.5">
                       <span className="text-[7px] font-bold text-gray-400">2.1</span>
                       <div className="flex gap-0.2">
                          <Star size={5} fill="#D1D5DB" color="#D1D5DB" />
                          <Star size={5} fill="#D1D5DB" color="#D1D5DB" />
                          <Star size={5} fill="#F3F4F6" color="#D1D5DB" />
                       </div>
                       <span className="text-[5px] text-gray-400 font-bold ml-0.5">(3)</span>
                    </div>
                  </div>
               </div>
               <div className="p-1 space-y-1.5">
                  <div className="grid grid-cols-4 gap-1 py-1 border-b border-gray-50 opacity-40">
                     {[Phone, Navigation, MessageSquare, Share2].map((Icon, i) => (
                       <div key={i} className="flex flex-col items-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                             <Icon size={6} className="text-gray-300" />
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="h-12 w-full rounded-lg border border-gray-50 relative overflow-hidden bg-gray-50">
                     <MiniMap faded={true} />
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="self-center pt-10">
          <ArrowRight size={16} className="text-gray-200" />
        </div>

        {/* Depois - Quadrado Verde/Vivo */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mb-2">
            <CheckCircle size={20} style={{ color: VERDE_CHECK }} />
          </div>
          <span className="text-[9px] font-black mb-3 uppercase tracking-widest" style={{ color: VERDE_CHECK }}>Depois</span>
          <div 
            className="relative w-full max-w-[125px] aspect-[9/18.5] bg-white rounded-[26px] border-[5px] shadow-2xl overflow-hidden p-1.5 transition-all duration-500 hover:scale-105"
            style={{ borderColor: VERDE_CHECK }}
          >
            <div className="w-full h-full bg-white rounded-[18px] shadow-sm flex flex-col overflow-hidden">
               <div className="h-14 w-full bg-[#6366F1]/10 relative overflow-hidden flex flex-col justify-end p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-1 right-1 flex gap-1 items-center">
                     <ShieldCheck size={10} className="text-blue-400 fill-white" />
                  </div>
                  <div className="relative z-10 text-left">
                    <div className="h-2 w-18 bg-white rounded-[1px] mb-1" />
                    <div className="flex items-center gap-0.5">
                       <span className="text-[7px] font-black text-white">5.0</span>
                       <div className="flex gap-0.2">
                          {[1,2,3,4,5].map(i => <Star key={i} size={5} fill="#EAB308" color="#EAB308" />)}
                       </div>
                       <span className="text-[5px] text-white/90 font-bold ml-0.5">(247)</span>
                    </div>
                  </div>
               </div>
               <div className="p-1 space-y-1.5">
                  <div className="grid grid-cols-4 gap-1 py-1 border-b border-gray-50">
                     {[Phone, Navigation, MessageSquare, Share2].map((Icon, i) => (
                       <div key={i} className="flex flex-col items-center">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#2FBBA8]' : 'bg-gray-50 border border-gray-100'}`}>
                             <Icon size={7} className={i === 0 ? 'text-white' : 'text-gray-400'} />
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="h-10 w-full rounded-lg border border-gray-100 relative overflow-hidden shadow-inner">
                     <MiniMap />
                  </div>

                  {/* Links de Pesquisa do Google */}
                  <div className="space-y-1 pt-0.5">
                    <div className="flex flex-col gap-0.5 border-l-[1px] border-[#2FBBA8] pl-1">
                      <p className="text-[4px] font-bold text-gray-800 leading-tight">Sua empresa em 1º lugar</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-2 px-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            <span className="flex-1 text-[10px] text-gray-400 font-medium text-left leading-tight">{item.antes}</span>
            <div className="flex-none flex items-center gap-1">
               <div className="w-1 h-1 rounded-full bg-gray-200" />
               <div className="w-4 h-[1px] bg-gray-100" />
               <div className="w-1 h-1 rounded-full" style={{ backgroundColor: VERDE_CHECK }} />
            </div>
            <span className="flex-1 text-[10px] text-black font-black text-right leading-tight">{item.depois}</span>
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
      }, 400);
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
    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (err) {
      setError('Erro ao enviar. Tente novamente em instantes.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-screen h-[100dvh] bg-white flex flex-col items-center justify-center p-8 text-center animate-fade-in overflow-hidden">
        <div className="mb-6"><SkippLogo /></div>
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 shadow-sm border border-green-100">
          <CheckCircle2 size={32} color={THEME.primary} />
        </div>
        <h1 className="text-2xl font-black mb-3 text-gray-900">Tudo Pronto!</h1>
        <p className="text-base text-[#6B6B6B] mb-8 leading-relaxed">
          O seu checklist exclusivo e o guia de otimização já foram enviados para o seu e-mail.
        </p>
        <button
          onClick={handleReset}
          className="w-full max-w-xs py-4 px-8 rounded-2xl text-white font-black shadow-[0_10px_30px_rgba(47,187,168,0.3)] transition-all active:scale-95 flex items-center justify-center gap-2"
          style={{ backgroundColor: THEME.primary }}
        >
          <RotateCcw size={18} /> Reiniciar Processo
        </button>
      </div>
    );
  }

  if (showEmailStep) {
    return (
      <div className="h-screen h-[100dvh] bg-white flex flex-col p-6 max-w-md mx-auto overflow-hidden">
        <SkippLogo />
        <div className="flex-1 flex flex-col justify-center -mt-6 animate-fade-in overflow-y-auto no-scrollbar pb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#E9F8F5] flex items-center justify-center mb-4 shrink-0">
            <Zap size={24} className="text-[#2FBBA8] fill-[#2FBBA8]" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Onde enviamos o seu Guia?</h2>
          <p className="text-sm text-[#6B6B6B] mb-8 leading-relaxed">
            Informe seus dados para receber o checklist premium e começar a atrair mais clientes ainda hoje.
          </p>
          
          <div className="space-y-4">
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5 ml-1 text-gray-400 transition-colors group-focus-within:text-[#2FBBA8]">Seu Nome Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como quer ser chamado?"
                className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#2FBBA8] outline-none transition-all shadow-sm ring-1 ring-gray-100 focus:ring-4 focus:ring-[#2FBBA8]/10 text-sm text-gray-900 font-medium"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-black uppercase tracking-widest mb-1.5 ml-1 text-gray-400 transition-colors group-focus-within:text-[#2FBBA8]">E-mail para recebimento</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@melhoremail.com"
                className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#2FBBA8] outline-none transition-all shadow-sm ring-1 ring-gray-100 focus:ring-4 focus:ring-[#2FBBA8]/10 text-sm text-gray-900 font-medium"
              />
            </div>
          </div>

          <button
            onClick={submitLead}
            disabled={isSubmitting || !email}
            className="w-full mt-8 py-4 px-8 rounded-2xl text-white font-black shadow-[0_15px_35px_rgba(47,187,168,0.4)] flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-70 disabled:grayscale shrink-0"
            style={{ backgroundColor: THEME.primary }}
          >
            {isSubmitting ? <Loader2 className="animate-spin" /> : <>Receber Guia Vitalício <ArrowRight size={18} /></>}
          </button>
          
          {error && <p className="text-red-500 text-center mt-4 text-xs font-bold animate-shake">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen h-[100dvh] bg-white flex flex-col max-w-md mx-auto relative overflow-hidden selection:bg-[#2FBBA8]/30">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50 h-1.5 max-w-md mx-auto">
        <div 
          className="h-full transition-all duration-700 ease-in-out relative"
          style={{ backgroundColor: THEME.primary, width: `${currentStep.progress}%` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-white/20 blur-md animate-shimmer" />
        </div>
      </div>

      <main className="flex-1 pt-6 pb-20 px-6 sm:px-8 flex flex-col overflow-y-auto no-scrollbar">
        {currentStep.type !== 'intro' && <SkippLogo />}

        <div key={currentStepIndex} className="w-full flex-1 animate-fade-in flex flex-col">
          {currentStep.type === 'intro' ? (
            <div className="text-center pt-2">
              <span className="inline-block px-3 py-1 bg-[#E9F8F5] text-[#2FBBA8] text-[9px] font-black uppercase tracking-[0.2em] rounded-full mb-4">
                Insights Estratégicos
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3 px-2">
                {currentStep.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium">
                {currentStep.description}
              </p>
              
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-2xl text-white font-black shadow-[0_12px_30px_rgba(47,187,168,0.35)] transition-all active:scale-95 mb-8 hover:brightness-110 flex items-center justify-center gap-2"
                style={{ backgroundColor: THEME.primary }}
              >
                Começar agora <ArrowRight size={20} />
              </button>

              <BrowserMockup />
            </div>
          ) : (
            <div className="flex flex-col flex-1">
              <h1 className="text-xl sm:text-2xl font-black text-left leading-tight mb-2 text-gray-900">
                {currentStep.title}
              </h1>

              {currentStep.subtitle && (
                <p className="text-left text-gray-500 mb-4 font-medium text-xs sm:text-sm leading-relaxed">
                  {currentStep.subtitle}
                </p>
              )}

              {currentStep.type === 'info' ? (
                <div className="space-y-6">
                  <HighFidelityComparison />

                  <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 group">
                    <div className="py-2 px-4 text-center text-white text-[10px] font-black uppercase tracking-[0.15em]" style={{ backgroundColor: THEME.primary }}>
                      OFERTA DE LANÇAMENTO EXCLUSIVA
                    </div>
                    <div className="p-6 bg-white flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="font-black text-xl text-gray-900 tracking-tight">Checklist Premium</h4>
                          <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-widest">Acesso Vitalício</p>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] text-red-500 line-through font-bold mb-0.5">R$ 197,00</span>
                          <span className="text-3xl font-black" style={{ color: THEME.primary }}>R$ 47,00</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {['Guia Prático em Vídeo', 'Checklist de Verificação', 'Dicas de Avaliações 5★'].map(b => (
                          <div key={b} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                            <CheckCircle size={12} className="text-[#2FBBA8]" /> {b}
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={handleNext}
                        className="w-full py-4 rounded-2xl text-white font-black shadow-[0_20px_40px_rgba(47,187,168,0.3)] transition-all active:scale-95 hover:brightness-110 flex items-center justify-center gap-2"
                        style={{ backgroundColor: THEME.primary }}
                      >
                        Desbloquear Agora <Zap size={18} fill="white" />
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
                          relative p-4 rounded-3xl text-left transition-all duration-300 border-[3px] group
                          ${isSelected 
                            ? 'border-[#2FBBA8] bg-[#E9F8F5] shadow-[0_10px_25px_rgba(47,187,168,0.1)] translate-y-[-2px]' 
                            : 'border-gray-50 bg-white hover:border-gray-100 hover:bg-gray-50/50 shadow-sm'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                            ${isSelected ? 'border-[#2FBBA8] bg-[#2FBBA8]' : 'border-gray-200 bg-white group-hover:border-gray-300'}
                          `}>
                            {isSelected && <CheckCircle2 size={12} color="white" strokeWidth={3} />}
                          </div>
                          <span className={`text-xs sm:text-sm font-bold leading-tight transition-colors ${isSelected ? 'text-[#0B0B0B]' : 'text-gray-500'}`}>
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
                  className="w-full mt-4 sm:mt-6 py-4 rounded-2xl text-white font-black shadow-[0_15px_35px_rgba(47,187,168,0.35)] transition-all active:scale-95 disabled:opacity-50 disabled:grayscale hover:brightness-110 flex items-center justify-center gap-2 shrink-0 mb-4"
                  style={{ backgroundColor: THEME.primary }}
                >
                  Continuar <ArrowRight size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/80 backdrop-blur-xl border-t border-gray-100 p-4 flex justify-between items-center z-40 px-8">
        <button 
          onClick={handleBack}
          disabled={currentStepIndex === 0}
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-gray-900 bg-gray-50 border border-gray-100 disabled:opacity-30 active:scale-90 transition-all"
          aria-label="Voltar"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-1.5">
          {STEPS.map((s, idx) => (
             <div 
               key={idx} 
               className={`h-1 rounded-full transition-all duration-300 ${idx === currentStepIndex ? 'w-5 bg-[#2FBBA8]' : 'w-1 bg-gray-200'}`} 
             />
          ))}
        </div>

        <button 
          onClick={handleReset}
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-gray-900 bg-gray-50 border border-gray-100 active:scale-90 transition-all hover:bg-red-50 hover:text-red-500 hover:border-red-100"
          aria-label="Reiniciar"
        >
          <RotateCcw size={18} />
        </button>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-shimmer { animation: shimmer 2s infinite linear; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;
