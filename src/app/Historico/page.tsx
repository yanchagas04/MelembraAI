"use client"
import React, { useState, useEffect } from "react";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import HistoricoComponent from "@/components/Historico/Historico";

export default function Historico() {
  const [nome, setNome] = useState("");
  useEffect(() => {
      setNome(localStorage.getItem("nome") || "");
  })
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen bg-gradient-to-br from-blue-950 via-5% via-gray-800  to-black"> 
      <BarraLateral foto_perfil={null} nome={nome} />
      <div className="flex-1 flex items-center justify-center p-4">
        <HistoricoComponent />
      </div>
    </div>
  );
}
