import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"

export default function Home() {
    return (
        <div className="w-screen h-screen px-4 mx-auto">
            {/* Section Hero */}
            <section className="bg-[##d6d6d6] flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="w-8 h-8 bg-black"></div>
                <h2 className="text-4xl">Livros Dev&#39;s & Design</h2>
                <h3>Poste, debata e tire dúvidas.</h3>
                <p>
                    Compartilhe sua visão, inspire novos devs e descubra obras
                    que desafiam até os mais avançados.
                </p>
                <div className="flex flex-col gap-3">
                    <Button asChild className="mr-4 flex items-center gap-2">
                        <Link href="/login">
                            Comece agora!
                            <CircleArrowRight size={16} />
                        </Link>
                    </Button>

                    <Button variant="link" asChild>
                        <Link href="/register">Crie sua conta gratuita</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
