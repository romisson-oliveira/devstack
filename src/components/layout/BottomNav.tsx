// (Cuida das abas inferiores do Mobile)
import Link from "next/link"
import { Home, Book, Star, Search, User, LogIn } from "lucide-react"

interface User {
    name?: string | null
    image?: string | null
}

interface BottomNavProps {
    user?: User | null
}

export function BottomNav({ user }: BottomNavProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 border-t bg-background h-16 md:hidden z-50">
            <nav className="grid grid-cols-5 h-full">
                {/* 1. INÍCIO */}
                <Link
                    href="/"
                    className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                >
                    <Home className="h-5 w-5" />
                    <span>Início</span>
                </Link>

                {/* 2. LIVROS */}
                <Link
                    href="/livros"
                    className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                >
                    <Book className="h-5 w-5" />
                    <span>Livros</span>
                </Link>

                {/* 3. POPULARES */}
                <Link
                    href="/populares"
                    className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                >
                    <Star className="h-5 w-5" />
                    <span>Populares</span>
                </Link>

                {/* 4. BUSCAR */}
                <Link
                    href="/busca"
                    className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                >
                    <Search className="h-5 w-5" />
                    <span>Buscar</span>
                </Link>

                {/* 5. PERFIL (Logado) ou ACESSAR (Não Logado) */}
                {user ? (
                    <Link
                        href="/profile"
                        className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                    >
                        <User className="h-5 w-5" />
                        <span>Perfil</span>
                    </Link>
                ) : (
                    <Link
                        href="/login"
                        className="flex flex-col items-center justify-center text-xs gap-1 text-muted-foreground hover:text-primary"
                    >
                        <LogIn className="h-5 w-5" />
                        <span>Acessar</span>
                    </Link>
                )}
            </nav>
        </div>
    )
}
