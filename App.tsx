
import React, { useState, useCallback } from 'react';
import { ChevronLeft, RotateCcw, CheckCircle2, XCircle, CheckCircle, MapPin, Star, ShieldCheck, ArrowRight, Menu, RefreshCw, Zap, Shield, Lock, Check } from 'lucide-react';
import { STEPS, THEME } from './constants';
import { FormData } from './types';

const SUCCESS_GREEN = '#22C55E';
const SUCCESS_TEAL = '#2FBBA8';

const SkippLogo = () => (
  <div className="flex flex-col items-center justify-center mb-8 w-full max-w-[320px] mx-auto">
    <div className="flex flex-col items-center gap-0">
      <div className="flex items-center leading-none">
        <span className="text-3xl font-black italic tracking-tighter" style={{ 
          background: THEME.brandGradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Skipp
        </span>
        <span className="text-3xl font-bold text-[#0B0B0B] tracking-tight">
          Digital
        </span>
      </div>
      <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em] mt-1.5">
        Estratégias Digitais
      </span>
    </div>
  </div>
);

const BenefitsList = () => (
  <div className="w-full max-w-sm space-y-4 mb-10 mt-8 px-2">
    <div className="flex items-center justify-between gap-4 font-black italic text-[11px] tracking-tight">
      <span className="text-gray-400 uppercase">Escondido nas buscas</span>
      <ArrowRight size={14} className="text-gray-300" />
      <span className="text-gray-900 uppercase">No topo das buscas</span>
    </div>
    
    {[
      { from: 'Perfil incompleto', to: 'Perfil otimizado' },
      { from: 'Sem avaliações', to: 'Avaliações 5 estrelas' },
      { from: 'Indo para concorrência', to: 'Novos clientes diários' }
    ].map((item, idx) => (
      <div key={idx} className="flex items-center justify-between gap-3 text-xs">
        <span className="flex-1 text-gray-500 font-medium text-right">{item.from}</span>
        <ArrowRight size={12} className="text-[#3B82F6] opacity-50" />
        <span className="flex-1 text-gray-900 font-black text-left">{item.to}</span>
      </div>
    ))}
  </div>
);

const OfferBox = () => (
  <div className="w-full max-w-sm rounded-[2rem] border-2 overflow-hidden shadow-lg mb-8" style={{ borderColor: SUCCESS_TEAL }}>
    <div className="py-3 px-4 text-center" style={{ background: SUCCESS_TEAL }}>
      <span className="text-white text-sm font-black uppercase tracking-wider">Oferta especial por tempo limitado:</span>
    </div>
    <div className="bg-white p-6 flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-2xl font-black text-gray-900 leading-tight">Acesso</span>
        <span className="text-2xl font-black text-gray-900 leading-tight">Vitalício</span>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 text-right border border-gray-100">
        <span className="block text-[10px] text-gray-400 font-bold line-through">De 197,00 Por</span>
        <div className="flex items-baseline justify-end gap-1">
          <span className="text-xs font-black text-gray-900">R$</span>
          <span className="text-3xl font-black text-gray-900">47,00</span>
        </div>
        <span className="block text-[10px] text-gray-500 font-bold">à vista</span>
      </div>
    </div>
  </div>
);

const TrustBadges = () => (
  <div className="flex justify-center gap-6 mb-12 opacity-60">
    <div className="flex items-center gap-1">
      <Shield size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">Compra<br/>100% segura</span>
    </div>
    <div className="flex items-center gap-1">
      <Lock size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">Privacidade<br/>protegida</span>
    </div>
    <div className="flex items-center gap-1">
      <Check size={16} style={{ color: SUCCESS_GREEN }} />
      <span className="text-[9px] font-black text-gray-500 leading-tight uppercase">Google<br/>verificado</span>
    </div>
  </div>
);

const DetailedBrowserMockup = () => (
  <div className="w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden text-left mt-8 animate-slide-up">
    {/* Browser Bar */}
    <div className="bg-[#F1F3F4] px-3 py-2 flex items-center gap-3 border-b border-gray-200">
      <span className="text-[10px] font-bold text-gray-400">OK</span>
      <div className="flex-1 bg-white rounded-full py-1 px-4 flex items-center justify-center gap-2 border border-gray-200">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="text-[10px] text-gray-500 font-medium">business.google.com</span>
      </div>
      <div className="flex items-center gap-2">
        <Menu size={14} className="text-gray-400" />
        <RefreshCw size={12} className="text-gray-400" />
      </div>
    </div>
    
    {/* Content */}
    <div className="p-5 font-sans">
      <div className="flex items-center gap-1 mb-4">
        <span className="text-xs font-black text-gray-800">Think with Google</span>
        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-gray-400 mt-0.5" />
      </div>
      
      <p className="text-[11px] leading-relaxed text-gray-600 font-medium">
        No Brasil, o uso do digital tem crescido significativamente.{' '}
        <span className="font-bold" style={{ color: THEME.primary }}>91% das buscas</span> relacionadas a serviços e produtos{' '}
        <span className="font-bold underline decoration-2" style={{ color: THEME.primary }}>acontecem antes mesmo de as pessoas irem à empresa.</span>{' '}
        Isso significa que o futuro do setor tende a ser mais online. A pergunta que fica é: a sua empresa está pronta para navegar neste contexto?
      </p>
    </div>
  </div>
);

const MiniMap = ({ faded = false }) => (
  <div className={`relative w-full h-full ${faded ? 'bg-gray-100' : 'bg-[#E0F2FE]'} overflow-hidden`}>
    <div className="absolute inset-0">
      <div className={`absolute top-1/4 left-0 w-full h-[3px] bg-white rotate-12 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-1/2 left-0 w-full h-[5px] bg-white -rotate-6 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-0 left-1/3 w-[4px] h-full bg-white rotate-3 ${faded ? 'opacity-40' : ''}`} />
      <div className={`absolute top-4 left-6 w-8 h-8 ${faded ? 'bg-gray-200' : 'bg-blue-100/40'} rounded-full blur-xl`} />
    </div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <MapPin size={20} className={`${faded ? 'text-gray-300' : 'text-blue-600 fill-blue-600'} drop-shadow-lg ${!faded && 'animate-bounce'}`} />
    </div>
    <div className="absolute bottom-1 left-2 opacity-30 text-[7px] font-black italic text-gray-500">Maps</div>
  </div>
);

const HighFidelityComparison = () => {
  return (
    <div className="w-full space-y-6 animate-fade-in px-2 pt-4">
      <div className="flex justify-between items-start gap-4">
        {/* Lado Antes */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border-2 border-red-100 bg-white flex items-center justify-center mb-3 shadow-sm">
            <XCircle size={22} className="text-red-400" />
          </div>
          <span className="text-[10px] font-black text-gray-400 mb-4 uppercase tracking-widest">Antes</span>
          <div className="relative w-full max-w-[130px] aspect-[9/18.5] bg-[#F3F4F6] rounded-[28px] border-[4px] border-gray-200 shadow-sm overflow-hidden p-1.5 opacity-60 filter grayscale-[0.6]">
            <div className="w-full h-full bg-white rounded-[20px] shadow-sm flex flex-col overflow-hidden">
               <div className="h-14 w-full bg-gray-100 relative overflow-hidden flex flex-col justify-end p-2">
                  <div className="relative z-10 text-left">
                    <div className="h-1.5 w-14 bg-gray-300 rounded-[1px] mb-1" />
                    <div className="flex items-center gap-0.5"><span className="text-[7px] font-bold text-gray-400">2.1</span><div className="flex gap-0.2"><Star size={5} fill="#D1D5DB" color="#D1D5DB" /><Star size={5} fill="#D1D5DB" color="#D1D5DB" /><Star size={5} fill="#F3F4F6" color="#D1D5DB" /></div></div>
                  </div>
               </div>
               <div className="p-1 space-y-1.5">
                  <div className="h-12 w-full rounded-lg border border-gray-50 relative overflow-hidden bg-gray-50"><MiniMap faded={true} /></div>
               </div>
            </div>
          </div>
        </div>

        {/* Seta de Transição */}
        <div className="self-center pt-24">
          <ArrowRight size={20} className="text-gray-200" />
        </div>

        {/* Lado Depois */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full border-2 border-green-100 bg-white flex items-center justify-center mb-3 shadow-sm">
            <CheckCircle size={22} style={{ color: SUCCESS_TEAL }} />
          </div>
          <span className="text-[10px] font-black mb-4 uppercase tracking-widest" style={{ color: SUCCESS_TEAL }}>Depois</span>
          <div className="relative w-full max-w-[135px] aspect-[9/18.5] bg-white rounded-[30px] border-[6px] shadow-2xl overflow-hidden p-1.5" style={{ borderColor: SUCCESS_TEAL }}>
            <div className="w-full h-full bg-white rounded-[20px] shadow-sm flex flex-col overflow-hidden">
               <div className="h-14 w-full bg-blue-500/10 relative overflow-hidden flex flex-col justify-end p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-1 right-1 flex gap-1 items-center"><ShieldCheck size={10} className="text-blue-400 fill-white" /></div>
                  <div className="relative z-10 text-left">
                    <div className="h-2 w-18 bg-white rounded-[1px] mb-1" />
                    <div className="flex items-center gap-0.5"><span className="text-[7px] font-black text-white">5.0</span><div className="flex gap-0.2">{[1,2,3,4,5].map(i => <Star key={i} size={5} fill="#EAB308" color="#EAB308" />)}</div><span className="text-[5px] text-white/90 font-bold ml-0.5">(247)</span></div>
                  </div>
               </div>
               <div className="p-1 space-y-1">
                  <div className="h-10 w-full rounded-lg border border-gray-100 relative overflow-hidden shadow-inner"><MiniMap /></div>
                  <div className="pt-2 px-0.5 space-y-2">
                    <div className="h-1.5 w-16 bg-blue-600 rounded-[1px]" />
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">{[1, 2, 3, 4].map((i) => (<div key={i} className="flex flex-col gap-0.5"><div className="h-1 w-10 bg-blue-500 rounded-[0.5px]" /><div className="h-0.5 w-full bg-gray-50 rounded-[0.2px]" /></div>))}</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesPage = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="flex-1 bg-white overflow-y-auto no-scrollbar animate-fade-in flex flex-col items-center px-6 pb-20 pt-8">
      <SkippLogo />
      
      <BenefitsList />

      <OfferBox />

      <button 
        className="w-full max-w-sm py-6 rounded-[2rem] text-white font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 mb-6 animate-pulse-cta"
        style={{ background: SUCCESS_GREEN }}
      >
        GARANTIR MEU ACESSO AGORA
      </button>

      <TrustBadges />

      <div className="text-center w-full max-w-xs px-4">
        <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">O que você vai receber:</h2>
        <p className="text-lg font-black text-gray-900 leading-snug">
          Você terá em mãos o caminho para transformar sua empresa em uma máquina de clientes, com ética e profissionalismo.
        </p>
      </div>

      <button onClick={onReset} className="mt-16 text-gray-400 text-xs font-bold flex items-center gap-1 opacity-50">
        <RotateCcw size={12} /> Reiniciar diagnóstico
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentStep = STEPS[currentStepIndex] || STEPS[0];

  const handleNext = useCallback(() => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsSubmitted(true);
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
      setTimeout(() => handleNext(), 400);
    }
  };

  const isStepValid = () => {
    if (!currentStep) return false;
    if (currentStep.type === 'info' || currentStep.type === 'intro') return true;
    const value = formData[currentStep.id];
    if (!value) return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  };

  const handleBack = () => {
    if (currentStepIndex > 0) setCurrentStepIndex(prev => prev - 1);
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setFormData({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <SalesPage onReset={handleReset} />;
  }

  return (
    <div className="h-screen bg-white flex flex-col max-w-md mx-auto relative overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-100 h-1.5 max-w-md mx-auto">
        <div 
          className="h-full transition-all duration-700 ease-in-out" 
          style={{ 
            background: THEME.brandGradient, 
            width: `${currentStep?.progress ?? 0}%` 
          }} 
        />
      </div>

      <main className="flex-1 pt-12 pb-40 px-6 flex flex-col overflow-y-auto no-scrollbar">
        <SkippLogo />

        <div key={currentStepIndex} className="w-full flex-1 animate-fade-in flex flex-col">
          {currentStep.type === 'intro' ? (
            <div className="text-center flex flex-col items-center">
              <p className="text-sm font-bold text-gray-500 mb-6 leading-relaxed">
                {currentStep.description}
              </p>
              
              <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4 text-center">
                {currentStep.title}
              </h1>

              <p className="text-xs font-medium text-gray-400 mb-8 italic">
                {currentStep.subtitle}
              </p>

              <button
                onClick={handleNext}
                className="w-full py-5 rounded-[2rem] text-white text-lg font-black shadow-2xl transition-all active:scale-95 flex items-center justify-center gap-2 mb-2"
                style={{ background: THEME.brandGradient }}
              >
                Continuar
              </button>

              <DetailedBrowserMockup />
            </div>
          ) : (
            <div className="flex flex-col flex-1">
              <h1 className="text-2xl font-black text-center leading-tight mb-4 text-gray-900">{currentStep.title}</h1>

              {currentStep.description && (
                <p className="text-center text-gray-400 mb-6 font-medium text-sm leading-relaxed px-2">{currentStep.description}</p>
              )}

              {currentStep.subtitle && (
                <p className="text-center text-gray-500 mb-8 font-bold text-sm leading-relaxed">
                  {currentStep.subtitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                </p>
              )}

              {currentStep.type === 'info' ? (
                <div className="space-y-6 flex-1 flex flex-col items-center pb-12">
                  <HighFidelityComparison />
                  
                  <BenefitsList />
                  
                  <OfferBox />
                  
                  <button 
                    onClick={handleNext}
                    className="w-full max-w-sm py-6 rounded-[2rem] text-white font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 mb-6 animate-pulse-cta"
                    style={{ background: SUCCESS_GREEN }}
                  >
                    GARANTIR MEU ACESSO AGORA
                  </button>
                  
                  <TrustBadges />
                  
                  <div className="text-center w-full max-w-xs px-4">
                    <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">O que você vai receber:</h2>
                    <p className="text-lg font-black text-gray-900 leading-snug">
                      Você terá em mãos o caminho para transformar sua empresa em uma máquina de clientes, com ética e profissionalismo.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 pb-10">
                  <div className={`grid gap-4 ${currentStep.gridCols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {currentStep.options?.map((option) => {
                      const isSelected = currentStep.type === 'checkbox' 
                        ? ((formData[currentStep.id] as string[]) || []).includes(option.id)
                        : formData[currentStep.id] === option.id;

                      return (
                        <button
                          key={option.id}
                          onClick={() => handleSelect(option.id)}
                          className={`
                            relative p-6 rounded-[2.5rem] text-left transition-all duration-300 border-2 shadow-sm
                            ${isSelected ? 'bg-[#EFF6FF] scale-[1.02] shadow-md' : 'border-gray-100 bg-white hover:border-gray-200'}
                          `}
                          style={{ borderColor: isSelected ? THEME.primary : '#F3F4F6' }}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`
                              w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 transition-all
                              ${isSelected ? '' : 'border-gray-200 bg-white'}
                            `}
                            style={{ 
                              background: isSelected ? THEME.brandGradient : 'white',
                              borderColor: isSelected ? THEME.primary : '#E5E7EB'
                            }}>
                              {isSelected && <CheckCircle2 size={18} color="white" strokeWidth={3} />}
                            </div>
                            <span className={`text-base font-black leading-snug transition-colors ${isSelected ? 'text-[#0B0B0B]' : 'text-gray-600'}`}>
                              {option.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md z-50 border-t border-gray-50 pb-safe">
        {(currentStep.type === 'checkbox') && (
          <div className="p-4 pt-2">
             <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="w-full py-5 rounded-[2rem] text-white text-lg font-black shadow-2xl transition-all active:scale-95 disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-2"
              style={{ background: THEME.brandGradient }}
            >
              Continuar
            </button>
          </div>
        )}

        <footer className="p-5 flex justify-between items-center px-10">
          <button onClick={handleBack} disabled={currentStepIndex === 0} className="w-10 h-10 flex items-center justify-center text-gray-900 disabled:opacity-20 active:scale-90 transition-all">
            <ChevronLeft size={28} />
          </button>

          <div className="flex gap-2 items-center">
            {STEPS.map((s, idx) => (
               <div key={idx} className={`rounded-full transition-all duration-300 ${idx === currentStepIndex ? 'w-6 h-1.5' : 'w-1.5 h-1.5 bg-gray-200'}`} style={{ backgroundColor: idx === currentStepIndex ? THEME.primary : undefined }} />
            ))}
          </div>

          <button onClick={() => { if(window.confirm('Reiniciar?')) handleReset(); }} className="w-10 h-10 flex items-center justify-center active:scale-90 transition-all">
            <RotateCcw size={22} className="text-gray-300" />
          </button>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-cta {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          70% { transform: scale(1.03); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pulse-cta { animation: pulse-cta 2s infinite cubic-bezier(0.4, 0, 0.6, 1); }
        .pb-safe { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
};

export default App;
