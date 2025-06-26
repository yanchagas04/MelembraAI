"use client";
import React, { useState, useEffect } from "react";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import HistoricoComponent from "@/components/Historico/Historico";
import StatisticsPage from "@/components/Estatisticas/StatisticsPage";

export default function Historico() {
  const [nome, setNome] = useState("");
  useEffect(() => {
    setNome(localStorage.getItem("nome") || "");
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <BarraLateral foto_perfil={null} nome={nome} />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center transition-transform hover:scale-[1.02] hover:shadow-blue-900/40">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Histórico
            </h2>
            <HistoricoComponent />
          </section>
          <section className="bg-gray-900 bg-opacity-90 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center transition-transform hover:scale-[1.02] hover:shadow-blue-900/40">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Estatísticas
            </h2>
            <StatisticsPage />
          </section>
        </div>
      </main>
    </div>
  );
}
