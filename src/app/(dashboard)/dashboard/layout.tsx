import { Sidebar } from "@/components/Sidebar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        // Certifique-se que é flex-row e que o bg cobre tudo
        <div className="flex flex-row min-h-screen bg-[#d9d9d9]">
            {/* A Sidebar controla sua própria largura (w-72 ou w-20) */}
            <Sidebar />

            {/* O conteúdo cresce para ocupar o resto */}
            <div className="flex-1 overflow-x-hidden">{children}</div>
        </div>
    )
}
