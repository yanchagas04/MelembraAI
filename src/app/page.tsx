"use client";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";
import AdicionarTarefa from "@/components/Tarefas/AdicionarTarefa";
import Tarefas from "@/components/Tarefas/Tarefas";
import {useState } from "react";
import { Tarefa, TarefasContext, DataContext } from "./tipos";

const tarefasConst : Tarefa[] = [
  {
    id: "1",
    titulo: "Tarefa 1",
    descricao: "Descrição da tarefa 1",
    data: "2025-10-4",
    horaFim: "12:00",
    concluida: true
  },
  {
    id: "2",
    titulo: "Tarefa 2",
    descricao: "Descrição da tarefa 2",
    data: "2025-10-4",
    horaFim: "14:00",
    concluida: false
  },
  {
    id: "3",
    titulo: "Tarefa 3",
    descricao: "Descrição da tarefa 3",
    data: "2025-10-4",
    horaFim: "16:00",
    concluida: false
  },
  {
    id: "4",
    titulo: "Tarefa 4",
    descricao: "Descrição da tarefa 4",
    data: "2025-10-4",
    horaFim: "18:00",
    concluida: false
  }
]

export default function Home() {
  const [dia, setDia] = useState(new Date().getDate());
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());
  const [tarefas, setTarefas] = useState(tarefasConst);
  return (
    <>
      <TarefasContext.Provider value={{
          tarefas: tarefas,
          setTarefas: setTarefas
      }}>
        <DataContext.Provider value={{
          dia: dia,
          mes: mes,
          ano: ano,
          setDia: setDia,
          setMes: setMes,
          setAno: setAno
      }}>
          <div className="flex flex-col-reverse md:flex-row w-screen h-screen bg-gradient-to-br from-blue-950 via-5% via-gray-800  to-black"> 
            <BarraLateral foto_perfil={null} nome="Seu nome aqui" />
            <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
              <SeletorDiaMes />
              <Tarefas />
            </div>
            <AdicionarTarefa />
          </div>
        </DataContext.Provider>
      </TarefasContext.Provider>
    </>
  );
}