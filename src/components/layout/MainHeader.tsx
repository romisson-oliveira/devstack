// (Cuida do Header Desktop e do Header Mobile Superior)
import Link from "next/link"
import Image from "next/image"
import { Search, Settings, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DevStackLogo from "@/assets/devStackLogo2.png"

// Definimos o tipo básico do usuário para não dar erro de TS
interface User {
    name?: string | null
    image?: string | null
}

interface MainHeaderProps {
    user?: User | null // Recebe o usuário (ou null se não logado)
}

export function MainHeader({ user }: MainHeaderProps) {
    return (
        <header className="w-full border-none bg-[#c6c2b8]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* --- LADO ESQUERDO: LOGO (Mobile e Desktop) --- */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-xl font-bold text-primary">
                        <Image
                            src={DevStackLogo}
                            alt="DevStack Logo"
                            className="h-8 w-auto"
                            // height={32}
                            priority
                        />
                    </Link>

                    {/* Links de Navegação (Apenas Desktop) */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium ml-6">
                        <Link href="/livros" className="hover:text-primary">
                            Livros
                        </Link>
                        <Link href="/populares" className="hover:text-primary">
                            Populares
                        </Link>
                    </nav>
                </div>

                {/* --- CENTRO: BARRA DE PESQUISA (Apenas Desktop) --- */}
                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Pesquisar livros..."
                            className="pl-8 border-none bg-[#cfccc3] outline-none shadow-2x1l"
                        />
                    </div>
                </div>

                {/* --- LADO DIREITO --- */}
                <div className="flex items-center gap-4">
                    {/* LÓGICA DE USUÁRIO LOGADO */}
                    {user ? (
                        <>
                            {/* VISÃO DESKTOP: Avatar, Nome, Config */}
                            <div className="hidden md:flex items-center gap-3">
                                <Link href="/profile">
                                    <div className="flex gap-3 items-center justify-between  bg-[#cfccc3] px-6 py-1 rounded-2xl">
                                        <span className="text-sm font-medium">
                                            {user.name}
                                        </span>
                                        <Avatar>
                                            <AvatarImage
                                                src={user.image || ""}
                                            />
                                            <AvatarFallback>
                                                {user.name
                                                    ?.substring(0, 2)
                                                    .toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                </Link>
                            </div>

                            {/* VISÃO MOBILE (Topo): Apenas Avatar e Nome simplificado */}
                            <div className="flex md:hidden items-center gap-2">
                                <span className="text-sm font-medium truncate max-w-[100px]">
                                    {user.name}
                                </span>
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.image || ""} />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </div>
                        </>
                    ) : (
                        /* LÓGICA DE USUÁRIO NÃO LOGADO (Apenas Desktop) 
               No mobile, os botões de entrar ficam na barra inferior conforme seu pedido
            */
                        <div className="hidden md:flex items-center gap-2">
                            <Link href="/login">
                                <Button variant="ghost">Entrar</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Cadastrar</Button>
                            </Link>
                        </div>
                    )}
                    {/* Botão Tema (Apenas Desktop por enquanto, ou ambos se quiser) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:flex"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
