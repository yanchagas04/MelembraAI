"use client";
import { useEffect, useState } from "react";
import { DataContext} from "../tipos";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";
import AdicionarTarefa from "../../components/Tarefas/AdicionarTarefa";
import Tarefas from "@/components/Tarefas/Tarefas";

export default function Home() {
  const [nome, setNome] = useState("");
  const [dia, setDia] = useState(new Date().getDate());
  const [mes, setMes] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());
  useEffect(() => {
    setNome(localStorage.getItem("nome") || "Seu nome aqui");
  })
  return (
    <>
        <DataContext.Provider value={{
          dia: dia,
          mes: mes,
          ano: ano,
          setDia: setDia,
          setMes: setMes,
          setAno: setAno
      }}>
          <div className="flex flex-col-reverse md:flex-row w-screen h-screen bg-gradient-to-br from-blue-950 via-5% via-gray-800  to-black"> 
            <BarraLateral foto_perfil={null} nome={nome} />
            <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
              <SeletorDiaMes />
              <Tarefas />
            </div>
            <AdicionarTarefa />
          </div>
        </DataContext.Provider>
    </>
  );
}