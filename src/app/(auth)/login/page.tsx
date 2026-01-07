"use client"

import React from "react"
import Link from "next/link"
import { Terminal, ArrowLeft, Facebook } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full bg-[#e5e5e5] relative overflow-y-auto overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white">
            {/* --- HEADER (Reutilizado da Landing Page) --- */}
            {/* Absolute para ficar sobre o fundo, z-50 para ficar acima do blur */}
            <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto left-0 right-0">
                {/* Logo / Botão Voltar para Home */}
                <Link href="/" className="group cursor-pointer">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:bg-orange-500 transition-colors">
                            <Terminal size={18} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-orange-700 transition-colors">
                            Dev Stack
                        </span>
                    </div>
                </Link>

                {/* Botão Voltar explícito (Opcional, mas ajuda na usabilidade) */}
                <Link href="/">
                    <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 hover:border-orange-200">
                        <ArrowLeft size={16} /> Voltar ao Início
                    </button>
                </Link>
            </nav>

            {/* --- CONTEÚDO CENTRAL --- */}
            <div className="flex items-center justify-center min-h-screen py-20 px-4">
                {/* BLUR BACKGROUND (Ajustado para não atrapalhar em telas pequenas) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

                {/* --- CARD DE LOGIN COMPACTO --- */}
                {/* max-w-sm é ideal para notebooks. p-8 reduz a gordura interna. */}
                <div className="relative z-10 bg-white/60 backdrop-blur-xl border border-white/80 p-8 rounded-[24px] shadow-2xl w-full max-w-sm">
                    {/* CABEÇALHO DO CARD */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-sm shadow-md">
                                &lt;/&gt;
                            </div>
                            <span className="font-bold text-slate-800 text-sm mt-1">
                                Dev Stack
                            </span>
                        </div>
                        <span className="text-slate-400 text-xl font-light">
                            +
                        </span>
                        <div className="text-blue-900 font-bold text-lg italic tracking-tighter leading-tight">
                            Firjan
                            <span className="text-[10px] not-italic font-normal block text-right leading-none text-blue-600">
                                SENAI
                            </span>
                        </div>
                    </div>

                    {/* FORMULÁRIO COMPACTO */}
                    <form
                        className="space-y-3"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div>
                            <label className="block text-slate-600 text-xs font-bold mb-1 pl-2 uppercase tracking-wide">
                                Email Institucional
                            </label>
                            <input
                                type="email"
                                placeholder="seunome@aluno.senai.br"
                                className="w-full bg-white/80 border border-transparent focus:border-orange-300 rounded-xl py-2.5 px-4 text-sm text-slate-800 shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-slate-600 text-xs font-bold mb-1 pl-2 uppercase tracking-wide">
                                Senha
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-white/80 border border-transparent focus:border-orange-300 rounded-xl py-2.5 px-4 text-sm text-slate-800 shadow-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-slate-400"
                            />
                            <div className="text-right mt-1">
                                <a
                                    href="#"
                                    className="text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors"
                                >
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        {/* BOTÃO DE AÇÃO */}
                        <Link href="/dashboard" className="block pt-2">
                            <button className="w-full bg-[#E85D36] hover:bg-[#d64d26] text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 transform active:scale-95 transition-all flex items-center justify-center gap-2">
                                Entrar
                            </button>
                        </Link>
                    </form>

                    {/* DIVISOR */}
                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-slate-300"></div>
                        <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            Ou continue com
                        </span>
                        <div className="flex-grow border-t border-slate-300"></div>
                    </div>

                    {/* SOCIAL LOGIN - Ícones menores */}
                    <div className="flex justify-center gap-4 mb-5">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md hover:-translate-y-1 transition-all border border-slate-100">
                            <div className="w-5 h-5 rounded-full border-[3px] border-t-red-500 border-r-blue-500 border-b-green-500 border-l-yellow-500"></div>
                        </button>
                        <button className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow hover:shadow-md hover:-translate-y-1 transition-all border border-transparent">
                            <Facebook size={18} fill="currentColor" />
                        </button>
                    </div>

                    {/* ÁREA DO PROFESSOR (Link discreto) */}
                    <div className="text-center">
                        <button className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors border-b border-dashed border-slate-400 pb-0.5">
                            É um instrutor? Clique aqui
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
