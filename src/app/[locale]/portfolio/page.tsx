"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/ui/Navbar";

export default function Portfolio() {
    const params = useParams();
    const locale = params.locale as string;

    const videos = [
        {
            id: "q4zF7XxVbfc",
            title: "Condomínio Alegro Montenegro – Informativo",
            description: "Vídeo pensado para resumir os principais acontecimentos do mês no condomínio, mostrando o uso das áreas comuns, pequenas melhorias em manutenção e os avisos mais importantes da administração. Mantendo todos os residentes informados de forma visual e próxima.",
            category: "Informativo Mensal",
            tags: ["Gestão Ativa", "Comunicação Clara", "Proximidade"]
        },
        {
            id: "W7XqMuO2f54",
            title: "Chácaras Montenegro Cedro – Prestação de Contas",
            description: "Vídeo focado em apresentar de forma simples como foram utilizados os recursos do condomínio, combinando imagens das áreas atendidas com dados chave. O objetivo é reforçar a transparência da administração e dar aos condôminos uma visão clara de investimentos e resultados.",
            category: "Prestação de Contas",
            tags: ["Relato de Gestão", "Transparência", "Informação Direta"]
        },
        {
            id: "-EOQf_9t8qI",
            title: "Chácaras Montenegro Ipê – Obras e Melhorias",
            description: "Peça dedicada a explicar as obras e melhorias programadas no condomínio, mostrando as áreas intervencionadas, o estado atual dos trabalhos e o cronograma previsto. Busca alinhar expectativas e transmitir confiança no planejamento e execução dos projetos.",
            category: "Comunicado de Obras",
            tags: ["Gestão de Obras", "Planejamento", "Comunicação Transparente"]
        }
    ];

    return (
        <div className="min-h-screen bg-background text-zinc-100 overflow-x-hidden selection:bg-primary/30">

            {/* Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] md:w-[40%] md:h-[40%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] md:w-[30%] md:h-[50%] bg-[#0f7a58]/20 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
            </div>

            <Navbar activeItem="Portfólio" />


            <main className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 will-change-transform"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            NOSSO PORTFÓLIO
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                        >
                            Histórias que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0f7a58]">Conectam</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed"
                        >
                            Confira como transformamos a comunicação de grandes condomínios através de produções audiovisuais estratégicas e modernas.
                        </motion.p>
                    </div>

                    {/* Featured Video Grid */}
                    <div className="grid grid-cols-1 gap-20 md:gap-32">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.8 }}
                                className={`group flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-stretch will-change-[opacity,transform]`}
                            >
                                {/* Video Container (Glass Card) */}
                                <div className="w-full md:w-3/5 shrink-0 relative">
                                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-primary/40 group-hover:scale-[1.01]">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                                        <iframe
                                            className="absolute inset-0 w-full h-full z-0"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    {/* Floating Category Badge (Desktop only or adjusted for mobile) */}
                                    <div className="absolute -top-4 -left-4 md:-left-6 px-6 py-2 rounded-2xl bg-surface-glass border border-white/10 backdrop-blur-xl text-primary font-bold text-xs tracking-widest uppercase shadow-xl z-20">
                                        {video.category}
                                    </div>
                                </div>

                                {/* Content Container (Refined Spacing) */}
                                <div className="w-full flex flex-col justify-center px-2 md:px-0">
                                    <div className="flex flex-col gap-4">
                                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                                            {video.title}
                                        </h2>

                                        <div className="h-1 w-12 bg-primary/30 rounded-full" />

                                        <p className="text-lg text-zinc-400 font-medium leading-relaxed max-w-xl">
                                            {video.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {video.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[11px] font-bold text-zinc-400 uppercase tracking-wider group-hover:border-primary/20 group-hover:text-zinc-200 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How We Work Section - Enhanced Mobile Layout */}
                    <div className="mt-32 md:mt-56 relative">
                        {/* Decorative background for the section */}
                        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full scale-75 opacity-50 pointer-events-none" />

                        <div className="relative z-10 mb-16 text-center md:text-left md:flex md:items-end md:justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                                    Nosso Processo <span className="text-primary italic">Criativo</span>
                                </h2>
                                <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                                    Transformamos cada detalhe em uma peça de comunicação impactante.
                                </p>
                            </div>
                            <div className="hidden md:block h-px flex-1 bg-white/10 mb-6 mx-8" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { step: "01", title: "Planejamento", desc: "Definimos os pontos-chave de cada condomínio para garantir que nada importante fique de fora." },
                                { step: "02", title: "Captação", desc: "Equipamentos de ponta y captação aérea para um visual impactante e profissional." },
                                { step: "03", title: "Edição", desc: "Ritmo moderno y transparência total em cada frame entregue." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group relative p-8 md:p-10 rounded-[2.5rem] bg-surface-glass border border-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 will-change-[opacity,transform]"
                                >
                                    <div className="absolute top-0 right-0 p-8 text-7xl font-display font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-500 pointer-events-none">
                                        {item.step}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-6 border border-primary/20">
                                            {item.step}
                                        </div>
                                        <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-zinc-400 font-medium text-lg leading-relaxed">{item.desc}</p>
                                    </div>

                                    {/* Animated Corner accent */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA - Premium Redesign */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-40 relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-[#060606]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#0f7a58]/10 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
                                Quer uma comunicação <span className="text-primary font-serif italic text-3xl md:text-5xl">assim</span> no seu condomínio?
                            </h3>

                            <Link
                                href={`/${locale}/contato`}
                                className="inline-flex items-center gap-4 px-10 py-5 bg-primary hover:bg-primary-hover text-black font-bold rounded-2xl transition-all hover:scale-105 shadow-[0_20px_40px_rgba(27,204,148,0.2)] group text-lg"
                            >
                                Solicitar Orçamento Grátis
                                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </main>

            {/* Premium Footer Section */}
            <footer className="relative border-t border-border-glass bg-background pt-20 pb-10 overflow-hidden z-10">
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0f7a58]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
                <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

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

                            <div className="flex items-center gap-4">
                                {[
                                    { name: 'Instagram', href: 'https://www.instagram.com/avizzodigital/', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> },
                                    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/condovaibe/', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> },
                                    { name: 'YouTube', href: 'https://www.youtube.com/@AvizzoDigital', icon: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z" /> },
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

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-display font-bold text-lg mb-2">Contato Rápido</h4>
                            <p className="text-zinc-400 text-xs font-medium">Dúvidas ou orçamentos?</p>
                            <a href={`/${locale}/contato`} className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-black transition-all text-center">
                                PÁGINA DE CONTATO
                            </a>
                            <a href="https://wa.me/5591981555377" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                (91) 98155-5377
                            </a>
                        </div>

                    </div>

                    <div className="pt-8 border-t border-border-glass flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-zinc-500 text-sm font-medium">
                            © {new Date().getFullYear()} Avizzo Digital. Todos os derechos reservados.
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium hover:text-primary transition-colors cursor-pointer group">
                            <span>Feito com ❤️ por Avizzo Digital</span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
