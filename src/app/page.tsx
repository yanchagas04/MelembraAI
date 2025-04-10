"use client";

import { gerarAtividade } from "@/api/apiController";
import { useState } from "react";

export default function Home() {
  const [atividade, setAtividade] = useState<string | null>(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>MelembraAI</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={
        async () => {
          const atividade = await gerarAtividade();
          setAtividade(atividade);
        }
      }>Enviar</button>
      {atividade && <p>{atividade}</p>}
    </main>
  );
}
