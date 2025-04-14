import { prisma } from "@/controllers/database/prismaController";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
    const id : string = req.nextUrl.searchParams.get('id') as string;
    console.log(id);
    try {
        const body = await req.json();
        console.log(body);
        const tarefa = await prisma.tarefa.update({
        where: { id: id }, 
        data: {
            concluida: body.concluida
        },
        });
        return new Response(JSON.stringify(tarefa),  { headers: { 'Content-Type': 'application/json' }, status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Erro ao atualizar tarefa", { status: 500 });
    }
} 