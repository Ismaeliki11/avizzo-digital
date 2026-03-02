"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface NavbarProps {
    activeItem?: string;
}

export default function Navbar({ activeItem }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const params = useParams();
    const locale = params.locale as string;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: 'Início', href: `/${locale}` },
        { name: 'A Avizzo', href: `/${locale}/a-avizzo` },
        { name: 'Portfólio', href: `/${locale}/portfolio` },
        { name: 'Contato', href: `/${locale}/contato` },
        { name: 'Portal', href: `/${locale}/portal` },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled || isMenuOpen
                    ? "py-3 bg-background/80 backdrop-blur-md md:backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "py-6 bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="relative z-[110]">
                        <Link href={`/${locale}`} onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/logo-completo.webp"
                                alt="Avizzo Digital"
                                width={140}
                                height={40}
                                className={`object-contain transition-all duration-700 ${isMenuOpen ? "opacity-40 grayscale-0 brightness-100" : "opacity-100"}`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center gap-1 px-1 py-1 rounded-full border transition-all duration-500 ${isScrolled
                        ? "bg-white/5 border-white/10 backdrop-blur-md"
                        : "bg-surface-glass border-border-glass backdrop-blur-md"
                        }`}>
                        {navItems.map((item) => {
                            const isActive = activeItem === item.name || (item.name === 'Início' && !activeItem);
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                                        ? "bg-primary text-black shadow-[0_0_15px_rgba(27,204,148,0.3)]"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4 relative z-[110]">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hidden sm:flex px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full border ${isScrolled
                                ? "bg-primary/10 border-primary/20 hover:bg-primary shadow-[0_0_15px_rgba(27,204,148,0.1)] hover:text-black"
                                : "bg-surface-glass border-border-glass hover:border-primary/50"
                                }`}
                        >
                            WhatsApp
                        </a>

                        {/* Premium Animated Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`group relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500 md:hidden overflow-hidden ${isMenuOpen
                                ? "bg-primary border-primary shadow-[0_0_25px_rgba(27,204,148,0.5)]"
                                : isScrolled
                                    ? "bg-white/10 border-white/20 shadow-lg hover:border-primary/50"
                                    : "bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/30"
                                }`}
                            aria-label="Toggle Menu"
                        >
                            <div className="relative w-6 h-4 flex flex-col justify-between">
                                <motion.span
                                    animate={isMenuOpen ? { rotate: 45, y: 7.5, width: "100%", backgroundColor: "#000" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "#fff" }}
                                    transition={{ duration: 0.4, ease: "anticipate" }}
                                    className="h-[1.5px] rounded-full"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "70%", backgroundColor: "#fff" }}
                                    transition={{ duration: 0.3 }}
                                    className="h-[1.5px] rounded-full self-end"
                                />
                                <motion.span
                                    animate={isMenuOpen ? { rotate: -45, y: -7.5, width: "100%", backgroundColor: "#000" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "#fff" }}
                                    transition={{ duration: 0.4, ease: "anticipate" }}
                                    className="h-[1.5px] rounded-full"
                                />
                            </div>

                            {/* Ripple Effect Background */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop Blur Layer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm md:hidden will-change-[opacity,backdrop-filter]"
                        />

                        {/* Side Menu Panel */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 35, stiffness: 250 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[90] bg-[#0A0A0A] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] md:hidden pt-36 px-8 flex flex-col justify-between pb-12 overflow-y-auto will-change-transform"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[40%] bg-primary/10 blur-[80px] rounded-full pointer-events-none will-change-[filter,opacity]" />
                            <div className="absolute bottom-[20%] left-[-20%] w-[50%] h-[30%] bg-[#0f7a58]/5 blur-[60px] rounded-full pointer-events-none will-change-[filter,opacity]" />
                            <nav className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1 mb-4">
                                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">Menu</p>
                                    <div className="h-px w-8 bg-primary/30" />
                                </div>

                                {navItems.map((item, i) => {
                                    const isActive = activeItem === item.name || (item.name === 'Início' && !activeItem);
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 + i * 0.04 }}
                                            className="border-b border-white/[0.03] pb-4 last:border-0 will-change-[opacity,transform]"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-2xl font-display font-bold transition-all flex items-center justify-between group ${isActive ? "text-primary" : "text-white hover:text-primary"
                                                    }`}
                                            >
                                                {item.name}
                                                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#1BCC94]" />}
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-6"
                                >
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=5591981555377&text&type=phone_number&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 bg-primary text-black py-4 px-6 rounded-2xl font-bold text-base shadow-[0_10px_30px_rgba(27,204,148,0.3)] hover:scale-[1.02] active:scale-95 transition-all w-full"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        WhatsApp
                                    </a>
                                </motion.div>
                            </nav>

                            {/* Mobile Menu Footer */}
                            <div className="space-y-6">
                                <div className="h-px bg-white/10" />
                                <div className="flex gap-4">
                                    {[
                                        { name: 'Instagram', href: 'https://www.instagram.com/avizzodigital/', icon: <><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /></> },
                                        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/condovaibe/', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                                        { name: 'YouTube', href: 'https://www.youtube.com/@AvizzoDigital', icon: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.17 1 12 1 12s0 3.83.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.83 23 12 23 12s0-3.83-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> }
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {social.icon}
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-zinc-500 text-[10px] font-medium tracking-wide">© 2026 AVIZZO DIGITAL</p>
                                    <p className="text-zinc-600 text-[10px] uppercase tracking-tighter">BELÉM, PA - BRASIL</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
