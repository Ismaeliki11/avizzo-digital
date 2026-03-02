"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Coffee } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Mensagem enviada com sucesso! (Simulação)");
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contato" className="relative py-24 md:py-32 overflow-hidden z-20">
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#0f7a58]/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Info & Context */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                                <Coffee size={16} />
                                <span className="text-xs font-bold uppercase tracking-widest">Contato</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                                Vamos Marcar <br />
                                <span className="text-primary">Um Café?</span>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                Acreditamos que grandes parcerias começam com uma boa conversa. Estamos prontos para transformar a comunicação do seu condomínio.
                            </p>
                        </motion.div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {[
                                {
                                    icon: <Mail className="text-primary" size={24} />,
                                    label: "Email",
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
                                    label: "Localização",
                                    value: "Belém, PA - Brasil",
                                    href: "#"
                                }
                            ].map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-6 rounded-3xl bg-surface-glass border border-border-glass hover:border-primary/40 hover:bg-white/5 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="text-white text-lg font-medium">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Interactive Map Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative aspect-video rounded-3xl overflow-hidden group border border-border-glass"
                        >
                            <div className="absolute inset-0 bg-primary/5 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                            <Image
                                src="/belem-map-dark.webp"
                                alt="Belém Map"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-primary blur-xl opacity-50 animate-pulse rounded-full" />
                                    <div className="relative w-8 h-8 bg-black border-2 border-primary rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 z-30">
                                <p className="text-white text-sm font-bold flex items-center gap-2">
                                    <MapPin size={14} className="text-primary" />
                                    Base em Belém, atendemos todo o Pará.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-surface-glass backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Animated Background Pulse for Form */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <MessageSquare className="text-primary" />
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Escreva uma mensagem</h3>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Seu Nome</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Como podemos te chamar?"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Seu Email</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="email@exemplo.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Assunto</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Ex: Gestão Condominial, Redes Sociais..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white/60 ml-2 uppercase tracking-widest">Mensagem</label>
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Conte um pouco sobre suas necessidades..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={isSubmitting}
                                        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 transition-all ${isSubmitting
                                                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                                                : "bg-primary text-black hover:bg-primary-hover active:shadow-inner"
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-zinc-500 border-t-white rounded-full animate-spin" />
                                                <span>Enviando...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <span>Enviar Mensagem</span>
                                                <Send size={20} />
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                <div className="mt-8 flex items-center justify-center gap-6 pt-8 border-t border-white/5">
                                    <div className="flex flex-col items-center">
                                        <p className="text-white font-bold text-xl uppercase tracking-tighter">1h</p>
                                        <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Resposta Média</p>
                                    </div>
                                    <div className="w-px h-8 bg-white/10" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-white font-bold text-xl uppercase tracking-tighter">24/7</p>
                                        <p className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">Suporte WhatsApp</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
