"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
   if(localStorage.getItem("token") === null){
      alert(localStorage.getItem("token"));
      window.location.href = "/TelaLogin";
   } else{
      alert(localStorage.getItem("token"));
      window.location.href = "/AreaLogada";
   }
}, []);
  return <div>Home</div>;


}