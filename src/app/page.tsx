import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircleArrowRight } from "lucide-react"
import { LivroList } from "@/components/LivroList"
import { LivroSkeleton } from "@/components/LivroSkeleton"

export default async function Home() {
    return (
        <div className="w-full overflow-x-hidden  bg-[#c6c2b8]">
            {/* Section Hero */}
            <section className="w-full h-full flex flex-col items-center justify-center gap-4 text-center mb-10 rounded-2xl bg-[#d6d6d6] md:h-1/2">
                <div className="w-8 h-8 bg-black mt-12"></div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Livros Dev&#39;s & Design
                    </h2>
                    <h3 className="text-2xl font-light text-[#6B6B6B]">
                        Poste, debata e tire dúvidas.
                    </h3>
                    <p className="pt-8 font-light text-sm text-black max-w-xs md:max-w-xs lg:max-w-sm">
                        Compartilhe sua visão, inspire novos devs e descubra
                        obras que desafiam até os mais avançados.
                    </p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Button asChild className="mr-4 flex items-center gap-2">
                        <Link href="/login">
                            Comece agora!
                            <CircleArrowRight size={16} />
                        </Link>
                    </Button>

                    <Button variant="link" asChild className="">
                        <Link href="/register">Crie sua conta gratuita</Link>
                    </Button>
                </div>
            </section>

            {/* Section Cards de Livros */}
            <section className="w-full min-h-40 p-4">
                <Suspense fallback={<LivroSkeleton />}>
                    <LivroList />
                </Suspense>
            </section>

            {/* Section Últimos Lançamentos */}
            <section className="container px-4 p-4 mx-auto mt-10 flex flex-col justify-center gap-6">
                {/* Div com o título e botão para *ver mais* */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold mb-4">
                        Últimos Lançamentos
                    </h2>
                    <Button variant="outline" asChild>
                        <Link href="/books">Ver outros posts</Link>
                    </Button>
                </div>

                {/* Div pai do container de lançamento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Div do primeiro card content */}
                    <div>
                        <Link href="/books/1">
                            <div className="relative h-[260px] sm:h-[240px] md:h-[300px] lg:h-[480px] xl:h-[600px] w-full">
                                <Image
                                    src="https://picsum.photos/800/1200?random=7"
                                    alt="Design Systems"
                                    fill
                                    className="object-cover rounded-xl"
                                    sizes="100vw"
                                />
                            </div>
                        </Link>

                        <p className="text-sm font-extralight text-slate-800 mt-4">
                            @gabi_sre
                        </p>

                        <h3 className="text-lg font-semibold mt-2 mb-1">
                            Designing Data-Intensive Applications, por Martin
                            Kleppmann
                        </h3>

                        <p className="text-sm font-light text-gray-600">
                            Li `&apos;`Designing Data-Intensive
                            Applications`&apos;` e demorei 3 meses. Cada
                            capítulo é uma aula de mestrado. Se você quer
                            realmente entender como sistemas escaláveis (Kafka,
                            databases, etc.) funcionam por baixo dos panos, esta
                            é a `&apos;`bíblia`&apos;`. Denso, mas fundamental.
                        </p>
                    </div>

                    {/* 3 card secundários*/}
                    <div>
                        <div>
                            <Image
                                src="https://picsum.photos/400/600?random=7"
                                alt="Capa do livro"
                                width={50}
                                height={75}
                                className="object-cover rounded"
                            />
                            <p>@gabi_sre</p>
                            <h3 className="text-lg font-semibold mt-2">
                                Designing Data-Intensive Applications, por
                                Martin Kleppmann
                            </h3>
                            <p className="text-sm font-light text-gray-600">
                                Li `&apos;`Designing Data-Intensive
                                Applications`&apos;` e demorei 3 meses. Cada
                                capítulo é uma aula de mestrado. Se você quer
                                realmente entender como sistemas escaláveis
                                (Kafka, databases, etc.) funcionam por baixo dos
                                panos, esta é a `&apos;`bíblia`&apos;`. Denso,
                                mas fundamental.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="https://picsum.photos/400/600?random=7"
                                alt="Capa do livro"
                                width={50}
                                height={75}
                                className="object-cover rounded"
                            />
                            <p>@gabi_sre</p>
                            <h3 className="text-lg font-semibold mt-2">
                                Designing Data-Intensive Applications, por
                                Martin Kleppmann
                            </h3>
                            <p className="text-sm font-light text-gray-600">
                                Li `&apos;`Designing Data-Intensive
                                Applications`&apos;` e demorei 3 meses. Cada
                                capítulo é uma aula de mestrado. Se você quer
                                realmente entender como sistemas escaláveis
                                (Kafka, databases, etc.) funcionam por baixo dos
                                panos, esta é a `&apos;`bíblia`&apos;`. Denso,
                                mas fundamental.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="https://picsum.photos/400/600?random=7"
                                alt="Capa do livro"
                                width={50}
                                height={75}
                                className="object-cover rounded"
                            />
                            <p>@gabi_sre</p>
                            <h3 className="text-lg font-semibold mt-2">
                                Designing Data-Intensive Applications, por
                                Martin Kleppmann
                            </h3>
                            <p className="text-sm font-light text-gray-600">
                                Li `&apos;`Designing Data-Intensive
                                Applications`&apos;` e demorei 3 meses. Cada
                                capítulo é uma aula de mestrado. Se você quer
                                realmente entender como sistemas escaláveis
                                (Kafka, databases, etc.) funcionam por baixo dos
                                panos, esta é a `&apos;`bíblia`&apos;`. Denso,
                                mas fundamental.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
