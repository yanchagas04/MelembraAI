"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
   if(localStorage.getItem("token") === null){
      window.location.href = "/TelaLogin";
   } else{
      window.location.href = "/AreaLogada";
   }
}, []);
  return <div>Home</div>;


}