\# 📂 PRD Mestre: Dev Stack (Platform Context)



> \*\*Instrução para IA:\*\* Este documento contém a Verdade Única (Single Source of Truth) sobre o projeto "Dev Stack". Utilize estas definições, regras de negócio e stack tecnológica para gerar código, documentação ou sugestões. Não alucine funcionalidades fora deste escopo sem permissão.



\## 1. Visão Executiva e Identidade



\* \*\*Nome do Produto:\*\* Dev Stack.

\* \*\*Slogan:\*\* Engenharia de Conclusão.

\* \*\*Conceito Central:\*\* Uma plataforma de educação baseada em Cohorts (Turmas) e Sprints Semanais. Ao contrário de cursos tradicionais (self-paced) onde o aluno procrastina, o Dev Stack força um ritmo coletivo.

\* \*\*Diferencial (The Hook):\*\* O conteúdo da semana seguinte (Sprint N+1) só é liberado se o aluno provar que estudou a semana atual (Sprint N) através de um Check-in.



\## 2. Personas e Atores



\### 2.1. Student (O Aluno)

\* \*\*Perfil B2B (Foco MVP):\*\* Alunos de instituições (ex: SENAI, Universidades) que precisam de acompanhamento. Acesso via e-mail institucional ou GitHub. Entram via Código de Convite.

\* \*\*Perfil B2C (Futuro):\*\* Autodidatas que buscam turmas públicas ("Public Cohorts") para estudar em grupo.

\* \*\*Dores:\*\* Procrastinação, solidão no estudo online, falta de prazos claros.



\### 2.2. Master (O Instrutor/Mentor)

\* \*\*Perfil:\*\* Professores ou criadores de conteúdo.

\* \*\*Poderes:\*\* Cria currículos (Stacks), abre turmas (Cohorts), gera códigos de convite e monitora quem está travado.



\## 3. Arquitetura da Informação (Data Mental Model)



O sistema organiza o conhecimento nesta hierarquia rígida:



1\.  \*\*Stack (O Curso):\*\* O projeto pedagógico completo. (Ex: "Formação React").

2\.  \*\*Sprint (O Módulo Temporal):\*\* Uma divisão semanal. Tem uma ordem (1, 2, 3). (Ex: "Semana 1: Hooks").

3\.  \*\*Resource (O Material):\*\* O conteúdo atômico dentro da Sprint. Pode ser vídeo, link, PDF ou instrução de tarefa.

&nbsp;   \* \*Nota:\* Não temos um checkbox individual por recurso no banco de dados. A validação é feita por Sprint.

4\.  \*\*Cohort (A Turma):\*\* Uma instância de uma Stack com data de início e fim, e um grupo de alunos.

5\.  \*\*Check-in (A Chave):\*\* O registro que conecta Aluno + Sprint. É a prova de conclusão.



\## 4. Requisitos Funcionais (Detalhado)



\### Módulo A: Autenticação \& Onboarding

\* \*\*RF-A01 (Login Híbrido):\*\* Suporte a OAuth (GitHub) e Magic Link (Email).

\* \*\*RF-A02 (Matrícula via Código):\*\* O sistema não "adivinha" a turma do aluno. No primeiro acesso, se o aluno não tiver turma (`cohortId: null`), ele é interceptado por uma tela obrigatória pedindo o Invite Code.

\* \*\*RF-A03 (Redirecionamento Inteligente):\*\*

&nbsp;   \* Sem turma -> Tela de Onboarding.

&nbsp;   \* Com turma -> Dashboard da Arena.



\### Módulo B: A Arena (Dashboard do Aluno)

\* \*\*RF-B01 (Foco na Atual):\*\* O aluno vê destaque total para a Sprint Atual.

\* \*\*RF-B02 (Listagem de Recursos):\*\* Exibição clara dos links/materiais da semana com instruções (campo description).

\* \*\*RF-B03 (Visão de Túnel):\*\* Sprints futuras aparecem na lista, mas bloqueadas (com cadeado).



\### Módulo C: Check-in \& Gamification

\* \*\*RF-C01 (Submission):\*\* Formulário contendo:

&nbsp;   \* Resumo do aprendizado (Textarea rico).

&nbsp;   \* Link da evidência (GitHub PR / Vercel Deploy) - Opcional.

\* \*\*RF-C02 (Regra de Gating):\*\* Ao submeter o check-in da Sprint N, o sistema verifica a data da Sprint N+1. Se a data já chegou, libera o acesso. Se não, mostra "Aguarde o início da sprint".

\* \*\*RF-C03 (Social Feed):\*\* O aluno pode ver os check-ins dos colegas da mesma turma para gerar "Peer Pressure" positiva.



\### Módulo D: Backoffice (Gestão)

\* \*\*RF-D01:\*\* CRUD de Stacks e Sprints.

\* \*\*RF-D02:\*\* Criação de Cohorts (Definir Stack pai, Data Início, Data Fim, Tipo Público/Privado).

\* \*\*RF-D03:\*\* Geração de Invite Code único para turmas privadas.



\## 5. Regras de Negócio (Hard Rules)



1\.  \*\*Imutabilidade do Histórico:\*\* Um aluno não pode apagar um Check-in (para não perder o histórico), apenas editá-lo.

2\.  \*\*Unicidade:\*\* Apenas 1 Check-in ativo por Sprint por Aluno.

3\.  \*\*Acesso Institucional:\*\* Para o MVP, aceitamos login social (GitHub), mas o vinculo à turma institucional depende exclusivamente da posse do Invite Code correto.

4\.  \*\*Visibilidade de Recursos:\*\* Recursos da Sprint N são invisíveis (ou não clicáveis) até que exista um Check-in na Sprint N-1.



\## 6. Stack Tecnológica \& Padrões



\* \*\*Framework:\*\* Next.js 15 (App Router).

\* \*\*Linguagem:\*\* TypeScript.

\* \*\*Estilização:\*\* Tailwind CSS + Shadcn UI.

\* \*\*Banco de Dados:\*\* PostgreSQL (Hospedado na Neon).

\* \*\*ORM:\*\* Prisma.

\* \*\*Autenticação:\*\* Auth.js (NextAuth v5 Beta).

\* \*\*Ícones:\*\* Lucide React.

\* \*\*Data Fetching:\*\* Server Components (RSC) para leitura, Server Actions para escrita (Forms).



\## 7. Roadmap Futuro (Contexto para IA não limitar a arquitetura)



\* \*\*Marketplace (B2C):\*\* Permitir que Masters vendam Stacks e alunos entrem em Cohorts Públicas pagas.

\* \*\*Quiz Automático:\*\* Substituir o Check-in de texto por um Quiz de validação técnica.

\* \*\*Certificados:\*\* Geração de PDF ao concluir a última Sprint.

