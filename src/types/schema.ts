/* 

* Dentro desse arquivo, vamos usar uma interface. Pense nela como um contrato: estamos dizendo ao código "Todo objeto que chamarmos de Livro deve ter obrigatoriamente estas informações". 

*/

export interface Livro {
    id: string // Cada livro terá um identificador único, que é uma string.
    titulo: string // O título do livro, também uma string.
    autor: string // O nome do autor do livro.
    anoPublicacao: number // O ano em que o livro foi publicado, representado como um número.
    genero: string // O gênero literário do livro.
    disponivel: boolean // Um valor booleano que indica se o livro está disponível para empréstimo ou não.
}
