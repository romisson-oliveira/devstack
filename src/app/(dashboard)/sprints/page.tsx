import React from "react"
import { MoreHorizontal, Plus, Clock, CheckCircle } from "lucide-react"

export default function SprintsPage() {
    return (
        <div className="p-8 h-full flex flex-col">
            <header className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">
                        Sprint 04: Componentização
                    </h1>
                    <p className="text-slate-500 flex items-center gap-2 mt-1">
                        <Clock size={16} /> Encerra em 2 dias
                    </p>
                </div>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800">
                    <Plus size={16} /> Nova Tarefa
                </button>
            </header>

            {/* Kanban Board Container */}
            <div className="flex-1 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-[800px] h-full">
                    {/* Coluna A FAZER */}
                    <div className="bg-slate-50 rounded-2xl p-4 h-full border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-slate-700">
                                A Fazer
                            </h3>
                            <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded">
                                3
                            </span>
                        </div>

                        <div className="space-y-3">
                            <TaskCard
                                priority="Alta"
                                title="Criar componente Button"
                                tag="Front-end"
                            />
                            <TaskCard
                                priority="Média"
                                title="Estudar Tailwind CSS"
                                tag="Estudo"
                            />
                            <TaskCard
                                priority="Baixa"
                                title="Configurar ESLint"
                                tag="Config"
                            />
                        </div>
                    </div>

                    {/* Coluna EM ANDAMENTO */}
                    <div className="bg-orange-50/50 rounded-2xl p-4 h-full border border-orange-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-orange-700">
                                Em Andamento
                            </h3>
                            <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded">
                                1
                            </span>
                        </div>

                        <div className="space-y-3">
                            <TaskCard
                                priority="Alta"
                                title="Desenvolver Navbar Responsiva"
                                tag="Front-end"
                                active
                            />
                        </div>
                    </div>

                    {/* Coluna CONCLUÍDO */}
                    <div className="bg-green-50/50 rounded-2xl p-4 h-full border border-green-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-green-700">
                                Concluído
                            </h3>
                            <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">
                                2
                            </span>
                        </div>

                        <div className="space-y-3 opacity-70">
                            <TaskCard
                                priority="Concluído"
                                title="Setup Inicial do Next.js"
                                tag="Config"
                                done
                            />
                            <TaskCard
                                priority="Concluído"
                                title="Definir paleta de cores"
                                tag="Design"
                                done
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Componente auxiliar para os Cards das Tarefas
function TaskCard({ priority, title, tag, active = false, done = false }: any) {
    return (
        <div
            className={`bg-white p-4 rounded-xl shadow-sm border ${
                active
                    ? "border-orange-300 ring-2 ring-orange-100"
                    : "border-slate-100"
            } hover:shadow-md transition-shadow cursor-pointer`}
        >
            <div className="flex justify-between items-start mb-2">
                <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded border 
          ${priority === "Alta" ? "bg-red-50 text-red-600 border-red-100" : ""}
          ${
              priority === "Média"
                  ? "bg-yellow-50 text-yellow-600 border-yellow-100"
                  : ""
          }
          ${
              priority === "Baixa"
                  ? "bg-blue-50 text-blue-600 border-blue-100"
                  : ""
          }
          ${done ? "bg-green-50 text-green-600 border-green-100" : ""}
        `}
                >
                    {priority}
                </span>
                <button className="text-slate-400 hover:text-slate-600">
                    <MoreHorizontal size={16} />
                </button>
            </div>
            <h4
                className={`font-bold text-slate-800 text-sm mb-3 ${
                    done ? "line-through text-slate-400" : ""
                }`}
            >
                {title}
            </h4>
            <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-slate-500 bg-slate-50 px-2 py-1 rounded">
                    {tag}
                </span>
                {done && <CheckCircle size={16} className="text-green-500" />}
            </div>
        </div>
    )
}
