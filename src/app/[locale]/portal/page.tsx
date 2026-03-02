"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Hammer, Construction, Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/ui/Navbar";

export default function PortalEmConstrucao() {
    const params = useParams();
    const locale = params.locale as string;

    return (
        <div className="min-h-screen bg-background text-zinc-100 overflow-x-hidden selection:bg-primary/30">
            {/* Background Layer */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-[#0f7a58]/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <Navbar activeItem="Portal" />

            <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl w-full text-center"
                >
                    {/* Icon Animation */}
                    <div className="relative mb-12 flex justify-center">
                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.05, 1, 1.05, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_50px_rgba(27,204,148,0.2)]"
                        >
                            <Construction size={48} />
                        </motion.div>

                        {/* Smaller floating icons */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-surface-glass border border-white/10 flex items-center justify-center text-zinc-400 backdrop-blur-xl"
                        >
                            <Hammer size={20} />
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight"
                    >
                        Portal em <span className="text-primary italic">Construção</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-zinc-400 font-medium leading-relaxed mb-12"
                    >
                        Estamos preparando uma experiência digital incrível para a gestão do seu condomínio.
                        Em breve, você terá acesso a todas las funcionalidades exclusivas do nosso portal.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href={`/${locale}`}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold rounded-2xl hover:bg-primary-hover transition-all hover:scale-105 shadow-[0_20px_40px_rgba(27,204,148,0.2)] group"
                        >
                            <Home size={18} />
                            Voltar para o Início
                        </Link>

                        <Link
                            href={`/${locale}/contato`}
                            className="flex items-center gap-3 px-8 py-4 bg-surface-glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Fale Conosco
                        </Link>
                    </motion.div>

                    {/* Progress indicator */}
                    <div className="mt-20 max-w-xs mx-auto">
                        <div className="flex justify-between text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
                            <span>Progresso</span>
                            <span className="text-primary">65%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "65%" }}
                                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-primary to-[#0f7a58] rounded-full shadow-[0_0_10px_rgba(27,204,148,0.5)]"
                            />
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Simple Under Construction Footer */}
            <footer className="relative border-t border-border-glass py-12 text-center z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-zinc-500 text-sm font-medium">
                        © {new Date().getFullYear()} Avizzo Digital. Construindo o futuro da comunicação condominial.
                    </p>
                </div>
            </footer>
        </div>
    );
}
