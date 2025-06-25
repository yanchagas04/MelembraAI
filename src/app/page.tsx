"use client";

import { useEffect } from "react";

const loadingSVG = "/loading.svg";

export default function Home() {
  useEffect(() => {
   if(localStorage.getItem("token") === null){
      window.location.href = "/TelaLogin";
   } else{
      window.location.href = "/AreaLogada";
   }
}, []);
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-br from-blue-950 via-5% via-gray-800  to-black"> 
      <h1 className="text-3xl font-bold text-white">Carregando...</h1>
      <img src={loadingSVG} alt="Carregando" className="w-16"/>
   </div>
  );


}