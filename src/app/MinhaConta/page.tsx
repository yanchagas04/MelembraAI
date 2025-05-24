"use client";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import MinhaConta from "@/components/MinhaConta/MinhaConta";

export default function Home() {
  return (
      <div className="flex flex-col-reverse md:flex-row w-screen h-screen overflow-clip bg-white"> 
        <BarraLateral foto_perfil={null} nome="Seu nome aqui" />
        <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
          <MinhaConta />
        </div>
      </div>
  );
}