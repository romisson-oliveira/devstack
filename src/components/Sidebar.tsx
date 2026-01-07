"use client"

import React, { useState, useEffect } from "react"
import {
    Play,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Settings,
    Menu,
    X,
} from "lucide-react"

// Mock do Feed
const feed = [
    { user: "Ana Silva", action: "finalizou Sprint 01", time: "2 min" },
    {
        user: "João Pedro",
        action: "falhou no Check-in",
        time: "1h",
        type: "alert",
    },
]

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detecta se é mobile
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768
            setIsMobile(mobile)
            if (!mobile) {
                setIsMobileOpen(false) // Fecha o menu mobile se expandir a tela
            } else {
                setIsOpen(false) // No mobile, começa fechado
            }
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // No mobile, usa overlay
    if (isMobile) {
        return (
            <>
                {/* Botão Hamburger Mobile */}
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="fixed top-6 left-6 z-[100] bg-brand-dark/80 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl hover:bg-brand-orange transition-all border border-white/10"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Overlay */}
                {isMobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}

                {/* Sidebar Mobile (Slide from left) */}
                <aside
                    className={`
            fixed top-0 left-0 h-screen w-72 bg-brand-dark/95 backdrop-blur-xl text-white flex flex-col transition-transform duration-300 ease-out border-r border-white/10 shadow-2xl z-[95]
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
                >
                    <SidebarContent isOpen={true} />
                </aside>
            </>
        )
    }

    // Desktop: Sidebar normal com toggle
    return (
        <aside
            className={`
        relative h-screen bg-brand-dark/70 backdrop-blur-xl text-white flex flex-col transition-all duration-300 ease-in-out border-r border-white/10 shadow-2xl sticky top-0
        ${isOpen ? "w-72" : "w-20"}
      `}
        >
            {/* Botão de Toggle Desktop - Redesenhado */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="absolute -right-4 top-8 bg-gradient-to-br from-brand-orange to-brand-orange/80 text-white p-2.5 rounded-full shadow-2xl hover:scale-110 hover:rotate-180 transition-all duration-300 border-2 border-brand-light/20 z-50 group"
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
                {isOpen ? (
                    <ChevronLeft
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                    />
                ) : (
                    <ChevronRight
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                    />
                )}
            </button>

            <SidebarContent isOpen={isOpen} />
        </aside>
    )
}

// Componente de conteúdo reutilizável
function SidebarContent({ isOpen }: { isOpen: boolean }) {
    return (
        <>
            {/* HEADER / LOGO */}
            <div className="h-20 flex items-center justify-center border-b border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 overflow-hidden px-4">
                    <div className="w-10 h-10 min-w-[40px] bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-brand-orange/30 ring-2 ring-white/20">
                        D
                    </div>
                    <span
                        className={`font-bold text-xl tracking-tight whitespace-nowrap transition-all duration-300 ${
                            isOpen
                                ? "opacity-100 max-w-xs"
                                : "opacity-0 max-w-0"
                        }`}
                    >
                        Dev Stack
                    </span>
                </div>
            </div>

            {/* NAVEGAÇÃO */}
            <nav className="flex-1 py-6 px-3 space-y-2">
                <NavItem
                    icon={<Play size={22} />}
                    label="Minha Jornada"
                    isActive
                    isOpen={isOpen}
                />
                <NavItem
                    icon={<CheckCircle size={22} />}
                    label="Conquistas"
                    isOpen={isOpen}
                />
                <NavItem
                    icon={<LayoutDashboard size={22} />}
                    label="Fórum"
                    isOpen={isOpen}
                />
            </nav>

            {/* SETTINGS / FOOTER */}
            <div className="p-3 border-t border-white/10">
                <NavItem
                    icon={<Settings size={22} />}
                    label="Configurações"
                    isOpen={isOpen}
                />
            </div>

            {/* FEED DA TURMA */}
            <div
                className={`
        border-t border-white/10 p-5 bg-brand-dark/50 backdrop-blur-sm transition-all duration-300 overflow-hidden
        ${isOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0 py-0"}
      `}
            >
                <p className="text-xs text-white/40 uppercase font-bold mb-4 tracking-wider">
                    Últimas da Turma
                </p>
                <div className="space-y-4">
                    {feed.map((item, idx) => (
                        <div
                            key={idx}
                            className="text-sm flex flex-col group cursor-default"
                        >
                            <span
                                className={`font-medium truncate transition-colors ${
                                    item.type === "alert"
                                        ? "text-red-400"
                                        : "text-white/70 group-hover:text-white"
                                }`}
                            >
                                {item.user}
                            </span>
                            <span className="text-xs text-white/40 truncate">
                                {item.action}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

// Componente auxiliar de Item de Menu
function NavItem({
    icon,
    label,
    isActive = false,
    isOpen,
}: {
    icon: any
    label: string
    isActive?: boolean
    isOpen: boolean
}) {
    return (
        <a
            href="#"
            className={`
      flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative
      ${
          isActive
              ? "bg-gradient-to-r from-brand-orange to-orange-600 text-white shadow-lg shadow-brand-orange/30"
              : "text-white/60 hover:text-white hover:bg-white/10"
      }
      ${!isOpen && "justify-center"}
    `}
        >
            {/* Ícone sempre visível */}
            <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                {icon}
            </div>

            {/* Texto com animação de entrada/saída */}
            <span
                className={`
        font-medium whitespace-nowrap transition-all duration-300 overflow-hidden
        ${isOpen ? "w-auto opacity-100 ml-1" : "w-0 opacity-0"}
      `}
            >
                {label}
            </span>

            {/* Tooltip quando fechado */}
            {!isOpen && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-brand-dark/95 backdrop-blur-md text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none shadow-2xl border border-white/20">
                    {label}
                </div>
            )}
        </a>
    )
}
