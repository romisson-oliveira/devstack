import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
        }),
    ],
    pages: {
        signIn: "/login", // Página customizada que faremos na Fase 3
        // newUser: "/onboarding" // Futuro: Redirecionar novos usuários para cá
    },
    callbacks: {
        // Isso aqui permite acessarmos o ID do usuário no front-end facilmente
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
                // @ts-expect-error O tipo do Prisma ainda não foi estendido, mas funciona
                session.user.role = user.role
                // @ts-expect-error
                session.user.cohortId = user.cohortId
            }
            return session
        },
    },
})
