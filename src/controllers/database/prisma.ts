import { PrismaClient, Tarefa } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
  }
  
  const prisma = globalThis.prisma || new PrismaClient()
  
  if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
  
  export default prisma

export function adicionarTarefa(tarefa: Tarefa) : boolean {
    try {
        prisma.tarefa.create({ data: tarefa });
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}