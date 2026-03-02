"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="min-h-screen bg-background text-zinc-100 overflow-x-hidden selection:bg-primary/30">

      {/* Background Layer (Non-blocking) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] md:w-[40%] md:h-[40%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] md:w-[30%] md:h-[50%] bg-[#0f7a58]/20 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
      </div>

      <Navbar activeItem="Início" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 flex min-h-screen items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 md:order-1 relative w-full aspect-[3/4] md:max-w-md mx-auto will-change-transform"
          >
            <div className="w-full h-full glass-panel overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
              {/* Building image */}
              <Image
                src="/edificio.webp"
                alt="Edifício em Belém"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 md:order-2 flex flex-col items-start gap-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Um Novo Jeito De<br />
              Conectar Seu<br />
              Condomínio Em Belém
            </h1>

            <p className="text-lg text-primary max-w-xl font-medium leading-relaxed">
              Somos uma agência de comunicação especializada em transformar a comunicação condominial em uma experiência moderna, clara e próxima. Dê mais visibilidade à sua gestão com conteúdos que aproximam síndicos, administradoras e moradores.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-primary-hover transition-colors shadow-[0_0_30px_rgba(27,204,148,0.3)] font-sans"
            >
              Saiba Mais
            </motion.button>
          </motion.div>

        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative py-24 md:py-32 z-10" id="nosso-processo">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20 will-change-[opacity,transform]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
              Nosso processo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0f7a58]">trabalho</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Comunicação Clara", desc: "Produzimos vídeos e informativos que destacam as ações da gestão de forma simples, visual e acessível para todos os moradores." },
              { num: "02", title: "Engajamento e Transparência", desc: "Com conteúdos constantes, os moradores acompanham de perto as melhorias do condomínio, fortalecendo a confiança na administração." },
              { num: "03", title: "Resultados a Longo Prazo", desc: "Gestões mais reconhecidas, moradores satisfeitos e valorização do condomínio como um todo." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative glass-panel p-8 md:p-10 border hover:border-primary/40 transition-colors duration-500 group overflow-hidden will-change-[opacity,transform]"
              >
                {/* Huge Background Number */}
                <div className="absolute -right-4 -top-8 text-[140px] font-display font-bold text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none select-none">
                  {step.num}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start">
                  <div className="text-primary font-display text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="w-12 h-px bg-primary/50" />
                    {step.num}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 md:py-32 z-10 bg-[#060606]" id="servicos">
        {/* Subtle separator line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

        {/* Abstract Green Glow in Background */}
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-primary/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20 md:w-3/4 lg:w-2/3 will-change-[opacity,transform]"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Transformando a forma de <span className="text-primary">comunicar</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed">
              Conheça os serviços que vão transformar a comunicação do seu condomínio e fortalecer a relação entre gestão e moradores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Vídeos Mensais",
                short: "Mostramos as melhorias e conquistas do condomínio de forma clara e envolvente, valorizando a gestão.",
                full: "Acompanhar em vídeo as conquistas do condomínio gera mais confiança, transparência e orgulho para os moradores.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></svg>
                )
              },
              {
                title: "Jornal Informativo",
                short: "Informações organizadas em formato PDF, acessíveis no celular e que mantêm os moradores sempre atualizados.",
                full: "Relatórios claros, modernos e fáceis de acessar. Um jeito prático de manter todos informados sobre a gestão.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                )
              },
              {
                title: "Cobertura de Eventos",
                short: "Registros profissionais de eventos e ações no condomínio para eternizar momentos especiais.",
                full: "Mostre a participação dos moradores e fortaleça o senso de comunidade com fotos e vídeos dos eventos do seu condomínio.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                )
              },
              {
                title: "Redes Sociais",
                short: "Conteúdos criativos e estratégicos para aproximar a gestão da comunidade também no digital.",
                full: "Conteúdo criativo que leva a comunicação condominial para o digital, ampliando o alcance da gestão.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
                )
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-auto md:h-[380px] rounded-[32px] overflow-hidden md:cursor-pointer touch-manipulation will-change-[opacity,transform]"
              >
                {/* Mobile View (Static & Intuitive) */}
                <div className="md:hidden flex flex-col h-full bg-surface-glass border border-border-glass backdrop-blur-md rounded-[32px] p-8 relative z-10 transition-colors hover:border-primary/30">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(27,204,148,0.1)] border border-primary/20 mb-6 shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">{service.title}</h3>
                  <p className="text-zinc-300 text-lg font-medium leading-relaxed mb-8 flex-grow">{service.full}</p>

                  <div className="mt-auto flex items-center gap-2 text-primary font-bold text-lg">
                    <span>Saiba mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </div>

                {/* Desktop Background Glass Plate */}
                <div className="hidden md:block absolute inset-0 border border-border-glass bg-surface-glass backdrop-blur-md transition-colors duration-500 group-hover:border-primary/20" />

                {/* Desktop Default State (Front Card) */}
                <div className="hidden md:flex absolute inset-0 p-10 flex-col z-10 transition-all duration-500 ease-out opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
                  <h3 className="text-3xl font-display font-bold text-primary mb-4 leading-tight">{service.title}</h3>
                  <p className="text-white text-lg font-medium leading-relaxed flex-grow">{service.full}</p>

                  <div className="mt-8 inline-flex items-center gap-2 text-primary font-bold text-lg pointer-events-none">
                    <span>Saiba mais</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </div>

                {/* Desktop Hover Reveal State (Back Card) */}
                <div className="hidden md:flex absolute inset-0 p-10 flex-col justify-center bg-[#0a0a0a] z-20 shadow-2xl backdrop-blur-3xl rounded-[32px] border border-primary/30 transition-all duration-500 ease-out opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent mix-blend-overlay rounded-[32px] pointer-events-none" />

                  <div className="relative z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(27,204,148,0.1)] border border-primary/20 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 leading-tight">{service.title}</h3>
                    <p className="text-zinc-300 text-xl font-medium leading-relaxed">{service.short}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Premium Footer Section */}
      <footer className="relative border-t border-border-glass bg-background pt-20 pb-10 overflow-hidden z-10">
        {/* Subtle Background Elements */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0f7a58]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Company Info */}
            <div className="flex flex-col items-start col-span-1 md:col-span-2 lg:col-span-1">
              <Link href={`/${locale}`}>
                <Image
                  src="/logo-completo.webp"
                  alt="Avizzo Digital"
                  width={160}
                  height={50}
                  className="object-contain mb-6"
                />
              </Link>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                Transformando a comunicação do seu condomínio com transparência, modernidade e muita proximidade real.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/avizzodigital/', icon: <><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /></> },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/condovaibe/', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                  { name: 'YouTube', href: 'https://www.youtube.com/@AvizzoDigital', icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-border-glass bg-surface-glass backdrop-blur-md text-zinc-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-display font-bold text-lg mb-2">Navegação</h4>
              {['Início', 'A Avizzo', 'Portfólio', 'Contato', 'Portal'].map((link) => (
                <Link
                  key={link}
                  href={link === 'A Avizzo' ? `/${locale}/a-avizzo` : link === 'Portfólio' ? `/${locale}/portfolio` : link === 'Início' ? `/${locale}` : link === 'Portal' ? `/${locale}/portal` : `/${locale}/contato`}
                  className="text-zinc-400 font-medium text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex w-fit"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Support / Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-display font-bold text-lg mb-2">Suporte & Legal</h4>
              {['Central de Ajuda', 'Política de Privacidade', 'Termos de Serviço', 'Portal do Cliente'].map((link) => (
                link === 'Portal do Cliente' ? (
                  <Link
                    key={link}
                    href={`/${locale}/portal`}
                    className="text-zinc-400 font-medium text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex w-fit"
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    href="#"
                    className="text-zinc-400 font-medium text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex w-fit"
                  >
                    {link}
                  </a>
                )
              ))}
            </div>

            {/* Contact Compact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-display font-bold text-lg mb-2">Contato</h4>
              <p className="text-zinc-400 text-xs font-medium">Tem alguma dúvida ou curiosidade?</p>
              <a href={`/${locale}/contato`} className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-black transition-all text-center">
                PÁGINA DE CONTATO
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-xs flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                (91) 98155-5377
              </a>
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="pt-8 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-sm font-medium">
              © {new Date().getFullYear()} Avizzo Digital. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
              <span>Feito com ❤️ por Avizzo Digital</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
