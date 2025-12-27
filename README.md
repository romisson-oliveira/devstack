# 🚀 Dev Stack: Engenharia de Conclusão

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

> **"Não é sobre acesso ao conteúdo. É sobre a conclusão do estudo."**

O **Dev Stack** é uma plataforma SaaS de **Cohort-Based Learning** (Aprendizado Baseado em Turmas) que utiliza metodologia Ágil (Scrum) para combater a evasão no ensino técnico. Diferente de LMS tradicionais, o foco não é hospedar vídeos, mas orquestrar o ritmo de estudo através de **Sprints**, **Check-ins obrigatórios** e **Pressão Social positiva**.

---

## 📋 Índice

- [🚀 Dev Stack: Engenharia de Conclusão](#-dev-stack-engenharia-de-conclusão)
  - [📋 Índice](#-índice)
  - [💡 O Problema e a Solução](#-o-problema-e-a-solução)
  - [🌟 Funcionalidades Chave](#-funcionalidades-chave)
    - [🎓 Para o Aluno](#-para-o-aluno)
    - [🛡️ Para o Master (Instrutor)](#️-para-o-master-instrutor)
  - [🏗 Arquitetura e Banco de Dados](#-arquitetura-e-banco-de-dados)
  - [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
  - [🚀 Instalação e Execução](#-instalação-e-execução)
  - [🗺 Roadmap do Projeto](#-roadmap-do-projeto)
  - [A Lógica da Estrutura](#a-lógica-da-estrutura)
    - [Árvore da Estrutura](#árvore-da-estrutura)
  - [👥 Autores](#-autores)

---

## 💡 O Problema e a Solução

**O Problema:** Cursos online tradicionais (_Self-Paced_) sofrem com taxas de conclusão abaixo de 15%. O aluno estuda sozinho, sem prazos e sem comunidade, o que leva à desmotivação.

**A Solução (Dev Stack):**
Aplicamos a "Engenharia de Conclusão":

1.  **Cohorts (Turmas):** O aluno entra e segue o ritmo de um grupo.
2.  **Sprints Semanais:** O conteúdo é liberado em ciclos curtos.
3.  **Gating (Bloqueio):** A _Sprint 2_ só é liberada se o aluno fizer o **Check-in** (prova de estudo) da _Sprint 1_.
4.  **Feed da Arena:** Um ambiente social onde os check-ins são compartilhados, gerando _accountability_.

---

## 🌟 Funcionalidades Chave

### 🎓 Para o Aluno

-   **Login Institucional (B2B):** Acesso simplificado para parceiros (ex: SENAI/Universidades).
-   **Dashboard (A Arena):** Visualização clara da meta atual e status da turma.
-   **Sistema de Check-in:** Envio de resumos ou links (GitHub/Drive) para validar aprendizado.
-   **Feed Social:** Visualização do progresso dos colegas em tempo real.

### 🛡️ Para o Master (Instrutor)

-   **Criação de Stacks:** Definição de trilhas de aprendizado.
-   **Gestão de Turmas:** Organização de alunos em coortes temporais.

---

## 🏗 Arquitetura e Banco de Dados

O sistema é construído sobre uma arquitetura relacional robusta para garantir a integridade das regras de negócio (bloqueio de sprints).

**Modelo Entidade-Relacionamento (Resumo):**

-   **User:** Alunos e Masters.
-   **Cohort:** A turma que vincula alunos a uma data e uma Stack.
-   **Stack & Sprint:** A estrutura curricular (Conteúdo).
-   **CheckIn:** O registro de validação que desbloqueia o progresso.

_(Insira aqui a imagem do DER)_

---

## 💻 Tecnologias Utilizadas

Este projeto utiliza uma stack moderna focada em performance e DX (Developer Experience):

-   **Frontend:** [Next.js 15](https://nextjs.org/) (App Router), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/).
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI).
-   **Backend:** Next.js Server Actions (API-less architecture).
-   **Auth:** [NextAuth.js](https://next-auth.js.org/) (Auth.js).
-   **Database:** [PostgreSQL](https://www.postgresql.org/) (Hospedado na Neon/Vercel).
-   **ORM:** [Prisma](https://www.prisma.io/).
-   **Deploy:** [Vercel](https://vercel.com/).

---

## 🚀 Instalação e Execução

Pré-requisitos: Node.js 18+ e NPM.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/romisson-oliveira/devstack.git
    cd devstack
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo `.env` na raiz e adicione sua URL do banco de dados:

    ```env
    DATABASE_URL="postgresql://usuario:senha@host:5432/nomedobanco"
    NEXTAUTH_SECRET="sua-chave-secreta-aqui"
    ```

4.  **Sincronize o Banco de Dados (Prisma):**

    ```bash
    npx prisma db push
    ```

5.  **Rode o projeto:**
    ```bash
    npm run dev
    ```
    Acesse `http://localhost:3000`.

---

## 🗺 Roadmap do Projeto

-   [x] **Sprint 1: Fundação**
    -   [x] Setup Next.js + Shadcn
    -   [x] Modelagem do Banco (Prisma Schema)
-   [x] **Sprint 2: O Motor**
    -   [x] Autenticação (Login)
    -   [ ] Dashboard do Aluno
    -   [ ] Sistema de Check-in
-   [ ] **Sprint 3: Social & MVP**
    -   [ ] Feed da Turma
    -   [ ] Deploy Final

---

## A Lógica da Estrutura

**app/(auth)**: O parêntesis () cria um "Grupo de Rotas". Isso significa que não afeta a URL (não fica /auth/login, fica /login), mas permite que essas páginas tenham um layout diferente (sem sidebar, por exemplo).

**app/(dashboard)**: Aqui fica a "Arena". Tudo aqui dentro partilha o layout com a Sidebar e Navbar do aluno.

**lib/**: Onde ficam as configurações (o ficheiro do Prisma, utilitários de data, etc).

**actions/**: O segredo da produtividade. Aqui ficam as funções de Backend (checkIn.ts, auth.ts) que o teu Frontend chama diretamente.

### Árvore da Estrutura

```
src/
├── actions/           <-- As tuas funções de Backend (Server Actions)
│   └── check-in.ts    (Futuro)
├── app/
│   ├── (auth)/        <-- Grupo de Rotas de Autenticação
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx (Layout limpo, sem sidebar)
│   ├── (dashboard)/   <-- Grupo da Aplicação Principal
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── feed/
│   │   │   └── page.tsx
│   │   └── layout.tsx (AQUI entra a tua Sidebar fixa)
│   ├── globals.css
│   ├── layout.tsx     (Root Layout - Fontes e Metadata)
│   └── page.tsx       (Tua Landing Page)
├── components/
│   ├── ui/            <-- Componentes do Shadcn (Button, Card...)
│   └── shared/        <-- Teus componentes (Sidebar, SprintCard...)
├── lib/
│   └── db.ts          <-- Configuração única do Prisma Client
└── types/             <-- Definições de Tipos TypeScript
```

## 👥 Autores

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC).

-   **Romisson Oliveira** - _Fullstack Developer & Tech Lead_
-   **Samuel Serra** - _UI/UX Designer & Scrum Master_
-   **Wilson Lins** - _Documentação_
-   **Anderson Malheiros & João Melo** - _Pesquisa_

---

<p align="center">
  Feito com 💙 e muito café ☕ para a entrega final.
</p>
