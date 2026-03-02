"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/ui/Navbar";

export default function AAvizzo() {
    const params = useParams();
    const locale = params.locale as string;

    return (
        <div className="min-h-screen bg-background text-zinc-100 overflow-x-hidden selection:bg-primary/30">

            {/* Background Layer (Non-blocking) */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-[#0f7a58]/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <Navbar activeItem="A Avizzo" />


            <main className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
                            A Avizzo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0f7a58]">Comunicação</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-3xl leading-relaxed">
                            Conectando Condomínios e Moradores através da comunicação Estratégica.
                        </p>
                    </motion.div>

                    {/* About Us & Method Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">

                        {/* Story Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:row-span-2 glass-panel p-8 md:p-12 relative overflow-hidden group border-border-glass hover:border-primary/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover:bg-primary/10 transition-colors duration-700" />

                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(27,204,148,0.1)] border border-primary/20 mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Nossa <span className="text-primary">Trajetória</span></h2>
                            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed font-medium">
                                <p>
                                    A Avizzo nasceu da experiência de mais de 7 anos de seu diretor, Mateus Rois, no ramo condominial. Ao longo desse tempo, percebemos uma grande lacuna no mercado: a comunicação condominial ainda é pouco explorada, deixando síndicos e administradoras com dificuldades de engajar moradores e valorizar a gestão.
                                </p>
                                <p>
                                    A partir desse desafio, criamos a Avizzo com o objetivo de transformar a forma como os condomínios se comunicam, tornando-os mais próximos, transparentes e participativos.
                                </p>
                                <p>
                                    Por meio de estratégias planejadas e produção de conteúdos inteligentes – como vídeos, jornais informativos e materiais para redes sociais em tempo real – buscamos engajar os moradores, fortalecer a confiança na administração e valorizar cada conquista do condomínio.
                                </p>
                            </div>
                        </motion.div>

                        {/* What we do */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-panel p-8 md:p-10 border-border-glass hover:border-primary/30 transition-colors relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary"></span>
                                O Que Fazemos
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                                Ajudamos síndicos, administradoras e condomínios a se comunicarem de forma clara e moderna. Criamos vídeos, informativos e conteúdos que destacam conquistas, fortalecem a transparência e aproximam moradores da gestão.
                            </p>
                        </motion.div>

                        {/* How we do it */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-panel p-8 md:p-10 border-border-glass hover:border-primary/30 transition-colors relative overflow-hidden"
                        >
                            <h3 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary"></span>
                                Como Fazemos
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                                Com criatividade, estratégia e linguagem simples. Produzimos materiais visuais e digitais que tornam a comunicação acessível, envolvente e valorizam o trabalho da administração condominial a longo prazo.
                            </p>
                        </motion.div>

                    </div>

                    {/* Our Clients Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Nossos <span className="text-primary">Clientes</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { name: "Chácaras Ipê", subtitle: "Condomínio Clube" },
                                { name: "Chácaras Montenegro", subtitle: "Cedro" },
                                { name: "Chácaras Ipê", subtitle: "Residencial" }
                            ].map((client, i) => (
                                <div key={i} className="glass-panel p-10 flex flex-col items-center justify-center text-center h-48 border-border-glass hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 group">
                                    <div className="text-primary opacity-50 group-hover:opacity-100 transition-opacity mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10v6" /><path d="M20 10v6" /><path d="M7 16v4" /><path d="M17 16v4" /><path d="M12 21v-4" /><path d="M4 10l8-6 8 6" /></svg>
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white">{client.name}</h4>
                                    <p className="text-zinc-500 font-medium mt-1">{client.subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto items-center"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Um Novo Jeito De <span className="text-primary">Conectar</span></h2>
                            <p className="text-xl text-zinc-400 font-medium">
                                Estamos prontos para aproximar a sua gestão dos moradores. Envie seus dados e vamos construir essa comunicação juntos.
                            </p>
                        </div>

                        <form className="glass-panel p-8 md:p-12 border-primary/20 bg-surface-glass/50 backdrop-blur-2xl shadow-[0_0_50px_rgba(27,204,148,0.05)]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Seu nome</label>
                                    <input type="text" id="name" placeholder="Seu nome" className="w-full bg-black/40 border border-border-glass rounded-xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Seu e-mail</label>
                                    <input type="email" id="email" placeholder="Seu e-mail" className="w-full bg-black/40 border border-border-glass rounded-xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="sr-only">Assunto</label>
                                <input type="text" id="subject" placeholder="Assunto" className="w-full bg-black/40 border border-border-glass rounded-xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors" />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="sr-only">Sua mensagem</label>
                                <textarea id="message" rows={5} placeholder="Sua mensagem" className="w-full bg-black/40 border border-border-glass rounded-xl px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary/50 transition-colors resize-y" />
                            </div>

                            <button type="button" className="w-full py-4 px-8 bg-primary hover:bg-primary-hover text-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(27,204,148,0.3)]">
                                ENVIAR FORMULÁRIO
                            </button>
                        </form>
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
                            <a href={`/${locale}/contato`} className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-black transition-all text-center font-bold">
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
                            © {new Date().getFullYear()} Avizzo Digital. Todos os direitos reservados.
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
