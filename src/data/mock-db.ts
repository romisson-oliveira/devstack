// src/data/mock-db.ts

// Simulando os ENUMs do Prisma
export enum ResourceType {
    LINK = "LINK",
    VIDEO = "VIDEO",
    READING = "READING",
    CHALLENGE = "CHALLENGE",
}

// MOCK: O Usuário Logado (Você apresentando)
export const CURRENT_USER = {
    id: "user-demo-01",
    name: "Dev Senior Student",
    email: "student@senai.br",
    image: null,
    cohortId: "cohort-01",
}

// MOCK: Check-ins já realizados pelo usuário (Simula que ele já fez a Sprint 1)
export const USER_CHECKINS = [
    {
        id: "checkin-01",
        sprintId: "sprint-01",
        content: "Aprendi sobre variáveis e constantes.",
        link: "github.com/meu-repo",
        createdAt: new Date(),
    },
]

// MOCK: A Stack (Curso) com Sprints e Recursos
// Estrutura idêntica ao que o prisma retornaria com 'include: { resources: true }'
export const FULL_STACK_COURSE = {
    id: "stack-01",
    title: "Formação Fullstack Master",
    description: "Da lógica de programação ao deploy na nuvem.",
    sprints: [
        {
            id: "sprint-01",
            title: "01. Fundamentos & Lógica",
            description: "Entendendo como o computador pensa.",
            order: 1,
            resources: [
                {
                    id: "res-1a",
                    title: "Lógica Booleana (Apostila)",
                    type: ResourceType.READING,
                    url: "#",
                    description: "Capítulo 1 e 2",
                },
                {
                    id: "res-1b",
                    title: "Aula Inaugural",
                    type: ResourceType.VIDEO,
                    url: "#",
                    description: "Vídeo de Boas Vindas",
                },
            ],
        },
        {
            id: "sprint-02",
            title: "02. HTML & CSS Moderno",
            description: "Construindo a estrutura da web.",
            order: 2,
            resources: [
                {
                    id: "res-2a",
                    title: "Box Model Explicado",
                    type: ResourceType.VIDEO,
                    url: "https://youtube.com/...",
                    description: "Vídeo demonstrativo",
                },
                {
                    id: "res-2b",
                    title: "Flexbox Froggy",
                    type: ResourceType.CHALLENGE,
                    url: "https://flexboxfroggy.com",
                    description: "Complete o jogo",
                },
            ],
        },
        {
            id: "sprint-03",
            title: "03. Javascript Intermediário",
            description: "Manipulação de DOM e Eventos.",
            order: 3,
            resources: [
                {
                    id: "res-3a",
                    title: "MDN Docs - Events",
                    type: ResourceType.READING,
                    url: "#",
                    description: "Leitura técnica",
                },
            ],
        },
        {
            id: "sprint-04",
            title: "04. React & Next.js",
            description: "Componentização e Estado.",
            order: 4,
            resources: [],
        },
    ],
}

// MOCK: Feed da Turma (Pressão Social)
export const COHORT_FEED = [
    {
        id: 1,
        user: "Ana Silva",
        action: "concluiu Sprint 01",
        time: "Há 10 min",
    },
    {
        id: 2,
        user: "Roberto Dias",
        action: "concluiu Sprint 01",
        time: "Há 35 min",
    },
    { id: 3, user: "Lucas M.", action: "começou Sprint 02", time: "Há 1 hora" },
]
