import Image from "next/image"
import { Livro } from "@/types/schema"
import { getLivros } from "@/lib/livros"
import { Star } from "lucide-react"

export default async function BooksPage() {
    const livros: Livro[] = await getLivros()

    return (
        <div className="px-14 w-full overflow-x-hidden bg-[#c6c2b8]">
            {/* Section de Livro em Destaque */}
            <section className="flex gap-6">
                {/* Imagem: ocupa 2/3 */}
                <div className="">
                    <Image
                        src={livros[0].imagem}
                        width={202}
                        height={226}
                        alt="Capa do Livro"
                        className="rounded-md"
                    />
                    <div className="flex gap-1 mt-3 text-yellow-500 items-center">
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>

                {/* Texto: ocupa 1/3 */}
                <div className="flex-[1] flex flex-col justify-start">
                    <h2 className="text-2xl font-bold mb-2">
                        {livros[0].titulo}
                    </h2>
                    <p className="text-lg w-[70%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita placeat veritatis nihil culpa, quidem dolorum
                        quia! Hic commodi, veritatis harum eius rem minima
                        molestiae? Quos odit soluta nobis ullam voluptas.
                    </p>
                </div>
            </section>
        </div>
    )
}
