"use client";
import { useState, useEffect } from "react";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import EnvioResumo from "@/components/EnvioResumo/EnvioResumo";

export default function EnvioResumoPage() {
  const [nome, setNome] = useState("Seu nome aqui"); // Estado inicial

  useEffect(() => {
    // Isso só executa no cliente após a renderização
    setNome(localStorage.getItem("nome") || "Seu nome aqui");
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen bg-gradient-to-br from-blue-950 via-5% via-gray-800 to-black">
      <BarraLateral foto_perfil={null} nome={nome} />
      <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
        <EnvioResumo />
      </div>
    </div>
  );
}