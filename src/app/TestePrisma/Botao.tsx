"use client";
import { Tarefa } from "@/app/tipos";
import { createTarefa } from "../../controllers/database/prismaController";

const tarefaTeste : Tarefa = {
    id: undefined,
    titulo: "Teste",
    descricao: "Teste",
    data: "2023-01-01",
    horaFim: "00:00",
    concluida: false
}

async function createRequest(data: Tarefa) {
    const response = await fetch("/api/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
}

export function Botao() {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {createRequest(tarefaTeste)} }
        >Criar</button>
    );
}