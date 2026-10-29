"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Stethoscope, 
  ShieldCheck, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award,
  Users,
  HelpCircle,
  ArrowRight,
  Sparkles,
  X,
  Send,
  Lock
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5571999504516";
  
  // Estado para controlar o Modal de Triagem Inteligente
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState("Consulta Cardiológica Geral");
  const [patientName, setPatientName] = useState("");
  const [patientType, setPatientType] = useState("Particular (Com nota para Reembolso)");
  const [patientNote, setPatientNote] = useState("");

  const handleOpenModal = (procedure: string) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Meu nome é *${patientName || "Paciente"}*.\nGostaria de agendar: *${selectedProcedure}*.\nTipo de atendimento: *${patientType}*.\nDetalhes/Sintomas: ${patientNote || "Não informado"}`
    );
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  const generalWhatsAppUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=` + encodeURIComponent("Olá! Gostaria de tirar dúvidas ou agendar uma consulta.");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-500 selection:text-white">
      
      {/* SCHEMA.ORG DE SEO LOCAL PARA O GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Dr. Alexandre Werner - Cardiologia Avançada",
            "image": "https://credvalesolucoes.com.br/medico-foto.jpg",
            "@id": "https://credvalesolucoes.com.br",
            "url": "https://credvalesolucoes.com.br",
            "telephone": "+5571999504516",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ed. Empresarial Prime, Sala 402",
              "addressLocality": "Salvador",
              "addressRegion": "BA",
              "postalCode": "40000-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -12.9714,
              "longitude": -38.5014
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "medicalSpecialty": "Cardiology"
          })
        }}
      />
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">Dr. Alexandre Werner</span>
              <span className="text-xs font-medium text-teal-600 tracking-wider uppercase mt-1 block">Cardiologia & Medicina Avançada</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#especialidades" className="hover:text-teal-600 transition-colors">Especialidades</a>
            <a href="#agendamento" className="hover:text-teal-600 transition-colors">Triagem & Agendamento</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-teal-600 transition-colors">Localização</a>
          </nav>

          <button 
            onClick={() => handleOpenModal("Consulta Cardiológica Geral")}
            className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-teal-600/20 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-teal-50/50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>CRM-BA 32450 | RQE Especialista</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Cuidado humanizado e excelência em <span className="text-teal-600">saúde integrativa</span>.
              </h1>
              
              <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Aliamos tecnologia de ponta, diagnósticos precisos e um atendimento focado no seu bem-estar global e longevidade saudável em Salvador.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => handleOpenModal("Consulta Inicial / Triagem")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal-600/25 text-base active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Iniciar Triagem no WhatsApp</span>
                </button>
                <a 
                  href="#especialidades" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-4 rounded-xl border border-slate-200 transition-all text-base"
                >
                  Conhecer Tratamentos
                </a>
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl font-bold text-slate-900">+12 mil</p>
                  <p className="text-xs text-slate-500 font-medium">Pacientes Atendidos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">15 anos</p>
                  <p className="text-xs text-slate-500 font-medium">De Experiência</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9/5.0</p>
                  <p className="text-xs text-slate-500 font-medium">Avaliação no Google</p>
                </div>
              </div>

            </div>

            {/* Imagem de Destaque / Mockup do Consultório */}
            <div className="relative mx-auto max-w-md lg:max-w-none w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/5] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 via-transparent to-transparent z-10" />
                <div className="text-center p-8 z-20 text-slate-700 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg m-6">
                  <Stethoscope className="w-16 h-16 text-teal-600 mx-auto mb-3" />
                  <p className="font-bold text-lg text-slate-900">Dr. Alexandre Werner</p>
                  <p className="text-xs text-teal-700 font-semibold uppercase mt-1">Especialista Titulado pela SBC</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Atendimento Particular</p>
                  <p className="text-[10px] text-slate-500">E Reembolso de Convênios</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE ESPECIALIDADES */}
      <section id="especialidades" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">Áreas de Atuação</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Tratamentos e Especialidades</p>
            <p className="text-slate-600 mt-3">Faça uma triagem prévia interativa e garanta o seu atendimento personalizado.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 hover:bg-teal-50/40 border border-slate-100 hover:border-teal-200 p-8 rounded-2xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Consulta Cardiológica Completa</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Avaliação de risco cardiovascular, eletrocardiograma, MAPA, Holter e acompanhamento contínuo da pressão arterial.
                </p>
              </div>
              <button 
                onClick={() => handleOpenModal("Consulta Cardiológica Completa")}
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group cursor-pointer"
              >
                <span>Fazer Triagem & Agendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-slate-50 hover:bg-teal-50/40 border border-slate-100 hover:border-teal-200 p-8 rounded-2xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Check-up Preventivo Avançado</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Bateria completa de exames laboratoriais e de imagem integrados para rastreio precoce de patologias e longevidade.
                </p>
              </div>
              <button 
                onClick={() => handleOpenModal("Check-up Preventivo Avançado")}
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group cursor-pointer"
              >
                <span>Fazer Triagem & Agendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-slate-50 hover:bg-teal-50/40 border border-slate-100 hover:border-teal-200 p-8 rounded-2xl transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Medicina Esportiva & Performance</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Otimização metabólica, teste cardiopulmonar de exercício e orientação para praticantes de atividades físicas.
                </p>
              </div>
              <button 
                onClick={() => handleOpenModal("Medicina Esportiva e Performance")}
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group cursor-pointer"
              >
                <span>Fazer Triagem & Agendar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO DE WIDGET DE AGENDAMENTO / PASSO A PASSO */}
      <section id="agendamento" className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-800 text-teal-200 px-4 py-1.5 rounded-full text-xs font-semibold mb-4 border border-teal-700">
            <Sparkles className="w-4 h-4" />
            <span>Exclusivo: Sistema de Triagem Inteligente & Seguro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Atendimento ágil, sigiloso e em total conformidade com a LGPD
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-12 text-base">
            O nosso assistente recolhe as suas necessidades com criptografia e respeito absoluto ao sigilo médico antes de abrir o WhatsApp.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">01. Selecione o Procedimento</span>
              <p className="text-teal-100 text-sm leading-relaxed">Escolha a especialidade e abra o nosso mini-formulário inteligente de triagem.</p>
            </div>
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">02. Informe seus Dados</span>
              <p className="text-teal-100 text-sm leading-relaxed">Digite seu nome, se o atendimento é particular/convênio e o seu objetivo principal.</p>
            </div>
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">03. Envio Sigiloso</span>
              <p className="text-teal-100 text-sm leading-relaxed">O sistema estrutura a mensagem protegida direto para o WhatsApp do consultório.</p>
            </div>
          </div>

          <button 
            onClick={() => handleOpenModal("Consulta Geral de Triagem")}
            className="inline-flex items-center gap-3 bg-white text-teal-900 hover:bg-teal-50 font-bold px-8 py-4 rounded-xl transition-all shadow-xl text-base active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span>Iniciar Triagem Inteligente</span>
          </button>
        </div>
      </section>

      {/* MODAL DE TRIAGEM INTELIGENTE COM AVISO LGPD */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-teal-700 bg-teal-50 px-3 py-1 rounded-full text-[11px] font-semibold mb-2">
                <Lock className="w-3 h-3" />
                <span>Ambiente Seguro & Sigiloso (LGPD)</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Marcar Consulta</h3>
              <p className="text-xs text-slate-500 mt-1">Procedimento selecionado: <strong className="text-teal-700">{selectedProcedure}</strong></p>
            </div>

            <form onSubmit={handleSendToWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Seu Nome Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Maria Silva"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tipo de Atendimento</label>
                <select 
                  value={patientType}
                  onChange={(e) => setPatientType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-600 transition-colors"
                >
                  <option value="Particular (Com nota para Reembolso)">Particular (Com nota para Reembolso)</option>
                  <option value="Convênio Médico">Convênio Médico</option>
                  <option value="Primeira Vez / Avaliação">Primeira Vez / Avaliação</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Principais Sintomas ou Motivo</label>
                <textarea 
                  rows={3}
                  placeholder="Ex: Sinto falta de ar leve ao caminhar e preciso de check-up..."
                  value={patientNote}
                  onChange={(e) => setPatientNote(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-600 transition-colors resize-none"
                />
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1">
                <Lock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Dados protegidos pelo sigilo médico e em conformidade com a LGPD.</span>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 text-base cursor-pointer mt-2"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Triagem para o WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SEÇÃO DE FAQ (PERGUNTAS FREQUENTES) */}
      <section id="faq" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">Tire suas Dúvidas</h2>
            <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Perguntas Frequentes</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                Como funciona o atendimento por convênios médicos?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Trabalhamos no modelo particular com emissão de nota fiscal detalhada e laudos completos para que você possa solicitar o reembolso integral ou parcial junto ao seu plano de saúde, conforme as regras da sua operadora.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                Como devo me preparar para a primeira consulta cardiológica?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recomendamos trazer exames laboratoriais ou cardiológicos realizados nos últimos 12 meses, além de uma lista com os medicamentos de uso contínuo. Não é necessário jejum absoluto, a menos que especificado previamente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                Onde fica localizado o consultório?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                O consultório está localizado no Ed. Empresarial Prime, Sala 402, em Salvador - BA, contando com total acessibilidade e estacionamento no local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ E CONTATO */}
      <footer id="contato" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Stethoscope className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">Dr. Alexandre Werner</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Compromisso absoluto com a sua saúde cardiovascular e qualidade de vida. Atendimento humanizado e tecnológico.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-500" /> Segunda a Sexta: 08h às 18h</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-500" /> Ed. Empresarial Prime, Sala 402, Salvador - BA</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Agendamento Direto</h4>
            <p className="text-sm text-slate-400 mb-4">Tire dúvidas sobre convênios ou horários disponíveis diretamente com a nossa equipe.</p>
            <a 
              href={generalWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2.5 rounded-xl transition-all text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
        
        {/* Aviso de Privacidade e LGPD no Rodapé */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dr. Alexandre Werner. Todos os direitos reservados. CRM-BA 32450.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Lock className="w-3.5 h-3.5 text-teal-500" />
            <span>Plataforma em conformidade com a LGPD e Sigilo Médico.</span>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP COM BALÃO DE NOTIFICAÇÃO ANIMADO */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex items-center bg-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
          <span>Olá! Precisa de ajuda? Fale connosco 💬</span>
        </div>

        <a 
          href={generalWhatsAppUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Fale pelo WhatsApp"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 relative"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        </a>
      </div>

    </div>
  );
}