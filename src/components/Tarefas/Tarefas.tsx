"use client"
import { useContext, useEffect, useState } from "react";
import TarefaCard from "./TarefaCard";
import { Activity, DataContext, Tarefa } from "@/app/tipos";
import pegarTarefas from "@/app/AreaLogada/tarefas";

export default function Tarefas() {
    const data = useContext(DataContext);
    const [tarefas, setTarefas] = useState([] as Tarefa[]);
    useEffect(() => {
        const getTarefas = async () => {
          const res = (await pegarTarefas());
          let tasks = [] as Tarefa[];
          res.forEach((tarefa: Activity) => {
            const separada = tarefa.date.split('T')[0].split('-');
            const dataT = new Date(parseInt(separada[0]), parseInt(separada[1]) - 1, parseInt(separada[2]));
            const dataAtual = new Date(data.ano + '-' + (data.mes + 1) + '-' + data.dia);
            if (dataT.getFullYear() === dataAtual.getFullYear() && dataT.getMonth() === dataAtual.getMonth() && dataT.getDate() === dataAtual.getDate() && dataT.getDay() === dataAtual.getDay()) {
                tasks.push({
                  id: tarefa.id,
                  titulo: tarefa.title,
                  descricao: tarefa.description,
                  data: tarefa.date,
                  concluida: tarefa.completed
                } as Tarefa);
            }
          })
          setTarefas(tasks);
          tasks = [];
        }
        getTarefas();
      }, [tarefas]);
    return (
        <div id="tarefas" className="flex flex-col items-center gap-2 w-full">
            {tarefas.map((tarefa: Tarefa) => <TarefaCard key={tarefa.id} id={tarefa.id} titulo={tarefa.titulo} descricao={tarefa.descricao} data={tarefa.data} concluida={tarefa.concluida} />)}
        </div>
    )
}