import { handlers } from "@/auth" // Importamos do arquivo que criamos antes

export const { GET, POST } = handlers
// Reexportamos os handlers para que o Next.js os utilize
// como endpoints da API de autenticação
