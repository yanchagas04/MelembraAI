"use client";
import enviarEmail from "@/api/apiController";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>MelembraAI</h1>
      <button onClick={async () => {
        await enviarEmail('yanchagas2004@gmail.com')
      }}>Enviar</button>
    </main>
  );
}
