"use client";
import BarraLateral from "@/components/barraLateral/BarraLateral";
import MinhaConta from "@/components/MinhaConta/MinhaConta";
import { useState, useEffect } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  useEffect(() => {
      setNome(localStorage.getItem("nome") || "");
  })
  return (
      <div className="flex flex-col-reverse md:flex-row w-screen h-screen overflow-clip bg-gradient-to-br from-blue-950 via-5% via-gray-800  to-black"> 
        <BarraLateral foto_perfil={null} nome={nome} />
        <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
          <MinhaConta />
        </div>
      </div>
  );
}