"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const params = useParams();
    const locale = params.locale;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-[#0f7a58]/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation Bar */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                    ? "bg-surface-glass/80 border-border-glass backdrop-blur-xl shadow-lg"
                    : "bg-transparent border-transparent"
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`}>
                    <div className="flex items-center gap-2">
                        <Link href={`/${locale}`}>
                            <Image
                                src="/logo-completo.webp"
                                alt="Avizzo Digital"
                                width={140}
                                height={40}
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    <div className={`hidden md:flex items-center gap-8 px-8 py-3 transition-all duration-300 rounded-full border ${isScrolled ? 'border-transparent bg-transparent' : 'border-border-glass bg-surface-glass backdrop-blur-md'}`}>
                        {['Início', 'A Avizzo', 'Portfólio', 'Contato', 'Portal'].map((item, i) => (
                            <Link
                                key={item}
                                href={item === 'Início' ? `/${locale}` : item === 'Portfólio' ? `/${locale}/portfolio` : item === 'A Avizzo' ? `/${locale}/a-avizzo` : `/${locale}/#${item.toLowerCase().replace(' ', '-')}`}
                                className={`text-sm font-medium transition-colors hover:text-primary ${item === 'Portfólio' ? 'text-primary' : 'text-zinc-300'}`}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={`px-6 py-2.5 text-sm font-medium text-white hover:bg-surface-glass hidden sm:block transition-all duration-300 rounded-full border ${isScrolled ? 'border-transparent bg-transparent' : 'border-border-glass bg-surface-glass backdrop-blur-md'}`}>
                            WhatsApp
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2.5 text-white z-[100] relative transition-all duration-300 rounded-full border ${isScrolled ? 'border-transparent bg-transparent' : 'border-border-glass bg-surface-glass backdrop-blur-md'}`}
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm md:hidden"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[90] bg-[#0A0A0A] border-l border-border-glass shadow-2xl md:hidden pt-24 px-8"
                            >
                                <nav className="flex flex-col gap-8">
                                    {['Início', 'A Avizzo', 'Portfólio', 'Contato', 'Portal'].map((item) => (
                                        <Link
                                            key={item}
                                            href={item === 'Início' ? `/${locale}` : item === 'Portfólio' ? `/${locale}/portfolio` : item === 'A Avizzo' ? `/${locale}/a-avizzo` : `/${locale}/#${item.toLowerCase().replace(' ', '-')}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="mt-4 bg-primary text-black text-center py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(27,204,148,0.3)]"
                                    >
                                        WhatsApp
                                    </a>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>

            <main className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6"
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
                    <div className="grid grid-cols-1 gap-16 md:gap-24">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
                            >
                                {/* Video Container */}
                                <div className="w-full md:w-[60%] shrink-0 group">
                                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-panel border-border-glass group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title={video.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="w-full flex flex-col items-start">
                                    <div className="text-primary font-bold text-sm tracking-widest uppercase mb-4 opacity-80">
                                        {video.category}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                        {video.title}
                                    </h2>
                                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-8">
                                        {video.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {video.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* How We Work Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 md:mt-48 glass-panel p-10 md:p-16 relative overflow-hidden text-center border-primary/20"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">Nosso Processo <span className="text-primary">Criativo</span></h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
                            {[
                                { step: "01", title: "Planejamento", desc: "Definimos os pontos-chave de cada condomínio para garantir que nada importante fique de fora." },
                                { step: "02", title: "Captação", desc: "Equipamentos de ponta e captação aérea para um visual impactante e profissional." },
                                { step: "03", title: "Edição", desc: "Ritmo moderno e transparência total em cada frame entregue." }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center group">
                                    <div className="text-6xl font-display font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 mb-[-1.5rem]">
                                        {item.step}
                                    </div>
                                    <h4 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-zinc-400 font-medium text-base leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <div className="mt-32 text-center pb-12">
                        <h3 className="text-3xl font-display font-bold text-white mb-8">Quer uma comunicação assim no seu condomínio?</h3>
                        <Link
                            href={`/${locale}/#contato`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-black font-bold rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(27,204,148,0.3)] group"
                        >
                            Solicitar Orçamento
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

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
                                Transformando a comunicación do seu condomínio com transparência, modernidade e muita proximidade real.
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
                            {['Início', 'A Avizzo', 'Portfólio', 'Nossos Serviços', 'Portal'].map((link) => (
                                <Link
                                    key={link}
                                    href={link === 'Início' ? `/${locale}` : link === 'A Avizzo' ? `/${locale}/a-avizzo` : link === 'Portfólio' ? `/${locale}/portfolio` : `/${locale}/#${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-zinc-400 font-medium text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex w-fit"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-display font-bold text-lg mb-2">Suporte & Legal</h4>
                            {['Central de Ajuda', 'Política de Privacidade', 'Termos de Serviço', 'Portal do Cliente'].map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-zinc-400 font-medium text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex w-fit"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-display font-bold text-lg mb-2">Contato</h4>

                            <div className="group flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <div className="flex flex-col">
                                    <span className="text-sm text-zinc-400 font-medium">WhatsApp</span>
                                    <a href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm">(91) 98155-5377</a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-3 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <div className="flex flex-col">
                                    <span className="text-sm text-zinc-400 font-medium">Email Institucional</span>
                                    <a href="mailto:contato@avizzodigital.com.br" className="text-white hover:text-primary transition-colors text-sm">contato@avizzodigital.com.br</a>
                                </div>
                            </div>

                            <div className="group flex items-start gap-3 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <div className="flex flex-col">
                                    <span className="text-sm text-zinc-400 font-medium">Localização</span>
                                    <span className="text-white text-sm">Belém, PA - Brasil</span>
                                </div>
                            </div>
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
