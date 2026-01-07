"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import {
    Terminal,
    ArrowRight,
    BarChart3,
    CheckCircle2,
    XCircle,
    Play,
    Users,
} from "lucide-react"

export default function LandingPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
            {/* HEADER FIXO */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 
        ${
            isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
                : "bg-transparent py-5"
        }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                            <Terminal size={18} />
                        </div>
                        <span
                            className={`font-bold text-xl tracking-tight transition-colors ${
                                isScrolled ? "text-slate-900" : "text-white"
                            }`}
                        >
                            Dev Stack
                        </span>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Link href="/login" className="hidden md:block">
                            <button
                                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                                    isScrolled
                                        ? "text-slate-600 hover:text-orange-600"
                                        : "text-white/90 hover:text-white"
                                }`}
                            >
                                Sou Instrutor
                            </button>
                        </Link>

                        <Link href="/login">
                            <button className="relative group bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                                <span className="relative flex items-center gap-2">
                                    Entrar <ArrowRight size={16} />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION COM IMAGEM DE FUNDO */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                {/* IMAGEM DE FUNDO */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/30"></div>
                    {/* Pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Método Scrum Aplicado
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
                            Não apenas inicie.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                Conclua
                            </span>{" "}
                            sua jornada de estudo.
                        </h1>

                        <p className="text-md md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                            A maioria desiste no meio do caminho por falta de
                            direção.
                            <br />O{" "}
                            <strong className="text-white">
                                Dev Stack
                            </strong>{" "}
                            transforma o caos do aprendizado em Sprints
                            estruturadas para você chegar ao fim.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/login" className="w-full sm:w-auto">
                                <button className="w-full h-14 px-8 rounded-full bg-orange-600 text-white font-bold text-lg hover:bg-orange-500 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                                    Começar Agora
                                </button>
                            </Link>
                            <button className="w-full sm:w-auto h-14 px-8 rounded-full border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                Ver o Plano de Ensino
                            </button>
                        </div>

                        <p className="text-sm text-slate-300 flex items-center gap-2">
                            <Users size={16} /> Mais de 1.200 alunos formados em
                            2024.
                        </p>
                    </div>

                    {/* Elementos flutuantes decorativos */}
                    <div className="absolute top-20 right-10 hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">
                                        Sprint Concluída
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        Lógica de Programação
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 right-32 hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-float-delayed">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                    <Play size={24} fill="currentColor" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase">
                                        Próxima Aula
                                    </p>
                                    <p className="text-sm font-bold text-white">
                                        Banco de Dados
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECTION: O PROBLEMA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Por que estudar sozinho é tão difícil?
                    </h2>
                    <p className="text-lg text-slate-600">
                        O problema não é a falta de conteúdo na internet, é a
                        falta de{" "}
                        <span className="text-orange-600 font-bold">
                            estrutura
                        </span>
                        .
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative overflow-hidden group hover:border-red-200 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <XCircle size={100} className="text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <XCircle className="text-red-500" /> Método
                            Tradicional
                        </h3>
                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-2">
                                ❌ "Tutorial Hell": assiste mas não aprende.
                            </li>
                            <li className="flex gap-2">
                                ❌ Sem prazos, você procrastina.
                            </li>
                            <li className="flex gap-2">
                                ❌ Não sabe o que estudar em seguida.
                            </li>
                            <li className="flex gap-2">
                                ❌ Sensação constante de estar perdido.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 relative overflow-hidden shadow-2xl transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle2
                                size={100}
                                className="text-green-400"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CheckCircle2 className="text-green-400" /> Método
                            Dev Stack
                        </h3>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex gap-2 text-white font-medium">
                                <span className="text-green-400">✓</span>{" "}
                                Sprints com início e fim definidos.
                            </li>
                            <li className="flex gap-2 text-white font-medium">
                                <span className="text-green-400">✓</span>{" "}
                                Gamificação que vicia em progredir.
                            </li>
                            <li className="flex gap-2 text-white font-medium">
                                <span className="text-green-400">✓</span> Trilha
                                linear: zero confusão.
                            </li>
                            <li className="flex gap-2 text-white font-medium">
                                <span className="text-green-400">✓</span>{" "}
                                Feedback real dos instrutores.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION: PROVA DE DADOS */}
            {/* --- SECTION: PROVA DE DADOS (Baseado em Dados Reais) --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Texto Explicativo */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-100 text-orange-800 text-xs font-bold mb-4 border border-orange-200">
                            <BarChart3 size={14} /> DADOS DE MERCADO 2024
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                            A metodologia que <br />
                            <span className="text-orange-600 underline decoration-4 decoration-orange-200 underline-offset-4">
                                muda o jogo.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Estudos globais mostram que cursos online sem
                            acompanhamento (MOOCs) possuem taxas de abandono
                            massivas.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            O modelo <strong>Cohort-Based</strong> (turmas com
                            mentoria e prazos), utilizado no Dev Stack, eleva a
                            taxa de conclusão para níveis de excelência. Você
                            não estuda sozinho; você estuda com um time.
                        </p>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-slate-700 font-medium">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={18} />
                                </div>
                                Acompanhamento de instrutores reais
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 font-medium">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <CheckCircle2 size={18} />
                                </div>
                                Prazos definidos (Fim da procrastinação)
                            </div>
                        </div>
                    </div>

                    {/* GRÁFICO REALISTA */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative">
                        <h3 className="font-bold text-slate-800 mb-8 text-lg">
                            Taxa Média de Conclusão de Curso
                        </h3>

                        <div className="flex items-end justify-between h-64 gap-6 pb-2 border-b border-slate-100">
                            {/* Barra 1: MOOCs (Udemy, Coursera etc sem mentoria) */}
                            <div className="w-full flex flex-col items-center gap-2 group cursor-help relative">
                                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs p-2 rounded pointer-events-none w-32 text-center z-10">
                                    Alta desistência por falta de suporte.
                                </div>
                                <div className="text-sm font-bold text-slate-400">
                                    15%
                                </div>
                                <div className="w-full bg-slate-200 rounded-t-lg h-[15%] group-hover:bg-slate-300 transition-all"></div>
                                <p className="text-xs font-bold text-slate-400 text-center mt-2">
                                    Cursos de
                                    <br />
                                    Vídeo (MOOC)
                                </p>
                            </div>

                            {/* Barra 2: Ensino Técnico Tradicional */}
                            <div className="w-full flex flex-col items-center gap-2 group cursor-help relative">
                                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs p-2 rounded pointer-events-none w-32 text-center z-10">
                                    Média nacional de ensino técnico/superior.
                                </div>
                                <div className="text-sm font-bold text-slate-500">
                                    52%
                                </div>
                                <div className="w-full bg-slate-300 rounded-t-lg h-[52%] group-hover:bg-slate-400 transition-all"></div>
                                <p className="text-xs font-bold text-slate-500 text-center mt-2">
                                    Ensino
                                    <br />
                                    Tradicional
                                </p>
                            </div>

                            {/* Barra 3: Dev Stack (Cohort Based) */}
                            <div className="w-full flex flex-col items-center gap-2 relative">
                                {/* Badge de Destaque */}
                                <div className="absolute -top-12 animate-bounce bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold border border-orange-200">
                                    5.6x Maior 🚀
                                </div>
                                <div className="text-xl font-black text-orange-600">
                                    85%
                                </div>
                                <div className="w-full bg-gradient-to-t from-orange-600 to-red-500 rounded-t-lg h-[85%] relative shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)]">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                                </div>
                                <p className="text-sm font-bold text-slate-800 text-center mt-2">
                                    Dev Stack
                                    <br />
                                    (Firjan SENAI)
                                </p>
                            </div>
                        </div>

                        {/* Rodapé com Fontes - Isso dá credibilidade */}
                        <div className="pt-6 mt-2 text-[10px] text-slate-400 leading-tight border-t border-slate-50">
                            <p>
                                <strong>Fontes:</strong>
                            </p>
                            <ul className="list-disc pl-4 space-y-1 mt-1">
                                <li>
                                    Katy Jordan (2025):{" "}
                                    <em>"MOOC Completion Rates: The Data"</em>{" "}
                                    (Média de 15%).
                                </li>
                                <li>
                                    Censo da Educação Superior/Semesp (2024):
                                    Taxa de conclusão presencial/híbrida (~52%).
                                </li>
                                <li>
                                    EducateMe LMS Report (2025): Taxa de
                                    conclusão em <em>Cohort-Based Learning</em>{" "}
                                    (85%+).
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 bg-slate-900 text-center px-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px]"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Sua próxima sprint começa agora.
                    </h2>
                    <p className="text-xl text-slate-300 mb-10">
                        Junte-se à plataforma oficial e transforme teoria em
                        prática hoje mesmo.
                    </p>
                    <Link href="/login">
                        <button className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-500 hover:scale-105 transition-all shadow-xl shadow-orange-900/50">
                            Acessar Plataforma
                        </button>
                    </Link>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-xs">
                            &lt;/&gt;
                        </div>
                        <span className="font-bold text-slate-800">
                            Dev Stack
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm">
                        © 2025 Firjan SENAI. Todos os direitos reservados.
                    </p>
                </div>
            </footer>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes float-delayed {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
            `}</style>
        </div>
    )
}
