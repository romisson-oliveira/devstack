import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainHeader } from "@/components/layout/MainHeader"
import { BottomNav } from "@/components/layout/BottomNav"

const inter = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Dev Stack – Biblioteca para Devs",
    description:
        "Plataforma colaborativa onde desenvolvedores descobrem, compartilham e discutem livros de tecnologia, programação e inovação.",

    keywords: [
        "livros para desenvolvedores",
        "livros de programação",
        "tecnologia",
        "biblioteca dev",
        "comunidade dev",
        "reviews de livros",
    ],

    //authors: [{ name: "Seu Nome" }],
    //creator: "Seu Nome",
    publisher: "Dev Stack",

    openGraph: {
        title: "Dev Stack – Biblioteca para Devs",
        description:
            "Descubra, compartilhe e discuta livros essenciais para sua carreira de desenvolvimento.",
        type: "website",
        // url: "https://seusite.com",
        siteName: "Dev Stack",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Dev Stack – Comunidade de livros para devs",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Dev Stack – Biblioteca para Devs",
        description:
            "Plataforma da comunidade dev para explorar livros de tecnologia.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
}

// -- SIMULAÇÃO DA SESSÃO DO USUÁRIO --
// No futuro, aqui você fará: const session = await auth();
// Para testar LOGADO, descomente a linha abaixo:
// const user = {
//     name: "Romisson Oliveira",
//     image: "https://github.com/shadcn.png",
// }

// Para testar DESLOGADO, deixe a variável como null:
const user = null
// ------------------------------------

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.className} antialiased`}>
                {/* HEADER SUPERIOR (Cuida de Desktop e Mobile Top) */}
                <MainHeader user={user} />

                {/* CONTEÚDO PRINCIPAL */}
                {/* Adicionamos pb-20 no mobile para o conteúdo não ficar escondido atrás do menu fixo */}
                <main className="min-h-screen pb-20 md:pb-0">{children}</main>

                {/* MENU INFERIOR (Apenas Mobile) */}
                <BottomNav user={user} />
            </body>
        </html>
    )
}
