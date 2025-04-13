import { Tarefa } from "@/app/tipos";
import { prisma } from "@/controllers/database/prismaController";

export async function POST(req : Request) {
    try {
        const body = await req.json();
        const data : Tarefa = {
            id: body.id,
            titulo: body.titulo,
            descricao: body.descricao,
            data: body.data,
            horaFim: body.horaFim,
            concluida: body.concluida
        }
    
        const tarefa = await prisma.tarefa.create({
        data: {
            titulo: data.titulo,
            descricao: data.descricao,
            data: data.data,
            horaFim: data.horaFim,
            concluida: data.concluida
        },
        });
        return new Response(
            JSON.stringify(tarefa), 
            { headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.log(error);
        return new Response("Erro ao criar tarefa", { status: 500 });
    }
}