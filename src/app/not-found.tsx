import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h2 className="text-2xl">Error 404</h2>
            <p>Página não encontrada!</p>
            <Button asChild>
                <Link href="/">Retornar ao Início</Link>
            </Button>
        </div>
    )
}
