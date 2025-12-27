import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { SignOutButton } from "@/component/sign-out-button"

export default async function DashboardPage() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="p-10 space-y-4">
            <h1 className="text-2xl font-bold">Dashboard Protegido</h1>
            <div className="bg-slate-100 p-4 rounded-lg dark:bg-slate-800">
                <p>
                    Olá, <strong>{session.user?.name}</strong>
                </p>
                <p className="text-sm text-gray-500">{session.user?.email}</p>

                {session.user?.image && (
                    <img
                        src={session.user.image}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full mt-2"
                    />
                )}
            </div>

            {/* Botão de Logout para podermos testar sair e entrar de novo */}
            <SignOutButton />
        </div>
    )
}
