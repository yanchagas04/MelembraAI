import { Tarefa } from "@/app/tipos";
import database from "@/database/db.json";

function jsonToObject(json: any) {
    return JSON.parse(JSON.stringify(database)) as Tarefa[]
}

export function salvarTarefas(tarefas: Tarefa[]) {
    let db = jsonToObject(database);
    db.push(...tarefas);
}

export function adicionarTarefa(tarefa: Tarefa) {
    let db = jsonToObject(database);
    db.push(tarefa);
}

export function pegarTarefas() : Tarefa[] {
    const db = jsonToObject(database);
    return db;
}

export function pegarTarefa(id: string) : Tarefa {
    const db = jsonToObject(database);
    return db.find(t => t.id === id)!;
}

export function atualizarTarefa(tarefa: Tarefa) {
    let db = jsonToObject(database);
    const index = db.findIndex(t => t.id === tarefa.id);
    db[index] = tarefa;
}

export function deletarTarefa(id: string) {
    let db = jsonToObject(database);
    const index = db.findIndex(t => t.id === id);
    db.splice(index, 1);
}