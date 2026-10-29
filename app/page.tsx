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
  Sparkles
} from "lucide-react";

export default function Home() {
  const whatsappNumber = "5571999504516";
  
  const getWhatsAppUrl = (procedureName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar ou tirar dúvidas sobre o procedimento: *${procedureName}*.`);
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
  };

  const generalWhatsAppUrl = getWhatsAppUrl("Consulta Cardiológica Geral");

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
            <a href="#agendamento" className="hover:text-teal-600 transition-colors">Agendamento</a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-teal-600 transition-colors">Localização</a>
          </nav>

          <a 
            href={generalWhatsAppUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-teal-600/20 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </a>
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
                <a 
                  href={generalWhatsAppUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal-600/25 text-base active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar com a Secretária</span>
                </a>
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
            <p className="text-slate-600 mt-3">Clique no procedimento desejado para tirar dúvidas ou agendar diretamente com a secretária.</p>
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
              <a 
                href={getWhatsAppUrl("Consulta Cardiológica Completa")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group"
              >
                <span>Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
              <a 
                href={getWhatsAppUrl("Check-up Preventivo Avançado")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group"
              >
                <span>Agendar Check-up</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
              <a 
                href={getWhatsAppUrl("Medicina Esportiva e Performance")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-between w-full bg-white hover:bg-teal-600 hover:text-white text-teal-700 border border-teal-200 font-semibold px-4 py-3 rounded-xl transition-all text-sm group"
              >
                <span>Agendar Avaliação</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
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
            <span>Processo Simples e Sem Burocracia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Como agendar o seu atendimento em 3 passos
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-12 text-base">
            Valorizamos o seu tempo. O nosso fluxo de marcação é ágil e centralizado via WhatsApp para garantir o seu horário ideal com total comodidade.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">01. Escolha o Procedimento</span>
              <p className="text-teal-100 text-sm leading-relaxed">Selecione o tratamento ou check-up desejado e clique no botão de agendamento rápido.</p>
            </div>
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">02. Alinhe com a Secretária</span>
              <p className="text-teal-100 text-sm leading-relaxed">O chat abrirá automaticamente com a mensagem pronta. Informe sua preferência de dia e período.</p>
            </div>
            <div className="bg-teal-800/60 border border-teal-700/50 p-6 rounded-2xl backdrop-blur-sm">
              <span className="text-teal-400 font-bold text-lg block mb-2">03. Consulta Confirmada</span>
              <p className="text-teal-100 text-sm leading-relaxed">Receba a confirmação oficial, orientações de preparo e os dados de acesso ao consultório.</p>
            </div>
          </div>

          <a 
            href={generalWhatsAppUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-teal-900 hover:bg-teal-50 font-bold px-8 py-4 rounded-xl transition-all shadow-xl text-base active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span>Iniciar Agendamento Agora</span>
          </a>
        </div>
      </section>

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
          © 2026 Dr. Alexandre Werner. Todos os direitos reservados. CRM-BA 32450.
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP COM BALÃO DE NOTIFICAÇÃO ANIMADO */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Balão de Texto / Tooltip */}
        <div className="hidden sm:flex items-center bg-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
          <span>Olá! Precisa de ajuda? Fale connosco 💬</span>
        </div>

        {/* Botão do WhatsApp */}
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