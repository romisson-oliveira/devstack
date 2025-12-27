import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["error"], // Menos barulho no terminal, só mostra se der erro grave
    })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
// Assim, no desenvolvimento, a instância do Prisma é reutilizada
