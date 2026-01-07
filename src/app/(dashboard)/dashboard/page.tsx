"use client"

import React, { useState } from "react"
import {
    Lock,
    CheckCircle,
    Play,
    FileText,
    ExternalLink,
    AlertCircle,
    Star,
    Trophy,
    Clock,
    Menu, // Ícone Hamburguer
    X, // Ícone Fechar
    LayoutDashboard,
    Settings,
    LogOut,
} from "lucide-react"

// --- MOCK DATA ---
const sprints = [
    {
        id: 1,
        title: "Sprint 01: Lógica de Programação",
        description: "Estruturas condicionais e laços de repetição.",
        status: "completed",
        duration: "2h",
        type: "Dev",
        score: "10/10",
        feedback:
            "Código limpo e bem estruturado. Parabéns pelo uso do 'For Loop'.",
    },
    {
        id: 2,
        title: "Sprint 02: Estrutura de Dados",
        description: "Arrays, vetores e manipulação de objetos.",
        status: "active",
        duration: "4h",
        type: "Dev",
        deadline: "Sexta, 23:59",
    },
    {
        id: 3,
        title: "Sprint 03: Banco de Dados SQL",
        description: "Modelagem relacional e primeiras queries.",
        status: "locked",
        duration: "3h",
        type: "Data",
        deadline: "Bloqueado",
    },
    {
        id: 4,
        title: "Sprint 04: Frontend com React",
        description: "Componentes, estado e props no React.",
        status: "locked",
        duration: "5h",
        type: "Dev",
        deadline: "Bloqueado",
    },
    {
        id: 5,
        title: "Sprint 05: APIs e Web Services",
        description: "Integração com RESTful APIs e consumo de dados.",
        status: "locked",
        duration: "6h",
        type: "Dev",
        deadline: "Bloqueado",
    },
    {
        id: 6,
        title: "Sprint 06: Algoritmos de Busca",
        description: "Implementação de algoritmos como busca binária e linear.",
        status: "locked",
        duration: "3h",
        type: "Dev",
        deadline: "Bloqueado",
    },
    {
        id: 7,
        title: "Sprint 07: Testes Unitários",
        description: "Escrita de testes para funções e componentes.",
        status: "locked",
        duration: "4h",
        type: "QA",
        deadline: "Bloqueado",
    },
    {
        id: 8,
        title: "Sprint 08: Desenvolvimento Backend com Node.js",
        description: "Criação de um servidor e APIs com Node.js e Express.",
        status: "locked",
        duration: "7h",
        type: "Dev",
        deadline: "Bloqueado",
    },
    {
        id: 9,
        title: "Sprint 09: Estrutura de Dados Avançada",
        description: "Árvores, grafos e tabelas hash.",
        status: "locked",
        duration: "5h",
        type: "Data",
        deadline: "Bloqueado",
    },
    {
        id: 10,
        title: "Sprint 10: Segurança de Aplicações Web",
        description: "Autenticação, criptografia e proteção contra ataques.",
        status: "locked",
        duration: "6h",
        type: "Security",
        deadline: "Bloqueado",
    },
]

