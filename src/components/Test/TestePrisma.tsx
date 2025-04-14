
import {fetchTarefas } from "@/controllers/database/prismaController";
import TarefaCard from "../Tarefas/TarefaCard";
import AdicionarTarefa from "../Tarefas/AdicionarTarefa";

export default async function TestePrisma() {
    const tarefas = await fetchTarefas();
    return (
        <div className="flex flex-col w-full items-center justify-center gap-4">
            <h1>Teste Prisma</h1>
            <div className="flex flex-col w-full gap-4">
                {tarefas.length > 0 && tarefas.map((tarefa) => <TarefaCard key={tarefa.id} {...tarefa} />)}
                {tarefas.length === 0 && <p className="text-center text-2xl font-bold text-red-500">Não há tarefas</p>}
            </div>
            <AdicionarTarefa />
        </div>
    );
}
