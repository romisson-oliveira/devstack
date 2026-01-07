import type { Metadata } from "next"
// Importando as fontes Roboto e Young Serif (ou uma serif similar disponível)
import { Roboto, Young_Serif } from "next/font/google"
import "./globals.css"

// 1. Configurando a Roboto (Sans)
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Pesos que vamos usar
    variable: "--font-roboto", // Variável CSS para o Tailwind ler
})

// 2. Configurando a Serif (Young Serif tem apenas peso 400 geralmente)
const youngSerif = Young_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-young-serif",
})

// 3. Configuração de SEO (Title e Description)
export const metadata: Metadata = {
    title: {
        template: "Dev Stack",
        default: "Dev Stack", // Título padrão
    },
    description:
        "A melhor plataforma para garantir conclusão dos seus estudos. Simples, rápido e eficiente.",
    keywords: ["SaaS", "Dashboard", "Gestão", "Admin"],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body
                // Aqui aplicamos as classes das variáveis de fonte
                className={`${roboto.variable} ${youngSerif.variable} antialiased bg-brand-light text-brand-dark`}
            >
                {children}
            </body>
        </html>
    )
}
