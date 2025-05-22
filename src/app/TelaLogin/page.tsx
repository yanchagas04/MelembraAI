"use client";
import TelaLogin from "@/components/TelaLogin/TelaLogin";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full min-h-screen overflow-clip bg-white justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full h-full p-4 sm:p-8">
        <TelaLogin />
      </div>
    </div>
  );
}