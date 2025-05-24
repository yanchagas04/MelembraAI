"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
   window.location.href = "/TelaLogin";
  }, []);
  return <div>Home</div>;

}