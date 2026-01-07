import React from "react"
import {
    Send,
    MessageCircle,
    Heart,
    Share2,
    MoreVertical,
    Image as ImageIcon,
} from "lucide-react"

export default function FeedPage() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-black text-slate-900">
                    Feed da Turma
                </h1>
                <p className="text-slate-500">
                    Mural de avisos, dúvidas e networking da Turma FS-2025.
                </p>
            </header>

            {/* Caixa de Criação de Post */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        EU
                    </div>
                    <div className="flex-1">
                        <textarea
                            className="w-full bg-slate-50 rounded-xl p-4 text-slate-700 text-sm focus:ring-2 focus:ring-orange-200 outline-none resize-none border border-transparent focus:border-orange-300"
                            placeholder="Compartilhe uma dúvida ou uma descoberta..."
                            rows={3}
                        />
                        <div className="flex justify-between items-center mt-3">
                            <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100">
                                <ImageIcon size={20} />
                            </button>
                            <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-slate-800">
                                Publicar <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lista de Posts */}
            <div className="space-y-6">
                {/* Post do Instrutor (Aviso) */}
                <PostItem
                    author="Prof. Carlos Silva"
                    role="Instrutor"
                    time="2 horas atrás"
                    content="Pessoal, adicionei um material extra sobre Flexbox na biblioteca. Recomendo a leitura antes da Sprint de amanhã! 📚"
                    likes={24}
                    comments={5}
                    isInstructor={true}
                />

                {/* Post de Aluno (Dúvida) */}
                <PostItem
                    author="Ana Julia"
                    role="Aluna"
                    time="4 horas atrás"
                    content="Alguém conseguiu resolver o bug no footer? O meu não está ficando fixo no final da página quando tem pouco conteúdo."
                    likes={3}
                    comments={12}
                />
            </div>
        </div>
    )
}

function PostItem({
    author,
    role,
    time,
    content,
    likes,
    comments,
    isInstructor = false,
}: any) {
    return (
        <div
            className={`bg-white p-6 rounded-2xl shadow-sm border ${
                isInstructor
                    ? "border-l-4 border-l-orange-500 border-y border-r border-slate-200"
                    : "border border-slate-200"
            }`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-3">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            isInstructor ? "bg-slate-800" : "bg-blue-500"
                        }`}
                    >
                        {author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                            {author}
                            {isInstructor && (
                                <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded-full uppercase">
                                    Instrutor
                                </span>
                            )}
                        </h4>
                        <p className="text-xs text-slate-400">{time}</p>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-slate-600">
                    <MoreVertical size={16} />
                </button>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed mb-4">
                {content}
            </p>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 text-xs font-bold transition-colors">
                    <Heart size={16} /> {likes} Curtidas
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 text-xs font-bold transition-colors">
                    <MessageCircle size={16} /> {comments} Comentários
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-xs font-bold transition-colors ml-auto">
                    <Share2 size={16} />
                </button>
            </div>
        </div>
    )
}
