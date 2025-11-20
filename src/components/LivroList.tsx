import Image from "next/image"
import Link from "next/link"
import { Livro } from "@/types/schema"

const livrosMock: Livro[] = [
    {
        id: "1",
        titulo: "Clean Code",
        imagem: "https://picsum.photos/400/600?1",
    },
    {
        id: "2",
        titulo: "React Patterns",
        imagem: "https://picsum.photos/400/600?2",
    },
    {
        id: "3",
        titulo: "Design Systems",
        imagem: "https://picsum.photos/400/600?3",
    },
    {
        id: "4",
        titulo: "Refactoring",
        imagem: "https://picsum.photos/400/600?4",
    },
    {
        id: "5",
        titulo: "Design Systems",
        imagem: "https://picsum.photos/400/600?random=5",
    },
    {
        id: "6",
        titulo: "Design Systems",
        imagem: "https://picsum.photos/400/600?random=6",
    },
]

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function LivroList() {
    // simula um delay de API
    await wait(1200)
    // aqui você poderia fazer um fetch real
    const livros: Livro[] = livrosMock

    // verificação de array vazio
    if (!livros || livros.length === 0) {
        return <p>Não há livros para exibir.</p>
    }

    return (
        <div className="flex gap-5 items-center justify-center">
            {livros.map((l) => (
                <Link key={l.id} href={`/books/${l.id}`}>
                    <div className="relative w-32 h-48 md:w-20 md:h-30 lg:w-30 lg:h-45">
                        <Image
                            src={l.imagem}
                            alt={l.titulo}
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </Link>
            ))}
        </div>
    )
}
