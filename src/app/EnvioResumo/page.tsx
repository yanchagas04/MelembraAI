"use client";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import EnvioResumo from "@/components/EnvioResumo/EnvioResumo";

const name = () => localStorage.getItem("nome") || "Seu nome aqui";

export default function EnvioResumoPage() {

  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen bg-gradient-to-br from-blue-950 via-5% via-gray-800 to-black">
      <BarraLateral foto_perfil={null} nome={name()} />
      <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
        <EnvioResumo />
      </div>
    </div>
  );
}

