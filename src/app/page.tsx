import BarraLateral from "@/components/barraLateral/BarraLateral";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center justify-center w-full">
        <h1>Home</h1>
      </div>
    </div>
  );
}
