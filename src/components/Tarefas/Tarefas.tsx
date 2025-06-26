"use client"
import { useContext, useMemo, useState } from "react";
import TarefaCard from "./TarefaCard";
import { Activity, DataContext, Tarefa } from "@/app/tipos";
import pegarTarefas from "@/app/AreaLogada/tarefas";

export default function Tarefas() {
    const data = useContext(DataContext);
    const [tarefas, setTarefas] = useState([] as Tarefa[]);
    const [filtro, setFiltro] = useState("")
    function filtrar() {
      const filter = document.getElementById('searchInput') as HTMLInputElement
      setFiltro(filter.value)
    }
    useMemo(() => {
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
          if (filtro == "") {
            setTarefas(tasks);
          } else {
            setTarefas(tasks.filter(tarefa => tarefa.titulo.toLowerCase().includes(filtro.toLowerCase())))
          }
          tasks = [];
        }
        getTarefas();
      }, []);
    return (
          <div id="tarefas" className="flex flex-col items-center gap-4 w-full">
            <div className="relative w-full md:w-3/4 max-w-2xl">
              <div className="relative">
                <input
                  id="searchInput"
                  type="text"
                  placeholder={"Pesquisar..."}
                  onChange={() => {
                    filtrar();
                  }}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                            text-sm placeholder-gray-500 bg-white shadow-sm text-black" 
                />
              </div>
            </div>
            {tarefas.map((tarefa: Tarefa) => <TarefaCard key={tarefa.id} id={tarefa.id} titulo={tarefa.titulo} descricao={tarefa.descricao} data={tarefa.data} concluida={tarefa.concluida} />)}
        </div>
    )
}