export default function Dashboard() {
    const [selectedSprint, setSelectedSprint] = useState<number | null>(2)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleSprintClick = (sprint: any) => {
        if (sprint.status !== "locked") {
            setSelectedSprint(selectedSprint === sprint.id ? null : sprint.id)
        }
    }

    return (
        <div className="min-h-screen w-full bg-[#FFF] font-sans">
            {/* --- MOBILE HEADER (Só aparece em telas pequenas) --- */}
            <div className="md:hidden bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
                <div className="flex justify-between items-center">
                    {/* Logo e Nome */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">
                            D
                        </div>
                        <span className="font-bold text-lg tracking-tight">
                            Dev Stack
                        </span>
                    </div>

                    {/* Ícone Hamburguer */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* --- MOBILE DROPDOWN MENU --- */}
                {isMobileMenuOpen && (
                    <nav className="mt-4 pt-4 border-t border-slate-700 animate-in slide-in-from-top-2 duration-200">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-slate-300 hover:text-white"
                                >
                                    <Play size={20} /> Minha Jornada
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-slate-300 hover:text-white"
                                >
                                    <CheckCircle size={20} /> Conquistas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-slate-300 hover:text-white"
                                >
                                    <Settings size={20} /> Configurações
                                </a>
                            </li>
                            <li className="pt-2 border-t border-slate-700">
                                <a
                                    href="#"
                                    className="flex items-center gap-3 text-red-400 hover:text-red-300"
                                >
                                    <LogOut size={20} /> Sair
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>

            {/* --- CONTEÚDO PRINCIPAL CENTRALIZADO --- */}
            <main className="p-6 md:p-12 max-w-5xl mx-auto">
                {/* --- HEADER DO PERFIL (Novo Layout: Space Between) --- */}
                <header className="flex justify-between items-start mb-10">
                    {/* LADO ESQUERDO: Saudação + Turma */}
                    <div>
                        <h1 className="text-3xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                            Olá, João Pedro!
                        </h1>
                        <p className="text-xs font-bold text-slate-500 uppercase mt-2 tracking-widest">
                            Tec. Desenvolvimento Sistemas • 2025
                        </p>
                    </div>

                    {/* LADO DIREITO: Avatar + Status */}
                    <div className="flex flex-col items-end gap-3">
                        {/* Avatar */}
                        <div className="relative group cursor-pointer">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-300 border-4 border-[#ECECEC] shadow-sm overflow-hidden">
                                <img
                                    src="https://github.com/shadcn.png"
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Status (Agora alinhado abaixo do avatar à direita) */}
                        <div className="bg-slate-200 backdrop-blur-sm border border-white px-3 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="font-bold text-slate-700 uppercase tracking-wide text-[10px]">
                                Status: Ativo
                            </span>
                        </div>
                    </div>
                </header>

                {/* --- STATS GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Card 1 */}
                    <div className="bg-slate-200 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                                    Concluídas
                                </p>
                                <p className="text-2xl font-black text-slate-800">
                                    1/10
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <CheckCircle
                                    size={20}
                                    className="text-orange-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-200 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                                    Em Progresso
                                </p>
                                <p className="text-2xl font-black text-slate-800">
                                    1
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Play
                                    size={20}
                                    className="text-blue-600 ml-1"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-200 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-sm hover:scale-[1.02] transition-transform">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                                    Horas Totais
                                </p>
                                <p className="text-2xl font-black text-slate-800">
                                    45h
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                                <Clock size={20} className="text-slate-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- LISTA DE SPRINTS --- */}
                <div className="space-y-5 pb-20">
                    {sprints.map((sprint) => (
                        <div
                            key={sprint.id}
                            onClick={() => handleSprintClick(sprint)}
                            className={`
                relative border rounded-2xl p-6 transition-all duration-300 shadow-sm group
                ${
                    sprint.status === "active"
                        ? "bg-white border-blue-500 ring-4 ring-blue-500/5 cursor-pointer transform scale-[1.01]"
                        : sprint.status === "completed"
                        ? "bg-white/60 border-transparent cursor-pointer hover:bg-white hover:shadow-md"
                        : "bg-slate-200/50 border-transparent cursor-not-allowed opacity-60"
                }
              `}
                        >
                            {/* Alerta Flutuante (Active) */}
                            {sprint.status === "active" && (
                                <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1.5 shadow-lg border-4 border-[#d9d9d9] animate-bounce z-10">
                                    <AlertCircle
                                        size={20}
                                        fill="currentColor"
                                        className="text-white"
                                    />
                                </div>
                            )}

                            <div className="flex justify-between items-start">
                                <div className="flex gap-4 items-center flex-1">
                                    {/* Ícone Status Grande */}
                                    <div
                                        className={`
                    w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm
                    ${
                        sprint.status === "active"
                            ? "bg-blue-600 text-white shadow-blue-200"
                            : sprint.status === "completed"
                            ? "bg-green-500 text-white"
                            : "bg-slate-300 text-slate-500"
                    }
                  `}
                                    >
                                        {sprint.status === "locked" ? (
                                            <Lock size={20} />
                                        ) : sprint.status === "completed" ? (
                                            <CheckCircle size={24} />
                                        ) : (
                                            <Play
                                                size={24}
                                                fill="currentColor"
                                                className="ml-1"
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <h3
                                            className={`text-lg font-bold flex items-center gap-2 ${
                                                sprint.status === "locked"
                                                    ? "text-slate-500"
                                                    : "text-slate-900"
                                            }`}
                                        >
                                            {sprint.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm mt-0.5">
                                            {sprint.description}
                                        </p>

                                        {/* Tags abaixo do texto */}
                                        <div className="flex gap-2 mt-2">
                                            <span
                                                className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide ${
                                                    sprint.type === "Dev"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : "bg-purple-100 text-purple-700"
                                                }`}
                                            >
                                                {sprint.type}
                                            </span>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide bg-slate-100 text-slate-500 flex items-center gap-1">
                                                <Clock size={10} />{" "}
                                                {sprint.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Prazo (Active Desktop) */}
                                {sprint.status === "active" && (
                                    <div className="hidden md:flex flex-col items-end text-right">
                                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">
                                            Prazo Final
                                        </span>
                                        <div className="text-sm font-bold text-slate-800 bg-red-50 px-2 py-1 rounded border border-red-100">
                                            {sprint.deadline}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* --- DETALHES (OPEN) --- */}
                            {selectedSprint === sprint.id && (
                                <div className="mt-8 pt-6 border-t border-slate-100 animate-in fade-in zoom-in-95 duration-300">
                                    {/* Conteúdo Active */}
                                    {sprint.status === "active" && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                                <h4 className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                                    Material de Estudo
                                                </h4>
                                                <ul className="space-y-3">
                                                    <li className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 cursor-pointer transition-colors group/link">
                                                        <div className="bg-white p-1.5 rounded-md shadow-sm text-blue-500 group-hover/link:bg-blue-500 group-hover/link:text-white transition-colors">
                                                            <ExternalLink
                                                                size={14}
                                                            />
                                                        </div>
                                                        <span className="font-medium">
                                                            Assistir Aula no
                                                            Senai Play
                                                        </span>
                                                    </li>
                                                    <li className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 cursor-pointer transition-colors group/link">
                                                        <div className="bg-white p-1.5 rounded-md shadow-sm text-blue-500 group-hover/link:bg-blue-500 group-hover/link:text-white transition-colors">
                                                            <FileText
                                                                size={14}
                                                            />
                                                        </div>
                                                        <span className="font-medium">
                                                            Ler PDF: Lógica
                                                            Boleana
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-5 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors group/input">
                                                <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                                    <CheckCircle size={14} />{" "}
                                                    Entrega da Atividade
                                                </h4>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Link do GitHub..."
                                                        className="flex-1 bg-slate-50 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                                    />
                                                    <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                                                        Enviar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Conteúdo Completed */}
                                    {sprint.status === "completed" && (
                                        <div className="bg-green-50 rounded-xl p-6 border border-green-100 relative overflow-hidden">
                                            {/* Efeito decorativo de fundo */}
                                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"></div>

                                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between relative z-10">
                                                <div>
                                                    <h4 className="text-green-800 font-bold text-lg flex items-center gap-2 mb-2">
                                                        <Trophy
                                                            size={20}
                                                            className="text-yellow-500 fill-yellow-500"
                                                        />
                                                        Sprint Aprovada!
                                                    </h4>
                                                    <p className="text-green-700/80 text-sm font-medium">
                                                        "{sprint.feedback}"
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-3 rounded-xl border border-green-100 shadow-sm">
                                                    <div className="text-right">
                                                        <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                                                            Nota Final
                                                        </span>
                                                        <span className="block text-2xl font-black text-slate-800 leading-none">
                                                            {sprint.score}
                                                        </span>
                                                    </div>
                                                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                                        <Star
                                                            size={20}
                                                            fill="currentColor"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex gap-4 border-t border-green-200 pt-4">
                                                <button className="text-xs font-bold text-green-700 hover:text-green-900 flex items-center gap-1.5 transition-colors">
                                                    <FileText size={14} /> Ver
                                                    minha entrega
                                                </button>
                                                <button className="text-xs font-bold text-green-700 hover:text-green-900 flex items-center gap-1.5 transition-colors">
                                                    <ExternalLink size={14} />{" "}
                                                    Gabarito oficial
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
