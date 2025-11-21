import fs from "fs"
import path from "path"
import { Livro } from "@/types/schema"

export async function getLivros(): Promise<Livro[]> {
    const filePath = path.join(process.cwd(), "src/data/livros.json")
    const jsonData = await fs.promises.readFile(filePath, "utf-8")
    const livros: Livro[] = JSON.parse(jsonData)
    return livros
}

export async function getLivroById(id: string): Promise<Livro | null> {
    const livros = await getLivros()
    const livro = livros.find((l) => l.id === id)
    return livro || null
}
