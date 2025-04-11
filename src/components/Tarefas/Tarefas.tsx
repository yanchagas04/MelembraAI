"use client"
import { useContext, useEffect, useState } from "react";
import TarefaCard from "./TarefaCard";
import { DataContext, TarefasContext } from "@/app/tipos";
import { pegarTarefas } from "@/controllers/database/databaseController";

export default function Tarefas() {
    const data = useContext(DataContext);
    const tarefasC = useContext(TarefasContext);
    const [tarefas, setTarefas] = useState(pegarTarefas());
    useEffect(() => {
        setTarefas(pegarTarefas());
        tarefasC.setTarefas(pegarTarefas());
    }, [pegarT]);
    return (
        <div id="tarefas" className="flex flex-col items-center gap-2 w-full">
            {tarefas.map((tarefa) => tarefa.data.split("-")[1] === data.dia.toString() && tarefa.data.split("-")[2] === (data.mes + 1).toString()
            && <TarefaCard key={tarefa.id} {...tarefa} />)}
        </div>
    )
}