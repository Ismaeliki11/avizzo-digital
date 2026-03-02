"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, MessageSquare, Coffee, Instagram, Linkedin, Youtube, CheckCircle2 } from "lucide-react";

import Navbar from "@/components/ui/Navbar";

export default function Contato() {
    const params = useParams();
    const locale = params.locale as string;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background text-zinc-100 overflow-x-hidden selection:bg-primary/30">

            {/* Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] md:w-[40%] md:h-[40%] bg-primary/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] md:w-[30%] md:h-[50%] bg-[#0f7a58]/20 blur-[100px] md:blur-[150px] rounded-full mix-blend-screen will-change-[filter,opacity]" />
            </div>

            <Navbar activeItem="Contato" />

            <main className="relative z-10 pt-32 pb-24 md:pt-44 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Hero Header */}
                    <div className="flex flex-col items-center text-center mb-20 md:mb-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 will-change-transform"
                        >
                            <Coffee size={16} />
                            VAMOS MARCAR UM CAFÉ?
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0f7a58]">Contato</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed"
                        >
                            Acreditamos que grandes parcerias começam com uma boa conversa. Estamos prontos para transformar a comunicação do seu condomínio.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: <Mail className="text-primary" size={24} />,
                                        label: "Email Institucional",
                                        value: "contato@avizzodigital.com.br",
                                        href: "mailto:contato@avizzodigital.com.br"
                                    },
                                    {
                                        icon: <Phone className="text-primary" size={24} />,
                                        label: "WhatsApp",
                                        value: "(91) 98155-5377",
                                        href: "https://wa.me/5591981555377"
                                    },
                                    {
                                        icon: <MapPin className="text-primary" size={24} />,
                                        label: "Endereço",
                                        value: "Avenida Cláudio Sanders, Maguari - Ananindeua/PA",
                                        href: "https://www.google.com/maps/search/?api=1&query=Avenida+Cláudio+Sanders,+Maguari+-+Ananindeua/PA"
                                    }
                                ].map((item, i) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-20px" }}
                                        transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                                        className="flex items-center gap-6 p-6 rounded-[2rem] bg-surface-glass border border-border-glass hover:border-primary/40 hover:bg-white/5 transition-all group will-change-[opacity,transform]"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-white text-lg font-medium leading-tight">{item.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social Presence */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="p-8 rounded-[2rem] bg-[#060606] border border-white/5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-px bg-primary/50" />
                                    Siga-nos
                                </h3>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Instagram size={20} />, href: "https://www.instagram.com/avizzodigital/" },
                                        { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/condovaibe/" },
                                        { icon: <Youtube size={20} />, href: "https://www.youtube.com/@AvizzoDigital" }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Google Maps Embed */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video lg:aspect-square shadow-2xl group will-change-[opacity,transform]"
                            >
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none z-10" />
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.144444558237!2d-48.3970404!3d-1.3533964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a46039ea8f7001%3A0x7d6c6e765ec17637!2sAv.%20Cl%C3%A1udio%20Sanders%2C%20Ananindeua%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1713456789012!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale invert opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000"
                                />
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 z-20">
                                    <p className="text-white text-xs font-bold flex items-center gap-2">
                                        <MapPin size={14} className="text-primary" />
                                        Ananindeua, Pará - Atendimento em todo o estado.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.8 }}
                                className="bg-surface-glass backdrop-blur-md md:backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group will-change-[opacity,transform]"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-10">
                                        <MessageSquare className="text-primary" />
                                        <h3 className="text-3xl font-display font-bold text-white tracking-tight">Escreva uma mensagem</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Seu Nome</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Seu nome"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Seu Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="email@exemplo.com"
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Assunto</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Como podemos te ajudar?"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-white/40 ml-2 uppercase tracking-widest">Mensagem</label>
                                            <textarea
                                                required
                                                rows={6}
                                                placeholder="Conte-nos sobre o seu condomínio e o que você busca..."
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={isSubmitting || isSent}
                                            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all ${isSent
                                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                                : isSubmitting
                                                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                                    : "bg-primary text-black hover:bg-primary-hover shadow-primary/20"
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-zinc-500 border-t-white rounded-full animate-spin" />
                                                    <span>Enviando...</span>
                                                </div>
                                            ) : isSent ? (
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle2 size={20} />
                                                    <span>Mensagem Enviada!</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <span>Enviar Mensagem</span>
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>

                                    <div className="mt-12 grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <p className="text-white font-display font-bold text-2xl tracking-tighter">1h</p>
                                            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Resposta Média</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-white font-display font-bold text-2xl tracking-tighter">24/7</p>
                                            <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Suporte WhatsApp</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Premium Footer Section */}
            <footer className="relative border-t border-border-glass bg-background pt-20 pb-10 overflow-hidden z-10">
                <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[50%] md:w-[50%] md:h-[50%] bg-[#0f7a58]/10 blur-[80px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen will-change-[filter,opacity]" />
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[40%] md:w-[40%] md:h-[40%] bg-primary/5 blur-[70px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen will-change-[filter,opacity]" />

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

                            <div className="flex items-center gap-4">
                                {[
                                    { icon: <Instagram size={18} />, href: "https://www.instagram.com/avizzodigital/" },
                                    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/condovaibe/" },
                                    { icon: <Youtube size={18} />, href: "https://www.youtube.com/@AvizzoDigital" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full flex items-center justify-center border border-border-glass bg-surface-glass backdrop-blur-md text-zinc-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                                    >
                                        {social.icon}
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
                            <h4 className="text-white font-display font-bold text-lg mb-2">Contato Rápido</h4>
                            <p className="text-zinc-400 text-xs font-medium">Dúvidas ou orçamentos?</p>
                            <a href={`/${locale}/contato`} className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-black transition-all text-center font-bold">
                                PÁGINA DE CONTATO
                            </a>
                            <a href="https://wa.me/5591981555377" className="text-zinc-400 hover:text-white transition-colors text-sm flex items-center gap-2 font-medium">
                                <Phone size={14} /> (91) 98155-5377
                            </a>
                        </div>

                    </div>

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
