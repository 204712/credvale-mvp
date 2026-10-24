'use client';
import React, { useState } from 'react';
import { Shield, MessageSquare, TrendingUp, Award, PhoneCall, ArrowRight, Lock, Users, Clock } from 'lucide-react';

export default function Home() {
  // Estado das abas principais: 'consorcio' ou 'seguro'
  const [activeTab, setActiveTab] = useState<'consorcio' | 'seguro'>('consorcio');

  // Estados Consórcio
  const [consorcioTipo, setConsorcioTipo] = useState<'imovel' | 'auto' | 'pesados'>('imovel');
  const [valorConsorcio, setValorConsorcio] = useState<number>(300000);
  const [prazoConsorcio, setPrazoConsorcio] = useState<number>(180);

  // Estados Seguro
  const [seguroTipo, setSeguroTipo] = useState<'auto' | 'vida_residencia'>('auto');
  const [valorBemSeguro, setValorBemSeguro] = useState<number>(60000);

  // Dados para cálculo simulado (Consórcio)
  const taxaAdminConsorcio = 0.18; // 18% total no período
  const fundoReserva = 0.02;
  const valorTotalConsorcio = valorConsorcio * (1 + taxaAdminConsorcio + fundoReserva);
  const parcelaConsorcio = valorTotalConsorcio / prazoConsorcio;

  // Cálculo estimado seguro
  const prêmioSeguroMensal = (valorBemSeguro * 0.04) / 12;

  const handleWhatsAppRedirect = (produtoInfo: string) => {
    const telefone = "5571999504516"; // Substitua pelo WhatsApp da Franquia
    const mensagem = encodeURIComponent(`Olá! Fiz uma simulação no site da CredVale e tenho interesse em: ${produtoInfo}. Poderia me ajudar?`);
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Shield className="h-7 w-7 text-blue-200" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">CredVale</span>
              <span className="block text-xs text-blue-300 font-medium">Consórcios & Seguros</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#simulador" className="hover:text-blue-300 transition-colors">Simulador</a>
            <a href="#beneficios" className="hover:text-blue-300 transition-colors">Vantagens</a>
          </nav>
          <button 
            onClick={() => handleWhatsAppRedirect("Atendimento Geral / Dúvidas")}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm flex items-center space-x-2 shadow-sm transition-all"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Fale no WhatsApp</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-blue-800/80 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-700">
              Franquia Autorizada Nacional
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Realize seus sonhos com planejamento e proteção financeira
            </h1>
            <p className="text-lg text-blue-100 max-w-xl">
              Especialistas em consórcios imobiliários, autos e seguros sob medida. Atendimento humanizado, transparente e sem burocracia direto pelo WhatsApp.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#simulador" className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-semibold shadow-lg transition-all flex items-center space-x-2">
                <span>Simular Agora</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <button 
                onClick={() => handleWhatsAppRedirect("Quero tirar dúvidas sobre planos")}
                className="border border-blue-400 text-white hover:bg-blue-800/50 px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center space-x-2"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Falar com Consultor</span>
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900/40 p-4 rounded-2xl border border-blue-700/50">
                <TrendingUp className="h-8 w-8 text-blue-300 mb-2" />
                <h3 className="font-bold text-white text-lg">Consórcios</h3>
                <p className="text-xs text-blue-200">Sem juros, taxa menor que financiamento tradicional.</p>
              </div>
              <div className="bg-blue-900/40 p-4 rounded-2xl border border-blue-700/50">
                <Shield className="h-8 w-8 text-blue-300 mb-2" />
                <h3 className="font-bold text-white text-lg">Seguros</h3>
                <p className="text-xs text-blue-200">Proteção completa para sua família e patrimônio.</p>
              </div>
            </div>
            <div className="mt-6 bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center space-x-3">
              <Lock className="h-5 w-5 text-emerald-400 flex-shrink-0" />
              <p className="text-xs text-blue-100">Parceiros das maiores administradoras e seguradoras homologadas pela SUSEP e Banco Central.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULADOR INTERATIVO */}
      <section id="simulador" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase">Simulador Inteligente</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Simule sua Proposta em Segundos</h2>
            <p className="text-slate-600 text-sm mt-2">Escolha entre Consórcio ou Seguro e personalize os valores para receber atendimento direto no WhatsApp.</p>
          </div>

          {/* ABAS SUPERIORES DE ESCOLHA (CONSÓRCIO VS SEGURO) */}
          <div className="flex rounded-xl bg-slate-100 p-1.5 max-w-md mx-auto mb-8">
            <button
              onClick={() => setActiveTab('consorcio')}
              className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'consorcio' 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Consórcios
            </button>
            <button
              onClick={() => setActiveTab('seguro')}
              className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'seguro' 
                  ? 'bg-blue-900 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Seguros
            </button>
          </div>

          {/* CONTEÚDO DO SIMULADOR DE CONSÓRCIOS */}
          {activeTab === 'consorcio' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Selecione o Segmento do Consórcio</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => { setConsorcioTipo('imovel'); setValorConsorcio(300000); setPrazoConsorcio(180); }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      consorcioTipo === 'imovel' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Imóvel
                  </button>
                  <button
                    onClick={() => { setConsorcioTipo('auto'); setValorConsorcio(60000); setPrazoConsorcio(72); }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      consorcioTipo === 'auto' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Automóvel
                  </button>
                  <button
                    onClick={() => { setConsorcioTipo('pesados'); setValorConsorcio(250000); setPrazoConsorcio(120); }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      consorcioTipo === 'pesados' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Pesados / Maquinário
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-slate-700">Crédito Desejado</label>
                      <span className="text-lg font-bold text-blue-900">
                        {valorConsorcio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min={consorcioTipo === 'imovel' ? 100000 : 30000} 
                      max={consorcioTipo === 'imovel' ? 1000000 : 400000} 
                      step={10000}
                      value={valorConsorcio}
                      onChange={(e) => setValorConsorcio(Number(e.target.value))}
                      className="w-full accent-blue-900 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-slate-700">Prazo (Meses)</label>
                      <span className="text-lg font-bold text-blue-900">{prazoConsorcio} meses</span>
                    </div>
                    <input 
                      type="range" 
                      min={36} 
                      max={consorcioTipo === 'imovel' ? 240 : 100} 
                      step={12}
                      value={prazoConsorcio}
                      onChange={(e) => setPrazoConsorcio(Number(e.target.value))}
                      className="w-full accent-blue-900 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Parcela Mensal Estimada (Consórcio)</span>
                    <div className="text-3xl font-extrabold text-blue-900 mt-1">
                      {parcelaConsorcio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">*Taxa de administração e fundo de reserva inclusos.</p>
                  </div>
                  <button 
                    onClick={() => handleWhatsAppRedirect(`Consórcio de ${consorcioTipo.toUpperCase()} no valor de ${valorConsorcio.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em ${prazoConsorcio}x`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-sm transition-all"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Quero este Consórcio no WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CONTEÚDO DO SIMULADOR DE SEGUROS */}
          {activeTab === 'seguro' && (
            <div className="space-y-8 animate-fadeIn">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">Selecione o Tipo de Seguro</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => { setSeguroTipo('auto'); setValorBemSeguro(60000); }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      seguroTipo === 'auto' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Automóvel (Auto)
                  </button>
                  <button
                    onClick={() => { setSeguroTipo('vida_residencia'); setValorBemSeguro(300000); }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm border transition-all ${
                      seguroTipo === 'vida_residencia' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    Vida & Residência
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-slate-700">
                        {seguroTipo === 'auto' ? 'Valor Fipe do Veículo' : 'Valor de Cobertura / Patrimônio'}
                      </label>
                      <span className="text-lg font-bold text-blue-900">
                        {valorBemSeguro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min={20000} 
                      max={seguroTipo === 'auto' ? 200000 : 1000000} 
                      step={10000}
                      value={valorBemSeguro}
                      onChange={(e) => setValorBemSeguro(Number(e.target.value))}
                      className="w-full accent-blue-900 cursor-pointer"
                    />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <p className="text-xs text-blue-800">
                      💡 <strong>Proteção Garantida:</strong> Assistência 24 horas, carro reserva (quando aplicável) e cobertura completa.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-slate-400">Prêmio Mensal Estimado (Seguro)</span>
                    <div className="text-3xl font-extrabold text-blue-900 mt-1">
                      {prêmioSeguroMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <span className="text-sm font-normal text-slate-500">/mês</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">*Cotação sujeita à análise de perfil detalhada.</p>
                  </div>
                  <button 
                    onClick={() => handleWhatsAppRedirect(`Cotação de Seguro (${seguroTipo === 'auto' ? 'Automóvel' : 'Vida & Residência'}) com cobertura de ${valorBemSeguro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-sm transition-all"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Cotar Seguro no WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO DE BENEFÍCIOS */}
      <section id="beneficios" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Por que escolher a CredVale?</h2>
            <p className="text-slate-600 mt-2">Combinamos a solidez de uma franquia nacional com a agilidade digital que você precisa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="bg-blue-100 text-blue-900 p-3 rounded-xl w-fit">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Franquia Homologada</h3>
              <p className="text-sm text-slate-600">Trabalhamos com as melhores administradoras e seguradoras reguladas pelo Banco Central e SUSEP.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="bg-blue-100 text-blue-900 p-3 rounded-xl w-fit">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Atendimento Ágil via WhatsApp</h3>
              <p className="text-sm text-slate-600">Esqueça filas de banco. Nosso time responde suas dúvidas e simulações em minutos direto no chat.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="bg-blue-100 text-blue-900 p-3 rounded-xl w-fit">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Alcance Nacional</h3>
              <p className="text-sm text-slate-600">Atendemos clientes em todo o território brasileiro com suporte digital completo e seguro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-blue-300" />
            <span className="font-bold text-lg">CredVale Consórcios & Seguros</span>
          </div>
          <p className="text-xs text-slate-400 text-center md:text-right">
            © 2026 CredVale. Todos os direitos reservados. Solução tecnológica para franquias financeiras.
          </p>
        </div>
      </footer>
    </div>
  );
}