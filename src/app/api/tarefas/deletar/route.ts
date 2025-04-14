import { prisma } from "@/controllers/database/prismaController";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
    const id : string = req.nextUrl.searchParams.get('id') as string;
    console.log(id);
    try {
        const tarefa = await prisma.tarefa.delete({where: {id: id}})
        return new Response(JSON.stringify(tarefa),  { headers: { 'Content-Type': 'application/json' }, status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Erro ao deletar tarefa", { status: 500 });
    }
}