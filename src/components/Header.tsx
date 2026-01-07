import React from "react"

export function Header() {
    return (
        <header className="flex justify-between items-end mb-10">
            <div>
                <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
                    Olá, João Pedro!
                </h1>
                <p className="text-xs font-bold text-slate-500 uppercase mt-2 tracking-widest">
                    Tec. Desenvolvimento Sistemas • 2025
                </p>
            </div>

            {/* Avatar */}
            <div className="relative group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-slate-300 border-4 border-[#d9d9d9] shadow-sm overflow-hidden">
                    {/* Placeholder de imagem - substitua pelo src real */}
                    <img
                        src="https://github.com/shadcn.png"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#d9d9d9] rounded-full"></div>
            </div>
        </header>
    )
}
