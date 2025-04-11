"use client";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";
import AdicionarTarefa from "@/components/Tarefas/AdicionarTarefa";
import Tarefas from "@/components/Tarefas/Tarefas";
import {useState } from "react";
import { Tarefa, TarefasContext, DataContext } from "./tipos";
import { pegarTarefas } from "@/controllers/database/databaseController";

export default function Home() {
  const [dia, setDia] = useState(new Date().getDate());
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());
  const [tarefas, setTarefas] = useState(pegarTarefas());
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