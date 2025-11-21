import Image from "next/image"
import { notFound } from "next/navigation"
import { getLivroById } from "@/lib/livros"

interface Params {
    params: {
        bookId: string
    }
}

export default async function BookDetailPage({ params }: Params) {
    const livro = await getLivroById(params.bookId)

    if (!livro) return notFound()

    return (
        <div className="w-full min-h-screen p-4 bg-[#f5f5f5]">
            <div className="flex flex-col md:flex-row gap-6">
                <Image
                    src={livro.imagem}
                    alt={livro.titulo}
                    width={300}
                    height={400}
                    className="rounded-lg shadow-lg"
                />
                <div className="flex flex-col justify-start">
                    <h1 className="text-3xl font-bold mb-2">{livro.titulo}</h1>
                    {livro.autor && (
                        <p className="text-lg mb-1">Autor: {livro.autor}</p>
                    )}
                    {livro.anoPublicacao && (
                        <p className="text-lg mb-1">
                            Ano: {livro.anoPublicacao}
                        </p>
                    )}
                    {livro.genero && (
                        <p className="text-lg mb-1">Gênero: {livro.genero}</p>
                    )}
                    {livro.disponivel !== undefined && (
                        <p className="text-lg mb-1">
                            Disponível: {livro.disponivel ? "Sim" : "Não"}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
