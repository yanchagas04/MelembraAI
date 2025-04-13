import { Tarefa } from "@/app/tipos";
import {PrismaClient} from "@/generated/prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient();
  };
  
  declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
  } & typeof global;
  
  export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
  
  if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export async function fetchTarefas() : Promise<Tarefa[]> {
  try {
    const tarefas = await prisma.tarefa.findMany();
    return tarefas;

  } catch (error) {
    return [] as Tarefa[]
  }
}

export async function createTarefa(tarefa: Tarefa) : Promise<Tarefa> {
  try {
    const tarefaCriada = await prisma.tarefa.create({
      data: {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        data: tarefa.data,
        horaFim: tarefa.horaFim,
        concluida: tarefa.concluida
      }
    });
    return tarefaCriada;
  } catch (error) {
    console.log(error);
    return {} as Tarefa
  }
}