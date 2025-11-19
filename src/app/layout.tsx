import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
